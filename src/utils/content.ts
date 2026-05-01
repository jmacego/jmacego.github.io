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

/**
 * Estimate spoken word count and read time from a talk's markdown body.
 * Looks for a `## Script` section, strips slide cues, stage directions,
 * markdown formatting, and counts the words that would actually be spoken.
 * Returns { words: 0, minutes: 0 } if no script section is found.
 */
export function getScriptStats(body: string): { words: number; minutes: number } {
  const m = body.match(/^##\s+Script\s*$/im);
  if (!m) return { words: 0, minutes: 0 };
  const start = m.index! + m[0].length;
  // Find next H2 heading (or end of body)
  const rest = body.slice(start);
  const next = rest.match(/^##\s+/im);
  const scriptText = next ? rest.slice(0, next.index!) : rest;

  let cleaned = scriptText
    // Remove backticked slide cues like `[SLIDE 01 — title]`
    .replace(/`\[SLIDE[^\]]*\]`/g, "")
    // Remove bare bracketed cues
    .replace(/\[SLIDE[^\]]*\]/g, "")
    // Remove [END] and similar
    .replace(/\[(?:END|BEAT|PAUSE)[^\]]*\]/g, "")
    // Remove parenthetical stage directions
    .replace(/\([^()]*\)/g, "")
    // Remove headings
    .replace(/^#+\s.*$/gm, "")
    // Remove horizontal rules
    .replace(/^---+\s*$/gm, "")
    // Remove inline backticked code/tokens
    .replace(/`[^`]*`/g, "")
    // Remove emphasis markers
    .replace(/[*_]/g, "");

  const words = cleaned.match(/[A-Za-z0-9'’]+/g) ?? [];
  const minutes = words.length / 150; // ~150 wpm conversational pace
  return { words: words.length, minutes };
}

/**
 * Detect which production assets exist for a given talk.
 *
 * - script: word count above a minimum stub threshold
 * - deck:   either frontmatter URL fields are filled, or a deck file exists
 *           on disk under talks/<slug>/
 * - video:  any frontmatter video field is filled
 */
export function getTalkAssets(
  slug: string,
  data: {
    deck?: { embedUrl?: string; downloadUrl?: string; shareUrl?: string };
    video?: { youtubeId?: string; vimeoId?: string; url?: string };
  },
  scriptWords: number,
): { script: boolean; deck: boolean; deckOnDiskOnly: boolean; video: boolean } {
  const script = scriptWords > 200;
  const deckFromFrontmatter = !!(
    data.deck?.embedUrl || data.deck?.downloadUrl || data.deck?.shareUrl
  );
  let deckOnDisk = false;
  try {
    const dir = path.join(process.cwd(), "talks", slug);
    if (existsSync(dir)) {
      deckOnDisk =
        existsSync(path.join(dir, "deck.pptx")) ||
        existsSync(path.join(dir, "deck-draft.pptx"));
    }
  } catch {
    // symlink unreadable in build env (e.g. CI) — degrade silently
  }
  const deck = deckFromFrontmatter || deckOnDisk;
  const video = !!(data.video?.youtubeId || data.video?.vimeoId || data.video?.url);
  return { script, deck, deckOnDiskOnly: deckOnDisk && !deckFromFrontmatter, video };
}

/**
 * Compute a talk's production status:
 *   shipped  → published: true
 *   recorded → has video but not published yet
 *   draft    → everything else
 */
export function getTalkStatus(
  data: { published?: boolean },
  assets: { video: boolean },
): "shipped" | "recorded" | "draft" {
  if (data.published === true) return "shipped";
  if (assets.video) return "recorded";
  return "draft";
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
