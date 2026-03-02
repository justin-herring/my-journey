---
layout: ../../layouts/PostLayout.astro
title: "Design tokens changed how I build"
description: "How a simple naming system for colors, spacing, and type made my CSS dramatically better."
pubDate: "2026-02-25"
author: "Lenora Porter"
readingTime: 4
---

![Design system color swatches and component patterns](/markdown-blog/images/design-system.svg)

I used to name my CSS variables things like `--blue`, `--dark-blue`, and `--really-dark-blue`. Then I'd add `--sort-of-blue` when the design changed. It was chaos.

Design tokens fixed this for me. Not the enterprise tooling or the Figma plugins — just the *idea* that every visual decision should have a semantic name.

## What are design tokens?

They're the atomic values behind your UI. Instead of hardcoding `#0070f3` everywhere, you create a token:

```css
:root {
  --accent: #0070f3;
  --text: #111;
  --text-muted: #666;
  --border: #e5e5e5;
  --bg: #fafafa;
}
```

The magic isn't in the syntax — it's in the constraint. When you limit yourself to a fixed set of values, every visual decision becomes a choice from a menu instead of a guess.

## The dark mode unlock

Once I had tokens, dark mode became trivial:

```css
:root[data-theme='dark'] {
  --accent: #79b8ff;
  --text: #ededed;
  --text-muted: #888;
  --border: #333;
  --bg: #111;
}
```

Same variable names, different values. Every component that uses `var(--text)` automatically adapts. No hunting through files to swap hex codes.

## Spacing tokens

Colors get all the attention, but spacing tokens changed my layouts more. I used to eyeball padding and margin — 12px here, 18px there, 24px somewhere else. Now I use a scale:

```css
--space-xs: 0.25rem;
--space-sm: 0.5rem;
--space-md: 1rem;
--space-lg: 2rem;
--space-xl: 4rem;
```

The constraint forces consistency. When everything aligns to the same rhythm, the whole page feels more intentional — even if you can't articulate why.

## You don't need a tool

I see people get paralyzed by token tooling — Style Dictionary, Tokens Studio, design-to-code pipelines. Those tools solve real problems at scale, but if you're building a personal site or a small project, CSS custom properties are all you need.

Start with five colors, five spacing values, and two font stacks. That's your design system. Everything else is optional.

## The mindset shift

The real change wasn't technical. It was learning to think in *systems* instead of *instances*. Instead of "this button should be blue," I think "this button uses the accent color." Instead of "add 24px of padding," I think "this section uses large spacing."

It sounds subtle, but it makes the difference between a site that feels designed and one that feels decorated.
