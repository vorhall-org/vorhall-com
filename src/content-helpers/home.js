import i18n from '../i18n/i18n-home';
import i18nGeneral from '../i18n/i18n-general';
import { useTranslations } from '../i18n/utils';
import { pageRoutes } from './pageRoutes';

export default (locale) => {
  const tAbout = useTranslations(locale, i18n.about);
  const tHeader = useTranslations(locale, i18n.header);
  const tLinks = useTranslations(locale, i18nGeneral.links);
  const tServices = useTranslations(locale, i18n.services);
  const tSite = useTranslations(locale, i18n.site);

  const siteData = {
    description: tSite('description'),
    title: tSite('title'),
  };

  const jumbotronData = {
    heading: {
      level: 1,
      text: tHeader('title'),
      visualLevel: false,
    },
    leadTextContent: tHeader('lead'),
    mainJumbo: true,
  };

  const jumbotronDataServices = {
    heading: {
      id: 'our-services',
      level: 2,
      text: tServices('title'),
      visualLevel: false,
    },
    leadTextContent: tServices('lead'),
    mainJumbo: false,
  };

  const jumbotronDataAbout = {
    heading: {
      id: 'about-us',
      level: 2,
      text: tAbout('title'),
      visualLevel: false,
    },
    leadTextContent: tAbout('lead'),
    mainJumbo: false,
  };

  const serviceCardTeaser1 = {
    button: {
      ariaLabel: tServices('serviceCard1ButtonAriaLabel'),
      click: false,
      color: 'primary',
      externalLink: false,
      externalLinkText: '',
      href: pageRoutes(locale).serviceFrontend,
      iconAfter: {
        name: 'arrowRight',
      },
      label: tServices('serviceCard1ButtonLabel'),
      prefetch: true,
      size: 'l',
      type: 'button',
    },
    classes: '',
    heading: {
      level: '3',
      text: tServices('serviceCard1Title'),
      visualLevel: '4',
    },
    icon: false,
    text: tServices('serviceCard1Text'),
  };

  const serviceCardTeaser2 = {
    button: {
      ariaLabel: tServices('serviceCard2ButtonAriaLabel'),
      click: false,
      color: 'primary',
      externalLink: false,
      externalLinkText: '',
      href: pageRoutes(locale).serviceAccessibility,
      iconAfter: {
        name: 'arrowRight',
      },
      label: tServices('serviceCard2ButtonLabel'),
      prefetch: true,
      size: 'l',
      type: 'button',
    },
    classes: '',
    heading: {
      level: '3',
      text: tServices('serviceCard2Title'),
      visualLevel: '4',
    },
    icon: false,
    text: tServices('serviceCard2Text'),
  };

  const serviceCardTeaser3 = {
    button: {
      ariaLabel: tServices('serviceCard3ButtonAriaLabel'),
      click: false,
      color: 'primary',
      externalLink: false,
      externalLinkText: '',
      href: pageRoutes(locale).serviceWebPerformance,
      iconAfter: {
        name: 'arrowRight',
      },
      label: tServices('serviceCard3ButtonLabel'),
      prefetch: true,
      size: 'l',
      type: 'button',
    },
    classes: '',
    heading: {
      level: '3',
      text: tServices('serviceCard3Title'),
      visualLevel: '4',
    },
    icon: false,
    text: tServices('serviceCard3Text'),
  };

  const serviceCardTeaser4 = {
    button: {
      ariaLabel: tServices('serviceCard4ButtonAriaLabel'),
      click: false,
      color: 'primary',
      externalLink: false,
      externalLinkText: '',
      href: pageRoutes(locale).serviceDigitalSustainability,
      iconAfter: {
        name: 'arrowRight',
      },
      label: tServices('serviceCard4ButtonLabel'),
      prefetch: true,
      size: 'l',
      type: 'button',
    },
    classes: '',
    heading: {
      level: '3',
      text: tServices('serviceCard4Title'),
      visualLevel: '4',
    },
    icon: false,
    text: tServices('serviceCard4Text'),
  };

  const serviceCardTeaser5 = {
    button: {
      ariaLabel: tServices('serviceCard5ButtonAriaLabel'),
      click: false,
      color: 'primary',
      externalLink: false,
      externalLinkText: '',
      href: pageRoutes(locale).serviceDesignSystems,
      iconAfter: {
        name: 'arrowRight',
      },
      label: tServices('serviceCard5ButtonLabel'),
      prefetch: true,
      size: 'l',
      type: 'button',
    },
    classes: '',
    heading: {
      level: '3',
      text: tServices('serviceCard5Title'),
      visualLevel: '4',
    },
    icon: false,
    text: tServices('serviceCard5Text'),
  };

  const serviceCardTeaser6 = {
    button: {
      ariaLabel: tServices('serviceCard6ButtonAriaLabel'),
      click: false,
      color: 'primary',
      externalLink: false,
      externalLinkText: '',
      href: pageRoutes(locale).contact,
      iconAfter: {
        name: 'arrowRight',
      },
      label: tServices('serviceCard6ButtonLabel'),
      prefetch: true,
      size: 'l',
      type: 'button',
    },
    classes: '',
    heading: {
      level: '3',
      text: tServices('serviceCard6Title'),
      visualLevel: '4',
    },
    icon: false,
    text: tServices('serviceCard6Text'),
  };

  const avatarCardMarius = {
    avatar: {
      alt: tAbout('avatarMariusAltText'),
      classes: '',
      height: '100',
      image: '/images/marius.jpg',
      width: '100',
    },
    heading: {
      classes: 'avatar-card--heading',
      level: '3',
      text: 'Marius Bleuer',
      visualLevel: '4',
    },
    socialLinks: {
      ariaLabel: tAbout('avatarMariusSocialAriaLabel'),
      socialLinks: [
        {
          color: 'primary',
          externalLink: true,
          externalLinkText: tLinks('externalTarget'),
          hideLabel: true,
          href: 'https://www.linkedin.com/in/mbleuer/',
          iconAfter: false,
          iconBefore: {
            colorFixed: false,
            name: 'linkedin',
          },
          label: 'Linkedin',
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
          href: 'https://github.com/mbleuer',
          iconAfter: false,
          iconBefore: {
            colorFixed: false,
            name: 'github',
          },
          label: 'Github',
          outline: false,
          rawIcon: true,
          size: 's',
          type: 'button',
        },
      ],
    },
    subtitle: tAbout('avatarMariusSubtitle'),
    text: tAbout('avatarMariusText'),
  };

  const avatarCardYves = {
    avatar: {
      alt: tAbout('avatarYvesAltText'),
      classes: '',
      height: '100',
      image: '/images/yves.jpg',
      width: '100',
    },
    heading: {
      classes: 'avatar-card--heading',
      level: '3',
      text: 'Yves Tscherry',
      visualLevel: '4',
    },
    socialLinks: {
      ariaLabel: tAbout('avatarYvesSocialAriaLabel'),
      socialLinks: [
        {
          color: 'primary',
          externalLink: true,
          externalLinkText: tLinks('externalTarget'),
          hideLabel: true,
          href: 'https://www.linkedin.com/in/yves-tscherry/',
          iconAfter: false,
          iconBefore: {
            colorFixed: false,
            name: 'linkedin',
          },
          label: 'Linkedin',
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
          href: 'https://github.com/feerglas',
          iconAfter: false,
          iconBefore: {
            colorFixed: false,
            name: 'github',
          },
          label: 'Github',
          outline: false,
          rawIcon: true,
          size: 's',
          type: 'button',
        },
      ],
    },
    subtitle: tAbout('avatarYvesSubtitle'),
    text: tAbout('avatarYvesText'),
  };

  return {
    avatarCardMarius,
    avatarCardYves,
    jumbotronData,
    jumbotronDataAbout,
    jumbotronDataServices,
    serviceCardTeaser1,
    serviceCardTeaser2,
    serviceCardTeaser3,
    serviceCardTeaser4,
    serviceCardTeaser5,
    serviceCardTeaser6,
    siteData,
  };
};

