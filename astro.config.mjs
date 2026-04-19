import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import rehypeExternalLinks from "./src/plugins/rehype-external-links.mjs";
import remarkIgnoreMissingLocalImages from "./src/plugins/remark-ignore-missing-local-images.mjs";

const privateRoutes = new Set(["/slide-palette/"]);

export default defineConfig({
  site: "https://jmaclabs.com",
  trailingSlash: "ignore",
  cacheDir: process.env.ASTRO_CACHE_DIR ?? ".astro",
  markdown: {
    remarkPlugins: [remarkIgnoreMissingLocalImages],
    rehypePlugins: [rehypeExternalLinks],
  },
  integrations: [
    sitemap({
      filter: (page) => !privateRoutes.has(new URL(page).pathname),
    }),
  ],
});
