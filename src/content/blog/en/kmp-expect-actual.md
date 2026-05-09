---
title: Why I use expect/actual sparingly in KMP
tags: [KMP, Kotlin, Architecture]
date: 2026-03-04
author: Luisa Martins
description: expect/actual is powerful — and easy to abuse. Here's when I reach for it and when I don't.
---

# Why I use expect/actual sparingly in KMP

`expect`/`actual` looks like a clean escape hatch for platform-specific code. It's also a trap if you reach for it too early.

## Reach for it when

- You truly need the platform API (file I/O, crypto, system clock)
- The shape is identical across platforms
- The platform code is small

## Skip it when

- An interface in `commonMain` + DI binding works fine
- The "platform" diff is one line of config
- You'd otherwise duplicate logic in both `actual` blocks

Default to interfaces. `expect` last.
