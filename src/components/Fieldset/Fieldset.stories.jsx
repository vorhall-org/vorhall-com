import Comp from './Fieldset.jsx';

const render = (args) => <Comp {...args}>
  <p>some fieldset content</p>
</Comp>;

export default {
  component: Comp,
};

const defaultArgs = {
  classes: '',
  legend: false,
};

export const Fieldset = {
  args: defaultArgs,
  render,
};

export const FieldsetWithLegend = {
  args: {
    ...defaultArgs,
    legend: {
      hidden: false,
      text: 'Fieldset legend text',
    },
  },
  render,
};

export const FieldsetWithHiddenLegend = {
  args: {
    ...defaultArgs,
    legend: {
      hidden: true,
      text: 'Fieldset legend text',
    },
  },
  render,
};
