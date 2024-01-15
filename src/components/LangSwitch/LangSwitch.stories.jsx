import Comp from './LangSwitch.jsx';
import * as icon from '../Icon/Icon.stories.jsx';

export default {
  component: Comp,
};

const defaultArgs = {
  classes: '',
  href: '#',
  icon: icon.IconFixedColor.args,
  text: 'Lang switch text',
};

export const LangSwitch = {
  args: defaultArgs,
};
