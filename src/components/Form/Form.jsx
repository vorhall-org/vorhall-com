import styles from './Form.module.scss';
import { Dynamic } from 'solid-js/web';
import {
  createForm,
  email,
  required,
} from '@modular-forms/solid';

import {
  createSignal,
  For,
  Show,
} from 'solid-js';

import Button from '../Button/Button';
import Fieldset from '../Fieldset/Fieldset';
import InputText from '../InputText/InputText';
import Textarea from '../Textarea/Textarea';
import formEvents from './Form.events';

const getFormElementFromName = (elementName) => {
  let comp;

  switch (elementName) {
  case 'InputText':
    comp = InputText;
    break;
  case 'Textarea':
    comp = Textarea;
    break;
  default:
    comp = InputText;
  }

  return comp;
};

const getValidationFromProps = (validations) => {
  const validate = [];

  validations.forEach((validation) => {
    switch (validation.type) {
    case 'required':
      validate.push(required(validation.text));
      break;
    case 'email':
      validate.push(email(validation.text));
      break;
    default:
      validate.push(required(validation.text));
    }
  });

  return validate;
};

export default function CustomForm(componentProps) {
  const [
    ,
    {
      Form,
      Field,
    },
  ] = createForm();

  const [
    submitDisabled,
    setSubmitDisabled,
  ] = createSignal(false);

  const handleSubmit = (values) => {
    setSubmitDisabled(true);

    const dispatchEvent = new CustomEvent(
      formEvents.submitForm,
      {
        detail: values,
      },
    );

    window.dispatchEvent(dispatchEvent);

  };

  return (
    <Form
      classList={{
        [styles['form']]: true,
        [componentProps.classes]: componentProps.classes,
      }}
      onSubmit={handleSubmit}
    >
      <For each={componentProps.fieldsets}>
        {(fieldset) => (
          <Fieldset
            legend={fieldset.legend}
            classes={styles['form__fieldset']}
          >
            <For each={fieldset.fields}>
              {(fieldItem) => (
                <Field
                  name={fieldItem.name}
                  validate={getValidationFromProps(fieldItem.validate)}
                >
                  {(field, props) => (
                    <>
                      <Dynamic component={getFormElementFromName(fieldItem.element.name)}
                        {...props}
                        {...fieldItem.element.props}
                        value={field.value}
                        error={field.error}
                      />
                    </>
                  )}
                </Field>
              )}
            </For>
          </Fieldset>
        )}
      </For>

      <Show when={componentProps.button}>
        <Button
          {...componentProps.button}
          disabled={submitDisabled()}
        />
      </Show>
    </Form>
  );
}
