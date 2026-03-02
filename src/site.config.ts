/**
 * Site Configuration
 *
 * Edit this file to personalize your blog.
 * Every text value displayed on the site comes from here
 * (except blog post content, which lives in src/pages/posts/).
 */

export const siteConfig = {
  /** Displayed in the header */
  name: 'Markdown Blog',

  /** Browser tab title on the homepage */
  title: 'My Markdown Blog',

  /** Personal intro shown as the hero heading on the homepage */
  heroTitle: "I'm Lenora — a software engineer and writer.",

  /** Short bio shown below the hero title. A link to the about page is added automatically. */
  tagline:
    'I build things for the web and write about code, design, and creative tools. I also love exploring new frameworks and sharing what I learn. Continue learning more  ',

  /**
   * Hero image shown at the top of the homepage.
   * Option 1: Place your image in the public/ folder and set the path here.
   *           Examples: "/avatar.jpg", "/logo.png"
   * Option 2: Set to "" to use an auto-generated avatar from your initials.
   * Option 3: Set heroImage to "" and heroImageLetter to "" to hide the image entirely.
   */
  heroImage: '/jessica-felicio-QS9ZX5UnS14-unsplash.jpg',

  /**
   * Fallback letter/initials for the auto-generated avatar.
   * Only used when heroImage is "". Defaults to author initials if left empty.
   * Examples: "LP", "J", "✦"
   */
  heroImageLetter: '',

  /**
   * Favicon letter or character shown in the browser tab.
   * Change this to any single letter, emoji, or short string.
   * Examples: "L", "✦", "🚀"
   */
  faviconLetter: 'M',

  author: {
    /** Full name — used as the default post author, in meta chips, and the footer */
    name: 'Lenora Porter',
  },

  nav: {
    /** Label for the blog link in the header and footer */
    blogLabel: 'Blog',
    /** Label for the videos link in the header and footer. Set to "" to hide. */
    videosLabel: 'Videos',
    /** Label for the about link in the header and footer */
    aboutLabel: 'About',
  },

  /**
   * Section headings on the homepage.
   * Change these to match your content (e.g. "Articles", "Talks", "Episodes").
   */
  sections: {
    writings: 'Latest Writings',
    videos: 'Latest Videos',
  },

  /**
   * External links shown in the "Latest Videos" section on the homepage.
   * Each entry opens in a new tab. Set to an empty array [] to hide the section.
   * Works for YouTube, podcast episodes, conference talks — any external URL.
   */
  videos: [
    { title: 'Building a markdown blog with Astro', url: 'https://www.youtube.com/watch?v=Oi9z5gfIHJs' },
    { title: 'My VS Code setup tour — 2026 edition', url: 'https://www.youtube.com/watch?v=ifTF3ags0XI' },
    { title: 'CSS custom properties changed everything', url: 'https://www.youtube.com/watch?v=GNrdg3PzpJQ' },
    { title: 'Pair programming: how to do it well', url: 'https://www.youtube.com/watch?v=vgkahOzFH2Q' },
  ],

  /**
   * Social links shown in the footer.
   * Set any to "" to hide it. Add or remove entries as needed.
   */
  social: {
    github: 'https://github.com/lenoraporter',
    linkedin: 'https://linkedin.com/in/lenoraporter',
    twitter: '',
  },

  footer: {
    /** Name shown in the copyright line (© {year} {copyright}) */
    copyright: 'Lenora Porter',
  },
};
