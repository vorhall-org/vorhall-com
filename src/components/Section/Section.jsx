import styles from './Section.module.scss';

export default function Section(props) {
  return (
    <section
      classList={{
        [styles['section']]: true,
        [props.classes]: props.classes,
        [styles['section--full-width']]: props.fullWidth,
      }}
    >
      {props.children}
    </section>
  );
}
