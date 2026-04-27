# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # start dev server (localhost:4321)
npm run build    # production build
npm run preview  # preview production build
```

No lint or test scripts configured.

## Architecture

Astro 6 static site. No Tailwind — styling via inline styles and CSS custom properties (`var(--theme-*)`).

```
src/
  content/
    projects/   # one .md per project (slug = filename)
    profile/    # single index.md with hero/about data
  pages/
    index.astro              # main portfolio page
    projects/[slug].astro    # project detail, static paths from collection
  layouts/Layout.astro
  components/MainTweaks.astro
  content.config.ts          # Zod schemas for both collections
```

## Content Collections

**projects** (`src/content/projects/*.md`) — required frontmatter:
```yaml
name: string
tier: string        # e.g. "featured", "side"
featured: boolean
description: string
tech: [string]
github: string      # use '#' if no public repo
emoji: string       # optional, shown if no image
image: string       # optional, path to logo asset
logo: string        # optional
```
Body markdown renders as `<Content />` in `[slug].astro` under `.project-content` class styles.

**profile** (`src/content/profile/index.md`) — drives hero section and about copy. Fields: `name`, `hero_title`, `hero_description`, `hero_tags[]`, `about_title_1`, `about_title_2`, `about_paragraph_1`, `about_paragraph_2`, `about_status`, `stack[]`.

## Theme Variables

All colors via CSS custom properties on `:root`. Key vars: `--theme-bg`, `--theme-surface`, `--theme-accent`, `--theme-text`, `--theme-text-muted`, `--theme-border`.

## Adding a Project (/add-project skill)

1. Create `src/content/projects/<slug>.md` with required frontmatter.
2. Add any assets to `src/assets/`.
3. Project auto-appears in index and gets detail page at `/projects/<slug>`.
