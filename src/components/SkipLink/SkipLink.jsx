import styles from './SkipLink.module.scss';

export default function SkipLink(props) {
  return (
    <a
      classList={{
        [styles['skiplink']]: true,
      }}
      href={props.href}
    >
      {props.label}
    </a>
  );
}

