import styles from '@/components/FormLabel/FormLabel.module.scss';

export default function FormLabel(props) {
  return (
    <label
      classList={{
        [styles['form-label']]: true,
        [props.classes]: props.classes,
      }}
      for={props.inputId}
    >
      {props.text}
    </label>
  );
}
