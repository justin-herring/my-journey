---
layout: ../../layouts/PostLayout.astro
title: "Ship small, learn fast"
description: "Why my best side projects are the ones I finished in a weekend."
pubDate: "2026-02-12"
author: "Lenora Porter"
readingTime: 3
---

My graveyard of unfinished side projects is enormous. A habit tracker that got stuck on the settings page. A recipe app that never got past the database schema. A portfolio redesign that's been "in progress" for two years.

The projects I actually finished? They were all small enough to ship in a weekend.

## The weekend test

Before starting a side project, I now ask: *Can I get a working version of this live in two days?*

Not a polished version. Not a feature-complete version. A *working* version — something real that does the core thing and is deployed somewhere.

This blog passed the test. The core loop is dead simple: write Markdown, push to GitHub, see it on the internet. Everything else — dark mode, pagination, social links — came later, one small improvement at a time.

## Why small wins

There's a psychological trap with ambitious side projects. You spend weeks on infrastructure and never get to the interesting part. The longer you work without shipping, the more likely you are to abandon it.

Small projects short-circuit this. You get the dopamine of shipping on day one, and that energy carries you into the refinement phase. It's much easier to improve something that exists than to finish something that doesn't.

## My shipping checklist

Before I consider a side project "shipped," it needs exactly three things:

1. **It works** — the core feature functions correctly
2. **It's deployed** — someone can access it via a URL
3. **It has a README** — someone else can understand what it is

That's it. No tests (yet). No CI pipeline (yet). No custom domain (yet). Those are all improvements that come *after* shipping, not before.

## The ones that taught me the most

Looking back, the projects I learned the most from weren't the complex ones. They were:

- **A color palette generator** — taught me HSL color math in an afternoon
- **A markdown previewer** — taught me how `contenteditable` actually works
- **A URL shortener** — taught me serverless functions in about 100 lines
- **This blog** — taught me Astro, static site generation, and CSS custom properties

None of these took more than a weekend for the first version. All of them taught me something I still use daily.

## Permission to be small

If you've been sitting on a side project idea, waiting for the right weekend or the right stack or the right level of motivation — try making it smaller. Dramatically smaller. Cut features until it feels almost too simple.

Then build that. Ship it. And see what happens next.
