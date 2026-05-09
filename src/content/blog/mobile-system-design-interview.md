---
title: Guide for Mobile Systems Design Interview  (Android & iOS)
img: /blog/mobile-system-design.svg
tags: [Interview, System Design, Mobile]
date: 2026-05-09
author: Luisa Martins
description: A framework to structure your knowledge and experience to nail on System Design Tech interview for mobile apps.
---

# Guide for Mobile Systems Design Interview  (Android & iOS)

> **Its impossible to know everything, so try focus on the things you know.**

This guide is written targeting seniors or mid level engineers who what to structure their already know knowledge and experience into a framework to nail on System Design Tech interview. But there's not a problem if you are a beginner, just keep in mind that a loot of concepts that you don't get you might experience in you career when developing and scaling an application to a large user count.

About me: I worked escalating multiple POS applications from 50K MAUs (Monthly active users) to more than 1M MAUs at *Stone* and went through challenges to do it, such as performance, data usage, integrate with API gateway. At *iFood* I worked in Drivers app platform team with millions DAUs (Daily active users) and I went through reaching observability quota too fast. Just because the user interaction with app was different than expected in comparison with others company app such app consumer app. Drivers app users tend to user app around 8 hours a day. That's results in a monstrous amount of reports to our observability tools. This kind of problem could be mitigated with a well done system design.

In the actual job at the company you might have a  whole team and maybe weeks to design the most suitable system design for the respective problem. But that's not the case for technical interviews. So what's the objective of the *Systems Design Interview*?
- Understand how candidate think about a broad and vague task and turn it on a narrow and specific system design.
- See how candidate think about scaling and working with a architecture that supports large amount of users.
- Check if candidate know how to make decisions, considerate and know how explain their trade-offs.

You should avoid trying to design the perfect solution and architecture to solve the problem. That's impossible in the interview time. So kill your perfectionist personality and keep going. The most important in this exercise is getting things DONE. **It's better done than perfect.**

In this guide I'll first introduce you to the frame work and at the end I'll give you some examples on how I would approach some of the most famous apps in a systems design interview.

## How to approach to the problem at Interview (The framework)
There's some similar approaches you can find on internet, but do not see it as a linear path to follow. Understand the method and adapt as it need. The method consist in at least 4 steps: Understand, High Level Design, Deep dive, Review and wrap up. 

I'll Divide it at 5 steps.
- [1. Understand the problem](#1-understand-the-problem)
- [2. Define the problem space](#2-define-the-problem-space)
- [3. Design the system at a high level](#3-design-the-system-at-a-high-level)
- [4. Deep dive into the design](#4-deep-dive-into-the-design)
- [5. Review and wrap up](#5-review-and-wrap-up)

### 1. Understand the problem
**DO NOT DRIVE DIRECT INTO THE DESIGN — its's a trap**

<img src="/blog/its-a-trap.png" alt="It's a trap" width="313" />

Make questions to the interviewer, compare with apps and similar experiences that you had before driving into any conclusion. 

Real engineers do not drive directly into conclusion they must before understand the real problem and find ways to turn the worst specifications into well defined and structured requirements.

**Possible questions you may wanna ask or know before anything:**
> Do not ask every single question as an script but try clarify what the interviewer expect from you

- What needs to be design?
- Should I concern just about the mobile app or other parts such as APIs?
- Who is going to use this app? (It's in a global scale or some specific region)
- There is any existing design or wire frame?
- There's any legacy application that we must support?
- About platform, we should support Android, iOS or both?
- Wich devices should be supported (phone, tablet, smart watches, tv, etc...)

### 2. Define the problem space
Reduce the scope into a concrete thing: **Functional Requirements**, **Non-Functional Requirements** and **Out Off Scope**. Create a list of each thing and think how this requirements could impact on your choices.

#### Functional Requirements
- Everything that could be translated to a user feature (ex: feed, comment, authentication)

#### Non-Functional Requirements
- Everything that might impact on how functional requirements will be implemented. Such as performance, security, scalability, availability, expected number of users, usability, privacy.

### 3. Design the system at a high level
- Design Most fundamental pieces of the system
- Start if APIs if needed (if not relevant just draw simple abstraction of backend)
- Wireframe the main flow and screens (if it was not provided)
- Explain WHY about the design choices (that's the most important)
- It gonna use MVVM, MVC, UDF. Why?
- It'll be divided in CLEAN Architecture Layers? Such as Presentation, Domain, Data
- Multiple modules or single module
- Wich Repositories or use cases and datasources?

### 4. Deep dive into the design
- Examine system components.
- Structure into a mobile perspective.
- Identify opportunities to improve.

### 5. Review and wrap up
At the end of interview review if you matched with all the requirements, actually you should do it through to whole process, say how you would continuing scaling the design if you had more time.

Ask Interviewer if there is any question about the design and the decisions and trade off taken.


## Work in progress

![Work in progress](/blog/work-in-progress.jpg)

The rest of this guide — including deep-dive examples for famous apps — is still being written. Check back soon.