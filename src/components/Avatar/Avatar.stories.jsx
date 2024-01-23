import Comp from './Avatar.jsx';

export default {
  component: Comp,
};

const defaultArgs = {
  alt: 'avatar alt text',
  classes: '',
  height: '100',
  image: '../../src/images/yves.jpg',
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
    image: '../../src/images/mariusz.jpg',
  },
};
