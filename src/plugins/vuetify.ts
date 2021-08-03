/*
Tutorial para icones
https://vuetifyjs.com/en/features/icon-fonts/#material-icons
*/

import Vue from 'vue'
import Vuetify from 'vuetify/lib/framework'
import '@mdi/font/css/materialdesignicons.css'

Vue.use(Vuetify)

export default new Vuetify({
  icons: {
    iconfont: 'mdi', // default - only for display purposes
  },

  theme: {
    disable: true,
    themes: {
      light: {
        primary: '#688c00',
        success: '#f9df48',
        info: '#247373',
        warning: '#f9a354',
        danger: '#fe5252',
        anchor: '#8c9eff',
      },
    },
  },
})
