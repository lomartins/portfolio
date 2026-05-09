---
ai_translated: true
name: compose-dynamic-color-imagevector
emoji: '🎨'
tier: B
featured: false
description: 'Construa ImageVectors com cores dinâmicas que se adaptam a temas Material3 no Jetpack Compose.'
tech: ['Kotlin', 'Android', 'Jetpack Compose', 'Material3']
github: 'https://github.com/lomartins/compose-dynamic-color-imagevector'
---

## Compose Dynamic Color ImageVector


Mostra como construir `ImageVector`s programáticos no Jetpack Compose cujas cores se adaptam a um tema dinâmico do Material3 em runtime.


<img src="https://raw.githubusercontent.com/lomartins/compose-dynamic-color-imagevector/master/images/demo.gif" alt="Demo" height="600" />


Em vez de usar drawables XML estáticos, cada path é construído via `ImageVector.Builder` com parâmetros explícitos de cor — tornando trivial trocar cores vindas do `MaterialTheme.colorScheme` ou de qualquer fonte em runtime.

Padrão principal: uma função `makeIcon()` aceita `backgroundColor`, `primaryColor` e `secondaryColor` como argumentos (com fallback nas cores do tema quando usada como `@Composable`), e então constrói o vetor on-the-fly usando `addPath` + `SolidColor`.
