import styles from './Textarea.module.scss';
import FormLabel from '../FormLabel/FormLabel';
import FormError from '../FormError/FormError';
import { splitProps } from 'solid-js';

export default function Textarea(props) {
  const [
    externalProps,
    internalProps,
  ] = splitProps(props, ['label']);

  return (
    <div
      classList={{
        [styles['textarea']]: true,
        [internalProps.classes]: internalProps.classes,
      }}
    >
      <FormLabel
        {...externalProps.label}
        classes={styles['textarea__label']}
      />
      <textarea
        {...internalProps}
        class={styles['textarea__input']}
        cols={internalProps.cols}
        disabled={internalProps.disabled}
        id={internalProps.id}
        name={internalProps.name}
        placeholder={internalProps.placeholder}
        required={internalProps.required}
        rows={internalProps.rows}
      />

      <FormError
        id={`${internalProps.name}-error`}
        error={internalProps.error}
      />
    </div>
  );
}
