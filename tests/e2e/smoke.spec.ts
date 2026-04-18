import { createHash } from "node:crypto";
import { expect, test, type Page } from "@playwright/test";

function parseRgb(color: string) {
  const match = color.match(/rgba?\(([^)]+)\)/i);
  if (!match) {
    throw new Error(`Unsupported color format: ${color}`);
  }

  const [red, green, blue, alpha = "1"] = match[1].split(",").map((value) => value.trim());
  return {
    red: Number(red),
    green: Number(green),
    blue: Number(blue),
    alpha: Number(alpha),
  };
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

test("content pages include their page title in the browser title", async ({ page }) => {
  await page.goto("/resume/");

  await expect(page).toHaveTitle("Resume | John MacDonald");

  await page.goto("/about/");
  await expect(page).toHaveTitle("About Me | John MacDonald");
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
    return {
      objectFit: styles.objectFit,
      objectPosition: styles.objectPosition,
    };
  });

  expect(presentation.objectFit).toBe("cover");
  expect(presentation.objectPosition).toBe("50% 50%");

  const imageResponse = await page.request.get("/assets/images/jmac-profile.jpg");
  expect(imageResponse.ok()).toBe(true);
  expect(imageResponse.headers()["content-type"]).toContain("image/jpeg");
  const imageHash = createHash("sha256").update(await imageResponse.body()).digest("hex");
  expect(imageHash).toBe("a55840ccdeaaacc5be7df8b9f9181ac7e2f529cf128b787778cf0d0c6fa27efb");
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
