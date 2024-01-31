import Comp from './Navigation.jsx';

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
