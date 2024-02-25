import styles from './Avatar.module.scss';

export default function Avatar(props) {
  return (
    <picture
      classList={{
        [styles['avatar']]: true,
        [props.classes]: props.classes,
      }}
    >
      <source srcset={props.srcSetAvif.small} type='image/avif' media='(min-width: 768px)' />
      <source srcset={props.srcSetWebP.small} type='image/webp' media='(min-width: 768px)' />
      <source srcset={props.srcSetAvif.large} type='image/avif' media='(min-width: 500px)' />
      <source srcset={props.srcSetWebP.large} type='image/webp' media='(min-width: 500px)' />
      <source srcset={props.srcSetAvif.small} type='image/avif' />
      <source srcset={props.srcSetWebP.small} type='image/webp' />
      <img
        alt={props.alt}
        aria-hidden='true'
        height={props.height}
        loading='lazy'
        sizes='(min-width: 768px) 300px, (min-width: 500px) 600px, 300px'
        src={props.image}
        role='presentation'
        width={props.width}
      />
    </picture>
  );
}
