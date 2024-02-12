import styles from './FormError.module.scss';
import { Show } from 'solid-js';

export default function FormError(props) {
  return (
    <>
      <Show when={props.error}>
        <div
          aria-hidden='true'
          role='presentation'
          id={props.id}
          classList={{
            [styles['form-error']]: true,
            [props.classes]: props.classes,
          }}
        >
          {props.error}
        </div>
      </Show>
    </>
  );
}
