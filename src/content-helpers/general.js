import i18n from '../i18n/i18n-general';
import { useTranslations } from '../i18n/utils';
import { pageRoutes } from './pageRoutes';

export default (locale) => {
  const tContact = useTranslations(locale, i18n.contact);
  const tFooter = useTranslations(locale, i18n.footer);
  const tMain = useTranslations(locale, i18n.main);
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
      size: 'xl',
      type: 'submit',
    },

    fieldsets: [
      {
        fields: [
          {
            element: {
              name: 'email',
              props: {
                autocomplete: 'email',
                classes: '',
                disabled: false,
                inputmode: 'email',
                label: {
                  inputId: 'email',
                  text: tContact('emailInputLabel'),
                },
                name: 'email',
                placeholder: tContact('emailInputPlaceholder'),
                required: 'required',
                size: 'large',
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
                autocomplete: 'name',
                classes: '',
                disabled: false,
                label: {
                  inputId: 'name',
                  text: tContact('nameInputLabel'),
                },
                name: 'name',
                placeholder: tContact('nameInputPlaceholder'),
                required: 'required',
                size: 'large',
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
                cols: '20',
                disabled: false,
                id: 'message',
                label: {
                  inputId: 'message',
                  text: tContact('messageLabel'),
                },
                name: 'message',
                placeholder: tContact('messagePlaceholder'),
                required: 'required',
                rows: '10',
                size: 'xl',
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
    postUrl: '/.netlify/functions/send-mail',
    privacyNote: tContact('privacyNote'),
    submitError: tContact('submitErrorMessage'),
    submitSuccess: tContact('submitSuccessMessage'),
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
    homeButtonData: {
      click: false,
      color: 'black',
      externalLink: false,
      href: pageRoutes(locale).home,
      iconAfter: false,
      iconBefore: {
        name: 'home',
      },
      label: tSite('homeButtonText'),
      outline: false,
      prefetch: true,
      rawIcon: false,
      size: 'xl',
      type: 'submit',
    },
    skipLinkData: {
      classes: 'button--skip-link',
      click: false,
      color: 'black',
      externalLink: false,
      href: '#content-area',
      iconAfter: false,
      iconBefore: false,
      label: tSite('skipLinkText'),
      outline: false,
      rawIcon: false,
      size: 'xl',
      skipLink: true,
      type: 'submit',
    },
    title: tSite('title'),
  };

  const mainData = {
    ariaLabel: tMain('ariaLabel'),
  };

  const footerData = (lang, path) => {

    let langSwitchLink = path;

    if (lang === 'de') {
      langSwitchLink = path.replace('/de/', '/');
    } else {
      langSwitchLink = `/de${path}`;
    }

    return {
      copyright: tFooter('copyright'),
      langSwitch: {
        link: langSwitchLink,
        prefetch: true,
        text: tFooter('langSwitchText'),
      },
      legalLinks: [
        {
          link: pageRoutes(lang).dataPrivacy,
          prefetch: true,
          text: tFooter('linkDataPrivacy'),
        },
        {
          link: pageRoutes(lang).impressum,
          prefetch: true,
          text: tFooter('linkImpressum'),
        },
      ],
      socialLinks: {
        socialLinks: [
          {
            color: 'primary',
            externalLink: true,
            externalLinkText: tLinks('externalTarget'),
            hideLabel: true,
            href: 'https://www.linkedin.com/company/vorhall/',
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
            href: 'https://github.com/vorhall-org/',
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
      },
    };
  };

  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    'address': {
      '@type': 'PostalAddress',
      'addressCountry': 'CH',
      'addressLocality': 'Bern',
      'addressRegion': 'Bern',
      'postalCode': '3012',
      'streetAddress': 'Brückfeldstrasse 40',
    },
    'description': `
      We craft solutions thoughtfully balancing user' needs and environmental impact.
      Contact us, if you want to elevate the quality of your digital services.
    `,
    'email': 'info@vorhall.com.com',
    'name': 'Vorhall KLG',
    'url': 'https://vorhall.com',
    'vatID': 'CHE-371.533.033',
  };

  return {
    contactFormData,
    footerData,
    jumbotronContact,
    mainData,
    schemaData,
    siteData,
  };
};
