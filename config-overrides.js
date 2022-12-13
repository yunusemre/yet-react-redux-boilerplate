const { override, addWebpackAlias } = require('customize-cra');

const path = require('path');

module.exports = override(
  addWebpackAlias({
    '@components': path.resolve(__dirname, './src/components'),
    '@layout': path.resolve(__dirname, './src/layout'),
    '@routers': path.resolve(__dirname, './src/router'),
    '@store': path.resolve(__dirname, './src/store'),
    '@utils': path.resolve(__dirname, './src/utils'),
    '@views': path.resolve(__dirname, './src/views'),
    '@hooks': path.resolve(__dirname, './src/hooks'),
    '@assets': path.resolve(__dirname, './src/assets'),
    '@api': path.resolve(__dirname, './src/api'),
  })
);
