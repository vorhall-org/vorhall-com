import styles from './Textarea.module.scss';
import FormLabel from '../FormLabel/FormLabel';

export default function Textarea(props) {
  return (
    <div
      classList={{
        [styles['textarea']]: true,
        [props.classes]: props.classes,
      }}
    >
      <FormLabel
        {...props.label}
        classes={styles['textarea__label']}
      />
      <textarea
        class={styles['textarea__input']}
        cols={props.cols}
        disabled={props.disabled}
        id={props.id}
        name={props.name}
        placeholder={props.placeholder}
        required={props.required}
        rows={props.rows}
        onChange={(evt) => {
          console.log(evt.srcElement.value);
        }}
      />
    </div>
  );
}
