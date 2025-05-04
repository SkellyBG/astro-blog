// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://skellybg.github.io',
  base: 'astro-blog',

  vite: {
    plugins: [tailwindcss()],
  },
});