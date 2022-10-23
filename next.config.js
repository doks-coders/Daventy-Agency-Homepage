module.exports = {
    async rewrites() {
      return [
        {
          source: '/MySitemap.xml',
          destination: '/api/sitemap',
        },
      ]
    },
  }