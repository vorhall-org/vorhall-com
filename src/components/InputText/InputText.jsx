import {
  createEffect,
  createSignal,
} from 'solid-js';
import styles from './InputText.module.scss';
import FormLabel from '../FormLabel/FormLabel';

export default function InputText(props) {
  const [
    value,
    setValue,
  ] = createSignal('');

  /*
  const [
    valid,
    setValid,
  ] = createSignal(false);
  */

  createEffect(() => {
    /*
    if (props.validationPattern) {
      // const regex = new RegExp(props.validationPattern);

      const valid = (props.validationPattern).test(value());

      console.log(valid);
    }
    */
  });

  return (
    <div
      classList={{
        [styles['input-text']]: true,
        [props.classes]: props.classes,
      }}
    >
      <FormLabel
        {...props.label}
        classes={styles['input-text__label']}
      />
      <input
        class={styles['input-text__input']}
        disabled={props.disabled}
        id={props.id}
        name={props.name}
        placeholder={props.placeholder}
        required={props.required}
        type={props.type}
        onChange={(evt) => {
          setValue(evt.srcElement.value);
        }}
        value={value()}
        pattern={props.validationPattern}
      />
    </div>
  );
}
