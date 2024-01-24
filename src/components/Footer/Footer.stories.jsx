import Comp from './Footer.jsx';

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
      text: 'Data Privacy',
    },
    {
      link: '#',
      text: 'Impressum',
    },
  ],
  socialLinks: [
    {
      link: '#',
      icon: 'linkedin',
    },
    {
      link: '#',
      icon: 'github',
    },
  ],
};

export const Footer = {
  args: defaultArgs,
};
