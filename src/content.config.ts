import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const caseStudies = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/case-studies' }),
  schema: z.object({
    title: z.string(),
    sector: z.string(),
    scope: z.string(),
    stat: z.string(),
    image: z.string(),
    order: z.number(),
    featured: z.boolean().default(false),
    stats: z.array(z.object({ value: z.string(), label: z.string() })),
  }),
});

export const collections = { 'case-studies': caseStudies };
