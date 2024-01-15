import styles from './LangSwitch.module.scss';
import Icon from '../Icon/Icon';

export default function LangSwitch(props) {
  return (
    <a
      classList={{
        [styles['lang-switch']]: true,
        [props.classes]: props.classes,
      }}
      href={props.href}
    >
      <Icon {...props.icon} />
      {props.text}
    </a>
  );
}

