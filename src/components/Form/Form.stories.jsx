import Comp from '@/components/Form/Form.jsx';
import * as fieldsetStories from '@/components/Fieldset/Fieldset.stories.jsx';
import * as inputTextStories from '@/components/InputText/InputText.stories.jsx';
import * as textareaStories from '@/components/Textarea/Textarea.stories.jsx';
import * as buttonStories from '@/components/Button/Button.stories.jsx';
import Link from '@/components/Link/Link.jsx';

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
      size: 'xl',
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
                size: 'large',
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
                size: 'large',
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
                size: 'xl',
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
    postUrl: '/.netlify/functions/send-mail',
    privacyNote: <p>some privacy note <Link href='#'>with link</Link> component</p>,
    submitError: 'some submit error text',
    submitSuccess: 'some submit success text',
  },
};
