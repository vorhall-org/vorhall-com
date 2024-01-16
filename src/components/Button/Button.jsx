import styles from './Button.module.scss';
import Icon from '../Icon/Icon';

export default function Button(props) {
  return (
    <button
      classList={{
        [styles.button]: true,
        [styles['button--icon']]: props.iconBefore || props.iconAfter,
        [styles[`button--size-${props.size}`]]: props.size,
        [styles[`button--color-${props.color}`]]: props.color,
        [styles['button--outline']]: props.outline,
        [props.classes]: props.classes,
      }}
      onClick={(evt) => {
        if (props.click) {
          props.click(evt);
        }
      }}
      type={props.type}
      aria-label={props.label}
    >
      {props.iconBefore &&
        <Icon
          {...props.iconBefore}
          classes={styles['button__icon-before']}
        />
      }

      {props.label &&
        <span class={styles['button__label']}>{props.label}</span>
      }

      {props.iconAfter &&
        <Icon
          {...props.iconAfter}
          classes={styles['button__icon-after']}
        />
      }
    </button>
  );
}
