import styles from './AvatarCard.module.scss';
import Avatar from '../Avatar/Avatar';
import Heading from '../Heading/Heading';
import SocialLinks from '../SocialLinks/SocialLinks';

export default function AvatarCard(props) {

  console.log(styles['avatar-card__social-links']);

  return (
    <li
      classList={{
        [styles['avatar-card']]: true,
        [props.classes]: props.classes,
      }}
    >
      <Avatar
        {...props.avatar}
        classes={styles['avatar-card__image']}
      />

      <Heading
        {...props.heading}
        classes={styles['avatar-card__title']}
      />

      <div classList={{
        [styles['avatar-card__lead']]: true,
      }}>
        <p classList={{
          [styles['avatar-card__subtitle']]: true,
        }}>
          {props.subtitle}
        </p>
        <p classList={{
          [styles['avatar-card__text']]: true,
        }}>
          {props.text}
        </p>
      </div>

      <SocialLinks
        {...props.socialLinks}
        classes={styles['avatar-card__social-links']}
      />
    </li>
  );
}
