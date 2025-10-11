import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://qweasd1.github.io',
  // base: '/helen-han',
  integrations: [mdx(), sitemap(), tailwind()]
});