import '../src/styles/_global.scss';
import FlyingFocus from '../src/helpers/flying-focus/flying-focus';

window.flyingFocus = new FlyingFocus();

const preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
