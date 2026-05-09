import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// All content collections are organized per-locale: <collection>/<locale>/<file>.md
// `ai_translated` defaults to false; set to `true` on AI-generated translations
// so the "AI Translated / Traduzido por AI" badge shows. Flip to false (or remove)
// after a human review.

const aiTranslated = z.boolean().default(false);

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
    ai_translated: aiTranslated,
  }),
});

const blogCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    img: z.string().optional(),
    tags: z.array(z.string()).default([]),
    date: z.date(),
    author: z.string().default('Luisa Martins'),
    description: z.string().optional(),
    ai_translated: aiTranslated,
  }),
});

const profileCollection = defineCollection({
  loader: glob({ pattern: "*/index.md", base: "./src/content/profile" }),
  schema: z.object({
    name: z.string(),
    avatar: z.string().optional(),
    hero_title: z.string(),
    hero_description: z.string(),
    hero_tags: z.array(z.string()),
    about_title_1: z.string(),
    about_title_2: z.string(),
    about_paragraph_1: z.string(),
    about_paragraph_2: z.string(),
    about_status: z.string(),
    stack: z.array(z.string()),
    ai_translated: aiTranslated,
  }),
});

const careerCollection = defineCollection({
  loader: glob({ pattern: "*/career.md", base: "./src/content/profile" }),
  schema: z.object({
    cv_url: z.string(),
    ai_translated: aiTranslated,
    entries: z.array(z.object({
      period: z.string(),
      role: z.string(),
      company: z.string(),
      logo: z.string().optional(),
      url: z.string().optional(),
      description: z.string(),
    })),
  }),
});

export const collections = {
  projects: projectsCollection,
  blog: blogCollection,
  profile: profileCollection,
  career: careerCollection,
};
