import Comp from './Footer.jsx';
import * as button from '../Button/Button.stories.jsx';

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
      ...button.IconOnlyRaw.args,
    },
    {
      ...button.IconOnlyRaw.args,
      iconBefore: {
        name: 'linkedin',
      },
    },
  ],
};

export const Footer = {
  args: defaultArgs,
};
