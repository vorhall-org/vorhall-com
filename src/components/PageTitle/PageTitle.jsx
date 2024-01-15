import styles from './PageTitle.module.scss';

export default function PageTitle(props) {
  return (
    <h1
      classList={{
        [styles['page-title']]: true,
        [props.classes]: props.classes,
      }}
    >
      {props.text}
      {props.highlight &&
        <span class='page-title__highlight'>{` ${props.highlight}`}</span>
      }
    </h1>
  );
}
