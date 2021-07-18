import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './rotas/rotas'
import dotenv from 'dotenv'
dotenv.config()

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  render: (h) => h(App),
}).$mount('#app')
