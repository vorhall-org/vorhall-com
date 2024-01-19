import styles from './ContactForm.module.scss';

export default function ContactForm(props) {
  return (
    <div
      classList={{
        [styles['contact-form']]: true,
        [props.classes]: props.classes,
      }}
    >
      <p>Contact description</p>

      {/* find a clever way to prevent from spam */}
      <p>info@vorhall.com</p>
    </div>
  );
}
