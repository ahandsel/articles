---
title: 'VitePress debug: "frontmatter.title" is appearing in search results'
description: 'How to fix the issue of "frontmatter" appearing in VitePress search results instead of the actual content.'
---

# VitePress debug: "frontmatter.title" is appearing in search results

How to fix the issue of "frontmatter" appearing in VitePress search results instead of the actual content.

## Problem

When first setting up VitePress and using frontmatter to define titles and other metadata for your pages, you might notice that when you use the built-in search functionality, the search results display "frontmatter.title" instead of the actual title or content you expect.

For example, when I searched for an article on my VitePress site, the search result showed:
* ![Screenshot showing a vitepress search result with frontmatter.title appearing](2025-11-20-at-115611-screenshot.png)

## Solution

If you are using VitePress and notice that the term "Frontmatter" is appearing in your search results, you need to configure the search options to first render the frontmatter before indexing the content for search.

### Edit `docs/.vitepress/config.mts`

In your VitePress configuration file (`docs/.vitepress/config.mts`), you need to modify the `search` options to include `renderFrontmatter: true`. This tells VitePress to process the frontmatter and use the actual titles and content for search indexing.

Here is the default configuration you might have:
```typescript [docs/.vitepress/config.mts]
import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "My Awesome Project",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
```

Inside the `themeConfig` object, you need to add `search` configuration like this:
```typescript [docs/.vitepress/config.mts]
...
  themeConfig: {
    ...
    search: {
      provider: 'local',
      options: {
        async _render(src, env, md) {
          // First pass populates env.frontmatter
          await md.renderAsync(src, env);

          const fm = env.frontmatter ?? {};

          // Honor per-page opt out
          if (fm.search === false) return '';

          let rewritten = src;

          // Replace headings like "# {{ $frontmatter.title }}" with a concrete title
          if (typeof fm.title === 'string' && fm.title.trim().length > 0) {
            // Replace H1 that is exactly an interpolation of frontmatter.title
            rewritten = rewritten.replace(
              /^#\s*\{\{\s*\$frontmatter\.title\s*\}\}\s*$/m,
              `# ${fm.title}`,
            );
            // Drop any other heading levels that interpolate frontmatter.title
            rewritten = rewritten.replace(
              /^#{2,6}\s*\{\{\s*\$frontmatter\.title\s*\}\}\s*$/gm,
              '',
            );
          }

          // Strip any remaining $frontmatter interpolations from the indexable text
          rewritten = rewritten.replace(/\{\{\s*\$frontmatter\.[^}]+\}\}/g, '');

          // Final render used for indexing
          return await md.renderAsync(rewritten, env);
        },
      },
    },
    ...
  }
...
```

After making this change, save the file and restart your VitePress development server. Now, when you use the search functionality, it should correctly display the titles and content instead of "frontmatter.title".

### Result

After implementing the above changes, your search results should now display the correct titles and content. For example:
![alt text](2025-11-20-at-120532-screenshot.png)

## Conclusion
By configuring the search options in your VitePress configuration file to render frontmatter, you can ensure that your search results accurately reflect the content of your pages. This improves the user experience and makes it easier for visitors to find the information they are looking for on your site.
