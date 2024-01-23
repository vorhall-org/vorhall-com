import Comp from './ContentCard.jsx';
import * as button from '../Button/Button.stories.jsx';
import * as heading from '../Heading/Heading.stories.jsx';
import * as icon from '../Icon/Icon.stories.jsx';

export default {
  component: Comp,
};

const defaultArgs = {
  button: false,
  classes: '',
  heading: {
    ...heading.Heading.args,
    level: '4',
    text: 'Content Card Title',
    visualLevel: '4',
  },
  icon: false,
  text: 'Content Card Text',
};

export const ContentCard = {
  args: defaultArgs,
};

export const ContentCardServiceTeaser = {
  args: {
    ...defaultArgs,
    button: {
      ...button.Button.args,
      label: 'Discover more',
    },
    heading: {
      ...defaultArgs.heading,
      text: 'Digital Accessibility',
    },
    text: 'The Internet works like an equality machine. People with disabilities in particular can benefit greatly from independent use of the Internet and lead a self-determined life if we give them the chance to do so. We see it as our obligation to do everything in our power to provide the necessary technical accessibility for every digital product we create.',
  },
};

export const ContentCardServiceTeaserWithIcon = {
  args: {
    ...defaultArgs,
    button: {
      ...button.Button.args,
      label: 'Discover more',
    },
    heading: {
      ...defaultArgs.heading,
      text: 'Digital Accessibility',
    },
    icon: {
      ...icon.IconColorizable.args,
    },
    text: 'The Internet works like an equality machine. People with disabilities in particular can benefit greatly from independent use of the Internet and lead a self-determined life if we give them the chance to do so. We see it as our obligation to do everything in our power to provide the necessary technical accessibility for every digital product we create.',
  },
};
