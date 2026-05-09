---
ai_translated: true
title: Crash monitoring não é só sobre o SDK
tags: [Observability, Android, Platform]
date: 2026-02-18
author: Luisa Martins
description: A parte difícil de observabilidade de crashes não é a instrumentação — é a adoção, a triagem e a manutenção.
---

# Crash monitoring não é só sobre o SDK

Plugar o Crashlytics. Pronto, certo? Não.

O SDK é a parte fácil. As partes difíceis:

- Triar ruído versus regressões reais
- Atribuir donos para grupos de crash entre times
- Conseguir que as pessoas realmente olhem o dashboard

Sem ownership, você tem um gráfico que ninguém lê.

## O que funcionou

- Rotear crashes automaticamente para times via mapeamento de package
- Alerta no Slack só em regressões, não em todo crash
- Revisão semanal de crashes embutida nos rituais do time

O SDK é 10% do trabalho.
