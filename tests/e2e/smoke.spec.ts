import { createHash } from "node:crypto";
import { expect, test, type Page } from "@playwright/test";

function parseRgb(color: string) {
  const match = color.match(/rgba?\(([^)]+)\)/i);
  if (match) {
    const [red, green, blue, alpha = "1"] = match[1].split(",").map((value) => value.trim());
    return {
      red: Number(red),
      green: Number(green),
      blue: Number(blue),
      alpha: Number(alpha),
    };
  }

  const srgbMatch = color.match(/color\(srgb\s+([0-9.]+)\s+([0-9.]+)\s+([0-9.]+)\s*(?:\/\s*([0-9.]+))?\)/i);
  if (srgbMatch) {
    const [, red, green, blue, alpha = "1"] = srgbMatch;
    return {
      red: Number(red) * 255,
      green: Number(green) * 255,
      blue: Number(blue) * 255,
      alpha: Number(alpha),
    };
  }

  throw new Error(`Unsupported color format: ${color}`);
}

function relativeLuminance(color: { red: number; green: number; blue: number }) {
  const transform = (channel: number) => {
    const normalized = channel / 255;
    return normalized <= 0.03928
      ? normalized / 12.92
      : ((normalized + 0.055) / 1.055) ** 2.4;
  };

  return 0.2126 * transform(color.red) + 0.7152 * transform(color.green) + 0.0722 * transform(color.blue);
}

function contrastRatio(foreground: string, background: string) {
  const foregroundColor = parseRgb(foreground);
  const backgroundColor = parseRgb(background);
  const lighter = Math.max(relativeLuminance(foregroundColor), relativeLuminance(backgroundColor));
  const darker = Math.min(relativeLuminance(foregroundColor), relativeLuminance(backgroundColor));
  return (lighter + 0.05) / (darker + 0.05);
}

async function expectSocialMetadata(
  page: Page,
  {
    canonicalUrl,
    imageUrl,
    ogType,
  }: {
    canonicalUrl: string;
    imageUrl: string;
    ogType: "website" | "article";
  },
) {
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute("href", canonicalUrl);
  await expect(page.locator('meta[property="og:type"]')).toHaveAttribute("content", ogType);
  await expect(page.locator('meta[property="og:image"]')).toHaveAttribute("content", imageUrl);
  await expect(page.locator('meta[name="twitter:image"]')).toHaveAttribute("content", imageUrl);
}

test("home page exposes primary navigation and a visible heading", async ({ page }) => {
  await page.goto("/");

  await expect(page).toHaveTitle("John MacDonald — Fractional CTO, Advisor, Speaker | John MacDonald");
  const primaryNav = page.getByRole("navigation").first();
  await expect(primaryNav.getByRole("link", { name: "Posts" })).toBeVisible();
  await expect(primaryNav.getByRole("link", { name: "Projects" })).toBeVisible();
  await expect(page.locator("h1").first()).toBeVisible();
});

test("home hero title spans the full hero shell above the split content row", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 1200 });
  await page.goto("/");

  const metrics = await page.locator(".home-hero").evaluate((hero) => {
    const title = hero.querySelector(".home-hero-title");
    const copy = hero.querySelector(".home-hero-copy");
    const media = hero.querySelector(".home-hero-media");

    if (!(title instanceof HTMLElement) || !(copy instanceof HTMLElement) || !(media instanceof HTMLElement)) {
      throw new Error("Expected hero title, copy, and media elements.");
    }

    const heroStyles = window.getComputedStyle(hero);
    const heroRect = hero.getBoundingClientRect();
    const titleRect = title.getBoundingClientRect();
    const copyRect = copy.getBoundingClientRect();
    const mediaRect = media.getBoundingClientRect();
    const horizontalPadding =
      Number.parseFloat(heroStyles.paddingLeft) + Number.parseFloat(heroStyles.paddingRight);
    const innerWidth = heroRect.width - horizontalPadding;

    return {
      titleToInnerWidthDelta: Math.abs(titleRect.width - innerWidth),
      titleToCopyRatio: titleRect.width / copyRect.width,
      titleAboveBody: titleRect.bottom <= Math.min(copyRect.top, mediaRect.top),
    };
  });

  expect(metrics.titleToInnerWidthDelta).toBeLessThanOrEqual(2);
  expect(metrics.titleToCopyRatio).toBeGreaterThanOrEqual(1.6);
  expect(metrics.titleAboveBody).toBe(true);
});

test("home feature card titles span the full card above the split content row", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 1200 });
  await page.goto("/");

  const metrics = await page.locator(".feature-card").evaluateAll((cards) =>
    cards.map((card) => {
      const header = card.querySelector(".feature-card-header");
      const title = card.querySelector(".feature-card-title");
      const copy = card.querySelector(".feature-card-copy");
      const media = card.querySelector(".feature-card-media");

      if (
        !(header instanceof HTMLElement) ||
        !(title instanceof HTMLElement) ||
        !(copy instanceof HTMLElement) ||
        !(media instanceof HTMLElement)
      ) {
        throw new Error("Expected card header, title, copy, and media elements.");
      }

      const styles = window.getComputedStyle(header);
      const rect = header.getBoundingClientRect();
      const titleRect = title.getBoundingClientRect();
      const copyRect = copy.getBoundingClientRect();
      const mediaRect = media.getBoundingClientRect();
      const horizontalPadding = Number.parseFloat(styles.paddingLeft) + Number.parseFloat(styles.paddingRight);
      const innerWidth = rect.width - horizontalPadding;

      return {
        titleToInnerWidthDelta: Math.abs(titleRect.width - innerWidth),
        titleToCopyRatio: titleRect.width / copyRect.width,
        titleAboveBody: titleRect.bottom <= Math.min(copyRect.top, mediaRect.top),
      };
    }),
  );

  expect(metrics).toHaveLength(2);
  for (const metric of metrics) {
    expect(metric.titleToInnerWidthDelta).toBeLessThanOrEqual(2);
    expect(metric.titleToCopyRatio).toBeGreaterThanOrEqual(1.5);
    expect(metric.titleAboveBody).toBe(true);
  }
});

test("content pages include their page title in the browser title", async ({ page }) => {
  await page.goto("/resume/");

  await expect(page).toHaveTitle("Resume | John MacDonald");

  await page.goto("/about/");
  await expect(page).toHaveTitle("About Me | John MacDonald");
});

test("slashless internal routes resolve without Astro's trailing-slash warning page", async ({ page }) => {
  await page.goto("/about");

  await expect(page).toHaveURL(/\/about$/);
  await expect(page).toHaveTitle("About Me | John MacDonald");
  await expect(page.getByRole("heading", { name: "About Me" })).toBeVisible();
  await expect(
    page.getByText("Your site is configured with trailingSlash set to always"),
  ).toHaveCount(0);
});

test("internal page links use trailing-slash canonical routes", async ({ page }) => {
  const pagesToCheck = ["/", "/about/", "/projects/keybase-identity-verification/"];

  for (const path of pagesToCheck) {
    await page.goto(path);

    const offenders = await page.evaluate(() => {
      return Array.from(document.querySelectorAll("a[href]"))
        .map((anchor) => anchor.getAttribute("href"))
        .filter((href): href is string => Boolean(href))
        .filter((href) => href.startsWith("/"))
        .filter((href) => !href.startsWith("//"))
        .filter((href) => !href.startsWith("/assets/"))
        .filter((href) => !href.includes("#"))
        .filter((href) => !/\.[a-z0-9]+$/i.test(href))
        .filter((href) => href !== "/")
        .filter((href) => !href.endsWith("/"));
    });

    expect(offenders).toEqual([]);
  }
});

test("about page uses a reachable current profile image for social metadata and the footer headshot", async ({
  page,
}) => {
  await page.goto("/about/");

  await expect(page.locator('meta[property="og:image"]')).toHaveAttribute(
    "content",
    "https://jmaclabs.com/assets/images/jmac-profile.jpg",
  );
  await expect(page.locator('meta[name="twitter:image"]')).toHaveAttribute(
    "content",
    "https://jmaclabs.com/assets/images/jmac-profile.jpg",
  );

  const footerImage = page.locator(".about-author img");
  await expect(footerImage).toHaveAttribute("src", "/assets/images/jmac-profile.jpg");

  const presentation = await footerImage.evaluate((image) => {
    const styles = window.getComputedStyle(image);
    const card = image.closest(".about-author");
    const cardStyles = card ? window.getComputedStyle(card) : null;
    return {
      objectFit: styles.objectFit,
      objectPosition: styles.objectPosition,
      cardRadius: cardStyles?.borderTopLeftRadius ?? null,
    };
  });

  expect(presentation.objectFit).toBe("cover");
  expect(presentation.objectPosition).toBe("50% 50%");
  expect(presentation.cardRadius).toBe("24px");

  const imageResponse = await page.request.get("/assets/images/jmac-profile.jpg");
  expect(imageResponse.ok()).toBe(true);
  expect(imageResponse.headers()["content-type"]).toContain("image/jpeg");
  const imageHash = createHash("sha256").update(await imageResponse.body()).digest("hex");
  expect(imageHash).toBe("a55840ccdeaaacc5be7df8b9f9181ac7e2f529cf128b787778cf0d0c6fa27efb");
});

test("longform pages use the same contained shell width across pages", async ({
  page,
}) => {
  await page.setViewportSize({ width: 1440, height: 1400 });

  const measureRail = async (path: string, selectors: string[]) => {
    await page.goto(path);

    return page.evaluate((activeSelectors) => {
      const rail = document.querySelector(".content-rail");
      if (!(rail instanceof HTMLElement)) {
        throw new Error("Expected a shared content rail.");
      }

      const railRect = rail.getBoundingClientRect();

      return activeSelectors.map((selector) => {
        const element = document.querySelector(selector);
        if (!(element instanceof HTMLElement)) {
          throw new Error(`Expected element for selector: ${selector}`);
        }

        const rect = element.getBoundingClientRect();

        return {
          selector,
          widthDelta: Math.abs(rect.width - railRect.width),
          leftDelta: Math.abs(rect.left - railRect.left),
          rightDelta: Math.abs(rect.right - railRect.right),
        };
      });
    }, selectors);
  };

  const homeMetrics = await measureRail("/", [".jumbotron", ".home-feature-grid", ".about-author"]);
  const aboutMetrics = await measureRail("/about/", [".post-shell", ".about-author"]);
  const resumeMetrics = await measureRail("/resume/", [".post-shell", ".about-author"]);
  const pubkeyMetrics = await measureRail("/pubkey/", [".post-shell", ".about-author"]);
  const postMetrics = await measureRail("/blog/pattern-recognition-knitting-coding-leadership/", [".post-shell", ".about-author"]);

  for (const metric of [...homeMetrics, ...aboutMetrics, ...resumeMetrics, ...pubkeyMetrics, ...postMetrics]) {
    expect(metric.widthDelta).toBeLessThanOrEqual(1);
    expect(metric.leftDelta).toBeLessThanOrEqual(1);
    expect(metric.rightDelta).toBeLessThanOrEqual(1);
  }
});

test("post and project detail titles span the full contained header width", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 1200 });

  const measureTitle = async (path: string) => {
    await page.goto(path);

    return page.evaluate(() => {
      const header = document.querySelector(".post-header");
      const title = document.querySelector(".post-title");

      if (!(header instanceof HTMLElement) || !(title instanceof HTMLElement)) {
        throw new Error("Expected post header and title elements.");
      }

      const headerStyles = window.getComputedStyle(header);
      const headerRect = header.getBoundingClientRect();
      const titleRect = title.getBoundingClientRect();
      const horizontalPadding =
        Number.parseFloat(headerStyles.paddingLeft) + Number.parseFloat(headerStyles.paddingRight);
      const innerWidth = headerRect.width - horizontalPadding;

      return {
        titleToInnerWidthDelta: Math.abs(titleRect.width - innerWidth),
      };
    });
  };

  const postMetrics = await measureTitle("/blog/pattern-recognition-knitting-coding-leadership/");
  const projectMetrics = await measureTitle("/projects/plotthing-story-management/");

  expect(postMetrics.titleToInnerWidthDelta).toBeLessThanOrEqual(2);
  expect(projectMetrics.titleToInnerWidthDelta).toBeLessThanOrEqual(2);
});

test("published post exposes hero image social metadata", async ({ page }) => {
  await page.goto("/blog/pattern-recognition-knitting-coding-leadership/");

  await expect(
    page.getByRole("heading", {
      name: "Pattern Recognition: How Knitting Prepared Me for Engineering and Leadership",
    }),
  ).toBeVisible();
  await expectSocialMetadata(page, {
    canonicalUrl: "https://jmaclabs.com/blog/pattern-recognition-knitting-coding-leadership/",
    imageUrl: "https://jmaclabs.com/assets/images/posts/knitting-pattern-recognition.png",
    ogType: "article",
  });
});

test("primary navigation keeps active pill centered and readable in light and dark themes", async ({ page }) => {
  for (const colorScheme of ["light", "dark"] as const) {
    await page.emulateMedia({ colorScheme });
    await page.goto("/about/");

    const nav = page.getByRole("navigation", { name: "Primary" });
    await expect(nav).toBeVisible();

    const metrics = await nav.evaluate((navElement) => {
      const currentLink = navElement.querySelector('[aria-current="page"]');
      const otherLink = navElement.querySelector('a:not([aria-current="page"])');
      if (!(currentLink instanceof HTMLElement) || !(otherLink instanceof HTMLElement)) {
        throw new Error("Expected current and non-current navigation links.");
      }

      const navStyles = window.getComputedStyle(navElement);
      const currentStyles = window.getComputedStyle(currentLink);
      const otherStyles = window.getComputedStyle(otherLink);
      const navRect = navElement.getBoundingClientRect();
      const currentRect = currentLink.getBoundingClientRect();
      const otherRect = otherLink.getBoundingClientRect();
      const navCenter = navRect.top + navRect.height / 2;

      return {
        navBackground: navStyles.backgroundColor,
        currentColor: currentStyles.color,
        currentBackground: currentStyles.backgroundColor,
        otherColor: otherStyles.color,
        currentCenterOffset: Math.abs((currentRect.top + currentRect.height / 2) - navCenter),
        otherCenterOffset: Math.abs((otherRect.top + otherRect.height / 2) - navCenter),
        currentFitsWithinNav: currentRect.top >= navRect.top && currentRect.bottom <= navRect.bottom,
        otherFitsWithinNav: otherRect.top >= navRect.top && otherRect.bottom <= navRect.bottom,
      };
    });

    expect(contrastRatio(metrics.otherColor, metrics.navBackground)).toBeGreaterThanOrEqual(4.5);
    expect(contrastRatio(metrics.currentColor, metrics.currentBackground)).toBeGreaterThanOrEqual(4.5);
    expect(metrics.currentCenterOffset).toBeLessThanOrEqual(2);
    expect(metrics.otherCenterOffset).toBeLessThanOrEqual(2);
    expect(metrics.currentFitsWithinNav).toBe(true);
    expect(metrics.otherFitsWithinNav).toBe(true);
  }
});

test("header logo swaps to the matching wordmark for light and dark themes", async ({ page }) => {
  for (const colorScheme of ["light", "dark"] as const) {
    await page.emulateMedia({ colorScheme });
    await page.goto("/");

    const logo = page.locator(".blog-header-logo img");
    await expect(logo).toBeVisible();
    await expect(logo).toHaveAttribute("alt", "John MacDonald");

    const renderedLogo = await logo.evaluate((image) => image.currentSrc);
    expect(renderedLogo).toContain(
      colorScheme === "dark"
        ? "/assets/images/branding/logo-white-text.png"
        : "/assets/images/branding/logo-black-text.png",
    );
  }
});

test("header logo remains centered in the header", async ({ page }) => {
  await page.goto("/");

  const metrics = await page.locator(".blog-header").evaluate((header) => {
    const image = header.querySelector(".blog-header-logo img");
    if (!(image instanceof HTMLImageElement)) {
      throw new Error("Expected a header logo image.");
    }

    const headerRect = header.getBoundingClientRect();
    const imageRect = image.getBoundingClientRect();
    const headerCenter = headerRect.left + headerRect.width / 2;
    const imageCenter = imageRect.left + imageRect.width / 2;

    return {
      centerOffset: Math.abs(imageCenter - headerCenter),
      imageFitsWithinHeader:
        imageRect.left >= headerRect.left && imageRect.right <= headerRect.right,
    };
  });

  expect(metrics.centerOffset).toBeLessThanOrEqual(1);
  expect(metrics.imageFitsWithinHeader).toBe(true);
});

test("branding logos are tightly cropped and normalized to the same exported size", async ({ page }) => {
  await page.goto("/");

  const metrics = await page.evaluate(async () => {
    async function measure(url: string, threshold: number) {
      const image = new Image();
      image.src = url;
      await image.decode();

      const canvas = document.createElement("canvas");
      canvas.width = image.naturalWidth;
      canvas.height = image.naturalHeight;
      const context = canvas.getContext("2d");
      if (!context) {
        throw new Error("Expected a 2D canvas context.");
      }

      context.drawImage(image, 0, 0);
      const { data, width, height } = context.getImageData(0, 0, canvas.width, canvas.height);

      let left = width;
      let top = height;
      let right = -1;
      let bottom = -1;

      for (let y = 0; y < height; y += 1) {
        for (let x = 0; x < width; x += 1) {
          const alpha = data[(y * width + x) * 4 + 3];
          if (alpha >= threshold) {
            left = Math.min(left, x);
            top = Math.min(top, y);
            right = Math.max(right, x);
            bottom = Math.max(bottom, y);
          }
        }
      }

      if (right === -1 || bottom === -1) {
        throw new Error(`No visible pixels found for ${url}`);
      }

      return {
        url,
        naturalWidth: image.naturalWidth,
        naturalHeight: image.naturalHeight,
        padding: {
          left,
          top,
          right: width - (right + 1),
          bottom: height - (bottom + 1),
        },
      };
    }

    const threshold = 1;
    return Promise.all([
      measure("/assets/images/branding/logo-black-text.png", threshold),
      measure("/assets/images/branding/logo-white-text.png", threshold),
    ]);
  });

  expect(metrics[0].naturalWidth).toBe(metrics[1].naturalWidth);
  expect(metrics[0].naturalHeight).toBe(metrics[1].naturalHeight);

  for (const metric of metrics) {
    expect(metric.padding.left).toBe(0);
    expect(metric.padding.top).toBe(0);
    expect(metric.padding.right).toBe(0);
    expect(metric.padding.bottom).toBe(0);
  }
});

test("404 page is branded and theme-aware", async ({ page }) => {
  for (const colorScheme of ["light", "dark"] as const) {
    await page.emulateMedia({ colorScheme });
    const response = await page.goto("/definitely-missing-page/");

    expect(response?.status()).toBe(404);
    await expect(page).toHaveTitle("Page not found | John MacDonald");
    await expect(page.getByRole("heading", { name: "Sorry, that page is missing." })).toBeVisible();
    await expect(page.locator(".error-shell .error-logo img")).toBeVisible();
    await expect(page.getByRole("link", { name: "Go home" })).toBeVisible();
    await expect(page.getByText("Here are a few good next steps:")).toBeVisible();

    const theme = await page.evaluate(() => {
      const rootStyles = window.getComputedStyle(document.documentElement);
      const shellStyles = window.getComputedStyle(document.querySelector(".error-shell"));
      return {
        rootBackground: rootStyles.backgroundColor,
        shellBackground: shellStyles.backgroundColor,
      };
    });

    const rootLuminance = relativeLuminance(parseRgb(theme.rootBackground));
    const shellLuminance = relativeLuminance(parseRgb(theme.shellBackground));

    if (colorScheme === "dark") {
      expect(rootLuminance).toBeLessThan(0.1);
      expect(shellLuminance).toBeLessThan(0.2);
    } else {
      expect(rootLuminance).toBeGreaterThan(0.85);
      expect(shellLuminance).toBeGreaterThan(0.8);
    }
  }
});

test("slide palette recipe cards stay compact and readable on desktop", async ({ page }) => {
  await page.setViewportSize({ width: 1180, height: 1300 });
  await page.goto("/slide-palette/");

  const denyAnalytics = page.locator("#cookie-notice-deny");
  if (await denyAnalytics.isVisible()) {
    await denyAnalytics.click();
  }

  const recipeHeading = page.getByRole("heading", { name: "Three ways the palette can show up on slides" });
  await recipeHeading.scrollIntoViewIfNeeded();

  const metrics = await page.locator(".recipe-card").evaluateAll((cards) =>
    cards.map((card) => {
      const frame = card.querySelector(".recipe-frame");
      const title = card.querySelector(".recipe-frame-copy h3");
      const body = card.querySelector(".recipe-frame-copy p");
      const note = card.querySelector(".recipe-notes p");
      const cardRect = card.getBoundingClientRect();
      const frameRect = frame?.getBoundingClientRect();
      const noteRect = note?.getBoundingClientRect();

      return {
        cardHeight: Math.round(cardRect.height),
        frameHeight: Math.round(frameRect?.height ?? 0),
        titleFits: title ? title.scrollHeight - title.clientHeight <= 3 : false,
        bodyFits: body ? body.scrollHeight - body.clientHeight <= 3 : false,
        noteFits: note ? note.scrollHeight - note.clientHeight <= 3 : false,
      };
    }),
  );

  expect(metrics).toHaveLength(3);

  const cardHeights = metrics.map((metric) => metric.cardHeight);
  const frameHeights = metrics.map((metric) => metric.frameHeight);

  expect(Math.max(...cardHeights)).toBeLessThan(600);
  expect(Math.max(...cardHeights) - Math.min(...cardHeights)).toBeLessThanOrEqual(2);
  expect(Math.max(...frameHeights) - Math.min(...frameHeights)).toBeLessThanOrEqual(2);

  for (const metric of metrics) {
    expect(metric.titleFits).toBe(true);
    expect(metric.bodyFits).toBe(true);
    expect(metric.noteFits).toBe(true);
  }
});
