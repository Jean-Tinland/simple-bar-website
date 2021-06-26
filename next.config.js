const webpack = require('webpack')

module.exports = {
  trailingSlash: true,
  exportPathMap() {
    return {
      '/en': { page: '/', query: { lang: 'en' } },
      '/fr': { page: '/', query: { lang: 'fr' } }
    }
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/en',
        permanent: true
      }
    ]
  },
  webpack: (config) => {
    config.plugins.push(
      new webpack.DefinePlugin({ 'process.env.REACT_APP_ENV': JSON.stringify(process.env.REACT_APP_ENV) })
    )
    return config
  }
}
