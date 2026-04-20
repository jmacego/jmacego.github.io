import { marked } from "marked";
import { existsSync, readdirSync } from "node:fs";
import path from "node:path";

marked.setOptions({
  mangle: false,
  headerIds: false,
});

export const PAGE_SIZE = 5;

type EntryWithVisibility = {
  data: {
    published?: boolean;
    date?: Date;
    publishAt?: Date;
  };
  slug?: string;
};

export function isPublished<T extends EntryWithVisibility>(entry: T) {
  if (entry.data.published === false) {
    return false;
  }

  const publishDate = getPublishDate(entry);
  return !publishDate || publishDate.getTime() <= Date.now();
}

export function isPublishedOrDraftInDev<T extends EntryWithVisibility>(entry: T) {
  if (import.meta.env.DEV) {
    return true;
  }

  return isPublished(entry);
}

export function normalizeImagePath(path?: string) {
  if (!path) {
    return undefined;
  }
  if (path.startsWith("http")) {
    return path;
  }
  return path.startsWith("/") ? path : `/${path}`;
}

export function normalizeThumbnailPath(imagePath?: string) {
  const normalized = normalizeImagePath(imagePath);
  if (!normalized || normalized.startsWith("http")) {
    return normalized;
  }

  const relativePath = normalized.replace(/^\//, "");
  const absolutePath = path.join(process.cwd(), "public", relativePath);
  const absoluteDir = path.dirname(absolutePath);
  const thumbDir = path.join(absoluteDir, "thumbnails");

  if (!existsSync(thumbDir)) {
    return normalized;
  }

  const ext = path.extname(absolutePath);
  const stem = path.basename(absolutePath, ext).replace(/-\d+x\d+$/, "");
  const matches = readdirSync(thumbDir)
    .filter((entry) => entry.startsWith(`${stem}-`) && entry.endsWith(ext))
    .sort();

  if (!matches.length) {
    return normalized;
  }

  return `${path.posix.dirname(normalized)}/thumbnails/${matches[0]}`.replace(/\/{2,}/g, "/");
}

export function getExcerpt(markdown: string) {
  const [excerpt] = markdown.split("<!--more-->");
  return marked.parse(excerpt ?? "");
}

export function stripHtml(value: string) {
  return value.replace(/<[^>]*>/g, "").trim();
}

export function getExcerptText(markdown: string) {
  return stripHtml(getExcerpt(markdown)).slice(0, 180);
}

export function stripDatePrefix(slug: string) {
  return slug.replace(/^\d{4}-\d{2}-\d{2}-/, "");
}

export function getEntryDate<T extends { data: { date?: Date }, slug?: string }>(entry: T) {
  if (entry.data.date) {
    return new Date(entry.data.date);
  }
  if (entry.slug) {
    const match = entry.slug.match(/^(\d{4})-(\d{2})-(\d{2})/);
    if (match) {
      const [_, year, month, day] = match;
      return new Date(Number(year), Number(month) - 1, Number(day));
    }
  }
  return undefined;
}

export function getPublishDate<T extends EntryWithVisibility>(entry: T) {
  if (entry.data.publishAt) {
    return new Date(entry.data.publishAt);
  }

  return getEntryDate(entry);
}

export function sortByDateDesc<T extends { data: { date?: Date }, slug?: string }>(a: T, b: T) {
  const aDate = getEntryDate(a);
  const bDate = getEntryDate(b);
  const aTime = aDate ? aDate.getTime() : 0;
  const bTime = bDate ? bDate.getTime() : 0;
  return bTime - aTime;
}

export function formatDate(date?: Date) {
  if (!date) {
    return "";
  }
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(date));
}
