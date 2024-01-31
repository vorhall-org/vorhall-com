export const defaultLocale = 'en';

export const locales = {
  de: 'de-DE',
  en: 'en-US',
};

export const useTranslations = (lang, translations) => (key) => translations[lang][key] || translations[defaultLocale][key];

export const langRoute = (lang, route) => {

  // home route
  if (route.length === 0 || route === '/') {
    return lang === defaultLocale
      ? '/'
      : `/${lang}/`;
  }

  // routes other than home
  return lang === defaultLocale
    ? `/${route}/`
    : `/${lang}/${route}/`;
};
