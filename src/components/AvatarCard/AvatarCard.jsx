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
      <div classList={{
        [styles['avatar-card--image']]: true,
      }}>
        <Avatar {...props.avatar} />
      </div>
      <Heading {...props.heading} />
      <div classList={{
        [styles['avatar-card--lead']]: true,
      }}>
        <p>{props.subtitle}</p>
        <p>{props.text}</p>
      </div>
    </li>
  );
}
