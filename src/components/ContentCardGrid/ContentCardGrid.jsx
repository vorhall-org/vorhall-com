import styles from './ContentCardGrid.module.scss';

export default function ContentCardGrid(props) {
  return (
    <ul
      classList={{
        [styles['content-card-grid']]: true,
        [props.classes]: props.classes,
      }}
    >
      {props.children}
    </ul>
  );
}

