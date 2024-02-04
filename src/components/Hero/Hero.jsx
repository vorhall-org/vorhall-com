import styles from './Hero.module.scss';
import Heading from '../Heading/Heading';
import LeadText from '../LeadText/LeadText';

export default function Hero(props) {
  return (
    <div
      classList={{
        [styles['hero']]: true,
        [props.classes]: props.classes,
      }}
    >
      <div class={styles['hero__diagonal']}>
        <div class={styles['hero__stars']}>
          <div class={styles['hero__star--small']} />
          <div class={styles['hero__star--medium']} />
          <div class={styles['hero__star--big']} />
        </div>
      </div>
      <div class={styles['hero__content']}>
        {props.heading &&
          <Heading
            {...props.heading}
            classes={styles['hero__heading']}
          />
        }

        {props.leadTextContent &&
          <LeadText {...props.leadText}>
            {props.leadTextContent}
          </LeadText>
        }
      </div>
    </div>
  );
}
