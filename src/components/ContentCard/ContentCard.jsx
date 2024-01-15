import styles from './ContentCard.module.scss';
import Heading from '../Heading/Heading';

export default function ContentCard(props) {
  return (
    <li
      classList={{
        [styles['content-card']]: true,
        [props.classes]: props.classes,
      }}
    >
      <div class='card-card-wrapper'>
        <Heading {...props.heading} />
        <p class='card-card-text'>
          {props.text}
        </p>
      </div>
    </li>
  );
}
