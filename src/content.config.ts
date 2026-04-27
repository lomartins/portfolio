import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projectsCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    name: z.string(),
    emoji: z.string(),
    tier: z.string(),
    featured: z.boolean(),
    description: z.string(),
    tech: z.array(z.string()),
    github: z.string(),
  }),
});

export const collections = {
  projects: projectsCollection,
};
