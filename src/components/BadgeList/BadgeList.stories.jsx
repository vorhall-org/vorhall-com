import Comp from './BadgeList.jsx';

export default {
  component: Comp,
};

const defaultArgs = {
  classes: '',
  items: [
    {
      color: 'red',
      text: 'badge 1',
    },
    {
      color: 'green',
      text: 'badge 2',
    },
    {
      color: 'blue',
      text: 'badge 3',
    },
  ],
};

export const BadgeList = {
  args: defaultArgs,
};
