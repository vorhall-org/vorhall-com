import styles from './Contact.module.scss';

export default function Contact(props) {
  return (
    <div
      classList={{
        [styles['contact']]: true,
        [props.classes]: props.classes,
      }}
    >
      <p>Contact description</p>

      {/* find a clever way to prevent from spam */}
      <p>info@vorhall.com</p>
    </div>
  );
}
