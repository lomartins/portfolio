// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://luisamartins.dev/',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'pt-br'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  image: {
    domains: ['raw.githubusercontent.com', 'user-images.githubusercontent.com'],
  },
});
