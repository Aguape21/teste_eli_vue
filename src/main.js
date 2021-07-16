import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'

//Importar componentes que serão disponíveis de forma global

import baseMenuPainel from './componentes/modelos/baseMenuPainel.vue'
Vue.component('baseMenuPainel', baseMenuPainel)



Vue.config.productionTip = false

Vue.component()

new Vue({
  vuetify,
  render: (h) => h(App)
}).$mount('#app')
