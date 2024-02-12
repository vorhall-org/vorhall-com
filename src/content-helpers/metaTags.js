export const generalMetaTags = (generator) => [
  {
    charset: 'UTF-8',
  },
  {
    content: 'width=device-width, initial-scale=1, viewport-fit=cover',
    name: 'viewport',
  },
  {
    content: generator,
    name: 'generator',
  },
];
