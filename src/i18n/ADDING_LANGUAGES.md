# Adding or updating a language

The site is bilingual: **English (default)** at `/` and **Portuguese (Brazil)** at `/pt-br/`. This guide covers both adding a brand-new locale and updating existing translations.

---

## Architecture in 30 seconds

- **UI strings** (nav, buttons, section titles) live in `src/i18n/locales/*.ts`.
- **Long-form content** (projects, blog posts, profile, career, case studies) lives in `src/content/<collection>/<locale>/`.
- Pages under `src/pages/pt-br/` mirror the English pages and pass `lang="pt-br"` to shared components in `src/components/`.
- Every translatable content file has an `ai_translated: boolean` frontmatter flag. When `true`, the "AI Translated / Traduzido por AI" badge appears.

When all content for a locale has `ai_translated: false`, no badge shows.

---

## Editing existing translations

### UI strings (nav, buttons, etc.)
Edit `src/i18n/locales/<locale>.ts`. Keys must match `en.ts` (TypeScript will error if any are missing).

### Project / blog post / profile copy
Each collection has one folder per locale:

```
src/content/blog/en/my-post.md          ← source
src/content/blog/pt-br/my-post.md       ← AI-translated mirror
```

To replace an AI translation with a hand-written one:
1. Open the `pt-br/` file.
2. Rewrite the body and frontmatter strings.
3. Set `ai_translated: false` (or delete the field) in the frontmatter to hide the badge.

The slug (filename) **must match** between locales for the language switcher to map between them.

---

## Adding a new locale (e.g. `es` for Spanish)

### 1. Register the locale

Edit `src/i18n/config.ts`:

```ts
export const locales = ['en', 'pt-br', 'es'] as const;

export const localeMeta = {
  // ...existing entries
  es: {
    htmlLang: 'es',
    label: 'ES',
    name: 'Español',
    flag: '🇪🇸',          // pick a flag — avoid US flag for English
    dateLocale: 'es-ES',
  },
};
```

### 2. Update `astro.config.mjs`

```js
i18n: {
  defaultLocale: 'en',
  locales: ['en', 'pt-br', 'es'],
  routing: { prefixDefaultLocale: false },
}
```

### 3. Add UI strings

Copy `src/i18n/locales/en.ts` → `src/i18n/locales/es.ts`, translate values, and rename the export:

```ts
import type { Strings } from './en';
export const es: Strings = { /* ... */ };
```

Then register it in `src/i18n/index.ts`:

```ts
import { es } from './locales/es';
const dictionaries = { en, 'pt-br': ptBR, es };
```

### 4. Mirror the content collections

For each collection (`blog`, `projects`, `profile`, `career`, `caseStudies`), create an `es/` folder with the same filenames as `en/`:

```
src/content/blog/es/<same-slugs>.md
src/content/projects/es/<same-slugs>.md
src/content/profile/es/index.md
src/content/profile/es/career.md
src/content/case-studies/es.json
```

Set `ai_translated: true` in the frontmatter for AI-generated translations.

### 5. Add the route pages

Mirror `src/pages/pt-br/` as `src/pages/es/`:

```
src/pages/es/index.astro
src/pages/es/projects/[slug].astro
src/pages/es/blog/index.astro
src/pages/es/blog/[id].astro
```

Each is a thin wrapper — just change the `lang="pt-br"` prop to `lang="es"`. See the existing `pt-br/` pages as templates.

### 6. Build

```bash
npm run build
```

That's it. The language picker auto-discovers the new locale from `localeMeta`.

---

## Conventions

- **Slugs match across locales.** `blog/en/foo.md` ↔ `blog/pt-br/foo.md` ↔ `blog/es/foo.md`.
- **Markdown body content stays in the body.** Don't move prose into frontmatter strings.
- **Tech tags / proper nouns** (Kotlin, Android, Stone, iFood) usually stay in English even in translations — they're brand names.
- **Dates in markdown frontmatter** are ISO format (`2026-03-04`); the page formats them per-locale at render time using `localeMeta[lang].dateLocale`.
- **`ai_translated: true`** = badge visible. **`false` or absent** = badge hidden. Flip to `false` after a human review pass.

---

## Translation workflow with Claude

To regenerate the Portuguese translations from English sources:

1. Read each `*/en/<file>.md`.
2. Translate body + frontmatter `description` / `name` / etc.
3. Write to `*/pt-br/<file>.md` with `ai_translated: true`.
4. Keep proper nouns and tech labels in English.
5. Preserve markdown structure (headings, code blocks, image paths).
