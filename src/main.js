import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'

//Importar componentes do tipo ferramentas que serão disponíveis de forma global

import eli_baseMenuPainel from './componentes/modelos/eli-baseMenuPainel.vue'
Vue.component('eli-baseMenuPainel', eli_baseMenuPainel)

import eli_centro from './componentes/modelos/eli-centro.vue'
Vue.component('eli-centro', eli_centro)

//Importar componentes do tipo páginas
import eli_login from './paginas/eli-login.vue'
Vue.component('eli-login', eli_login)

import publicoRelatorio from './paginas/publicoRelatorio.vue'
Vue.component('publicoRelatorio', publicoRelatorio)





Vue.config.productionTip = false

Vue.component()

new Vue({
  vuetify,
  render: (h) => h(App)
}).$mount('#app')
