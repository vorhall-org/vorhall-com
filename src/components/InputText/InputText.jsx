import styles from './InputText.module.scss';
import FormLabel from '../FormLabel/FormLabel';
import FormError from '../FormError/FormError';
import { splitProps } from 'solid-js';

export default function InputText(props) {
  const [
    externalProps,
    internalProps,
  ] = splitProps(props, ['label']);

  return (
    <div
      classList={{
        [styles['input-text']]: true,
        [internalProps.classes]: internalProps.classes,
      }}
    >
      <FormLabel
        {...externalProps.label}
        classes={styles['input-text__label']}
      />
      <input
        {...internalProps}
        id={internalProps.name}
        value={internalProps.value || ''}
        class={styles['input-text__input']}
        disabled={internalProps.disabled}
        placeholder={internalProps.placeholder}
        required={internalProps.required}
        type={internalProps.type}
        aria-invalid={Boolean(internalProps.error)}
        aria-errormessage={`${internalProps.name}-error`}
      />

      <FormError
        id={`${internalProps.name}-error`}
        error={internalProps.error}
      />

    </div>
  );
}
