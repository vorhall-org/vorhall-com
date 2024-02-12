import styles from './ContentCardGrid.module.scss';

export default function ContentCardGrid(props) {
  return (
    <ul
      aria-labelledby={ props.ariaLabelledBy
        ? props.ariaLabelledBy
        : undefined
      }
      classList={{
        [styles['content-card-grid']]: true,
        [props.classes]: props.classes,
      }}
    >
      {props.children}
    </ul>
  );
}

