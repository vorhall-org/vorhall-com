import Comp from './Form.jsx';
import Fieldset from '../Fieldset/Fieldset.jsx';
import * as fieldsetStories from '../Fieldset/Fieldset.stories.jsx';
import InputText from '../InputText/InputText.jsx';
import * as inputTextStories from '../InputText/InputText.stories.jsx';
import Textarea from '../Textarea/Textarea.jsx';
import * as textareaStories from '../Textarea/Textarea.stories.jsx';
import Button from '../Button/Button.jsx';
import * as buttonStories from '../Button/Button.stories.jsx';

export default {
  component: Comp,
};

const defaultArgs = {
  classes: '',
};

export const Form = {
  args: defaultArgs,
  render: (args) => <Comp {...args}>
    <p>some form content</p>
  </Comp>,
};

export const ContactForm = {
  args: {
    ...defaultArgs,
    button: buttonStories.Button.args,
    classes: '',
    fieldset: fieldsetStories.FieldsetWithHiddenLegend.args,
    input: inputTextStories.EMailValidation.args,
    textarea: textareaStories.Textarea.args,
  },
  render: (args) => <Comp>
    <Fieldset {...args.fieldset}>
      <InputText {...args.input} />
      <Textarea {...args.textarea} />
      <Button {...args.button} />
    </Fieldset>
  </Comp>,
};
