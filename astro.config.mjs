import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://ferencgal.com',
  trailingSlash: 'never',
  integrations: [mdx(), sitemap()],
  build: {
    assets: '_assets'
  }
});
