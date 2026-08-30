import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    category: z.string(),
    keywords: z.string().optional(),
    image: z.string().optional(),
    archived: z.boolean().optional().default(false),
  }),
});

export const collections = { blog };
