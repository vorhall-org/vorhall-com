import styles from './Icon.module.scss';
import icons from './Icons';

/* eslint-disable solid/no-innerhtml */
export default function Icon(props) {
  return (
    <span
      classList={{
        [styles['icon']]: true,
        [props.classes]: props.classes,
      }}
      innerHTML={icons[props.name]}
    />
  );
}
/* eslint-enable solid/no-innerhtml */
