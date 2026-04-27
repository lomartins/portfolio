---
name: owo
image: 'https://raw.githubusercontent.com/lomartins/owo/refs/heads/main/docs/logo.svg'
tier: S
featured: true
description: 'Personal finance management system. Rust + Axum + SQLite backend, KMP mobile (iOS/Android), web interface, and Rust CLI. Monorepo with architecture docs, Open Finance API integration, and self-hosting focus.'
tech: ['Rust', 'Axum', 'SQLite', 'KMP', 'Kotlin']
github: 'https://github.com/lomartins/owo'
---

## owo - Personal Finance Management

Full-stack personal finance system built for reliability and privacy. Monorepo spanning backend, mobile, web, and CLI.

### Architecture

| Layer | Stack |
|-------|-------|
| **Backend** | Rust, Axum, SQLite — core API, financial calculations, data processing |
| **Mobile** | Kotlin Multiplatform — shared code for Android & iOS |
| **Web** | Browser interface for financial data |
| **CLI** | Native Rust tool for power users |

### Features

- Manual transaction tracking and categorization
- Reports and analytics dashboard
- Open Finance / Open Banking API integration
- AI-powered insights (planned)
- Advanced budgeting and forecasting (planned)
- Self-hosting — minimal data collection, encryption by default

### Philosophy

Built on four pillars: **reliability** (production-grade code for critical financial data), **extensibility** (plugin architecture + API-first), **privacy** (self-hosting option, minimal collection), and **openness** (open standards).
