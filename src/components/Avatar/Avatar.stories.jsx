import Comp from './Avatar.jsx';

export default {
  component: Comp,
};

const defaultArgs = {
  alt: 'avatar alt text',
  classes: '',
  height: '100',
  src: '/images/yves.jpg',
  srcSetAvif: {
    large: '/images/yves-600x600.avif 600w',
    small: '/images/yves-300x300.avif 300w',
  },
  srcSetWebP: {
    large: '/images/yves-600x600.webp 600w',
    small: '/images/yves-300x300.webp 300w',
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
    src: '/images/marius.jpg',
    srcSetAvif: {
      large: '/images/marius-600x600.avif 600w',
      small: '/images/marius-300x300.avif 300w',
    },
    srcSetWebP: {
      large: '/images/marius-600x600.webp 600w',
      small: '/images/marius-300x300.webp 300w',
    },
  },
};
