import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blogCollection = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    slug: z.string().optional(),
    author: z.string(),
    pubDate: z.coerce.date(),
    image: z.string().optional().default('/images/blog-placeholder.jpg'),
    tags: z.array(z.string()).default([]),
    description: z.string(),
    metaTitle: z.string().optional(),
    metaDescription: z.string().optional(),
  }),
});

export const collections = {
  blog: blogCollection,
};
