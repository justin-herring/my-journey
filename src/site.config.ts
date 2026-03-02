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
    /** Label for the about link in the header and footer */
    aboutLabel: 'About',
  },

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
