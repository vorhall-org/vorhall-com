import { createEffect, createMemo } from 'solid-js';
import { Dynamic } from 'solid-js/web';
import styles from './Button.module.scss';
import Icon from '../Icon/Icon';

const getAttributesForElement = (props) => {

  const propsToRender = createMemo(() => {

    console.log('getAttributesForElement');

    let modifiedProps = {};

    if (props.href) {
      let target;
      let rel;

      if (props.href.indexOf('vorhall.com') === -1) {
        target = '_blank';
        rel = 'external noopener nofollow';
      }

      modifiedProps = {
        'aria-label': props.label,
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

    return modifiedProps;
  });

  return propsToRender;

};

export default function Button(props) {

  const propsToRender = getAttributesForElement(props);

  createEffect(() => {
    getAttributesForElement(props);
  });

  return (
    <Dynamic
      component={
        props.href
          ? 'a'
          : 'button'
      }
      {...propsToRender}
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
