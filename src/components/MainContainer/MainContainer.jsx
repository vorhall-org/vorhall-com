import styles from './MainContainer.module.scss';

export default function MainContainer(props) {
  return (
    <main
      aria-label={props.ariaLabel || undefined}
      classList={{
        [styles['main']]: true,
        [props.classes]: props.classes,
      }}
      id={props.id || 'content-area'}
      tabindex='-1'
    >
      {props.children}
    </main>
  );
}
