import { defineConfig } from 'astro/config';
import {
  filterSitemapByDefaultLocale,
  i18n,
} from 'astro-i18n-aut/integration';
import sitemap from '@astrojs/sitemap';
import {
  defaultLocale,
  locales,
} from './src/i18n/utils';

export default defineConfig({
  build: {
    format: 'directory',
  },
  integrations: [
    i18n({
      defaultLocale,
      locales,
    }),
    sitemap({
      filter: filterSitemapByDefaultLocale({
        defaultLocale,
      }),
      i18n: {
        defaultLocale,
        locales,
      },
    }),
  ],
  scopedStyleStrategy: 'class',
  site: 'https://vorhall.com/',
  trailingSlash: 'always',
});
