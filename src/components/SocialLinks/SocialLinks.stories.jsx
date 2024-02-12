import Comp from './SocialLinks.jsx';
import * as button from '../Button/Button.stories.jsx';

export default {
  component: Comp,
};

const defaultArgs = {
  'aria-label': 'Social platforms links',
  'classes': '',
  'socialLinks': [
    {
      ...button.IconOnlyRaw.args,
      externalLink: true,
      externalLinkText: 'Link target opens in new window',
      href: 'https://www.linkedin.com/company/vorhall/',
      iconBefore: {
        name: 'linkedin',
      },
    },
    {
      ...button.IconOnlyRaw.args,
      externalLink: true,
      externalLinkText: 'Link target opens in new window',
      href: 'https://github.com/vorhall-org/',
      iconBefore: {
        name: 'github',
      },
    },
  ],
};

export const SocialLinks = {
  args: defaultArgs,
};
