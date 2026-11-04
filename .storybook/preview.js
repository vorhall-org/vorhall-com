import '@/styles/_global.scss';
import FlyingFocus from '@/helpers/flying-focus/flying-focus';

window.flyingFocus = new FlyingFocus();

const preview = {
  parameters: {
    actions: {
      argTypesRegex: '^on[A-Z].*',
    },
    controls: {
      matchers: {
        color: /(?:background|color)$/iu,
        date: /Date$/iu,
      },
    },
  },
};

export default preview;
