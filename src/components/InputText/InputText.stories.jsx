import Comp from './InputText.jsx';
import * as formLabel from '../FormLabel/FormLabel.stories.jsx';

export default {
  component: Comp,
};

const defaultArgs = {
  classes: '',
  disabled: false,
  id: 'input-id',
  label: {
    ...formLabel.FormLabel.args,
    inputId: 'input-id',
    text: 'Form label text',
  },
  name: 'input-name',
  placeholder: 'input placeholder',
  required: false,
  type: 'text',
};

export const InputText = {
  args: defaultArgs,
};

// e-mail pattern: '[^@s]+@[^@s]+.[^@s]+',
