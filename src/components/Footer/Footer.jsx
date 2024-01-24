import { For } from 'solid-js';
import Link from '../Link/Link';
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
            <li class={styles['footer__legal-link-item']}>
              <Link
                classes={styles['footer__legal-link']}
                href={link.link}
              >
                {link.text}
              </Link>
            </li>
          )}
        </For>
      </ul>

      {/* Social Links */}
      <div class={styles['footer__bottom-wrapper']}>
        <ul class={styles['footer__social-link-list']}>
          <For each={props.socialLinks}>
            {(link) => (
              <li class={styles['footer__social-link-item']}>
                <Link
                  classes={styles['footer__social-link']}
                  href={link.link}
                >
                  {link.icon}
                </Link>
              </li>
            )}
          </For>
        </ul>

        {/* Copyright */}
        <p class={styles['footer__copyright']}>
          {props.copyright}
        </p>

        {/* Language */}
        <Link
          href={props.langSwitch.link}
          classes={styles['footer__lang-switch']}
        >
          {props.langSwitch.text}
        </Link>
      </div>

    </footer>
  );
}

