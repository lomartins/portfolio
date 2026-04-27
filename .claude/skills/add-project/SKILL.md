---
name: add-project
description: Add or update a portfolio project entry from a GitHub URL, repo name or user input.
---

# Portfolio Project Manager

Add or update `src/content/projects/<slug>.md` using GitHub CLI. No cloning. Portfolio root: `~/projects/portfolio/`.

## Input

Accept any of:
- Full URL: `https://github.com/owner/repo`
- Owner/repo: `lomartins/badb`
- Repo name only: `badb` → assume owner `lomartins`
- User input: title, description, tech stack, etc.

Optional flags user may provide [AskUserQuestion] (otherwise ask or infer):
- `--tier S|A|B|C` — sort order (S = best, C = lowest)
- `--featured` / `--no-featured`
- `--emoji 🦀`

## Step 1: Parse repo reference

Extract `owner/repo`. If only repo name given, default owner = `lomartins`.

## Step 2: Fetch repo data (run in parallel)

```bash
# Metadata
gh repo view <owner/repo> --json name,description,repositoryTopics,primaryLanguage,languages,url

# README (decode base64)
gh api repos/<owner/repo>/readme --jq '.content' | base64 -d 2>/dev/null
```

## Step 3: Detect mode

Slug = repo name lowercased, hyphens preserved.

- `src/content/projects/<slug>.md` exists → **update mode**
- File absent → **create mode**

## Step 4: Build frontmatter

| Field | Source |
|-------|--------|
| `name` | Repo name prettified (`badb` → `badb`, `my-cool-app` → `My Cool App`) |
| `emoji` | Infer from primary language/topics. Ask if unclear. Update: keep existing unless overridden |
| `tier` | Ask user if not provided. Update: keep existing unless overridden |
| `featured` | Ask user if not provided. Update: keep existing unless overridden |
| `description` | Repo description ≤ 120 chars. Fall back to first README sentence |
| `tech` | Primary language + topics filtered for tech terms. Update: merge with existing |
| `github` | Full repo URL |

**Tech inference rules:**
- Always include `primaryLanguage.name`
- Include `repositoryTopics[].name` if it looks like a technology
- Strip noise: `open-source`, `portfolio`, `hacktoberfest`, `awesome`
- Capitalize known names: `rust` → `Rust`, `kotlin` → `Kotlin`, `cli` → `CLI`, `kmp` → `KMP`, `android` → `Android`

## Step 5: Build body

Summarize README into 2–4 short Markdown paragraphs. Focus on:
- What the project does
- Key technical decisions / architecture
- Notable features

Strip: badges, shields, install commands, license sections, contributing guides.

Start with `## <Project Name>` heading.

**Update mode:** rewrite body from fresh README data, don't preserve stale content.

## Step 6: Write file

File path: `src/content/projects/<slug>.md`

Format:
```md
---
name: Project Name
emoji: '🦀'
tier: B
featured: false
description: 'Short description ≤ 120 chars.'
tech: ['Rust', 'CLI']
github: 'https://github.com/lomartins/repo'
---

## Project Name

Body here...
```

- **Create**: use Write tool
- **Update**: use Edit tool — replace full frontmatter block and body

## Step 7: Report

```
Mode: created | updated
File: src/content/projects/<slug>.md
Tech: [Rust, CLI]
Tier: B | Featured: false
```

## gh CLI reference

```bash
gh repo view lomartins/badb --json name,description,repositoryTopics,primaryLanguage,languages,url
gh api repos/lomartins/badb/readme --jq '.content' | base64 -d
gh repo view lomartins/badb --json repositoryTopics --jq '.repositoryTopics[].name'
gh repo view lomartins/badb --json languages --jq '.languages[].node.name'
```
