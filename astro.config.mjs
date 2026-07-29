import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import rehypeExternalLinks from "./src/plugins/rehype-external-links.mjs";
import remarkIgnoreMissingLocalImages from "./src/plugins/remark-ignore-missing-local-images.mjs";
import rehypePrefixBase from "./src/plugins/rehype-prefix-base.mjs";
import excludeImageOriginals from "./src/plugins/exclude-image-originals.mjs";

const privateRoutes = new Set(["/slide-palette/"]);
const privatePathPrefixes = ["/talks/"];

const isPrivateRoute = (pathname) =>
  privateRoutes.has(pathname) ||
  privatePathPrefixes.some((prefix) => pathname === prefix || pathname.startsWith(prefix));

const base = process.env.ASTRO_PREVIEW_BASE || "/";

export default defineConfig({
  site: "https://jmaclabs.com",
  base,
  trailingSlash: "ignore",
  cacheDir: process.env.ASTRO_CACHE_DIR ?? ".astro",
  markdown: {
    remarkPlugins: [remarkIgnoreMissingLocalImages],
    rehypePlugins: [rehypeExternalLinks, [rehypePrefixBase, { base }]],
  },
  integrations: [
    sitemap({
      filter: (page) => !isPrivateRoute(new URL(page).pathname),
    }),
    excludeImageOriginals(),
  ],
});
