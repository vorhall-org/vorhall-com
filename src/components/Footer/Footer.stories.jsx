import Comp from './Footer.jsx';
import * as langSwitch from '../LangSwitch/LangSwitch.stories.jsx'

export default {
  component: Comp,
};

const defaultArgs = {
  classes: '',
  langSwitch: langSwitch.LangSwitch.args,
  links: [
    {
      link: '#',
      text: 'Link 1',
    },
    {
      link: '#',
      text: 'Link 2',
    },
    {
      link: '#',
      text: 'Link 3',
    },
  ],
};

export const Footer = {
  args: defaultArgs,
};
