import styles from './Skiplink.module.scss';

export default function Skiplink(props) {
  return (
    <a
      classList={{
        [styles['skiplink']]: true,
        [props.classes]: props.classes,
      }}
      href={props.href}
    >
      {props.children}
    </a>
  );
}

