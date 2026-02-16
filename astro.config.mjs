import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import remarkIgnoreMissingLocalImages from "./src/plugins/remark-ignore-missing-local-images.mjs";

export default defineConfig({
  site: "https://jmaclabs.com",
  trailingSlash: "always",
  markdown: {
    remarkPlugins: [remarkIgnoreMissingLocalImages],
  },
  integrations: [sitemap()],
});
