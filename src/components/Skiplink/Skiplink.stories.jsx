import Comp from './Skiplink.jsx';

export default {
  component: Comp,
};

const defaultArgs = {
  classes: '',
  href: '#content-area',
};

export const Skiplink = {
  args: defaultArgs,
  render: (args) => <Comp {...args}>
    Skip to main content
  </Comp>,
};
