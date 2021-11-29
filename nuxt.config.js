import colors from 'vuetify/es5/util/colors'

export default 
{
  ssr: false,
  head:
  {
    titleTemplate: 'Esports United',
    title: 'Esports United',
    meta: [
      { 
        charset: 'utf-8'
       },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: ''
      },
      {
        name: 'format-detection', content: 'telephone=no'
      }
    ],
    link:
    [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      }
    ]
  },

  css: 
  [
  ],

  plugins:
  [
  ],

  components: true,

  buildModules:
  [
    '@nuxtjs/vuetify'
  ],

  modules: 
  [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/firebase'
  ],

  axios: 
  {
  },

  pwa:
  {
    manifest:
    {
      lang: 'en'
    }
  },

  firebase: 
  {
    config: 
    {
      apiKey: "AIzaSyB-AIJeukNAVZROSsafdXT1-Sm9YBJ1YkA",
      authDomain: "e-sports-united.firebaseapp.com",
      databaseURL: "https://e-sports-united-default-rtdb.europe-west1.firebasedatabase.app",
      projectId: "e-sports-united",
      storageBucket: "e-sports-united.appspot.com",
      messagingSenderId: "709643849430",
      appId: "1:709643849430:web:4e2f864b2368e4e859c377",
      measurementId: "G-TPJ4JFTJ9Y"
    },
    services: 
    {
      firestore: true
    }
  },

  vuetify:
  {
    customVariables: ['~/assets/variables.scss'],
    theme:
    {
      dark: true,
      themes:
      {
        dark:
        {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  build:
  {
  }
}