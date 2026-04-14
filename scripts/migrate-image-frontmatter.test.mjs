import test from "node:test";
import assert from "node:assert/strict";
import { hasLegacyImageKeys, migrateFrontmatterImageKeys } from "./lib/image-frontmatter.mjs";

test("migrates legacy image keys to the modern schema", () => {
  const source = [
    "title: Example",
    "image:",
    "  path: /assets/images/posts/example.webp",
    "  alt: Example alt",
    "  credit_text: Photographer",
    "  credit_link: \"https://example.com/photo\"",
  ].join("\n");

  const migrated = migrateFrontmatterImageKeys(source);

  assert.equal(migrated.changed, true);
  assert.match(migrated.frontmatter, /^\s*src:\s\/assets\/images\/posts\/example\.webp/m);
  assert.match(migrated.frontmatter, /^\s*credit:\sPhotographer/m);
  assert.match(migrated.frontmatter, /^\s*creditUrl:\s"https:\/\/example\.com\/photo"/m);
});

test("preserves already-modern frontmatter without changes", () => {
  const source = [
    "title: Example",
    "image:",
    "  src: /assets/images/posts/example.webp",
    "  alt: Example alt",
    "  credit: Photographer",
    "  creditUrl: \"https://example.com/photo\"",
  ].join("\n");

  const migrated = migrateFrontmatterImageKeys(source);

  assert.equal(migrated.changed, false);
  assert.equal(migrated.frontmatter, source);
});

test("detects legacy image keys only when they are present", () => {
  assert.equal(hasLegacyImageKeys("image:\n  path: /assets/test.webp\n"), true);
  assert.equal(hasLegacyImageKeys("image:\n  src: /assets/test.webp\n"), false);
});
