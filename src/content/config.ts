import { defineCollection, z } from "astro:content";

const imageSchema = z
  .object({
    path: z.string(),
    alt: z.string().optional(),
    credit_text: z.string().optional(),
    credit_link: z.string().optional(),
  })
  .optional();

const posts = defineCollection({
  type: "content",
  schema: z.object({
    layout: z.string().optional(),
    title: z.string(),
    date: z.coerce.date().optional(),
    description: z.string().optional(),
    summary: z.string().optional(),
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
    description: z.string().optional(),
    summary: z.string().optional(),
    categories: z.array(z.string()).optional(),
    tags: z.array(z.string()).optional(),
    image: imageSchema,
    published: z.boolean().optional(),
  }),
});

export const collections = { posts, projects };
