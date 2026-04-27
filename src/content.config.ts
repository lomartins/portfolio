import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projectsCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    name: z.string(),
    emoji: z.string().optional(),
    logo: z.string().optional(),
    image: z.string().optional(),
    tier: z.string(),
    featured: z.boolean(),
    description: z.string(),
    tech: z.array(z.string()),
    github: z.string(),
  }),
});

const profileCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/profile" }),
  schema: z.object({
    name: z.string(),
    hero_title: z.string(),
    hero_description: z.string(),
    hero_tags: z.array(z.string()),
    about_title_1: z.string(),
    about_title_2: z.string(),
    about_paragraph_1: z.string(),
    about_paragraph_2: z.string(),
    about_status: z.string(),
    stack: z.array(z.string()),
  }),
});

export const collections = {
  projects: projectsCollection,
  profile: profileCollection,
};
