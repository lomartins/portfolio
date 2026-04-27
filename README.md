# luisamartins.dev

Personal portfolio built with [Astro](https://astro.build). Live at **[luisamartins.dev](https://luisamartins.dev)**.

## Stack

- [Astro](https://astro.build) — static site generator
- TypeScript
- Astro Content Collections — Markdown-driven content

## Project Structure

```
src/
├── assets/          # SVGs and static assets
├── components/      # Shared Astro components
├── content/
│   ├── profile/     # Profile data (index.md)
│   └── projects/    # One .md file per project
├── layouts/         # Base layout
└── pages/
    ├── index.astro          # Main single-page site
    └── projects/[slug].astro # Project detail pages
```

## Commands

| Command           | Action                                |
| :---------------- | :------------------------------------ |
| `npm install`     | Install dependencies                  |
| `npm run dev`     | Dev server at `localhost:4321`        |
| `npm run build`   | Build to `./dist/`                    |
| `npm run preview` | Preview production build locally      |

## Adding a Project

Create `src/content/projects/<slug>.md`:

```md
---
name: Project Name
emoji: 🚀           # optional — shown if no image
image: /path.png    # optional
tier: S             # S | A | B | C (controls sort order)
featured: true
description: Short description shown on the card.
tech:
  - Kotlin
  - Android
github: https://github.com/lomartins/repo
---

Full project write-up in Markdown goes here.
```

Tiers sort as S → A → B → C. Projects are filtered on the index page by tech tag.

## Updating Profile

Edit `src/content/profile/index.md` — all hero text, about section copy, status line, and stack badges are driven from this file.
