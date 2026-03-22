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

  const primaryNav = page.getByRole("navigation").first();
  await expect(primaryNav.getByRole("link", { name: "Posts" })).toBeVisible();
  await expect(primaryNav.getByRole("link", { name: "Projects" })).toBeVisible();
  await expect(page.locator("h1").first()).toBeVisible();
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
