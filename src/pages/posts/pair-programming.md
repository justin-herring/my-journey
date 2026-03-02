---
layout: ../../layouts/PostLayout.astro
title: "Pair programming changed how I think"
description: "It's not about writing code together. It's about thinking together."
pubDate: "2026-01-20"
author: "Lenora Porter"
readingTime: 4
---

I used to think pair programming was inefficient. Two developers, one keyboard, half the output. The math didn't work. Then I actually tried it — consistently, with the right people — and realized I'd been measuring the wrong thing.

## The first time it clicked

I was pairing with a senior engineer on a gnarly data migration. The kind of task where you're writing SQL that touches millions of rows and you really don't want to mess it up. I was driving — typing the code — and she was navigating, watching the logic, asking questions.

About twenty minutes in, she said: "Wait, what happens if that column is null?"

I hadn't thought about it. I checked the data. Twelve percent of the rows had null values. My migration would have silently dropped them. That one question saved us a rollback and probably an incident.

## It's not about the code

The biggest misconception about pair programming is that it's about producing code faster. It's not. It's about producing *better decisions* faster. The code is just the artifact.

When I pair, the most valuable moments aren't when someone catches a typo. They're when someone asks "why are we doing it this way?" and the answer reveals an assumption I hadn't examined. Or when I'm about to reach for a complex abstraction and my pair says "couldn't we just use a simple object here?" and they're right.

## How I pair now

I don't pair all day. That's exhausting and unnecessary. Instead, I pair strategically:

**At the start of a feature** — when the architecture decisions are being made. This is where pairing has the highest leverage, because early decisions compound. Getting the data model right on day one saves a refactor on day fifteen.

**When I'm stuck** — not for the answer, but for the conversation. Explaining my problem to another person almost always clarifies my thinking. Sometimes I solve it mid-sentence, before they even respond. There's a reason people put rubber ducks on their desks.

**During reviews of critical paths** — authentication, payment processing, data deletion. For code where a mistake has real consequences, having two sets of eyes during *writing* is more effective than a code review after the fact.

## The social contract

Good pairing requires trust. You have to be comfortable saying "I don't understand this" and "I think that's wrong" and "Can we try my idea even though I'm not sure it'll work?" If either person is performing — trying to look smart instead of trying to solve the problem — the session won't work.

The best pairing sessions feel like a conversation, not a performance review. You're thinking out loud together. Sometimes that means sitting in silence for a minute while you both stare at the same function. That's fine. The silence is productive.

## Remote pairing works

I was skeptical about this, but remote pairing with screen sharing works surprisingly well. In some ways it's better — you each have your own screen, you can quickly look something up without taking over the shared session, and there's a natural structure to taking turns.

The key is to keep the session short. Ninety minutes is my maximum. After that, the focus degrades and you're better off working solo for a while.

## What pairing taught me

The biggest thing pair programming changed wasn't my code — it was my thinking. After a few months of regular pairing, I started hearing my pair's questions in my head even when I was coding alone. "What if this is null?" "Do we need this abstraction?" "What's the simplest version of this?"

I became a better solo programmer by learning how to think with another person. That's the real return on the investment.
