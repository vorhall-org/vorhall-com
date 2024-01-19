import Comp from './Textarea.jsx';
import * as formLabel from '../FormLabel/FormLabel.stories.jsx';

export default {
  component: Comp,
};

const defaultArgs = {
  classes: '',
  cols: '30',
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
};

export const Textarea = {
  args: defaultArgs,
};
