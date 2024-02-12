import { For } from 'solid-js';
import Button from '../Button/Button';
import Link from '../Link/Link';
import SocialLinks from '../SocialLinks/SocialLinks';
import styles from './Footer.module.scss';

export default function Footer(props) {
  return (
    <footer
      aria-label={props.ariaLabel}
      classList={{
        [styles['footer']]: true,
        [props.classes]: props.classes,
      }}
    >

      {/* Social Links */}
      <div class={styles['footer__bottom-wrapper']}>
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

        <SocialLinks
          {...props.socialLinks}
          classes={styles['footer__social-links']}
        />

        <div
          classList={{
            [styles['footer__lang-switch-wrapper']]: true,
          }}
        >
          {/* Language */}
          <Button
            href={props.langSwitch.link}
            classes={styles['footer__lang-switch']}
            color='gray'
            label={props.langSwitch.text}
            outline={true}
            prefetch={props.langSwitch.prefetch}
            size='s'
          />
        </div>

      </div>

      <p class={styles['footer__copyright']}>
        {props.copyright}
      </p>

    </footer>
  );
}

