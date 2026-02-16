import { existsSync } from "node:fs";
import path from "node:path";

function isRelativeLocalImage(url) {
  if (!url) return false;
  if (url.startsWith("/") || url.startsWith("#")) return false;
  if (/^[a-z]+:/i.test(url)) return false;
  return /\.(png|jpe?g|gif|webp|avif|svg)$/i.test(url.split("?")[0]);
}

function walk(node, visitor) {
  visitor(node);
  if (!node || !Array.isArray(node.children)) return;
  for (const child of node.children) {
    walk(child, visitor);
  }
}

export default function remarkIgnoreMissingLocalImages() {
  return (tree, file) => {
    const filePath = file?.path ? String(file.path) : null;
    const fileDir = filePath ? path.dirname(filePath) : null;

    walk(tree, (node) => {
      if (!node || node.type !== "image" || !isRelativeLocalImage(node.url)) {
        return;
      }

      if (!fileDir) {
        node.url = `/${String(node.url).replace(/^\.\/?/, "")}`;
        return;
      }

      const rawUrl = String(node.url);
      const withoutQuery = rawUrl.split("?")[0];
      const resolvedPath = path.resolve(fileDir, withoutQuery);

      if (existsSync(resolvedPath)) {
        return;
      }

      node.url = `/${rawUrl.replace(/^\.\/?/, "")}`;
    });
  };
}
