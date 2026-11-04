/* eslint-disable sort-keys */
import eslint from '@eslint/js';
import solid from 'eslint-plugin-solid';


/* eslint-disable no-restricted-imports */
import esRules from './lint/es-rules.mjs';
/* eslint-enable no-restricted-imports */

export default [
  eslint.configs.recommended,

  {
    files: [
      '**/*.mjs',
      '**/*.js',
      '**/*.jsx',
    ],
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    plugins: {
      solid,
    },
    rules: {
      ...esRules,
      'no-unassigned-vars': 'off',
      'solid/reactivity': 'warn',
      'solid/no-destructure': 'warn',
      'solid/no-unknown-namespaces': 'error',
      'solid/jsx-no-duplicate-props': 'error',
      'solid/jsx-no-undef': 'error',
      'solid/jsx-uses-vars': 'error',
    },
  },
  {
    ignores: [
      'dist',
      'node_modules',
      '.github',
      '.changeset',
      '.astro/**/*',
      '*.d.ts',
      '*.astro',
      '.netlify',
    ],
  },
];
