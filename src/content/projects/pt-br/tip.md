---
ai_translated: true
name: tip-splitter
image: 'https://raw.githubusercontent.com/lomartins/tip-splitter/refs/heads/main/assets/icon/icon_foreground.svg'
tier: A
featured: true
description: 'App Android para dividir contas e calcular gorjetas. Flutter + BLoC, divisão por pessoa em tempo real, percentuais flexíveis de gorjeta. Release v1.0.0 em produção, Android 5.0+.'
tech: ['Flutter', 'Dart', 'BLoC', 'Kotlin', 'Android']
github: 'https://github.com/lomartins/tip-splitter'
---

## Tip Splitter

App Android limpo para dividir contas de restaurante e calcular gorjetas. Faz a matemática para que você não precise.

**Status**: v1.0.0 — Release em Produção | **Plataforma**: Android 5.0+ | **APK**: 49.4 MB

<img src="https://raw.githubusercontent.com/lomartins/tip-splitter/refs/heads/main/screenshots/01-home.png" alt="Tela Inicial" height="600" />

### Principais funcionalidades

- **Entrada flexível de valores** — insira qualquer valor em Real (R$), cálculo em tempo real conforme você digita
- **Cálculo inteligente de gorjeta** — percentuais customizados com totais instantâneos
- **Divisão de conta** — incrementa/decrementa o número de pessoas, recálculo automático por pessoa
- **Resumo detalhado** — sumário completo de pagamento por pessoa

### Stack técnica

| Componente | Tecnologia |
|-----------|------------|
| Framework | Flutter |
| Linguagem | Dart |
| Gerenciamento de Estado | Padrão BLoC |
| Armazenamento | Shared Preferences |
| Build | Gradle |

### Performance

- Inicialização: <2 segundos
- Memória: <100 MB em runtime
- Localização: UI em Português, framework de i18n pronto para expansão
