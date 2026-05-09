---
ai_translated: true
name: owo
image: 'https://raw.githubusercontent.com/lomartins/owo/refs/heads/main/docs/logo.svg'
tier: S
featured: true
description: 'Sistema de gestão financeira pessoal. Backend em Rust + Axum + SQLite, mobile KMP (iOS/Android), interface web e CLI em Rust. Monorepo com docs de arquitetura, integração com Open Finance e foco em self-hosting.'
tech: ['Rust', 'Axum', 'SQLite', 'KMP', 'Kotlin']
github: 'https://github.com/lomartins/owo'
---

## owo - Gestão de Finanças Pessoais

Sistema full-stack de finanças pessoais construído com foco em confiabilidade e privacidade. Monorepo abrangendo backend, mobile, web e CLI.

### Arquitetura

| Camada | Stack |
|-------|-------|
| **Backend** | Rust, Axum, SQLite — API central, cálculos financeiros, processamento de dados |
| **Mobile** | Kotlin Multiplatform — código compartilhado entre Android e iOS |
| **Web** | Interface no navegador para dados financeiros |
| **CLI** | Ferramenta nativa em Rust para usuários avançados |

### Funcionalidades

- Acompanhamento e categorização manual de transações
- Dashboard de relatórios e analytics
- Integração com APIs de Open Finance / Open Banking
- Insights com IA (planejado)
- Orçamento e previsão avançados (planejado)
- Self-hosting — coleta mínima de dados, criptografia por padrão

### Filosofia

Construído sobre quatro pilares: **confiabilidade** (código pronto para produção lidando com dados financeiros críticos), **extensibilidade** (arquitetura de plugins + API-first), **privacidade** (opção de self-hosting, coleta mínima) e **abertura** (padrões abertos).
