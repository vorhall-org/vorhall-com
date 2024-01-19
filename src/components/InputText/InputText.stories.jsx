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
  validationPattern: false,
};

export const InputText = {
  args: defaultArgs,
};

export const InputRequired = {
  args: {
    ...defaultArgs,
    required: true,
  },
};

export const EMailValidation = {
  args: {
    ...defaultArgs,
    required: true,
    type: 'email',
    validationPattern: '[^@\\s]+@[^@\\s]+\\.[^@\\s]+',
  },
};
