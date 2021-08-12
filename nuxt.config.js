import colors from 'vuetify/es5/util/colors'

export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    titleTemplate: '%s - web3',
    title: 'web3',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
    '@nuxtjs/proxy',
  ],

  axios: {
    proxy: true
  },

  proxy: {
    "/api/": {
      target: process.env.BASE_URL,
      secure: false
    },
  },

  auth: {
    strategies: {
      local: {
        token: {
          property: 'token',
          global: true,
          // required: true,
          // type: 'Bearer'
        },
        user: {
          property: 'email',
          // autoFetch: true
        },
        endpoints: {
          login: { 
            url: '/api/authentication_token', 
            method: 'post' 
          },
          logout: { 
            url: '/api/users/me', 
            method: 'get' 
          },
          user: { 
            url: '/api/users/me', 
            method: 'get' 
          }
        }
      }
    }
  },

  router: {
    middleware: ['auth']
  },

  // Vuetify module configuration (https://go.nuxtjs.dev/config-vuetify)
  // vuetify: {
  //   customVariables: ['~/assets/variables.scss'],
  //   theme: { disable: true },
  // },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
