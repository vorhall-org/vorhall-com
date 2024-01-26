import i18n from '../i18n/i18n-general';
import { useTranslations } from '../i18n/utils';

export default (locale) => {
  const tContact = useTranslations(locale, i18n.contact);
  const tFooter = useTranslations(locale, i18n.footer);
  const tSite = useTranslations(locale, i18n.site);
  const tLinks = useTranslations(locale, i18n.links);

  const contactFormData = {
    button: {
      click: false,
      color: 'primary',
      externalLink: false,
      href: '',
      iconAfter: false,
      iconBefore: false,
      label: tContact('submitButtonText'),
      outline: false,
      rawIcon: false,
      size: 'l',
      type: 'submit',
    },

    fieldsets: [
      {
        fields: [
          {
            element: {
              name: 'email',
              props: {
                classes: '',
                disabled: false,
                label: {
                  inputId: 'input-id',
                  text: tContact('emailInputLabel'),
                },
                name: 'email',
                placeholder: tContact('emailInputPlaceholder'),
                required: false,
                size: 'regular',
                type: 'email',
              },
            },
            name: 'email',
            validate: [
              {
                text: tContact('emailInputErrorRequired'),
                type: 'required',
              },
              {
                text: tContact('emailInputErrorMalformed'),
                type: 'email',
              },
            ],
          },
          {
            element: {
              name: 'name',
              props: {
                classes: '',
                disabled: false,
                label: {
                  inputId: 'input-id',
                  text: tContact('nameInputLabel'),
                },
                name: 'name',
                placeholder: tContact('nameInputPlaceholder'),
                required: false,
                size: 'regular',
                type: 'text',
              },
            },
            name: 'name',
            validate: [
              {
                text: tContact('nameInputErrorRequired'),
                type: 'required',
              },
            ],
          },
          {
            element: {
              name: 'Textarea',
              props: {
                cols: '30',
                disabled: false,
                id: 'textarea-id',
                label: {
                  inputId: 'textarea-id',
                  text: tContact('messageLabel'),
                },
                name: 'textarea-name',
                placeholder: tContact('messagePlaceholder'),
                required: true,
                rows: '5',
              },
            },
            name: 'text',
            validate: [
              {
                text: tContact('messageErrorRequired'),
                type: 'required',
              },
            ],
          },
        ],
        legend: {
          hidden: true,
          text: tContact('legend'),
        },
      },
    ],
    privacyNote: tContact('privacyNote'),
  };

  const jumbotronContact = {
    heading: {
      level: 2,
      text: tContact('title'),
      visualLevel: false,
    },
    leadTextContent: tContact('lead'),
    mainJumbo: false,
  };

  const siteData = {
    description: tSite('description'),
    title: tSite('title'),
  };

  const footerData = {
    copyright: tFooter('copyright'),
    langSwitch: {
      link: '#',
      text: tFooter('langSwitchText'),
    },
    legalLinks: [
      {
        link: '#',
        text: tFooter('linkDataPrivacy'),
      },
      {
        link: '#',
        text: tFooter('linkImpressum'),
      },
    ],
    socialLinks: [
      {
        color: 'primary',
        externalLink: true,
        externalLinkText: tLinks('externalTarget'),
        hideLabel: true,
        href: 'https://www.sbb.ch',
        iconAfter: false,
        iconBefore: {
          colorFixed: false,
          name: 'linkedin',
        },
        label: tFooter('linkLinkedin'),
        outline: false,
        rawIcon: true,
        size: 's',
        type: 'button',
      },
      {
        color: 'primary',
        externalLink: true,
        externalLinkText: tLinks('externalTarget'),
        hideLabel: true,
        href: 'https://www.sbb.ch',
        iconAfter: false,
        iconBefore: {
          colorFixed: false,
          name: 'github',
        },
        label: tFooter('linkGithub'),
        outline: false,
        rawIcon: true,
        size: 's',
        type: 'button',
      },
    ],
  };

  return {
    contactFormData,
    footerData,
    jumbotronContact,
    siteData,
  };
};
