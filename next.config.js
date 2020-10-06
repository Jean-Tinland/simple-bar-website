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
  }
}
