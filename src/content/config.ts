import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title:      z.string(),
    date:       z.date(),
    categories: z.array(z.string()),
    pinned:     z.boolean().default(false),
    excerpt:    z.string(),
  }),
});

export const collections = { posts };
