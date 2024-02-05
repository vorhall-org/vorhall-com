import styles from './Badge.module.scss';

export default function Badge(props) {
  return (
    <div
      classList={{
        [styles['badge']]: true,
        [props.classes]: props.classes,
        [styles[`badge--color-${props.color}`]]: props.color,
      }}
    >
      {props.text}
    </div>
  );
}
