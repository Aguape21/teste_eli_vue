import Vue from 'vue'
import VueRouter from 'vue-router'

//Importar componentes do tipo páginas
import eli_login from '../paginas/eli-login.vue'
import eli_publicoRelatorio from '../paginas/eli-publicoRelatorio.vue'

Vue.use(VueRouter)

const routes = [
  //página de login
  {
    path: '/',
    name: 'login',
    component: eli_login,
    beforeEnter: (to, from, next) => {
      //ainda não inplantado, envia para tela inicial
      if (process.env.NODE_ENV == 'production') {
        window.location.href = 'https://app.e-licencie.com.br/'
      } else {
        next()
      }
    },
  },

  //página de relatórios publicos
  {
    path: '/publico/relatorios/:codigo',
    name: 'publicoRelatorios',
    component: eli_publicoRelatorio,
  },
]

const router = new VueRouter({
  routes,
})

export default router
