import styles from './Form.module.scss';

export default function Form(props) {
  return (
    <form
      classList={{
        [styles['form']]: true,
        [props.classes]: props.classes,
      }}
    >
      {props.children}
    </form>
  );
}
