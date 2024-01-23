import Comp from './Link.jsx';

export default {
  component: Comp,
};

const defaultArgs = {
  classes: '',
  href: '#',
};

export const Link = {
  args: defaultArgs,
  render: (args) => <Comp {...args}>
    some children content
  </Comp>,
};
