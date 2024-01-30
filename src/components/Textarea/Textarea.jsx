import styles from './Textarea.module.scss';
import FormLabel from '../FormLabel/FormLabel';
import FormError from '../FormError/FormError';
import { splitProps } from 'solid-js';

export default function Textarea(props) {
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
        [styles['textarea']]: true,
        [internalProps.classes]: internalProps.classes,
        [styles['textarea--disabled']]: props.disabled,
        [styles['textarea--error']]: internalProps.error,
        [styles[`textarea--size-${props.size}`]]: props.size,
      }}
    >
      <FormLabel {...externalProps.label} />

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
