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
  arrowRight: {
    ...icon.IconColorizable.args,
    name: 'arrowRight',
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
    ariaLabel: '',
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
  ariaLabel: '',
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
  loading: false,
  outline: false,
  prefetch: false,
  rawIcon: false,
  size: 's',
  skipLink: false,
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
    iconAfter: iconsColorizable.arrowRight,
    label: 'Link Text',
  },
};

export const ButtonSkipLink = {
  args: {
    ...defaultArgs,
    classes: 'button--skiplink',
    href: '#content-area',
    label: 'Skip to main content',
    skipLink: true,
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

export const Loading = {
  args: {
    ...defaultArgs,
    loading: true,
  },
};
