import styles from '@/components/ContentCard/ContentCard.module.scss';
import Button from '@/components/Button/Button';
import Heading from '@/components/Heading/Heading';
import Icon from '@/components/Icon/Icon';

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
            [styles['content-card__icon']]: true,
          }}
        >
          <Icon {...props.icon} />
        </div>
      }
      <div
        classList={{
          [styles['content-card__title']]: true,
        }}
      >
        <Heading {...props.heading} />
      </div>
      <p
        classList={{
          [styles['content-card__lead']]: true,
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
