import styles from './Jumbotron.module.scss';
import Heading from '../Heading/Heading';
import LeadText from '../LeadText/LeadText';

export default function Jumbotron(props) {
  return (
    <section
      classList={{
        [styles['jumbotron']]: true,
        [props.classes]: props.classes,
      }}
    >
      {props.heading &&
        <Heading
          {...props.heading}
          classes={styles['jumbotron__heading']}
        />
      }

      {props.leadText &&
        <LeadText {...props.leadText}>
          {props.leadTextContent}
        </LeadText>
      }
    </section>
  );
}
