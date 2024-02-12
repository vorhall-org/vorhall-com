import styles from './Icon.module.scss';
import iconsFixed from './IconsFixed';
import iconsColorizable from './IconsColorizable';

/* eslint-disable solid/no-innerhtml */
export default function Icon(props) {
  return (
    <span
      classList={{
        [styles['icon']]: true,
        [props.classes]: props.classes,
        [styles['icon--colorizable']]: !props.colorFixed,
      }}
      innerHTML={
        props.colorFixed
          ? iconsFixed[props.name]
          : iconsColorizable[props.name]
      }
    />
  );
}
/* eslint-enable solid/no-innerhtml */
