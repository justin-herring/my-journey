# Markdown Blog

A clean, minimal blog template built with [Astro](https://astro.build). Every post is just a Markdown file — no CMS, no database. Fork it, customize it, and deploy to GitHub Pages in minutes.

## Make it yours

After forking, you only need to touch **3 files** to make the blog completely your own.

### 1. `src/site.config.ts` — Your identity

This is the single source of truth for all site text. Open it and update:

| Field | What it controls | Example |
|---|---|---|
| `name` | Header site name | `"Jane's Blog"` |
| `title` | Browser tab title | `"Jane Doe — Blog"` |
| `heroTitle` | Homepage intro heading | `"I'm Jane — a designer and maker."` |
| `tagline` | Homepage bio paragraph | `"I design interfaces and write about..."` |
| `heroImage` | Photo above the title (see below) | `"/avatar.jpg"` or `""` |
| `heroImageLetter` | Fallback initials when no image | `"JD"`, `"✦"`, or `""` |
| `faviconLetter` | Browser tab icon character | `"J"`, `"🚀"`, `"✦"` |
| `author.name` | Post bylines and footer | `"Jane Doe"` |
| `social.github` | Footer link (set `""` to hide) | `"https://github.com/janedoe"` |
| `social.linkedin` | Footer link (set `""` to hide) | `"https://linkedin.com/in/janedoe"` |
| `social.twitter` | Footer link (set `""` to hide) | `"https://twitter.com/janedoe"` |
| `footer.copyright` | Copyright name | `"Jane Doe"` |

**Hero image options:**

- **Your photo:** Drop an image in `public/` and set `heroImage: "/your-photo.jpg"`
- **Auto-generated initials:** Set `heroImage: ""` — it will auto-generate from your author name (e.g. "Jane Doe" becomes "JD")
- **Custom character:** Set `heroImage: ""` and `heroImageLetter: "✦"` for any letter or emoji
- **No image:** Set both `heroImage: ""` and `heroImageLetter: ""` to hide it entirely

### 2. `src/pages/about.md` — Your about page

Edit the frontmatter and body content:

```md
---
layout: ../layouts/AboutLayout.astro
title: "About Jane Doe"
greeting: "Hi, I'm Jane."
lede: "A short intro sentence about you and your blog."
---

Write your about page content here in Markdown.
```

### 3. `astro.config.mjs` — Your deploy URL

Update the `site` and `base` to match your GitHub repo:

```js
export default defineConfig({
  site: 'https://<your-username>.github.io/<your-repo>',
  base: '/<your-repo>',
});
```

If you're using a `username.github.io` repo, set `base: '/'` instead.

### 4. Delete the example posts

Remove or replace the files in `src/pages/posts/` with your own Markdown posts.

---

## Local setup

```bash
npm install
npm run dev
```

Open the printed URL in your browser.

## Adding a new post

Create a new `.md` file in `src/pages/posts/`:

```md
---
title: "My new post"
description: "Short summary for the homepage."
pubDate: "2025-01-15"
---

Write your content here in Markdown.
```

The post will automatically get its own page at `/posts/<filename>/` and appear on the homepage. Posts are sorted by date, newest first. Pagination kicks in after 10 posts.

## Deploy to GitHub Pages

1. Push your repo to GitHub
2. Go to **Settings > Pages** and set **Source** to **GitHub Actions**
3. On every push to `main`, the workflow in `.github/workflows/deploy.yml` will build and deploy

Your site will be live at `https://<your-username>.github.io/<your-repo>/`.

## Features

- Dark / light mode with system preference detection
- Configurable favicon generated from a single character
- Auto-generated avatar fallback from author initials
- Pagination (10 posts per page)
- Reading progress bar on posts
- Social links in the footer
- View Transitions for smooth navigation
- Fully static — no JavaScript frameworks, no build dependencies beyond Astro
- Mobile responsive

## Project structure

```
src/
  site.config.ts        ← All configurable text lives here
  layouts/
    Layout.astro        ← Global shell (header, footer, theme toggle)
    PostLayout.astro    ← Blog post template
    AboutLayout.astro   ← About page template
  pages/
    [...page].astro     ← Homepage with pagination
    about.md            ← About page (edit this)
    posts/              ← Drop .md files here to create posts
public/                 ← Static assets (images, fonts)
```
