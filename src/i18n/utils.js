import { translations } from './translations';

export const defaultLocale = 'en';

export const locales = {
  de: 'de-DE',
  en: 'en-US',
};

export const useTranslations = (lang) => (key) => translations[lang][key] || translations[defaultLocale][key];
