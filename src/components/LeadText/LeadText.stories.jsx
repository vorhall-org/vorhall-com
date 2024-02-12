import Comp from './LeadText.jsx';

export default {
  component: Comp,
};

const defaultArgs = {
  classes: '',
};

export const LeadText = {
  args: defaultArgs,
  render: (args) => <Comp {...args}>
    Lead text Aenean lacinia bibendum nulla sed consectetur.
  </Comp>,
};
