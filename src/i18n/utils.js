export const defaultLocale = 'en';

export const locales = {
  de: 'de-DE',
  en: 'en-US',
};

export const useTranslations = (lang, translations) => (key) => translations[lang][key] || translations[defaultLocale][key];

export const langRoute = (lang, route) => (lang === defaultLocale
  ? `${route}/`
  : `/${lang}/${route}/`
);
