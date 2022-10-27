export default {
  ssr: false,

  target: 'static',

  head: {
    title: 'Opt1mize nuxt starter v1',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  css: [
  ],

  plugins: [
    'plugins/api.ts'
  ],

  components: true,

  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/tailwindcss',
  ],

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth-next'
  ],

  axios: {
    baseURL: process.env.BASE_API_URL
  },

  build: {
    transpile: ['@nuxtjs/auth-next']
  },
  auth: {
    strategies: {
      local: {
        token: {
          property: 'token',
      },
      user: {
          property: false
      },
        endpoints: {
          login: { url: '/api/login', method: 'post' },
          user: { url: '/api/users/2', method: 'get' },
        },
        redirect: {
          login: '/',
          callback: false,
          home: false
        },
        localStorage: true
      }
    }
  }
}
