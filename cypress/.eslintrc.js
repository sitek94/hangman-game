module.exports = {
  root: true,
  plugins: ['eslint-plugin-cypress'],
  extends: ['react-app', 'plugin:cypress/recommended'],
  env: { 'cypress/globals': true },
  rules: {
    'cypress/no-unnecessary-waiting': 'off',
  },
};
