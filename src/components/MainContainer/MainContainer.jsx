import styles from './MainContainer.module.scss';

export default function MainContainer(props) {
  return (
    <main
      classList={{
        [styles['main']]: true,
        [props.classes]: props.classes,
      }}
    >
      {props.children}
    </main>
  );
}
