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

import { BootstrapVue, IconsPlugin, BootstrapVueIcons } from 'bootstrap-vue'
import '@/assets/css/personalizacaoBootstrap.scss'
import 'bootstrap-vue/dist/bootstrap-vue-icons.min.css'
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(BootstrapVueIcons)

//carregar funcoes de momentJS
import momentJS from './plugins/momentJS'
momentJS(Vue)

//rastreio google analytcs
import VueGtag from 'vue-gtag'
Vue.use(
  VueGtag,
  {
    config: { id: 'UA-88695113-4' },
  },
  router,
)

new Vue({
  vuetify,
  router,
  render: (h) => h(App),
}).$mount('#app')
