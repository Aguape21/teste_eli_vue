import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'

//Importar componentes do tipo ferramentas que serão disponíveis de forma global

import baseMenuPainel from './componentes/modelos/baseMenuPainel.vue'
Vue.component('baseMenuPainel', baseMenuPainel)

import centro from './componentes/modelos/centro.vue'
Vue.component('centro', centro)

//Importar componentes do tipo páginas
import login from './paginas/login.vue'
Vue.component('login', login)

import publicoRelatorio from './paginas/publicoRelatorio.vue'
Vue.component('publicoRelatorio', publicoRelatorio)





Vue.config.productionTip = false

Vue.component()

new Vue({
  vuetify,
  render: (h) => h(App)
}).$mount('#app')
