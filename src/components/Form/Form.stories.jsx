import Comp from './Form.jsx';
import * as fieldsetStories from '../Fieldset/Fieldset.stories.jsx';
import * as inputTextStories from '../InputText/InputText.stories.jsx';
import * as textareaStories from '../Textarea/Textarea.stories.jsx';
import * as buttonStories from '../Button/Button.stories.jsx';
import Link from '../Link/Link.jsx';

export default {
  component: Comp,
};

const defaultArgs = {
  classes: '',
};

export const Form = {
  args: {
    ...defaultArgs,
    button: {
      ...buttonStories.Button.args,
      click: false,
      label: 'Submit',
      type: 'submit',
    },

    fieldsets: [
      {
        fields: [
          {
            element: {
              name: 'InputText',
              props: {
                ...inputTextStories.InputText.args,
                name: 'email',
                type: 'email',
              },
            },
            name: 'email',
            validate: [
              {
                text: 'Please enter your email.',
                type: 'required',
              },
              {
                text: 'The email address is badly formatted.',
                type: 'email',
              },
            ],
          },
          {
            element: {
              name: 'InputText',
              props: {
                ...inputTextStories.InputText.args,
                name: 'name',
                type: 'name',
              },
            },
            name: 'name',
            validate: [
              {
                text: 'Please enter your name.',
                type: 'required',
              },
            ],
          },
          {
            element: {
              name: 'Textarea',
              props: {
                ...textareaStories.Textarea.args,
                required: true,
              },
            },
            name: 'text',
            validate: [
              {
                text: 'Please enter your request.',
                type: 'required',
              },
            ],
          },
        ],
        legend: fieldsetStories.FieldsetWithHiddenLegend.args.legend,
      },
    ],
    privacyNote: <p>some privacy note <Link href='#'>with link</Link> component</p>,
  },
};
