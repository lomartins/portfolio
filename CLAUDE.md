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
  i18n/
    config.ts              # locale list + flag/label metadata
    index.ts               # getLangFromUrl, useTranslations, localizedPath
    locales/{en,pt-br}.ts  # UI strings dictionaries
    ADDING_LANGUAGES.md    # how to add/update a locale
  content/
    projects/{en,pt-br}/   # one .md per project per locale (slug = filename, must match across locales)
    blog/{en,pt-br}/       # blog posts per locale
    profile/{en,pt-br}/    # index.md (hero/about) and career.md
    case-studies/{en,pt-br}.json
  components/
    PortfolioHome.astro    # full home page body, takes lang prop
    BlogList.astro         # blog index body
    BlogPost.astro         # single post body
    ProjectDetail.astro    # single project body
    Nav.astro              # shared nav (language + theme picker)
    LanguagePicker.astro   # 🇬🇧 EN / 🇧🇷 PT toggle
    AITranslatedBadge.astro # floating "AI Translated / Traduzido por AI" chip
  pages/
    index.astro                    # / (en home)
    projects/[slug].astro          # /projects/<slug> (en)
    blog/index.astro               # /blog/ (en)
    blog/[id].astro                # /blog/<id> (en)
    pt-br/index.astro              # /pt-br/ (pt home)
    pt-br/projects/[slug].astro    # /pt-br/projects/<slug>
    pt-br/blog/index.astro         # /pt-br/blog/
    pt-br/blog/[id].astro          # /pt-br/blog/<id>
  layouts/Layout.astro             # accepts `lang` prop, drives <html lang="...">
  content.config.ts                # Zod schemas (every collection has ai_translated flag)
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

1. Create `src/content/projects/en/<slug>.md` with required frontmatter.
2. Mirror at `src/content/projects/pt-br/<slug>.md` with `ai_translated: true` (or skip and add later).
3. Add any assets to `src/assets/`.
4. Project auto-appears in index and gets detail pages at `/projects/<slug>` and `/pt-br/projects/<slug>`.

## i18n

- Default locale is `en` (no prefix). Portuguese (Brazil) lives at `/pt-br/`.
- UI strings: edit `src/i18n/locales/<locale>.ts`. Keys must match `en.ts`.
- AI badge: every collection schema includes `ai_translated: boolean` (default `false`). Set `true` on AI-generated content; flip to `false` after human review to hide the badge.
- To add a new locale: see `src/i18n/ADDING_LANGUAGES.md`.
