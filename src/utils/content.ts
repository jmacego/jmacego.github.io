import { marked } from "marked";

marked.setOptions({
  mangle: false,
  headerIds: false,
});

export const PAGE_SIZE = 5;

export function isPublished<T extends { data: { published?: boolean } }>(entry: T) {
  return entry.data.published !== false;
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
