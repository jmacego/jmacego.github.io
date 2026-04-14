#!/usr/bin/env node

import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { hasLegacyImageKeys, migrateFrontmatterImageKeys } from "./lib/image-frontmatter.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const contentDirs = [
  path.join(root, "src/content/posts"),
  path.join(root, "src/content/projects"),
];
const shouldWrite = process.argv.includes("--write");
const shouldCheck = process.argv.includes("--check");

async function listContentFiles(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  return entries
    .filter((entry) => entry.isFile() && /\.(md|markdown)$/i.test(entry.name))
    .map((entry) => path.join(dir, entry.name))
    .sort();
}

function splitFrontmatter(raw) {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
  if (!match) {
    return null;
  }

  return {
    frontmatter: match[1],
    body: match[2],
  };
}

function joinFrontmatter(frontmatter, body) {
  return `---\n${frontmatter}\n---\n${body}`;
}

const changedFiles = [];

for (const dir of contentDirs) {
  for (const file of await listContentFiles(dir)) {
    const raw = await fs.readFile(file, "utf8");
    const parts = splitFrontmatter(raw);
    if (!parts || !hasLegacyImageKeys(parts.frontmatter)) {
      continue;
    }

    const migrated = migrateFrontmatterImageKeys(parts.frontmatter);
    if (!migrated.changed) {
      continue;
    }

    changedFiles.push(path.relative(root, file));
    if (shouldWrite) {
      await fs.writeFile(file, joinFrontmatter(migrated.frontmatter, parts.body), "utf8");
    }
  }
}

if (shouldWrite) {
  if (changedFiles.length) {
    console.log(`Migrated ${changedFiles.length} file(s):`);
    for (const file of changedFiles) {
      console.log(`- ${file}`);
    }
  } else {
    console.log("No legacy image frontmatter found.");
  }
  process.exit(0);
}

if (changedFiles.length) {
  console.error("Legacy image frontmatter keys remain in content:");
  for (const file of changedFiles) {
    console.error(`- ${file}`);
  }
  process.exit(1);
}

if (!shouldCheck) {
  console.log("No legacy image frontmatter found.");
}
