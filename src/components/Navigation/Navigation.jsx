import styles from './Navigation.module.scss';

export default function Navigation(props) {

  return (
    <nav
      classList={{
        [styles['navigation']]: true,
        [props.classes]: props.classes,
      }}
    >
      {props.children}
    </nav>
  );
}
