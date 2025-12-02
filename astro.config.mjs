
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://Sathursan-S.github.io',
  base: '/Browser.AI',
  integrations: [react(), tailwind()],
});
