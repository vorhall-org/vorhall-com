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
      <Avatar {...props.avatar} />
      <Heading {...props.heading} />
      <p>{props.subtitle}</p>
      <p>{props.text}</p>
    </li>
  );
}
