import { For } from 'solid-js';
import Link from '../Link/Link';
import SocialLinks from '../SocialLinks/SocialLinks';
import styles from './Footer.module.scss';

export default function Footer(props) {
  return (
    <footer
      classList={{
        [styles['footer']]: true,
        [props.classes]: props.classes,
      }}
    >

      {/* Legal Links */}
      <ul class={styles['footer__legal-link-list']}>
        <For each={props.legalLinks}>
          {(link) => (
            <li>
              <Link
                href={link.link}
                secondary={true}
                prefetch={link.prefetch}
              >
                {link.text}
              </Link>
            </li>
          )}
        </For>
      </ul>

      {/* Social Links */}
      <div class={styles['footer__bottom-wrapper']}>
        <SocialLinks
          {...props.socialLinks}
        />

        {/* Copyright */}
        <p class={styles['footer__copyright']}>
          {props.copyright}
        </p>

        {/* Language */}
        <Link
          href={props.langSwitch.link}
          classes={styles['footer__lang-switch']}
          prefetch={props.langSwitch.prefetch}
        >
          {props.langSwitch.text}
        </Link>
      </div>

    </footer>
  );
}

