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
        content: 'article',
        property: 'og:type',
      },
      {
        content: translatedData('docTitle'),
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
        content: translatedData('docTitle'),
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
