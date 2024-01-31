import Comp from './AvatarCard.jsx';
import * as heading from '../Heading/Heading.stories.jsx';
import * as avatar from '../Avatar/Avatar.stories.jsx';
import * as socialLinks from '../SocialLinks/SocialLinks.stories.jsx';

export default {
  component: Comp,
};

const defaultArgs = {
  avatar: avatar.Avatar.args,
  classes: '',
  heading: {
    ...heading.Heading.args,
    classes: 'avatar-card--heading',
    level: '4',
    text: 'Avatar Card title',
  },
  links: [],
  subtitle: 'Avatar Card subtitle',
  text: 'Avatar Card text',
};

export const AvatarCard = {
  args: defaultArgs,
};

export const AvatarCardYves = {
  args: {
    ...defaultArgs,
    avatar: avatar.Yves.args,
    heading: {
      ...defaultArgs.heading,
      text: 'Yves Tscherry',
    },
    subtitle: 'Expert Frontend Architect',
    text: 'Avatar Card text',
  },
};

export const AvatarCardMarius = {
  args: {
    ...defaultArgs,
    avatar: avatar.Marius.args,
    heading: {
      ...defaultArgs.heading,
      text: 'Marius Bleuer',
    },
    subtitle: 'Expert Frontend Architect',
    text: 'Avatar Card text',
  },
};

export const AvatarCardMariusWithSocialProfiles = {
  args: {
    ...defaultArgs,
    avatar: avatar.Marius.args,
    heading: {
      ...defaultArgs.heading,
      text: 'Marius Bleuer',
    },
    socialLinks: socialLinks.SocialLinks.args,
    subtitle: 'Expert Frontend Architect',
    text: 'Avatar Card text',
  },
};
