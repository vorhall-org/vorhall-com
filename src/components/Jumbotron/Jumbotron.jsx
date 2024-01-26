import styles from './Jumbotron.module.scss';
import Heading from '../Heading/Heading';
import LeadText from '../LeadText/LeadText';

export default function Jumbotron(props) {
  return (
    <div
      classList={{
        [styles['jumbotron']]: true,
        [props.classes]: props.classes,
        [styles['jumbotron--main']]: props.mainJumbo,
      }}
    >
      <div class={styles['jumbotron__content']}>
        {props.heading &&
          <Heading
            {...props.heading}
            classes={styles['jumbotron__heading']}
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
