## Markdown Blog

Simple markdown-powered blog built with [Astro](https://astro.build).  
Every `.md` file in `src/pages/posts/` becomes a blog post and is automatically
listed on the homepage.

### 1. Local setup

1. Install dependencies:

   ```bash
   npm install
   ```

2. Run the dev server:

   ```bash
   npm run dev
   ```

3. Open the printed URL in your browser to view the blog locally.

### 2. Adding a new post

1. In this project, go to `src/pages/posts/`.
2. Duplicate `hello-world.md` or create a new file like `my-new-post.md`.
3. At the top of the file, include frontmatter like:

   ```md
   ---
   title: "My new post"
   description: "Short summary that appears on the homepage."
   pubDate: "2026-03-02"
   ---
   ```

4. Under the frontmatter, write your content in regular Markdown.
5. Commit and push to GitHub — the new post will:
   - Get its own page at `/posts/<filename>/`
   - Appear on the homepage list automatically

### 3. GitHub & GitHub Pages

1. Create a new **public GitHub repo**.
2. Initialize git in this folder and push:

   ```bash
   git init
   git add .
   git commit -m "Initial markdown blog"
   git branch -M main
   git remote add origin git@github.com:<your-username>/<your-repo>.git
   git push -u origin main
   ```

3. In your repo on GitHub:
   - Go to **Settings → Pages**
   - Set **Source** to **GitHub Actions**

4. On every push to `main`, the workflow in `.github/workflows/deploy.yml` will:
   - Install dependencies
   - Build the Astro site
   - Deploy the static output in `dist/` to GitHub Pages

After the first successful run, your site will be live at:

- `https://<your-username>.github.io/` (for a `username.github.io` repo), or
- `https://<your-username>.github.io/<your-repo>/` (for a normal repo)

You can set that URL later in `astro.config.mjs` as the `site` value for best
SEO and correct absolute URLs.

