---
ai_translated: true
title: Por que uso expect/actual com parcimônia em KMP
tags: [KMP, Kotlin, Architecture]
date: 2026-03-04
author: Luisa Martins
description: expect/actual é poderoso — e fácil de abusar. Quando recorro a ele e quando não.
---

# Por que uso expect/actual com parcimônia em KMP

`expect`/`actual` parece uma escape hatch limpa para código específico de plataforma. Também é uma armadilha se você recorre a ele cedo demais.

## Use quando

- Você realmente precisa da API da plataforma (file I/O, criptografia, relógio do sistema)
- O formato é idêntico entre plataformas
- O código de plataforma é pequeno

## Evite quando

- Uma interface no `commonMain` + binding via DI já resolve
- O "diff de plataforma" é uma linha de configuração
- Você acabaria duplicando lógica em ambos os blocos `actual`

Padrão: interfaces. `expect` por último.
