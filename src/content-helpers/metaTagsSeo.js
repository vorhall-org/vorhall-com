export const seoMetaTags = (translatedData, url, index) => (
  {
    tags: [
      {
        content: index,
        name: 'robots',
      },
      {
        content: translatedData('description')
          .trim(),
        name: 'description',
      },
      {
        content: '#F9FAFB',
        media: '(prefers-color-scheme: light)',
        name: 'theme-color',
      },
      {
        content: '#111827',
        media: '(prefers-color-scheme: dark)',
        name: 'theme-color',
      },
      {
        content: 'article',
        property: 'og:type',
      },
      {
        content: translatedData('title'),
        property: 'og:title',
      },
      {
        content: translatedData('description')
          .trim(),
        property: 'og:description',
      },
      {
        content: url,
        property: 'og:url',
      },
      {
        content: 'summary',
        property: 'twitter:card',
      },
      {
        content: translatedData('title'),
        property: 'twitter:title',
      },
      {
        content: translatedData('description')
          .trim(),
        property: 'twitter:description',
      },
      {
        content: url,
        property: 'og:url',
      },
    ],
    title: translatedData('docTitle'),
  }
);
