import styles from './ErrorMessage.module.scss';
import Icon from '../Icon/Icon';

export default function ErrorMessage(props) {
  return (
    <p
      classList={{
        [styles['error-message']]: true,
        [props.classes]: props.classes,
      }}
    >
      <Icon
        name='exclamationMark'
        classes={styles['error-message__icon']}
      />
      <span>
        {props.text}
      </span>
    </p>
  );
}
