import { For } from 'solid-js';
import Button from '@/components/Button/Button';
import styles from '@/components/SocialLinks/SocialLinks.module.scss';

export default function SocialLinks(props) {
  return (
    <ul
      aria-label={props.ariaLabel}
      classList={{
        [styles['social-link-list']]: true,
        [props.classes]: props.classes,
      }}
    >
      <For each={props.socialLinks}>
        {(link) => (
          <li>
            <Button {...link} />
          </li>
        )}
      </For>
    </ul>
  );
}
