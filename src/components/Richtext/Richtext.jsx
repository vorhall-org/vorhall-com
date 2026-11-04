import styles from '@/components/Richtext/Richtext.module.scss';

export default function Richtext(props) {

  return (
    <div
      classList={{
        [styles['richtext']]: true,
        [props.classes]: props.classes,
      }}
      innerHTML={props.text}
    />
  );
}
