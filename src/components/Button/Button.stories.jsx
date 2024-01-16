import Comp from './Button.jsx';
import * as icon from '../Icon/Icon.stories.jsx';
import { disableArgType } from '../../helpers/storybook/storybook.js';

const iconsBefore = {
  de: {
    ...icon.IconFixedColor.args,
    name: 'de',
  },
  en: {
    ...icon.IconFixedColor.args,
    name: 'en',
  },
};

const iconsAfter = {
  arrowDown: {
    ...icon.IconColorizable.args,
    name: 'arrowDown',
  },
  close: {
    ...icon.IconColorizable.args,
    name: 'close',
  },
};

export default {
  argTypes: {
    click: disableArgType,
    color: {
      control: {
        type: 'select',
      },
      options: [
        'primary',
        'red',
        'green',
        'black',
        'gray',
      ],
    },
    iconAfter: {
      control: {
        type: 'select',
      },
      mapping: iconsAfter,
      options: Object.keys(iconsAfter),
    },
    iconBefore: {
      control: {
        type: 'select',
      },
      mapping: iconsBefore,
      options: Object.keys(iconsBefore),
    },
    size: {
      control: {
        type: 'select',
      },
      options: [
        'xs',
        's',
        'l',
        'xl',
      ],
    },
    type: {
      control: {
        type: 'select',
      },
      options: [
        'submit',
        'reset',
        'button',
      ],
    },
  },
  component: Comp,
};

const defaultArgs = {
  click: () => {
    console.log('button was clicked');
  },
  color: 'primary',
  iconAfter: false,
  iconBefore: false,
  label: 'Button',
  outline: false,
  size: 's',
  type: 'button',
};

export const Button = {
  args: defaultArgs,
};

export const IconBefore = {
  args: {
    ...defaultArgs,
    iconBefore: iconsBefore.en,
  },
};

export const IconAfter = {
  args: {
    ...defaultArgs,
    iconAfter: iconsAfter.close,
  },
};

export const BothIcons = {
  args: {
    ...defaultArgs,
    iconAfter: iconsAfter.close,
    iconBefore: iconsBefore.en,
  },
};

export const IconOnly = {
  args: {
    ...defaultArgs,
    iconAfter: iconsAfter.close,
    label: false,
  },
};

export const Outline = {
  args: {
    ...defaultArgs,
    outline: true,
  },
};
