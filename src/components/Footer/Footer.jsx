import { For } from 'solid-js';
import LangSwitch from '../LangSwitch/LangSwitch';
import styles from './Footer.module.scss';

export default function Footer(props) {
  return (
    <footer
      classList={{
        [styles['footer']]: true,
        [props.classes]: props.classes,
      }}
    >
      <LangSwitch {...props.langSwitch} />

      <ul>
        <For each={props.links}>
          {(link) => (
            <li>
              <a class='link' href={link.link}>{link.text}</a>
            </li>
          )}
        </For>
      </ul>
    </footer>
  );
}

