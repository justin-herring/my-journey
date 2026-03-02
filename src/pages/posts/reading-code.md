---
layout: ../../layouts/PostLayout.astro
title: "You should read more code"
description: "Reading other people's source code is the fastest way to level up as a developer."
pubDate: "2026-02-08"
author: "Lenora Porter"
readingTime: 4
---

We talk a lot about writing code but almost never about *reading* it. Which is strange, because most developers spend more time reading code than writing it. And the best way to write better code is to read more of it.

## How writers learn to write

Writers read constantly. Not just for information — for craft. They study sentence structure, pacing, word choice, and how other authors solve narrative problems. They read widely and intentionally.

Developers should do the same thing with source code.

## What I read and why

I keep a rotation of open-source repos that I read regularly. Not to contribute — just to learn.

**For architecture patterns:**
I read framework source code. Astro's codebase taught me how a plugin system can be both flexible and simple. Vite's source showed me how to structure a tool that feels fast.

**For clean abstractions:**
Small utility libraries are gold. Looking at something like `date-fns` shows you how to design an API that's intuitive without documentation.

**For testing patterns:**
Reading test files is underrated. They show you how the author *intended* the code to be used, which is often clearer than the documentation.

## How to read a codebase

Don't start at `index.js`. Start at the entry point that matters:

1. **Read the README** — understand what the project does
2. **Read the tests** — understand how it's supposed to behave
3. **Read the types** — understand the data shapes
4. **Read the main module** — now the implementation will make sense

If you start with the implementation, you'll get lost in details without understanding the big picture. Work outside-in.

## The 30-minute habit

I spend about 30 minutes a week reading code I didn't write. Usually on GitHub, usually something that showed up in my feed or was recommended by someone I respect.

Some things I look for:

- **How do they handle errors?** Do they use try/catch, Result types, or something else?
- **How do they name things?** Are the variable names descriptive or terse? Why?
- **How do they structure files?** One big file or many small ones? Where do the tests live?
- **What patterns repeat?** Every codebase has idioms. Spotting them helps you understand the author's mental model.

## An exercise

Pick a tool you use daily — your test runner, your bundler, your favorite library. Clone the repo and spend 30 minutes exploring the source. Don't try to understand everything. Just notice:

- What surprised you?
- What was cleaner than you expected?
- What was messier than you expected?
- What would you do differently?

Write down your observations. That's it. Do this once a week and within a month, you'll notice your own code improving in ways you can't quite explain.

## The paradox

Here's the thing about reading code: you don't learn specific techniques as much as you absorb *taste*. You develop an intuition for what "good" looks like, which makes your own code better even when you can't articulate why.

It's the same way you develop an ear for music by listening, not just by playing scales. The scales matter — but so does the listening.
