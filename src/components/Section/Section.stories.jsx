import Comp from './Section.jsx';

export default {
  component: Comp,
};

const defaultArgs = {
  classes: '',
};

export const Section = {
  args: defaultArgs,
  render: (args) => <Comp {...args}>
    <p>some section content</p>
  </Comp>,
};
