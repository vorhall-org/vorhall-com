import Comp from './LangSwitch.jsx';
import * as icon from '../Icon/Icon.stories.jsx';
import * as link from '../Link/Link.stories.jsx';

export default {
  component: Comp,
};

const defaultArgs = {
  classes: '',
  icon: icon.IconFixedColor.args,
  link: link.Link.args,
  text: 'Some link content',
};

export const LangSwitch = {
  args: defaultArgs,
};
