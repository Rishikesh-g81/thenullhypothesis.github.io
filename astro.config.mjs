import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://rishikesh-g81.github.io',
  base: '/thenullhypothesis.github.io',
  integrations: [mdx()],
});
