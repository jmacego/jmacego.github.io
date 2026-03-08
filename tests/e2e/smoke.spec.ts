import { expect, test, type Page } from "@playwright/test";

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
