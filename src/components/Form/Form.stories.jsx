import Comp from './Form.jsx';

export default {
  component: Comp,
};

const defaultArgs = {
  classes: '',
};

export const Form = {
  args: defaultArgs,
  render: (args) => <Comp {...args}>
    <p>some form content</p>
  </Comp>,
};
