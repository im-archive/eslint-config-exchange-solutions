module.exports = {
  extends: [
    'eslint-config-airbnb',
    'eslint-config-exchange-solutions/core'
  ].map(require.resolve)
};
