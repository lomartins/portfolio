---
ai_translated: true
title: Guia para Entrevista de System Design Mobile (Android & iOS)
img: /blog/mobile-system-design.svg
tags: [Interview, System Design, Mobile]
date: 2026-05-09
author: Luisa Martins
description: Um framework para estruturar conhecimento e experiência e ir bem na entrevista técnica de System Design para apps mobile.
---

# Guia para Entrevista de System Design Mobile (Android & iOS)

> **É impossível saber tudo, então tente focar no que você sabe.**

Este guia é direcionado a engenheiras e engenheiros pleno/sênior que querem estruturar conhecimento e experiência que já têm em um framework para mandar bem na entrevista técnica de System Design. Mas não tem problema se você está começando — só tenha em mente que muitos conceitos que ainda não fazem sentido vão fazer ao longo da carreira, ao desenvolver e escalar uma aplicação para uma grande base de usuários.

Sobre mim: trabalhei escalando múltiplas aplicações de POS de 50K MAUs (usuários ativos mensais) para mais de 1M MAUs na *Stone* e enfrentei desafios para isso, como performance, consumo de dados e integração com API gateway. No *iFood* trabalhei no time de plataforma do app de Entregadores com milhões de DAUs (usuários ativos diários) e bati no teto da quota de observabilidade rápido demais. Simplesmente porque o padrão de uso era diferente do esperado em comparação a outros apps da empresa, como apps de consumidor. Entregadores tendem a usar o app por cerca de 8 horas por dia. Isso resulta em uma quantidade monstruosa de relatórios para nossas ferramentas de observabilidade. Esse tipo de problema poderia ser mitigado com um system design bem feito.

No trabalho de verdade, você pode ter um time inteiro e talvez semanas para desenhar o system design mais adequado para o problema. Mas esse não é o caso em entrevistas técnicas. Então qual o objetivo da *Entrevista de System Design*?
- Entender como a candidata pensa em transformar uma tarefa ampla e vaga em um system design específico e estreito.
- Ver como pensa em escala e em arquitetura que suporta muitos usuários.
- Verificar se sabe tomar decisões, considerar e explicar trade-offs.

Você deve evitar tentar desenhar a solução e a arquitetura perfeitas para o problema. Isso é impossível no tempo da entrevista. Então mate o perfeccionismo e siga em frente. O mais importante neste exercício é fazer acontecer. **Melhor feito do que perfeito.**

Neste guia eu primeiro apresento o framework e no final dou exemplos de como abordaria alguns dos apps mais famosos em uma entrevista de system design.

## Como abordar o problema na entrevista (O framework)
Há abordagens parecidas pela internet, mas não veja como um caminho linear a seguir. Entenda o método e adapte conforme necessário. O método consiste em pelo menos 4 passos: Entender, Desenho de Alto Nível, Aprofundar, Revisar e fechar.

Vou dividir em 5 passos.
- [1. Entender o problema](#1-entender-o-problema)
- [2. Definir o espaço do problema](#2-definir-o-espaco-do-problema)
- [3. Desenhar o sistema em alto nível](#3-desenhar-o-sistema-em-alto-nivel)
- [4. Aprofundar no desenho](#4-aprofundar-no-desenho)
- [5. Revisar e fechar](#5-revisar-e-fechar)

### 1. Entender o problema
**NÃO PARTA DIRETO PARA O DESIGN — é uma armadilha**

<img src="/blog/its-a-trap.png" alt="It's a trap" width="313" />

Faça perguntas à entrevistadora ou entrevistador, compare com apps e experiências similares antes de tirar qualquer conclusão.

Engenheiras e engenheiros de verdade não vão direto para a conclusão — primeiro precisam entender o problema real e encontrar formas de transformar especificações ruins em requisitos bem definidos e estruturados.

**Possíveis perguntas que você pode fazer ou querer saber antes de qualquer coisa:**
> Não faça toda pergunta como um script — tente clarificar o que a entrevistadora espera de você

- O que precisa ser desenhado?
- Devo me preocupar só com o app mobile ou com outras partes, como APIs?
- Quem vai usar este app? (É escala global ou alguma região específica?)
- Existe algum design ou wireframe pronto?
- Há alguma aplicação legada que precisa ser suportada?
- Sobre plataforma, devemos suportar Android, iOS ou ambos?
- Quais dispositivos devem ser suportados (celular, tablet, smart watches, TV, etc.)?

### 2. Definir o espaço do problema
Reduza o escopo a algo concreto: **Requisitos Funcionais**, **Requisitos Não-Funcionais** e **Fora de Escopo**. Crie uma lista de cada um e pense como cada requisito pode impactar suas escolhas.

#### Requisitos Funcionais
- Tudo que pode ser traduzido em uma feature de usuário (ex: feed, comentário, autenticação)

#### Requisitos Não-Funcionais
- Tudo que pode impactar como os requisitos funcionais serão implementados. Como performance, segurança, escalabilidade, disponibilidade, número esperado de usuários, usabilidade, privacidade.

### 3. Desenhar o sistema em alto nível
- Desenhe as peças mais fundamentais do sistema
- Comece pelas APIs se forem relevantes (se não, desenhe uma abstração simples do backend)
- Faça wireframe do fluxo principal e telas (se não foi fornecido)
- Explique POR QUÊ cada decisão de design (essa é a parte mais importante)
- Vai usar MVVM, MVC, UDF? Por quê?
- Vai dividir em camadas de Clean Architecture? Como Apresentação, Domínio, Dados?
- Múltiplos módulos ou módulo único?
- Quais Repositórios ou use cases e datasources?

### 4. Aprofundar no desenho
- Examine os componentes do sistema.
- Estruture com perspectiva mobile.
- Identifique oportunidades de melhoria.

### 5. Revisar e fechar
No fim da entrevista, revise se atendeu todos os requisitos — na verdade, faça isso ao longo de todo o processo — e diga como continuaria escalando o desenho se tivesse mais tempo.

Pergunte se há alguma dúvida sobre o desenho, as decisões e os trade-offs.


## Em construção

![Em construção](/blog/work-in-progress.jpg)

O resto deste guia — incluindo deep-dives de exemplos para apps famosos — ainda está sendo escrito. Volte em breve.
