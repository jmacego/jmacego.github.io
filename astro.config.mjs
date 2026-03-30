import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import rehypeExternalLinks from "./src/plugins/rehype-external-links.mjs";
import remarkIgnoreMissingLocalImages from "./src/plugins/remark-ignore-missing-local-images.mjs";

export default defineConfig({
  site: "https://jmaclabs.com",
  trailingSlash: "always",
  markdown: {
    remarkPlugins: [remarkIgnoreMissingLocalImages],
    rehypePlugins: [rehypeExternalLinks],
  },
  integrations: [sitemap()],
});
