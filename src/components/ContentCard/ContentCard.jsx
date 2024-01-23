import styles from './ContentCard.module.scss';
import Button from '../Button/Button';
import Heading from '../Heading/Heading';
import Icon from '../Icon/Icon';

export default function ContentCard(props) {
  return (
    <li
      classList={{
        [styles['content-card']]: true,
        [props.classes]: props.classes,
      }}
    >
      {props.icon &&
        <div
          classList={{
            [styles['content-card--icon']]: true,
          }}
        >
          <Icon {...props.icon} />
        </div>
      }
      <div
        classList={{
          [styles['content-card--title']]: true,
        }}
      >
        <Heading {...props.heading} />
      </div>
      <p
        classList={{
          [styles['content-card--lead']]: true,
        }}
      >
        {props.text}
      </p>
      {props.button &&
        <Button {...props.button} />
      }
    </li>
  );
}
