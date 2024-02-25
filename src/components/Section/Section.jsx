import styles from './Section.module.scss';

export default function Section(props) {
  return (
    <section
      classList={{
        [styles['section']]: true,
        [props.classes]: props.classes,
        [styles['section--contact']]: props.contact,
        [styles['section--full-width']]: props.fullWidth,
        [styles['section--small']]: props.small,
        [styles['section--large']]: props.large,
        [styles['section--highlight']]: props.highlight,
        [styles['section--no-v-spacing-top']]: props.noVerticalSpacingTop,
        [styles['section--no-v-spacing-bottom']]: props.noVerticalSpacingBottom,
      }}
    >
      {props.children}
    </section>
  );
}
