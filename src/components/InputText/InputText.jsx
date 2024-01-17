import styles from './InputText.module.scss';
import FormLabel from '../FormLabel/FormLabel';

export default function InputText(props) {
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
      />
    </div>
  );
}
