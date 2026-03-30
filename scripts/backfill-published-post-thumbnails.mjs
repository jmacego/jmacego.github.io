#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..");
const postsDir = path.join(root, "src/content/posts");
const publicDir = path.join(root, "public");
const MAX_THUMB = "400x400>";

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
  const pathMatch = imageBlock[1].match(/^\s*path:\s*(.+)\s*$/m);
  if (!pathMatch) {
    return undefined;
  }
  return pathMatch[1].trim().replace(/^["']|["']$/g, "");
}

function normalizePublicPath(assetPath) {
  return assetPath.startsWith("/") ? assetPath : `/${assetPath}`;
}

function getThumbMatchNames(imagePath) {
  const normalized = normalizePublicPath(imagePath);
  const relativePath = normalized.replace(/^\//, "");
  const absolutePath = path.join(publicDir, relativePath);
  const absoluteDir = path.dirname(absolutePath);
  const thumbDir = path.join(absoluteDir, "thumbnails");
  const ext = path.extname(absolutePath);
  const stem = path.basename(absolutePath, ext).replace(/-\d+x\d+$/, "");

  return {
    normalized,
    absolutePath,
    thumbDir,
    ext,
    stem,
  };
}

function getDimensions(filePath) {
  return execFileSync("identify", ["-format", "%wx%h", filePath], { encoding: "utf8" }).trim();
}

for (const filePath of listPostFiles(postsDir)) {
  const frontmatter = readFrontmatter(filePath);
  if (!isPublished(frontmatter)) {
    continue;
  }

  const imagePath = getImagePath(frontmatter);
  if (!imagePath) {
    continue;
  }

  const { normalized, absolutePath, thumbDir, ext, stem } = getThumbMatchNames(imagePath);

  if (!fs.existsSync(absolutePath)) {
    console.error(`Skipping missing image: ${normalized}`);
    continue;
  }

  fs.mkdirSync(thumbDir, { recursive: true });

  const existing = fs
    .readdirSync(thumbDir)
    .find((name) => name.startsWith(`${stem}-`) && name.endsWith(ext));
  if (existing) {
    console.log(`Exists: ${path.join(path.relative(root, thumbDir), existing)}`);
    continue;
  }

  const tmpPath = path.join(thumbDir, `_tmp_${stem}${ext}`);
  execFileSync("convert", [absolutePath, "-resize", MAX_THUMB, tmpPath], { stdio: "inherit" });
  const size = getDimensions(tmpPath);
  const thumbFilename = `${stem}-${size}${ext}`;
  fs.renameSync(tmpPath, path.join(thumbDir, thumbFilename));
  console.log(`Created: ${path.join(path.relative(root, thumbDir), thumbFilename)}`);
}
