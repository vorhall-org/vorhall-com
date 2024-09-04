import Comp from './Avatar.jsx';

export default {
  component: Comp,
};

const defaultArgs = {
  alt: 'avatar alt text',
  classes: '',
  height: '100',
  src: '/images/vorhall-yves-tscherry.jpg',
  srcSetAvif: {
    large: '/images/vorhall-yves-tscherry-600x600.avif 600w',
    small: '/images/vorhall-yves-tscherry-300x300.avif 300w',
  },
  srcSetWebP: {
    large: '/images/vorhall-yves-tscherry-600x600.webp 600w',
    small: '/images/vorhall-yves-tscherry-300x300.webp 300w',
  },
  width: '100',
};

export const Avatar = {
  args: defaultArgs,
};

export const Yves = {
  args: {
    ...defaultArgs,
    alt: 'Portrait Yves Tschery',
  },
};

export const Marius = {
  args: {
    ...defaultArgs,
    alt: 'Portrait Marius Bleuer',
    src: '/images/vorhall-marius-bleuer.jpg',
    srcSetAvif: {
      large: '/images/vorhall-marius-bleuer-600x600.avif 600w',
      small: '/images/vorhall-marius-bleuer-300x300.avif 300w',
    },
    srcSetWebP: {
      large: '/images/vorhall-marius-bleuer-600x600.webp 600w',
      small: '/images/vorhall-marius-bleuer-300x300.webp 300w',
    },
  },
};
