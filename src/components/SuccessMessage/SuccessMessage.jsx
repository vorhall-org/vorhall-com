import styles from './SuccessMessage.module.scss';
import Icon from '../Icon/Icon';
import { onMount } from 'solid-js';

export default function SuccessMessage(props) {
  let messageElement;

  onMount(() => {
    messageElement.focus();
  });

  return (
    <p
      classList={{
        [styles['success-message']]: true,
        [props.classes]: props.classes,
      }}
      ref={messageElement}
      role='alert'
      tabindex='-1'
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
