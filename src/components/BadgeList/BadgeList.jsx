import styles from '@/components/BadgeList/BadgeList.module.scss';
import { For } from 'solid-js';
import Badge from '@/components/Badge/Badge';

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
          <li>
            <Badge {...item} />
          </li>
        )}
      </For>
    </ul>
  );
}
