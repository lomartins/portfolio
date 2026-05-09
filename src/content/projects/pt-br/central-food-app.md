---
ai_translated: true
name: Central Food
emoji: '🍱'
image: 'https://user-images.githubusercontent.com/51249341/126922540-315fa9b6-6989-4c04-9a48-760b0fbcce8d.png'
tier: A
featured: true
description: 'App Android conectando comerciantes de alimentos com ONGs no combate à fome. 1º lugar no Call for Code LATAM Hackathon 2021.'
tech: ['Kotlin', 'Android', 'Firebase', 'Flask', 'Twilio', 'IBM Cloud']
github: 'https://github.com/central-food/central-food-app'
---

## Central Food

O Central Food faz a ponte entre o desperdício de alimentos e a fome. Comerciantes em centrais de abastecimento cadastram excedentes no app — alimentos que de outra forma seriam descartados — e ONGs recebem notificações instantâneas para reivindicar ou comprar antes que estraguem.

O app foi construído para o Call for Code LATAM Hackathon 2021, atacando a meta Fome Zero da ONU. Só na América Latina, 127 milhões de toneladas de comida são desperdiçadas anualmente, com 80% das perdas ocorrendo no transporte, manuseio e venda — exatamente a lacuna que o Central Food endereça. O projeto ficou em primeiro lugar no evento.

A arquitetura combina um cliente Android em Kotlin com um backend Flask hospedado no IBM Cloud Foundry. O Firebase cuida da sincronização em tempo real e dos push notifications, enquanto o Twilio dispara alertas SMS para que ONGs sejam notificadas imediatamente quando novos alimentos ficam disponíveis. O fluxo comerciante–ONG é intencionalmente leve: cadastrar comida, notificar, contatar, coletar.
