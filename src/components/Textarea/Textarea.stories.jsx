import Comp from './Textarea.jsx';
import * as formLabel from '../FormLabel/FormLabel.stories.jsx';

export default {
  argTypes: {
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
  },
  component: Comp,
};

const defaultArgs = {
  classes: '',
  cols: '10',
  disabled: false,
  id: 'textarea-id',
  label: {
    ...formLabel.FormLabel.args,
    inputId: 'textarea-id',
    text: 'Form label text',
  },
  name: 'textarea-name',
  placeholder: 'textarea placeholder',
  required: false,
  rows: '5',
  size: 's',
};

export const Textarea = {
  args: defaultArgs,
};

export const Error = {
  args: {
    ...defaultArgs,
    error: 'Some error message',
  },
};
