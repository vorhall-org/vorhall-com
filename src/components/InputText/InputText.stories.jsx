import Comp from './InputText.jsx';
import * as formLabel from '../FormLabel/FormLabel.stories.jsx';

export default {
  argTypes: {
    size: {
      control: {
        type: 'select',
      },
      options: [
        'small',
        'regular',
        'large',
      ],
    },
  },
  component: Comp,
};

const defaultArgs = {
  classes: '',
  disabled: false,
  label: {
    ...formLabel.FormLabel.args,
    inputId: 'input-id',
    text: 'Form label text',
  },
  name: 'input-name',
  placeholder: 'input placeholder',
  required: false,
  size: 'regular',
  type: 'text',
};

export const InputText = {
  args: defaultArgs,
};

export const Error = {
  args: {
    ...defaultArgs,
    error: 'true',
  },
};
