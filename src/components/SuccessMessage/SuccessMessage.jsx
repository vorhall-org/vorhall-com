import styles from './SuccessMessage.module.scss';
import Icon from '../Icon/Icon';

export default function SuccessMessage(props) {
  return (
    <p
      classList={{
        [styles['success-message']]: true,
        [props.classes]: props.classes,
      }}
    >
      <Icon
        name='checkmark'
        classes={styles['success-message__icon']}
      />

      <span>
        {props.text}
      </span>

    </p>
  );
}
