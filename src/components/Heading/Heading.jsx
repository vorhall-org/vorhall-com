import { Dynamic } from 'solid-js/web';
import styles from './Heading.module.scss';

export default function Heading(props) {
  return (
    <Dynamic
      component={`h${props.level}`}
      classList={{
        [styles['heading']]: true,
        [props.classes]: props.classes,
        [styles[`heading--level-${props.visualLevel || props.level}`]]: true,
      }}
      id={ props.id
        ? props.id
        : undefined
      }
    >
      <span innerHTML={props.text}/>
    </Dynamic>
  );
}
