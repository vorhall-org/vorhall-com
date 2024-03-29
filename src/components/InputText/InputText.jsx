import styles from './InputText.module.scss';
import FormLabel from '../FormLabel/FormLabel';
import FormError from '../FormError/FormError';
import { splitProps } from 'solid-js';

export default function InputText(props) {
  const [
    externalProps,
    internalProps,
  ] = splitProps(props, [
    'classes',
    'label',
    'size',
  ]);

  return (
    <div
      classList={{
        [styles['input-text']]: true,
        [internalProps.classes]: internalProps.classes,
        [styles[`input-text--size-${props.size}`]]: props.size,
        [styles['input-text--disabled']]: props.disabled,
        [styles['input-text--error']]: internalProps.error,
      }}
    >
      <FormLabel {...externalProps.label}/>
      <input
        {...internalProps}
        autocomplete={internalProps.autocomplete}
        id={internalProps.name}
        value={internalProps.value || ''}
        class={styles['input-text__input']}
        disabled={internalProps.disabled}
        inputmode={internalProps.inputmode}
        placeholder={internalProps.placeholder}
        required={internalProps.required}
        type={internalProps.type}
        aria-invalid={
          internalProps.error
            ? Boolean(internalProps.error)
            : undefined
        }
        aria-describedby={
          internalProps.error
            ? `${internalProps.name}-error`
            : undefined
        }
      />

      <FormError
        id={`${internalProps.name}-error`}
        error={internalProps.error}
      />

    </div>
  );
}
