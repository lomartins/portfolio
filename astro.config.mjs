// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://luisamartins.dev/',
  image: {
    domains: ['raw.githubusercontent.com', 'user-images.githubusercontent.com'],
  },
});
