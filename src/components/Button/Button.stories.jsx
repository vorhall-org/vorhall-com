import Comp from './Button.jsx';
import * as icon from '../Icon/Icon.stories.jsx';
import { disableArgType } from '../../helpers/storybook/storybook.js';

const iconsFixedColor = {
  de: {
    ...icon.IconFixedColor.args,
    name: 'de',
  },
  en: {
    ...icon.IconFixedColor.args,
    name: 'en',
  },
};

const iconsColorizable = {
  arrowDown: {
    ...icon.IconColorizable.args,
    name: 'arrowDown',
  },
  close: {
    ...icon.IconColorizable.args,
    name: 'close',
  },
  github: {
    ...icon.IconColorizable.args,
    name: 'github',
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
      mapping: iconsColorizable,
      options: Object.keys(iconsColorizable),
    },
    iconBefore: {
      control: {
        type: 'select',
      },
      mapping: iconsFixedColor,
      options: Object.keys(iconsFixedColor),
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
  externalLink: false,
  externalLinkText: '',
  hideLabel: false,
  href: '',
  iconAfter: false,
  iconBefore: false,
  label: 'Button Text',
  outline: false,
  rawIcon: false,
  size: 's',
  type: 'button',
};

export const Button = {
  args: defaultArgs,
};

export const ButtonLink = {
  args: {
    ...defaultArgs,
    externalLink: true,
    externalLinkText: 'Link target opens in new window.',
    href: 'https://www.sbb.ch',
    label: 'Link Text',
  },
};

export const IconBefore = {
  args: {
    ...defaultArgs,
    iconBefore: iconsFixedColor.en,
  },
};

export const IconAfter = {
  args: {
    ...defaultArgs,
    iconAfter: iconsColorizable.close,
  },
};

export const BothIcons = {
  args: {
    ...defaultArgs,
    iconAfter: iconsColorizable.close,
    iconBefore: iconsFixedColor.en,
  },
};

export const IconOnly = {
  args: {
    ...defaultArgs,
    hideLabel: true,
    iconAfter: iconsColorizable.close,
    label: 'Hidden button text',
  },
};

export const IconOnlyRaw = {
  args: {
    ...defaultArgs,
    externalLink: true,
    externalLinkText: 'Link target opens in new window.',
    hideLabel: true,
    href: 'https://www.sbb.ch',
    iconBefore: iconsColorizable.github,
    label: 'Hidden button text',
    rawIcon: true,
  },
};

export const Outline = {
  args: {
    ...defaultArgs,
    outline: true,
  },
};
