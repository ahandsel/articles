# Image viewer on VitePress

Quick guide on how to add an image viewer with zoom and captions to your [VitePress][] site.

> [!TIP]
> Initialize Vitepress with `Default Theme + Customization` option to create the `.vitepress/theme/index.ts` file.


## Quick start

Here is the simplest way to add image viewer to your VitePress site.

Known issue with this method: hero images and feature's images on the homepage will trigger the image viewer but not display correctly.


### Install vitepress-image-viewer package

Install [DavidingPlus/vitepress-image-viewer][] package in your VitePress project:

    ```bash
    pnpm install -d davidingplus/vitepress-image-viewer
    ```


### Configure VitePress theme

Default index.ts file created by VitePress looks like this:

```typescript  [docs/.vitepress/theme/index.ts]
// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style.css'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app, router, siteData }) {
    // ...
  }
} satisfies Theme
```

Modify it to look like this:

```typescript  [docs/.vitepress/theme/index.ts]
// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style.css'

import ImageViewerP from '@davidingplus/vitepress-image-viewer' //[!code ++]
import '@davidingplus/vitepress-image-viewer/style.css' //[!code ++]

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app, router, siteData }) {

    ImageViewerP(app) //[!code ++]

}
} satisfies Theme
```


### Example configuration in a markdown file

```markdown  [docs/markdown-examples.md]
# Markdown Extension Examples

This page demonstrates some of the built-in markdown extensions provided by VitePress.

## Image example

Images with captions and zoom feature enabled:
* ![Vibrant magenta roses in garden](/ahandsel-5831.png)
  * Display an image with caption
* ![VitePress Logo](/vitepress-logo.svg)
  * Known issue: SVG images do not display correctly in image viewer

Images with captions and zoom feature disabled:
* ![VitePress Logo](/vitepress-logo.svg){.no-viewer}
* ![Photo of trailing green stems with teardrop-shaped leaves](ahandsel-5846.png){.no-viewer}

By appending `{.no-viewer}` to the image markdown, a `no-viewer` class is added to the image element, disabling the image viewer for that specific image.
```


## Advanced configuration

In order to fix the issue with hero images and feature's images on the homepage, you can use an activator component to specify where to enable the image viewer and where to disable it.


### Create ImageViewerActivator component

Create a new file at `.vitepress/theme/components/ImageViewerActivator.vue` with the following content:

```vue  [docs/.vitepress/theme/components/ImageViewerActivator.vue]
<!-- Boots the global image viewer plugin without rendering any UI -->
<script setup lang="ts">
import { onMounted, onUnmounted, getCurrentInstance } from 'vue';
import ImageViewer from '@davidingplus/vitepress-image-viewer';
import '@davidingplus/vitepress-image-viewer/style.css'; // ImageViewer related

const INSTALLATION_FLAG = '__imageViewerInstalled__';
let svgObserver: MutationObserver | null = null;
let markFrame: number | null = null;
let markPending = false;

const markSvgImages = () => {
  document
    .querySelectorAll<HTMLImageElement>('img[src$=".svg"]')
    .forEach((img) => img.classList.add('no-viewer'));
};

const scheduleSvgMark = () => {
  if (markPending) return;
  markPending = true;
  markFrame = requestAnimationFrame(() => {
    markPending = false;
    markSvgImages();
  });
};

// VitePress executes theme components during SSR, so we wait for onMounted
// to ensure the plugin only runs on the client (same timing as enhanceApp).
onMounted(() => {
  if (import.meta.env.SSR) return;

  const instance = getCurrentInstance();
  if (!instance) return;

  // This is the same app instance you would receive in enhanceApp(ctx)
  const app = instance.appContext.app;
  const globals = app.config.globalProperties as Record<string, unknown>;
  if (globals[INSTALLATION_FLAG]) return;

  ImageViewer(app);
  globals[INSTALLATION_FLAG] = true;

  markSvgImages();
  svgObserver = new MutationObserver(scheduleSvgMark);
  svgObserver.observe(document.body, { childList: true, subtree: true });
});

onUnmounted(() => {
  if (markFrame !== null) {
    cancelAnimationFrame(markFrame);
    markFrame = null;
    markPending = false;
  }
  svgObserver?.disconnect();
  svgObserver = null;
});
</script>

<!-- Adding empty template to satisfy Vue SFC structure -->
<template>
  <!-- No UI needed; this component only runs the plugin on mount -->
  <div style="display: none"></div>
</template>
```


### Edit theme index.ts to register the activator component

Using the ImageViewerActivator component created above, you can now edit the theme's index.ts file to register it.

Edit [.vitepress/theme/index.ts][] to look like this:

```typescript  [docs/.vitepress/theme/index.ts]
// Custom VitePress theme entry that augments DefaultTheme
// Enables ImageViewer and Mermaid diagram rendering site-wide
// Related docs:
// https://vitepress.dev/guide/custom-theme
// https://vitepress.dev/guide/extending-default-theme#layout-slots

import { defineComponent, h, nextTick, onMounted, ref } from 'vue';
import { useData } from 'vitepress';
import type { DefaultTheme as DefaultThemeConfig, Theme } from 'vitepress';
import DefaultTheme, { VPImage } from 'vitepress/theme';
import './style.css';

// ImageViewer activator component
import ImageViewerActivator from './components/ImageViewerActivator.vue';

// Render the ImageViewer activator only after hydration to avoid SSR mismatch.
const DeferredImageViewerActivator = defineComponent({
  name: 'DeferredImageViewerActivator',
  setup() {
    const shouldRender = ref(false);
    onMounted(() => {
      shouldRender.value = true;
    });
    return () => (shouldRender.value ? h(ImageViewerActivator) : null);
  },
});

// Set no-viewer class to disable the ImageViewer for the hero image
const HomeHeroImage = defineComponent({
  name: 'HomeHeroImage',
  setup() {
    const { frontmatter } = useData();
    return () => {
      const heroImage = frontmatter.value?.hero?.image as
        | DefaultThemeConfig.ThemeableImage
        | undefined;
      if (!heroImage) return null;
      return h(VPImage, {
        class: 'image-src no-viewer',
        image: heroImage,
      });
    };
  },
});

const HomeFeaturesNoViewer = defineComponent({
  name: 'HomeFeaturesNoViewer',
  setup() {
    // The feature grid renders on the client, so flag its images after mount.
    const disableFeatureViewer = () => {
      document
        .querySelectorAll<HTMLImageElement>('.VPFeature img')
        .forEach((img) => img.classList.add('no-viewer'));
    };

    onMounted(() => {
      if (import.meta.env.SSR) return;
      nextTick(disableFeatureViewer);
    });

    return () => null;
  },
});

export default {
  extends: DefaultTheme,
  Layout: () => {
    const activateImageViewer = () => h(DeferredImageViewerActivator);
    const renderHomeHeroImage = () => h(HomeHeroImage);
    const renderHomeFeatures = () => h(HomeFeaturesNoViewer);

    return h(DefaultTheme.Layout, null, {
      'doc-top': activateImageViewer, // Activate ImageViewer on all doc pages.
      'home-hero-image': renderHomeHeroImage, // Disable ImageViewer on hero image.
      'home-features-before': renderHomeFeatures, // Disable ImageViewer on feature images.
    });
  },
  enhanceApp({ app, router, siteData }) {
    // ...
  }
} satisfies Theme
```


## References

- [VitePress Documentation][VitePress]
- [vitepress-image-viewer GitHub Repository][DavidingPlus/vitepress-image-viewer]

[DavidingPlus/vitepress-image-viewer]: https://github.com/davidingplus/vitepress-image-viewer
[VitePress]: https://vitepress.dev/guide/what-is-vitepress
