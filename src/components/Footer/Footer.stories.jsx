import Comp from './Footer.jsx';
import * as socialLinks from '../SocialLinks/SocialLinks.stories.jsx';

export default {
  component: Comp,
};

const defaultArgs = {
  classes: '',
  copyright: '©2024 Vorhall KlG',
  langSwitch: {
    link: '#',
    text: 'Switch to English',
  },
  legalLinks: [
    {
      link: '#',
      prefetch: true,
      text: 'Data Privacy',
    },
    {
      link: '#',
      prefetch: true,
      text: 'Impressum',
    },
  ],
  socialLinks: socialLinks.SocialLinks.args,
};

export const Footer = {
  args: defaultArgs,
};
