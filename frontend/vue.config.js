const targetUrl = process.env.NODE_ENV === 'production' ? 'https://dev-onrr-cms.app.cloud.gov' : 'http://localhost:8055'

module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  chainWebpack: (config) => {
    const svgRule = config.module.rule('svg');

    svgRule.uses.clear();

    svgRule
      .use('babel-loader')
      .loader('babel-loader')
      .end()
      .use('vue-svg-loader')
      .loader('vue-svg-loader');
  },
  devServer: {
    // proxy: targetUrl
    proxy: {
      
      '^/graphql': {
        target: targetUrl,
        changeOrigin: true,
        secure: true,
        logLevel: 'debug',
      },
      '^/document': {
        target: targetUrl,
        changeOrigin: true,
        secure: true,
        logLevel: 'debug',
      },
      '^/items/NYMEX': {
        target: targetUrl,
        changeOrigin: true,
        secure: true,
        logLevel: 'debug',
      },
      '^/press-releases': {
        target: targetUrl,
        changeOrigin: true,
        secure: true,
        logLevel: 'debug',
      },
      '^/reporter-letters': {
        target: targetUrl,
        changeOrigin: true,
        secure: true,
        logLevel: 'debug',
      },
    }
  }
}
