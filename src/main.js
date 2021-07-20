import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './rotas/rotas'
import dotenv from 'dotenv'
import InstalarCarregando from './plugins/carregando'

//carregado pacote de fontes
require('typeface-roboto')
import '@/assets/css/global.css'


dotenv.config()

Vue.config.productionTip = false

Vue.use(InstalarCarregando);

new Vue({
  vuetify,
  router,
  render: (h) => h(App),
}).$mount('#app')
