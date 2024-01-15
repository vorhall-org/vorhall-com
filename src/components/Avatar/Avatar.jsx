import styles from './Avatar.module.scss';

export default function Avatar(props) {
  return (
    <img
      classList={{
        [styles['avatar']]: true,
        [props.classes]: props.classes,
      }}
      src={props.image}
      alt={props.alt}
      width={props.width}
      height={props.height}
    />
  );
}
