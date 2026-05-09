---
name: compose-dynamic-color-imagevector
emoji: '🎨'
tier: B
featured: false
description: 'Build ImageVectors with dynamic colors that adapt to Material3 themes in Jetpack Compose.'
tech: ['Kotlin', 'Android', 'Jetpack Compose', 'Material3']
github: 'https://github.com/lomartins/compose-dynamic-color-imagevector'
---

## Compose Dynamic Color ImageVector


Shows how to build programmatic `ImageVector`s in Jetpack Compose whose colors adapt to a Material3 dynamic color theme at runtime.


<img src="https://raw.githubusercontent.com/lomartins/compose-dynamic-color-imagevector/master/images/demo.gif" alt="Demo" height="600" />


Instead of using static XML drawables, each path is constructed via `ImageVector.Builder` with explicit color parameters — making it trivial to swap colors from `MaterialTheme.colorScheme` or any runtime source.

Key pattern: a `makeIcon()` function accepts `backgroundColor`, `primaryColor`, and `secondaryColor` as arguments (defaulting to theme colors when used as a `@Composable`), then builds the vector on-the-fly using `addPath` + `SolidColor`.