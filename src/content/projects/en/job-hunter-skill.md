---
name: job-hunter
emoji: '🎯'
tier: A
featured: true
description: 'Local-first, PII-safe job-hunting copilot. Scrapes boards, kanban-tracks applications, auto-fills ATS forms, tailors resumes per JD.'
tech: ['Python', 'FastAPI', 'HTMX', 'SQLite', 'Playwright', 'Claude Code']
github: 'https://github.com/lomartins/job-hunter-skill'
---

## job-hunter

Self-hosted job-search command center distributed as a Claude Code skill, CLI, and local webapp. Scrapes 11 job boards into a local SQLite pipeline, tracks every application kanban-style, fills ATS forms in shadow or auto mode, and tailors [Reactive Resume](https://github.com/amruthpillai/reactive-resume) JSON per JD — without sending PII or session cookies to any model.

### Architecture

| Layer | Stack |
|-------|-------|
| **Skill** | Claude Code plugin — slash commands for discover, apply, dig, tailor-resume |
| **CLI** | Python 3.12 + `uv` — scrapers, form-fill, salary aggregation |
| **Webapp** | FastAPI + HTMX on `127.0.0.1:8765` — kanban tracker, metrics, JD viewer |
| **Storage** | SQLite `jobs.db` mirrored to human-readable `tracking.md` |
| **Forms** | Playwright + YAML adapters (Gupy, Greenhouse, Lever, Workday, Ashby) |

### Features

- **11 sources** out of the box — LinkedIn, Indeed, Glassdoor, Gupy, RemoteOK, Remotive, plus a `learn.py` adapter that drafts YAML from any unknown form
- **Pipeline tracking** — `discovered → queued → applying → applied → screening → technical → behavioral → offer / rejected / withdrawn`
- **Match score** per job from profile + JD heuristics (seniority, country lock, on-site mismatch)
- **Salary aggregator** — p25/median/p75 from your own scraped data
- **Two-mode form-fill** — `shadow` pauses before submit; `auto` requires 5 reliability gates + explicit consent
- **Resume tailoring** — emits Reactive Resume JSON tuned to the JD

### PII isolation

Personal data (national ID, phone, address, session cookies) lives in `~/.config/job-hunter/secrets/personal.env` at `chmod 600`. The model is explicitly forbidden to read it via Read tool, cat/head/tail/grep, or any pipe whose output enters the conversation. The CLI loads it via `python-dotenv` in a child process; the model only sees field schemas. CI runs `lint_secret_leaks.py` to block any PR that would echo PII into logs or screenshots.
