---
title: 'VitePress debug: "frontmatter.title" is appearing in search results'
description: 'How to fix the issue of "frontmatter.title" appearing in VitePress search results instead of the actual content.'
---

# VitePress debug: "frontmatter.title" is appearing in search results

How to fix the issue of "frontmatter.title" appearing in VitePress search results instead of the actual content.


## Problem

When you first set up VitePress and use frontmatter to define titles and other metadata for your pages, you might notice that the built-in local search sometimes shows the literal expression used in your Markdown instead of the resolved title.

For example, if your page heading is like the following example, the local search index may treat it as plain text, and your search results can show something like `frontmatter.title` or `{{ $frontmatter.title }}` instead of the actual page title.

Example Markdown file (`docs/markdown-examples.md`):

```md
---
title: My Awesome Page
description: This is an awesome page about VitePress.
---

# {{ $frontmatter.title }}

{{ $frontmatter.description }}
```

For instance, when I searched for an article on my VitePress site, the search result showed:

* ![Screenshot showing a VitePress search result with frontmatter.title appearing](fix-search-frontmatter-problem.png)


## Solution

If you are using VitePress local search and see `frontmatter.title` (or a similar expression) in your search results, you need to customize the local search renderer so that frontmatter-based headings are resolved to plain text before the content is indexed.

VitePress exposes a [`search.options._render` hook](https://vitepress.dev/reference/default-theme-search#local-search) for the built-in local search provider. You can use this hook to:

1. Let VitePress render the Markdown once to populate `env.frontmatter`.
2. Rewrite the source Markdown to replace `{{ $frontmatter.title }}` in headings with the actual frontmatter title.
3. Render the rewritten Markdown again, and return that HTML for indexing.


### Edit `docs/.vitepress/config.mts`

In your VitePress configuration file (`docs/.vitepress/config.mts`), make sure you are using the local search provider and then add a custom `_render` implementation.

Here is a typical base configuration:

```typescript [docs/.vitepress/config.mts]
import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'My Awesome Project',
  description: 'A VitePress Site',
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

Update the `themeConfig` object to include the local search configuration with a custom `_render` function:

```typescript [docs/.vitepress/config.mts]
import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'My Awesome Project',
  description: 'A VitePress Site',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

  ... // other themeConfig options ...

    search: {
      provider: 'local',
      options: {
        async _render(src, env, md) {
          // First pass: render to populate env.frontmatter and other metadata
          await md.renderAsync(src, env)

          const fm = env.frontmatter ?? {}

          // Honor per-page opt out: `search: false` in frontmatter
          if (fm.search === false) {
            return ''
          }

          let rewritten = src

          // Replace headings like "# {{ $frontmatter.title }}" with a concrete title
          if (typeof fm.title === 'string' && fm.title.trim().length > 0) {
            // Replace H1 that is exactly an interpolation of frontmatter.title
            rewritten = rewritten.replace(
              /^#\s*\{\{\s*\$frontmatter\.title\s*\}\}\s*$/m,
              `# ${fm.title}`
            )

            // Drop any other heading levels that interpolate frontmatter.title
            rewritten = rewritten.replace(
              /^#{2,6}\s*\{\{\s*\$frontmatter\.title\s*\}\}\s*$/gm
              ''
            )
          }

          // Strip any remaining $frontmatter interpolations from the indexable text
          rewritten = rewritten.replace(/\{\{\s*\$frontmatter\.[^}]+\}\}/g, '')

          // Final render used for indexing
          return await md.renderAsync(rewritten, env)
        }
      }
    }
    // end of themeConfig
  }
})
```

After making this change, save the file and restart your VitePress development server. When you use the local search now, the index will contain the resolved titles instead of the raw `{{ $frontmatter.title }}` expression, and your search UI will show the correct text.


### Result

After implementing the above changes, your search results should display the correct titles and content. For example:

* ![Screenshot showing a VitePress search result with the correct title rendered](fix-search-frontmatter-fix.png)


## Conclusion

By customizing the local search renderer in your VitePress configuration file, you can ensure that frontmatter-based headings are resolved before indexing. This makes your search results more accurate, improves readability, and helps visitors find the content they are looking for more easily.

If you prefer not to index a page at all, you can also add `search: false` to that page's frontmatter, and handle it in the `_render` hook as shown above.
