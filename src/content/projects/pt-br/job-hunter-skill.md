---
ai_translated: true
name: job-hunter
emoji: '🎯'
tier: A
featured: true
description: 'Copiloto de busca de emprego local-first e PII-safe. Faz scraping de boards, rastreia candidaturas em kanban, preenche formulários ATS e adapta currículos por JD.'
tech: ['Python', 'FastAPI', 'HTMX', 'SQLite', 'Playwright', 'Claude Code']
github: 'https://github.com/lomartins/job-hunter-skill'
---

## job-hunter

Central de comando self-hosted para busca de emprego, distribuída como skill do Claude Code, CLI e webapp local. Faz scraping de 11 job boards para um pipeline SQLite local, rastreia toda candidatura em estilo kanban, preenche formulários ATS em modo shadow ou auto, e adapta JSON do [Reactive Resume](https://github.com/amruthpillai/reactive-resume) por JD — sem enviar PII ou cookies de sessão para nenhum modelo.

### Arquitetura

| Camada | Stack |
|-------|-------|
| **Skill** | Plugin do Claude Code — slash commands para discover, apply, dig, tailor-resume |
| **CLI** | Python 3.12 + `uv` — scrapers, preenchimento de formulários, agregação salarial |
| **Webapp** | FastAPI + HTMX em `127.0.0.1:8765` — tracker kanban, métricas, visualizador de JD |
| **Storage** | SQLite `jobs.db` espelhado em `tracking.md` legível |
| **Forms** | Playwright + adapters YAML (Gupy, Greenhouse, Lever, Workday, Ashby) |

### Funcionalidades

- **11 fontes** prontas — LinkedIn, Indeed, Glassdoor, Gupy, RemoteOK, Remotive, além de um adapter `learn.py` que gera YAML para qualquer formulário desconhecido
- **Pipeline tracking** — `discovered → queued → applying → applied → screening → technical → behavioral → offer / rejected / withdrawn`
- **Match score** por vaga baseado em heurísticas de perfil + JD (senioridade, país travado, on-site incompatível)
- **Agregador salarial** — p25/mediana/p75 a partir dos seus próprios dados raspados
- **Preenchimento em dois modos** — `shadow` pausa antes do submit; `auto` exige 5 portões de confiabilidade + consentimento explícito
- **Adaptação de currículo** — emite JSON do Reactive Resume ajustado à JD

### Isolamento de PII

Dados pessoais (RG, telefone, endereço, cookies de sessão) ficam em `~/.config/job-hunter/secrets/personal.env` com `chmod 600`. O modelo é explicitamente proibido de lê-los via Read tool, cat/head/tail/grep, ou qualquer pipe cuja saída entre na conversa. A CLI carrega via `python-dotenv` em processo filho; o modelo só vê schemas de campos. CI roda `lint_secret_leaks.py` para bloquear qualquer PR que faria PII vazar para logs ou screenshots.
