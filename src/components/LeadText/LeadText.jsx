import styles from './LeadText.module.scss';

export default function LeadText(props) {
  return (
    <p
      classList={{
        [styles['lead-text']]: true,
        [props.classes]: props.classes,
      }}
    >
      {props.children}
    </p>
  );
}
