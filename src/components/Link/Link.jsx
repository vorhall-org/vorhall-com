import styles from './Link.module.scss';

export default function Link(props) {
  return (
    <a
      classList={{
        [styles['link']]: true,
        [styles['link--secondary']]: props.secondary,
        [props.classes]: props.classes,
      }}
      href={props.href}
    >
      {props.children}
    </a>
  );
}

