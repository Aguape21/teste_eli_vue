
import Vue from 'vue'
import VueRouter from 'vue-router'
import autenticacao from '../plugins/autenticacao'

//Importar componentes do tipo páginas
import eli_login from '../paginas/eli-login.vue'
import eli_publicoRelatorio from '../paginas/eli-publicoRelatorio.vue'
import eli_passagem from '../paginas/eli-passagem.vue'
import eli_usuarios from '../paginas/eli-usuarios.vue'

Vue.use(VueRouter)


const autenticar = {
  //tratamento antes ir para página de login
  //se já tiver autenticado redireciona para painel ou página bloqueada
  login: (to, from, next) => {
    //bloqueia acesso a página de login na produção
    if (process.env.NODE_ENV == 'production') {
      window.location.href = 'https://app.e-licencie.com.br/'
    }
 
    if (autenticacao.autenticado()) {
      next('/passagem')
    } else {
      next()
    }
  },

  //página publica, não precisa de autenticação
  publico: (to, from, next) => {
    next()
  },

  //tratamento antes de acessar página que precisa de autenticação
  //se não tiver autenticado rerireciona para login
  privado: (to, from, next) => {

    if (autenticacao.autenticado()) {
      next()
    } else {
      next('/')
    }
  },
}

const routes = [
  //página de login
  {
    path: '/',
    name: 'login',
    component: eli_login,
    meta: { ex: 'ex' },
    beforeEnter: autenticar.login,
  },

  //página de relatórios publicos
  {
    path: '/publico/relatorios/:codigo',
    name: 'publicoRelatorios',
    component: eli_publicoRelatorio,
    beforeEnter: autenticar.publico,
  },

  //página de passagem para teste
  {
    path: '/passagem',
    name: 'passagem',
    component: eli_passagem,
    beforeEnter: autenticar.privado,
  },


    //página de cadastro de usuários
    {
      path: '/usuarios',
      name: 'usuarios',
      component: eli_usuarios,
      beforeEnter: autenticar.privado,
    },

]

const router = new VueRouter({
  routes,
})

export default router
