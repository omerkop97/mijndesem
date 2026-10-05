// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // TODO: definitief domein invullen zodra het geregistreerd is (fase 0.2)
  site: 'https://mijndesem.nl',
  integrations: [
    sitemap({
      filter: (page) =>
        !['/stijlgids', '/bestellen/bedankt', '/contact/verzonden'].some((p) => page.includes(p)),
    }),
  ],
  // CSS (±17 kB) direct in de HTML: scheelt een render-blocking request op mobiel
  build: { inlineStylesheets: 'always' },
  vite: {
    plugins: [tailwindcss()],
  },
});
