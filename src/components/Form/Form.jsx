import styles from './Form.module.scss';
import { Dynamic } from 'solid-js/web';
import { Transition } from 'solid-transition-group';
import {
  createForm,
  email,
  required,
} from '@modular-forms/solid';

import {
  createSignal,
  For,
  Match,
  Show,
  Switch,
} from 'solid-js';

import Button from '../Button/Button';
import Fieldset from '../Fieldset/Fieldset';
import InputText from '../InputText/InputText';
import Textarea from '../Textarea/Textarea';
import { submitForm } from './form-actions';

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
    formDisabled,
    setFormDisabled,
  ] = createSignal(false);

  const [
    submitSuccess,
    setSubmitSuccess,
  ] = createSignal(false);

  const [
    submitError,
    setSubmitError,
  ] = createSignal(false);

  const handleSubmit = async (values) => {
    await submitForm(
      values,
      componentProps.postUrl,
      setFormDisabled,
      setSubmitError,
      setSubmitSuccess,
      componentProps.submitError,
      componentProps.submitSuccess,
    );

  };

  return (
    <>
      <Transition
        name='fade'
        mode='outin'
        enterActiveClass={styles['form--fade-enter-active']}
        exitActiveClass={styles['form--fade-exit-active']}
        enterClass={styles['form--fade-enter']}
        exitToClass={styles['form--fade-exit-to']}
      >
        <Switch>
          <Match when={!submitSuccess()}>
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
                                disabled={formDisabled()}
                              />
                            </>
                          )}
                        </Field>
                      )}
                    </For>
                  </Fieldset>
                )}
              </For>

              {componentProps.privacyNote &&
                <div class={styles['form__privacy-note']}>{componentProps.privacyNote}</div>
              }

              <Show when={componentProps.button}>
                <Button
                  {...componentProps.button}
                  disabled={formDisabled()}
                />
              </Show>

              <Show when={submitError()}>
                <p>{submitError()}</p>
              </Show>
            </Form>
          </Match>
          <Match when={submitSuccess()}>
            <p>{submitSuccess()}</p>
          </Match>
        </Switch>
      </Transition>

    </>
  );
}
