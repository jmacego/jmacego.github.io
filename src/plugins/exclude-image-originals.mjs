import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

/**
 * Keep the CMS's archived originals out of the published build.
 *
 * The CMS archives each upload's untouched original under
 * `public/assets/images/originals/` so renditions can be rebuilt from it later.
 * Astro copies `public/` verbatim, which published those files at full
 * resolution complete with the EXIF the renditions deliberately strip — camera,
 * capture time, and on some of them GPS coordinates.
 *
 * The archive stays in the repository; it simply stops being a web asset.
 * Nothing in the site or its content references these paths.
 */
export default function excludeImageOriginals() {
  return {
    name: "exclude-image-originals",
    hooks: {
      "astro:build:done": async ({ dir, logger }) => {
        const root = path.join(fileURLToPath(dir), "assets", "images");
        const removed = [];

        // Recursive: a site may keep a separate originals/ tree per image
        // subdirectory, and missing one would republish it.
        async function sweep(directory) {
          let entries;
          try {
            entries = await fs.readdir(directory, { withFileTypes: true });
          } catch (error) {
            if (error.code === "ENOENT") return;
            throw error;
          }
          for (const entry of entries) {
            if (!entry.isDirectory()) continue;
            const child = path.join(directory, entry.name);
            if (entry.name === "originals") {
              const count = (await fs.readdir(child)).length;
              await fs.rm(child, { recursive: true, force: true });
              removed.push(`${path.relative(root, child)} (${count} files)`);
              continue;
            }
            await sweep(child);
          }
        }

        await sweep(root);

        if (removed.length > 0) {
          logger.info(`excluded archived originals from the build: ${removed.join(", ")}`);
        }
      },
    },
  };
}
