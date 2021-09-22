const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { 
                '@primary-color': '#038fde',
                '@secondary-color': '#fa8c16',
                '@text-color': '#545454',
                '@heading-color': '#535353',
                '@nav-dark-bg': '#003366',
                '@header-text-color': '#262626',
                '@layout-header-background': '#fefefe',
                '@layout-footer-background': '#fffffd',
                '@nav-dark-text-color': '#038fdd',
                '@hor-nav-text-color': '#fffffd',
                '@nav-header-selected-text-color': '#fdbe33'
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};