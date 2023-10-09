import { translations, } from "./translations";

export const defaultLocale = 'en';

export const locales = {
  en: 'en-US',
  de: 'de-DE',
};

export function useTranslations(lang) {
  return function t(key) {
    return translations[lang][key] || translations[defaultLocale][key];
  }
}