import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify)

const vuetify = new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#688c00',
      },
    },
  },
})

export default vuetify