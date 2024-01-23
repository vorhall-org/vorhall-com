import styles from './LangSwitch.module.scss';
import Icon from '../Icon/Icon';
import Link from '../Link/Link';

export default function LangSwitch(props) {
  return (
    <Link
      {...props.link}
      classes={styles['lang-switch']}
    >
      <Icon
        {...props.icon}
        classes={styles['lang-switch__icon']}
      />
      <span>
        {props.text}
      </span>
    </Link>
  );
}

