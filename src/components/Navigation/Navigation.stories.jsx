import Comp from '@/components/Navigation/Navigation.jsx';

export default {
  component: Comp,
};

const defaultArgs = {
  classes: '',
};

export const Navigation = {
  args: defaultArgs,
  render: (args) => <Comp {...args}>
    some nav children content
  </Comp>,
};
