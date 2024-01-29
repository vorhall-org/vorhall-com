import styles from './MainContainer.module.scss';

export default function MainContainer(props) {
  return (
    <main
      aria-label={props.ariaLabel || undefined}
      id={props.id || 'content-area'}
      classList={{
        [styles['main']]: true,
        [props.classes]: props.classes,
      }}
    >
      {props.children}
    </main>
  );
}
