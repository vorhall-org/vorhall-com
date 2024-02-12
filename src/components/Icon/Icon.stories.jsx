import Comp from './Icon.jsx';

export default {
  component: Comp,
};

const defaultArgs = {
  classes: '',
  colorFixed: false,
  name: 'arrowDown',
};

export const IconColorizable = {
  args: defaultArgs,
};

export const IconFixedColor = {
  args: {
    ...defaultArgs,
    colorFixed: true,
    name: 'en',
  },
};
