import Comp from './Link.jsx';

export default {
  component: Comp,
};

const defaultArgs = {
  classes: '',
  href: '#',
  secondary: false,
};

export const Link = {
  args: defaultArgs,
  render: (args) => <Comp {...args}>
    some children content
  </Comp>,
};

export const Secondary = {
  args: {
    ...defaultArgs,
    secondary: true,
  },
  render: (args) => <Comp {...args}>
    some children content
  </Comp>,
};
