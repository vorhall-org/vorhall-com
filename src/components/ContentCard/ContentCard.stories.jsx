import Comp from './ContentCard.jsx';
import * as heading from '../Heading/Heading.stories.jsx';

export default {
  component: Comp,
};

const defaultArgs = {
  classes: '',
  heading: {
    ...heading.Heading.args,
    level: '2',
    text: 'Content Card Title',
  },
  text: 'Content Card Text',
};

export const ContentCard = {
  args: defaultArgs,
};
