---
layout: ../../layouts/PostLayout.astro
title: "The Git workflow I wish I learned earlier"
description: "Small commits, clear messages, and the rebase trick that saved me hours."
pubDate: "2026-02-22"
author: "Lenora Porter"
readingTime: 5
---

![Terminal showing git commands](/markdown-blog/images/terminal.svg)

For the first two years of my career, my Git history looked like this:

```
fix stuff
update
wip
final version
final version 2
ok actually final
```

I'm not proud of it. But I also didn't know better — nobody taught me that commit history is a communication tool, not a save button.

Here's what I do now.

## Small, atomic commits

Each commit should do one thing. Not "update homepage and fix auth bug and add new dependency." One thing.

Good commits read like a changelog:

```
Add reading time to post metadata
Fix dark mode flash on initial load
Remove unused avatar placeholder
```

The test is simple: could you revert this commit without breaking something unrelated? If not, it's doing too much.

## Commit message format

I keep it simple. Present tense, imperative mood, under 72 characters:

```
Add pagination to blog homepage
Fix favicon not showing in Safari
Update footer social links from config
```

No need for conventional commits or scope prefixes on a personal project. Just be clear about *what* changed and *why* — the diff already shows *how*.

## The stash trick

I used to lose work constantly when switching branches. Now I use `git stash` like a clipboard:

```bash
# Save current work
git stash

# Switch branches, do something else
git checkout main

# Come back and restore
git checkout feature-branch
git stash pop
```

You can even name your stashes:

```bash
git stash push -m "halfway through pagination"
```

This alone saved me from creating dozens of "wip" commits.

## Interactive rebase (carefully)

Before opening a PR, I clean up my history with interactive rebase:

```bash
git rebase -i HEAD~5
```

This lets you squash those three "fix typo" commits into the meaningful commit they belong to. Your reviewer sees a clean story instead of your messy process.

**Warning:** Never rebase commits that have been pushed and shared with others. Rebase is for cleaning up your *local* history before sharing.

## The workflow

Here's my daily rhythm:

1. Pull latest `main`
2. Create a feature branch
3. Make small commits as I work
4. Clean up with interactive rebase if needed
5. Push and open a PR
6. Squash merge into `main`

It's not fancy, but it keeps the history clean and makes code review easier. And when something breaks in production, `git bisect` can actually find the problem because each commit is small and focused.

## Start simple

If you're still writing "fix stuff" commits, just start with one change: write commit messages that describe *what* you did, not *that* you did something. That single habit will improve everything downstream.
