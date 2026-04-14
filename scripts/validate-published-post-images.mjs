#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..");
const postsDir = path.join(root, "src/content/posts");
const publicDir = path.join(root, "public");

function listPostFiles(dir) {
  return fs
    .readdirSync(dir)
    .filter((name) => /\.(md|markdown)$/i.test(name))
    .map((name) => path.join(dir, name));
}

function readFrontmatter(filePath) {
  const raw = fs.readFileSync(filePath, "utf8");
  const match = raw.match(/^---\n([\s\S]*?)\n---/);
  return match ? match[1] : "";
}

function isPublished(frontmatter) {
  return /^published:\s*true\s*$/m.test(frontmatter);
}

function getImagePath(frontmatter) {
  const imageBlock = frontmatter.match(/^image:\n([\s\S]*?)(?=^[A-Za-z_][A-Za-z0-9_]*:|\Z)/m);
  if (!imageBlock) {
    return undefined;
  }
  const pathMatch = imageBlock[1].match(/^\s*(src|path):\s*(.+)\s*$/m);
  if (!pathMatch) {
    return undefined;
  }
  return pathMatch[2].trim().replace(/^["']|["']$/g, "");
}

function normalizePublicPath(assetPath) {
  return assetPath.startsWith("/") ? assetPath : `/${assetPath}`;
}

function findThumbnailPublicPath(assetPath) {
  const normalized = normalizePublicPath(assetPath);
  const relativePath = normalized.replace(/^\//, "");
  const absolutePath = path.join(publicDir, relativePath);
  const absoluteDir = path.dirname(absolutePath);
  const thumbDir = path.join(absoluteDir, "thumbnails");

  if (!fs.existsSync(thumbDir)) {
    return undefined;
  }

  const ext = path.extname(absolutePath);
  const stem = path.basename(absolutePath, ext).replace(/-\d+x\d+$/, "");
  const matches = fs
    .readdirSync(thumbDir)
    .filter((name) => name.startsWith(`${stem}-`) && name.endsWith(ext))
    .sort();

  if (!matches.length) {
    return undefined;
  }

  return path.posix.join(path.posix.dirname(normalized), "thumbnails", matches[0]);
}

const errors = [];

for (const filePath of listPostFiles(postsDir)) {
  const frontmatter = readFrontmatter(filePath);
  if (!isPublished(frontmatter)) {
    continue;
  }

  const imagePath = getImagePath(frontmatter);
  if (!imagePath) {
    continue;
  }

  const normalized = normalizePublicPath(imagePath);
  const absoluteImagePath = path.join(publicDir, normalized.replace(/^\//, ""));

  if (!fs.existsSync(absoluteImagePath)) {
    errors.push(`${path.relative(root, filePath)}: missing image asset ${normalized}`);
    continue;
  }

  const thumbPath = findThumbnailPublicPath(normalized);
  if (!thumbPath) {
    errors.push(`${path.relative(root, filePath)}: missing thumbnail for ${normalized}`);
    continue;
  }

  const absoluteThumbPath = path.join(publicDir, thumbPath.replace(/^\//, ""));
  if (!fs.existsSync(absoluteThumbPath)) {
    errors.push(`${path.relative(root, filePath)}: thumbnail path does not exist ${thumbPath}`);
  }
}

if (errors.length) {
  console.error("\nPublished post image validation failed.\n");
  for (const error of errors) {
    console.error(`- ${error}`);
  }
  process.exit(1);
}
