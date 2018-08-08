const Prismic = require('prismic-javascript')

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Faburo',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Work+Sans:400,600' }
    ],
    script: [
      { src: 'js/prismic-toolbar.js' },
      { src: 'https://static.cdn.prismic.io/prismic.min.js' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#00ff8b' },
  /*
  ** Plugins
  */
  plugins: [
    { src: '~/plugins/vue-prismic.js', ssr: false },
    { src: '~/plugins/vue-cookie.js', ssr: false }
  ],
  /*
  ** Generate Dynamic Routes **
  */
 generate: {
  routes: () => {
    return Prismic.getApi('https://faburo.prismic.io/api/v2')
      .then(api => {
        return api.query(
          Prismic.Predicates.at('document.type', 'page'),
          { orderings: '[my.page.date desc]' }
        )
      })
      .then((res) => {
        return res.results.map((page) => {
          return page.uid
        })
      })
    }
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      // Allow Rich Fields for Prismic
      config.resolve.alias['vue$'] = 'vue/dist/vue.esm.js'
      config.resolve.extensions = ['*', '.js', '.vue', '.json']
      // 
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
