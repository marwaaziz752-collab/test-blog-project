// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import { unified } from '@astrojs/markdown-remark';
import { remarkFallbackAlt } from './src/plugins/remark-fallback-alt.mjs';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  image: {
    remotePatterns: [{ protocol: 'https' }]
  },
  markdown: {
    processor: unified({
      remarkPlugins: [remarkFallbackAlt]
    })
  }
});
