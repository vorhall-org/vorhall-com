import styles from './AvatarCardGrid.module.scss';

export default function AvatarCardGrid(props) {
  return (
    <ul
      aria-labelledby={ props.ariaLabelledBy
        ? props.ariaLabelledBy
        : undefined
      }
      classList={{
        [styles['avatar-card-grid']]: true,
        [props.classes]: props.classes,
      }}
    >
      {props.children}
    </ul>
  );
}
