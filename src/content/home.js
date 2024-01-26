import i18n from '../i18n/i18n-home';
import i18nGeneral from '../i18n/i18n-general';
import { useTranslations } from '../i18n/utils';

export default (locale) => {
  console.log('###############################');

  const tHeader = useTranslations(locale, i18n.header);
  const tServices = useTranslations(locale, i18n.services);
  const tAbout = useTranslations(locale, i18n.about);
  const tLinks = useTranslations(locale, i18nGeneral.links);

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
      level: 2,
      text: tServices('title'),
      visualLevel: false,
    },
    leadTextContent: tServices('lead'),
    mainJumbo: false,
  };

  const jumbotronDataAbout = {
    heading: {
      level: 2,
      text: tAbout('title'),
      visualLevel: false,
    },
    leadTextContent: tAbout('lead'),
    mainJumbo: false,
  };

  const serviceCardTeaser1 = {
    button: {
      click: false,
      color: 'primary',
      externalLink: true,
      externalLinkText: tLinks('externalTarget'),
      href: '#',
      label: tServices('serviceCard1ButtonLabel'),
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
      click: false,
      color: 'primary',
      externalLink: true,
      externalLinkText: tLinks('externalTarget'),
      href: '#',
      label: tServices('serviceCard2ButtonLabel'),
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
      click: false,
      color: 'primary',
      externalLink: true,
      externalLinkText: tLinks('externalTarget'),
      href: '#',
      label: tServices('serviceCard3ButtonLabel'),
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
      click: false,
      color: 'primary',
      externalLink: true,
      externalLinkText: tLinks('externalTarget'),
      href: '#',
      label: tServices('serviceCard4ButtonLabel'),
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
      click: false,
      color: 'primary',
      externalLink: true,
      externalLinkText: tLinks('externalTarget'),
      href: '#',
      label: tServices('serviceCard5ButtonLabel'),
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
      click: false,
      color: 'primary',
      externalLink: true,
      externalLinkText: tLinks('externalTarget'),
      href: '#',
      label: tServices('serviceCard6ButtonLabel'),
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
  };
};

