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
    { src: '~/plugins/vue-prismic.js', ssr: false }
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
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

