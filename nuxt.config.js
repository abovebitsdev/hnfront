module.exports = {
  /*
  ** Router config
  */
  router: {
    middleware: 'check-auth'
  },

  /*
  ** Headers of the page
  */
  head: {
    title: 'Here and Now',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'HalfHelix project' },
      { name: 'msapplication-TileColor', content: '#ffffff' },
      { name: 'theme-color', content: '#ffffff' },
      { name: 'msapplication-TileImage', content: '/images/favicon/ms-icon-144x144.png' }
    ],
    link: [
      { rel: 'apple-touch-icon', size: '57x57', href: '/images/favicon/apple-icon-57x57.png' },
      { rel: 'apple-touch-icon', size: '60x60', href: '/images/favicon/apple-icon-60x60.png' },
      { rel: 'apple-touch-icon', size: '72x72', href: '/images/favicon/apple-icon-72x72.png' },
      { rel: 'apple-touch-icon', size: '76x76', href: '/images/favicon/apple-icon-76x76.png' },
      { rel: 'apple-touch-icon', size: '114x114', href: '/images/favicon/apple-icon-114x114.png' },
      { rel: 'apple-touch-icon', size: '120x120', href: '/images/favicon/apple-icon-120x120.png' },
      { rel: 'apple-touch-icon', size: '144x144', href: '/images/favicon/apple-icon-144x144.png' },
      { rel: 'apple-touch-icon', size: '152x152', href: '/images/favicon/apple-icon-152x152.png' },
      { rel: 'apple-touch-icon', size: '180x180', href: '/images/favicon/apple-icon-180x180.png' },
      { rel: 'icon', type: 'image/png', size: '192x192', href: '/images/favicon/android-icon-192x192.png' },
      { rel: 'icon', type: 'image/png', size: '32x32', href: '/images/favicon/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', size: '96x96', href: '/images/favicon/favicon-96x96.png' },
      { rel: 'icon', type: 'image/png', size: '16x16', href: '/images/favicon/favicon-16x16.png' },
      { rel: 'manifest', href: '/images/favicon/manifest.json' },


      { rel: 'stylesheet', type: 'text/css', href: 'https://fonts.googleapis.com/css?family=IBM+Plex+Sans+Condensed|Roboto' }
    ],
    script: [
      { src: 'https://js.stripe.com/v3' },
      { src: 'https://checkout.stripe.com/checkout.js' }
    ]
  },
  css: [
    { src: '~assets/style/main.scss', lang: 'scss' },
    { src: '~static/slick/slick.css', lang: 'css' },
    { src: '~static/slick/slick-theme.css', lang: 'css' },
  ],
  plugins: [
    { src: '~/plugins/plugins.js', ssr: false },
    { src: '~/plugins/cms.js', ssr: false },
    { src: '~/plugins/moment.js', ssr: false },
    { src: '~/plugins/humanize-string.js', ssr: false },
    { src: '~/plugins/fadescroll.js', ssr: false },
    { src: '~/api/config.js', ssr: false }
  ],

  /*
  ** Customize the progress bar color
  */

  loading: { color: '#000' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    vendor: ['axios'],

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
  },
  env: {
    apiPrismicUrl: 'https://here-and-now.cdn.prismic.io' || 'http://localhost:3000',
    api: {
      //* host: process.env.API_HOST || 'http://localhost:3001/api/v1' */
      host: 'https://here-and-now-api-staging.herokuapp.com/api/v1' || 'http://localhost:3001/api/v1'
    },
    stripe: {
      key: process.env.STRIPE_KEY || 'pk_test_aXT74uDIswL1StP04hDYGVWE'
    }
  }

}
