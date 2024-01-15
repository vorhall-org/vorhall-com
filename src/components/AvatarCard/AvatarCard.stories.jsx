import Comp from './AvatarCard.jsx';
import * as heading from '../Heading/Heading.stories.jsx';
import * as avatar from '../Avatar/Avatar.stories.jsx';

export default {
  component: Comp,
};

const defaultArgs = {
  avatar: avatar.Avatar.args,
  classes: '',
  heading: {
    ...heading.Heading.args,
    level: '4',
    text: 'Avatar Card title',
  },
  subtitle: 'Avatar Card subtitle',
  text: 'Avatar Card text',
};

export const AvatarCard = {
  args: defaultArgs,
};
