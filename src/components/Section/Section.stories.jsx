import Comp from './Section.jsx';

export default {
  component: Comp,
};

const defaultArgs = {
  classes: '',
  fullWidth: false,
  highlight: false,
  noVerticalSpacingBottom: false,
  noVerticalSpacingTop: false,
};

export const Section = {
  args: defaultArgs,
  render: (args) => <Comp {...args}>
    <p>some section content</p>
  </Comp>,
};
