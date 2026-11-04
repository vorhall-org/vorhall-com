import styles from '@/components/LeadText/LeadText.module.scss';

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
