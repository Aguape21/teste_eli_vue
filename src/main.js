import Vue from 'vue'
Vue.config.productionTip = false

//Carregar variáveis ambiente
import dotenv from 'dotenv'
dotenv.config()

import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './rotas/rotas'

import InstalarCarregando from './plugins/carregando'
Vue.use(InstalarCarregando)

//carregado pacote de fontes
require('typeface-roboto')
import '@/assets/css/global.css'

//bootstrap

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import '@/assets/css/personalizacaoBootstrap.scss'
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

//carregar funcoes de momentJS
import momentJS from './plugins/momentJS'
momentJS(Vue)

new Vue({
  vuetify,
  router,
  render: (h) => h(App),
}).$mount('#app')
