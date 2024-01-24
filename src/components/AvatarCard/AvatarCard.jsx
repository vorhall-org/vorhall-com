import styles from './AvatarCard.module.scss';
import Heading from '../Heading/Heading';
import Avatar from '../Avatar/Avatar';

export default function AvatarCard(props) {
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
        <p>{props.subtitle}</p>
        <p>{props.text}</p>
      </div>
    </li>
  );
}
