import styles from './Fieldset.module.scss';

export default function Fieldset(props) {
  return (
    <fieldset
      classList={{
        [styles['fieldset']]: true,
        [props.classes]: props.classes,
      }}
    >
      {props.legend &&
        <legend
          classList={{
            [styles['fieldset__legend--hidden']]: props.legend.hidden,
          }}
        >
          {props.legend.text}
        </legend>
      }

      {props.children}
    </fieldset>
  );
}
