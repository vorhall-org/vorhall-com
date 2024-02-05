import styles from './BadgeList.module.scss';
import { For } from 'solid-js';
import Badge from '../Badge/Badge';

export default function BadgeList(props) {
  return (
    <ul
      classList={{
        [styles['badge-list']]: true,
        [props.classes]: props.classes,
      }}
    >
      <For each={props.items}>
        {(item) => (
          <Badge {...item} />
        )}
      </For>
    </ul>
  );
}
