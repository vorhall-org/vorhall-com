import styles from '@/components/Icon/Icon.module.scss';
import iconsFixed from '@/components/Icon/IconsFixed';
import iconsColorizable from '@/components/Icon/IconsColorizable';

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
