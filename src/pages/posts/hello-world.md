---
layout: ../../layouts/PostLayout.astro
title: "Hello, world"
description: "Why I built this blog, and how you can make it yours in under five minutes."
pubDate: "2026-03-01"
author: "Lenora Porter"
readingTime: 3
---

I've tried a lot of blogging setups over the years — WordPress, Ghost, Notion-to-site pipelines, even a custom Next.js build that took longer to maintain than to write for. Every time, the tooling got in the way of the writing.

So I built this instead.

## The simplest thing that works

This blog is just Markdown files in a folder. No CMS login, no database, no deploy hooks to debug at midnight. You write a `.md` file, push it to GitHub, and it's live.

The whole thing runs on [Astro](https://astro.build), which means it builds to plain HTML with zero client-side JavaScript (unless you want it). Pages load fast because there's nothing to load.

## What I wanted

I had a short list:

- **Write in Markdown** — the same format I already use for notes, READMEs, and documentation
- **Dark mode** — because I write at night and bright screens are hostile
- **No lock-in** — if I want to move to a different framework someday, my content is just `.md` files in a folder
- **Easy to fork** — anyone should be able to clone this repo, change a config file, and have their own blog

That last point matters to me. I've seen too many "starter templates" that require you to understand the entire build system before you can change the site title. This one has a single config file — `src/site.config.ts` — where you set your name, bio, social links, and favicon. Everything else just works.

## How it's built

The stack is intentionally minimal:

- **Astro** for static site generation
- **Markdown** for content (no MDX, no components in posts)
- **CSS custom properties** for theming
- **Inter** for typography
- **GitHub Pages** for hosting

There's no Tailwind, no React, no state management. The entire site is less than 50KB. That's not a constraint — it's a feature.

## What's next

I plan to write here about the things I'm building, the tools I'm exploring, and the lessons I keep relearning. Nothing polished, nothing performative — just notes from someone who likes making things for the web.

If you want to start your own blog like this one, fork the repo and follow the README. It takes about five minutes.

Welcome. Let's see where this goes.
