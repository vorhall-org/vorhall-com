import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:8888/',
    /* eslint-disable no-empty-function */
    setupNodeEvents() {},
    /* eslint-enable no-empty-function */
  },
  projectId: 'd4druh',
});
