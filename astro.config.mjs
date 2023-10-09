import { defineConfig } from 'astro/config';
import { i18n, filterSitemapByDefaultLocale } from 'astro-i18n-aut/integration';
import sitemap from '@astrojs/sitemap';
import { defaultLocale, locales, } from './src/i18n/utils';

export default defineConfig({
  site: "https://vorhall.com/",
  trailingSlash: "always",
  build: {
    format: "directory",
  },
  integrations: [
    i18n({
      locales,
      defaultLocale,
    }),
    sitemap({
      i18n: {
        locales,
        defaultLocale,
      },
      filter: filterSitemapByDefaultLocale({ defaultLocale }),
    }),
  ],
});
