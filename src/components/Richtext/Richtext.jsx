import styles from './Richtext.module.scss';

export default function Richtext(props) {

  return (
    <div
      classList={{
        [styles['richtext']]: true,
        [props.classes]: props.classes,
      }}
    >
      {props.children}
    </div>
  );
}
