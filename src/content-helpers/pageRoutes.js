import { langRoute } from '../i18n/utils';

export const pageRoutes = (lang) => ({
  contact: langRoute(lang, 'contact'),
  dataProtection: langRoute(lang, 'data-protection'),
  home: langRoute(lang, ''),
  imprint: langRoute(lang, 'imprint'),
  serviceAccessibility: langRoute(lang, 'services/accessibility'),
  serviceDesignSystems: langRoute(lang, 'services/design-systems'),
  serviceFrontend: langRoute(lang, 'services/frontend'),
  serviceSustainableDigitalization: langRoute(lang, 'services/sustainable-digitalization'),
  serviceWebPerformance: langRoute(lang, 'services/web-performance'),
});
