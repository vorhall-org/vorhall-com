import {
  createEffect,
  createSignal,
} from 'solid-js';
import { Dynamic } from 'solid-js/web';
import styles from './Button.module.scss';
import Icon from '../Icon/Icon';

export default function Button(props) {
  const [
    propsToRender,
    setPropsToRender,
  ] = createSignal(props);

  createEffect(() => {

    let modifiedProps = {};

    if (props.href) {
      let ariaLabel = `${props.label}. ${props.externalLinkText}`;
      let target;
      let rel;

      if (props.href && props.externalLink) {
        ariaLabel += `. ${props.externalLinkText}`;
        target = '_blank';
        rel = 'external noopener nofollow';
      }

      modifiedProps = {
        'aria-label': ariaLabel,
        'href': props.href,
        rel,
        target,
      };

    } else {
      modifiedProps = {
        'aria-label': props.label,
        'disabled': props.disabled,
        'type': props.type,
      };
    }

    setPropsToRender(modifiedProps);

  });

  return (
    <Dynamic
      component={
        props.href
          ? 'a'
          : 'button'
      }
      {...propsToRender()}
      classList={{
        [styles.button]: true,
        [styles['button--icon']]: props.iconBefore || props.iconAfter,
        [styles[`button--size-${props.size}`]]: props.size,
        [styles[`button--color-${props.color}`]]: props.color,
        [styles['button--outline']]: props.outline,
        [styles['button--disabled']]: props.disabled,
        [props.classes]: props.classes,
      }}
    >
      {props.iconBefore &&
        <Icon
          {...props.iconBefore}
          classes={styles['button__icon-before']}
        />
      }

      {props.showLabel &&
        <span class={styles['button__label']}>{props.label}</span>
      }

      {props.iconAfter &&
        <Icon
          {...props.iconAfter}
          classes={styles['button__icon-after']}
        />
      }
    </Dynamic>
  );
}
