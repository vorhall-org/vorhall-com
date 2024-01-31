import { langRoute } from '../i18n/utils';

export const pageRoutes = (lang) => ({
  contact: langRoute(lang, 'contact'),
  dataPrivacy: langRoute(lang, 'data-privacy'),
  impressum: langRoute(lang, 'impressum'),
  serviceAccessibility: langRoute(lang, 'services/accessibility'),
  serviceDesignSystems: langRoute(lang, 'services/design-systems'),
  serviceDigitalSustainability: langRoute(lang, 'services/digital-sustainability'),
  serviceFrontend: langRoute(lang, 'services/frontend'),
  serviceWebPerformance: langRoute(lang, 'services/web-performance'),
});
