---
name: Central Food
emoji: '🍱'
image: 'https://user-images.githubusercontent.com/51249341/126922540-315fa9b6-6989-4c04-9a48-760b0fbcce8d.png'
tier: A
featured: true
description: 'Android app connecting food merchants with NGOs to fight hunger. Won 1st place at Call for Code LATAM Hackathon 2021.'
tech: ['Kotlin', 'Android', 'Firebase', 'Flask', 'Twilio', 'IBM Cloud']
github: 'https://github.com/central-food/central-food-app'
---

## Central Food

Central Food bridges the gap between food waste and hunger. Merchants at supply centers register surplus food in the app — food that would otherwise be discarded — and NGOs receive instant notifications so they can claim or purchase it before it spoils.

The app was built for the Call for Code LATAM Hackathon 2021, tackling the UN's Zero Hunger goal. In Latin America alone, 127 million tons of food are wasted annually, with 80% of losses occurring during transport, handling, and sales — exactly the gap Central Food targets. The project won first place at the event.

The architecture pairs a Kotlin Android client with a Flask backend deployed on IBM Cloud Foundry. Firebase handles real-time data sync and push notifications, while Twilio powers SMS alerts so NGOs are notified immediately when new food becomes available. The merchant-NGO flow is intentionally lightweight: register food, notify, contact, collect.
