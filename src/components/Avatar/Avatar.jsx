import styles from './Avatar.module.scss';

export default function Avatar(props) {
  return (
    <img
      alt={props.alt}
      aria-hidden='true'
      classList={{
        [styles['avatar']]: true,
        [props.classes]: props.classes,
      }}
      height={props.height}
      loading='lazy'
      src={props.image}
      role='presentation'
      width={props.width}
    />
  );
}
