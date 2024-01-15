import Comp from './Section.jsx';

export default {
  component: Comp,
};

export const Section = {
  args: {},
  render: (args) => <Comp {...args}>
    <p>some section content</p>
  </Comp>,
};
