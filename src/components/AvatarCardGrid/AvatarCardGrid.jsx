import styles from './AvatarCardGrid.module.scss';

export default function AvatarCardGrid(props) {
  return (
    <ul
      classList={{
        [styles['avatar-card-grid']]: true,
        [props.classes]: props.classes,
      }}
    >
      {props.children}
    </ul>
  );
}
