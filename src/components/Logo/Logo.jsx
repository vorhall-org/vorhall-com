import styles from './Logo.module.scss';

export default function Logo(props) {
  return (
    <img
      classList={{
        [styles['logo']]: true,
        [props.classes]: props.classes,
      }}
      src ={props.src}
      alt={props.alt}
      width={props.width}
      height={props.height}
    />
  );
}
