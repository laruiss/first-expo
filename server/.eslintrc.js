/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    'standard',
  ],

  rules: {
    'jsx-quotes': [2, 'prefer-double'],
    'comma-dangle': [2, 'always-multiline'],
  },
  overrides: [
    {
      files: [
        'cypress/support/*.{js,ts,jsx,tsx}',
        'cypress/integration/*.{spec,e2e}.{js,ts,jsx,tsx}',
        'src/**/*.ct.{js,ts,jsx,tsx}',
      ],
      extends: [
        'plugin:cypress/recommended',
      ],
    },
    {
      files: [
        'src/**/*.{spec,test}.{js,ts,jsx,tsx}',
      ],
      env: {
        jest: true,
      },
    },
  ],
}
