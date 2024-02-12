import styles from './ErrorMessage.module.scss';
import Icon from '../Icon/Icon';
import { onMount } from 'solid-js';

export default function ErrorMessage(props) {
  let messageElement;

  onMount(() => {
    messageElement.focus();
  });

  return (
    <p
      classList={{
        [styles['error-message']]: true,
        [props.classes]: props.classes,
      }}
      ref={messageElement}
      role='alert'
      tabindex='-1'
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
