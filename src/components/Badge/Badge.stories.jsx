import Comp from './Badge.jsx';

export default {
  argTypes: {
    color: {
      control: {
        type: 'select',
      },
      options: [
        'gray',
        'red',
        'yellow',
        'green',
        'blue',
        'indigo',
        'purple',
        'pink',
      ],
    },
  },
  component: Comp,
};

const defaultArgs = {
  classes: '',
  color: 'gray',
  text: 'Some badge text',
};

export const Badge = {
  args: defaultArgs,
};
