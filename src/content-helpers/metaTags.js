export const generalMetaTags = (generator) => [
  {
    charset: 'UTF-8',
  },
  {
    content: 'width=device-width, initial-scale=1',
    name: 'viewport',
  },
  {
    content: '#D6E3FA',
    media: '(prefers-color-scheme: light)',
    name: 'theme-color',
  },
  {
    content: '#153376',
    media: '(prefers-color-scheme: dark)',
    name: 'theme-color',
  },
  {
    content: generator,
    name: 'generator',
  },
];
