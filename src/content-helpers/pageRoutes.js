import { langRoute } from '../i18n/utils';

export const pageRoutes = (lang) => ({
  contact: langRoute(lang, 'contact'),
  dataProtection: langRoute(lang, 'data-protection'),
  home: langRoute(lang, ''),
  imprint: langRoute(lang, 'imprint'),
  serviceAccessibility: langRoute(lang, 'services/accessibility'),
  serviceDesignSystems: langRoute(lang, 'services/design-systems'),
  serviceDigitalSustainability: langRoute(lang, 'services/digital-sustainability'),
  serviceFrontend: langRoute(lang, 'services/frontend'),
  serviceWebPerformance: langRoute(lang, 'services/web-performance'),
});
