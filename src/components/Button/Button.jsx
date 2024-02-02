import { Dynamic } from 'solid-js/web';
import styles from './Button.module.scss';
import Icon from '../Icon/Icon';

export default function Button(props) {

  return (
    <Dynamic
      aria-label={ ((props.ariaLabel && props.externalLink)
        ? `${props.ariaLabel}. ${props.externalLinkText}`
        : props.ariaLabel) || ((props.href && props.externalLink)
        ? `${props.label}. ${props.externalLinkText}`
        : props.label)
      }
      component={
        props.href
          ? 'a'
          : 'button'
      }
      classList={{
        [styles.button]: true,
        [styles['button--icon']]: props.iconBefore || props.iconAfter,
        [styles[`button--size-${props.size}`]]: props.size,
        [styles[`button--color-${props.color}`]]: props.color,
        [styles['button--outline']]: props.outline,
        [styles['button--disabled']]: props.disabled,
        [styles['button--icon-raw']]: props.rawIcon,
        [styles['button--link']]: props.href,
        [styles['button--loading']]: props.loading,
        [styles['button--skip-link']]: props.skipLink,
        [props.classes]: props.classes,
      }}
      disabled={
        props.href
          ? undefined
          : props.disabled
      }
      href={
        props.href
          ? props.href
          : undefined
      }
      onClick={(evt) => {
        if (props.click) {
          props.click(evt);
        }
      }}
      rel={
        props.href && props.externalLink
          ? 'external noopener nofollow'
          : undefined
      }
      target={
        props.href && props.externalLink
          ? '_blank'
          : undefined
      }
      type={
        props.href
          ? undefined
          : props.type
      }
      data-astro-prefetch={(props.href && props.prefetch) || undefined}
    >
      {props.iconBefore &&
        <Icon
          {...props.iconBefore}
          classes={styles['button__icon-before']}
        />
      }

      <span classList={{
        [styles['button__label']]: true,
        [styles['button__label--hidden']]: props.hideLabel === true,
      }}>{props.label}</span>

      {props.iconAfter &&
        <Icon
          {...props.iconAfter}
          classes={styles['button__icon-after']}
        />
      }
    </Dynamic>
  );
}
