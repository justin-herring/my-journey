---
layout: ../../layouts/PostLayout.astro
title: "Tools I use every day"
description: "My current setup for writing code, taking notes, and staying focused."
pubDate: "2026-03-01"
author: "Lenora Porter"
readingTime: 4
---

People ask me about my setup a lot, so here's the current state of things. This changes every few months, but the core has been stable for a while.

## Editor

**VS Code** is still the one. I've tried Neovim (too much config), Zed (promising but not ready), and Cursor (interesting but I don't want AI autocomplete in everything). VS Code just works, the extension ecosystem is unmatched, and I know all the shortcuts.

A few extensions I can't live without:

- **Error Lens** — shows errors inline, right next to the code. No more squinting at the problems panel.
- **GitLens** — blame annotations and history without leaving the editor
- **Prettier** — I stopped having opinions about formatting years ago. Let the machine decide.

## Terminal

**iTerm2** with a minimal prompt. I tried Warp and it felt like too much — I don't need AI in my terminal. My shell is plain `zsh` with a handful of aliases and nothing else.

The most useful alias I have:

```bash
alias gs="git status"
alias gc="git commit -m"
alias gp="git push"
```

Simple, but I type these dozens of times a day.

## Notes

**Obsidian** for everything. Meeting notes, project ideas, reading highlights, random thoughts. The key insight for me was treating it like a journal, not a knowledge base. I stopped trying to build a perfect graph of linked notes and just started writing. It's been much better since.

My folder structure is embarrassingly simple:

```
/daily        — one note per day
/projects     — one folder per active project
/reference    — stuff I look up repeatedly
```

That's it. No templates, no plugins, no Dataview queries.

## Design

**Figma** for anything visual. I'm not a designer by title, but I think in interfaces, and Figma is the fastest way to get an idea out of my head and onto a screen. Even for this blog — I mocked up the layout in Figma before writing any CSS.

## Focus

This is the real tool. I use **one browser window** with a maximum of eight tabs. If I need to open a ninth, I close one first. This sounds extreme but it completely changed how I work. Most "productivity" problems are just tab management problems in disguise.

I also keep my phone in another room while I'm working. That's the highest-leverage productivity hack I've ever found, and it cost nothing.

## The theme

If there's a pattern here, it's that I prefer simple tools that I understand completely over powerful tools that I half-understand. Every layer of abstraction is a potential source of confusion. I'd rather have less capability and more clarity.

Your mileage may vary. But if you're feeling overwhelmed by your tooling, try removing things instead of adding them. You might be surprised how little you actually need.
