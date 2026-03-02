---
layout: ../../layouts/PostLayout.astro
title: "CSS is good, actually"
description: "A defense of vanilla CSS in an era of utility classes and CSS-in-JS."
pubDate: "2026-02-15"
author: "Lenora Porter"
readingTime: 4
---

Every few months, someone on Twitter declares that CSS is broken and we need [new abstraction] to fix it. And every few months, I look at my plain CSS files and think: these are fine.

I'm not here to argue against Tailwind or styled-components. They solve real problems for real teams. But I am here to say that vanilla CSS — the language, as it exists today — is remarkably good.

## Custom properties are underrated

CSS variables solved the biggest legitimate complaint about CSS: the inability to reuse values.

```css
:root {
  --radius: 8px;
  --shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

.card {
  border-radius: var(--radius);
  box-shadow: var(--shadow);
}
```

They cascade. They can be scoped. They update at runtime. They work with media queries. They're more powerful than Sass variables ever were, and they're built into the platform.

## Container queries arrived

The number one reason people said "CSS can't do real layout" was that media queries respond to the viewport, not the component. Container queries fixed this:

```css
.card-grid {
  container-type: inline-size;
}

@container (min-width: 400px) {
  .card {
    flex-direction: row;
  }
}
```

Components can now respond to their own size. This was supposed to be impossible without JavaScript.

## Nesting is here

The last major Sass feature that kept people from going vanilla:

```css
.post {
  padding: 1.5rem;

  & .title {
    font-size: 1.25rem;
    font-weight: 600;
  }

  &:hover {
    background: var(--bg-hover);
  }
}
```

Native CSS nesting works in all modern browsers. One less build step, one less dependency.

## The cascade is a feature

I know — the cascade is the thing everyone complains about. "Styles are coming from everywhere!" But the cascade is what makes CSS powerful. It's a prioritization system that lets you write less code:

1. Set sensible defaults on base elements
2. Override with classes where needed
3. Use specificity intentionally, not accidentally

The developers who struggle with the cascade are usually fighting it instead of working with it. Once you understand the rules — which fit on a single page — it becomes predictable.

## What I actually use

For this blog and most personal projects, my CSS setup is:

- **Custom properties** for theming
- **Flexbox and Grid** for layout
- **Scoped styles** via Astro (no class name conflicts)
- **No preprocessor**, no utility framework, no CSS-in-JS

The entire stylesheet for this site is under 300 lines. It handles light mode, dark mode, responsive layout, typography, and component styles. I can read any line of it and immediately understand what it does.

## The best CSS is boring CSS

There's a reason this blog doesn't use any cutting-edge CSS features. The boring stuff — `padding`, `margin`, `color`, `font-size` — covers 90% of what you need. Learn those well before reaching for the new hotness.

The best CSS is the CSS you can understand six months from now without a decoder ring.
