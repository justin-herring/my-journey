---
layout: ../../layouts/PostLayout.astro
title: "Designing APIs that developers actually like"
description: "Good API design is invisible. Here's what I've learned about building endpoints that feel intuitive."
pubDate: "2026-02-15"
author: "Lenora Porter"
readingTime: 5
---

The best APIs are the ones you don't have to think about. You read the endpoint, you guess what it expects, and you're right. That experience doesn't happen by accident — it's the result of deliberate design choices.

## Consistency is the whole game

If your `GET /users` returns an array and your `GET /posts` returns an object with a `data` key wrapping an array, you've already lost. The developer using your API now has to check the docs for every single endpoint because they can't trust their assumptions.

Pick a response shape and stick with it. Everywhere. Even when it feels slightly awkward for a particular endpoint. Consistency beats local optimization every single time.

![A simple API gateway pattern](/markdown-blog/images/api-diagram.svg)

## Name things for humans

I once worked with an API that had endpoints like `/api/v2/urs/mgmt/batch`. It took me twenty minutes to figure out that `urs` meant "user records" and `mgmt` meant "management." The developer who built it probably saved thirty seconds by abbreviating. Every developer after them lost minutes or hours.

Use full words. Use nouns for resources and verbs for actions. If someone can read the URL out loud and roughly understand what it does, you've done your job.

## Error messages are a feature

Most APIs treat errors as an afterthought — a status code and maybe a generic message. But error messages are the documentation developers read most, because they read them at the exact moment they need help.

A good error response includes:

- **What went wrong** — in plain language, not a stack trace
- **Which field or parameter** caused the problem
- **What to do about it** — a hint toward the fix

The difference between `400 Bad Request` and `400: The "email" field must be a valid email address (received "not-an-email")` is enormous. The second one saves a support ticket.

## Pagination from day one

It doesn't matter if your database has twelve records right now. If an endpoint returns a list, paginate it. Because someday it won't have twelve records, and retrofitting pagination into an API that previously returned everything is a breaking change that ruins someone's weekend.

Cursor-based pagination is almost always better than offset-based. It's more performant, it handles insertions and deletions gracefully, and once you build the helper once, it's no harder to use.

## Versioning: just use the URL

There are elegant arguments for header-based versioning, content negotiation, and various other approaches. In practice, putting the version in the URL (`/api/v1/users`) is the simplest thing that works. It's visible, it's obvious, and it's easy to grep for in client code.

When you do release a v2, keep v1 running longer than you think you need to. The developers who integrated with your API have other priorities. Give them time.

## Rate limiting as communication

Rate limits aren't just a technical safeguard — they're a communication tool. When you return a `429 Too Many Requests` with a `Retry-After` header, you're telling the developer exactly what to do and when to try again.

Document your rate limits clearly. Include them in the response headers on every request, not just when the limit is hit. Developers shouldn't have to trigger an error to learn what the boundaries are.

## The test I use

Before shipping an API endpoint, I try to use it without reading the documentation. I look at the URL, guess the request shape, send it, and see what happens. If I can get a successful response on the first or second try, the design is working. If I have to open the docs, something could be clearer.

This isn't a rigorous test. But it catches a surprising number of naming issues, inconsistencies, and confusing response shapes before they become someone else's problem.
