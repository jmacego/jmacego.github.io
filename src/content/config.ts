import { defineCollection, z } from "astro:content";

const modernImageSchema = z.object({
  src: z.string(),
  alt: z.string().optional(),
  credit: z.string().optional(),
  creditUrl: z.string().optional(),
});

const legacyImageSchema = z.object({
  path: z.string(),
  alt: z.string().optional(),
  credit_text: z.string().optional(),
  credit_link: z.string().optional(),
});

const imageSchema = z
  .union([modernImageSchema, legacyImageSchema])
  .transform((image) => {
    if ("src" in image) {
      return image;
    }

    return {
      src: image.path,
      alt: image.alt,
      credit: image.credit_text,
      creditUrl: image.credit_link,
    };
  })
  .optional();

const posts = defineCollection({
  type: "content",
  schema: z.object({
    layout: z.string().optional(),
    title: z.string(),
    date: z.coerce.date().optional(),
    publishAt: z.coerce.date().optional(),
    description: z.string().optional(),
    summary: z.string().optional().nullable(),
    categories: z.array(z.string()).optional(),
    tags: z.array(z.string()).optional(),
    author: z.string().optional(),
    image: imageSchema,
    published: z.boolean().optional(),
  }),
});

const projects = defineCollection({
  type: "content",
  schema: z.object({
    layout: z.string().optional(),
    title: z.string(),
    date: z.coerce.date().optional(),
    publishAt: z.coerce.date().optional(),
    description: z.string().optional(),
    summary: z.string().optional().nullable(),
    categories: z.array(z.string()).optional(),
    tags: z.array(z.string()).optional(),
    image: imageSchema,
    published: z.boolean().optional(),
  }),
});

const deckSchema = z
  .object({
    embedUrl: z.string().optional(),
    shareUrl: z.string().optional(),
    downloadUrl: z.string().optional(),
    filename: z.string().optional(),
  })
  .optional();

const videoSchema = z
  .object({
    youtubeId: z.string().optional(),
    vimeoId: z.string().optional(),
    url: z.string().optional(),
    durationMinutes: z.number().optional(),
  })
  .optional();

const talks = defineCollection({
  type: "content",
  schema: z.object({
    layout: z.string().optional(),
    title: z.string(),
    date: z.coerce.date().optional(),
    publishAt: z.coerce.date().optional(),
    description: z.string().optional(),
    summary: z.string().optional().nullable(),
    venue: z.string().optional(),
    relatedPosts: z.array(z.string()).optional(),
    seriesLabel: z.string().optional(),
    deck: deckSchema,
    video: videoSchema,
    categories: z.array(z.string()).optional(),
    tags: z.array(z.string()).optional(),
    image: imageSchema,
    published: z.boolean().optional(),
  }),
});

export const collections = { posts, projects, talks };
