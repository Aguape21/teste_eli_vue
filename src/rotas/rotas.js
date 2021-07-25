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
    //faz o redirecionamento de link referente a V1
    if (to.fullPath.startsWith('/#!/')) {
      window.location.replace(to.fullPath)
      return
    }

    if (autenticacao.autenticado()) {
      next()
    } else {
      next('/')
    }
  },
}

//grupo de rotas para o menu
// eslint-disable-next-line no-unused-vars
export const gruposMenu = [
  {
    nome: 'Cadastros',
    icone: 'fa-folder-open',
    rotas: [
      //página de cadastro de usuários
      {
        path: '/usuarios',
        name: 'usuarios',
        component: eli_usuarios,
        meta: { nome: 'Usuarios', icone: 'fa-users' },
        beforeEnter: autenticar.privado,
      },

      //página de licenciadores
      {
        path: '/#!/licenciadores',
        name: 'licenciadores',
        meta: { nome: 'Licenciadores', icone: '' },
        beforeEnter: autenticar.privado,
      },

      //página de empreendedores
      {
        path: '/#!/empreendedor',
        name: 'empreendedores',
        meta: { nome: 'Empreendedores', icone: '' },
        beforeEnter: autenticar.privado,
      },

      //página de empreendimentos
      {
        path: '/#!/empreendimentos',
        name: 'empreendimentos',
        meta: { nome: 'Empreendimentos', icone: '' },
        beforeEnter: autenticar.privado,
      },
    ],
  },

  {
    nome: 'Projetos',
    icone: '',
    rotas: [
      //página de cadastro projetos
      {
        path: '/#!/projeto',
        name: 'projetos_e_tarefas',
        component: eli_usuarios,
        meta: { nome: 'Projetos e Tarefas', icone: '' },
        beforeEnter: autenticar.privado,
      },
    ],
  },

  {
    nome: 'Licenciamento',
    icone: '',
    rotas: [
      //página de cadastro projetos
      {
        path: '/#!/licencas',
        name: 'licencas_e_condicionantes',
        component: eli_usuarios,
        meta: { nome: 'Licenças e Condicionantes', icone: '' },
        beforeEnter: autenticar.privado,
      },
    ],
  },

  {
    nome: 'Compromissos',
    icone: '',
    rotas: [
      //página de cadastro projetos
      {
        path: '/#!/compromissos',
        name: 'compromissos',
        component: eli_usuarios,
        meta: { nome: 'Gestão de Compromissos', icone: '' },
        beforeEnter: autenticar.privado,
      },
    ],
  },

  {
    nome: 'Relatórios',
    icone: '',
    rotas: [
      {
        path: '/#!/relatorioCompromissos',
        name: 'relatorioCompromissos',
        meta: { nome: 'Compromissos', icone: '' },
        beforeEnter: autenticar.privado,
      },
      {
        path: '/#!/relatorioProjetoAnalitico',
        name: 'relatorioProjetoAnalitico',
        meta: { nome: 'Projeto Analítico', icone: '' },
        beforeEnter: autenticar.privado,
      },
      {
        path: '/#!/relatorioDeProjetos',
        name: 'relatorioDeProjetos',
        meta: { nome: 'Projetos', icone: '' },
        beforeEnter: autenticar.privado,
      },
      {
        path: '/#!/relatorioLicenciamentos',
        name: 'relatorioLicenciamentos',
        meta: { nome: 'Licenciamentos', icone: '' },
        beforeEnter: autenticar.privado,
      },
      {
        path: '/#!/relatorioLicencas',
        name: 'relatorioLicencas',
        meta: { nome: 'Licenças', icone: '' },
        beforeEnter: autenticar.privado,
      },
      {
        path: '/#!/relatorioCondicionantesOperacional',
        name: 'relatorioCondicionantesOperacional',
        meta: { nome: 'Condicionantes Operacional', icone: '' },
        beforeEnter: autenticar.privado,
      },
      {
        path: '/#!/relatorioCondicionantesGerencial',
        name: 'relatorioCondicionantesGerencial',
        meta: { nome: 'Condicionantes Gerencial', icone: '' },
        beforeEnter: autenticar.privado,
      },
    ],
  },

  {
    nome: 'Paineis',
    icone: '',
    rotas: [

      {
        path: '/#!/permissoesEmpreendedores',
        name: 'permissoesEmpreendedores',
        meta: { nome: 'Permissões para Empreendedores', icone: '' },
        beforeEnter: autenticar.privado,

      },
      {
        path: '/#!/permissoesEmpreendimentos',
        name: 'permissoesEmpreendimentos',
        meta: { nome: 'Permissões para Empreendimentos', icone: '' },
        beforeEnter: autenticar.privado,

      },
      {
        path: '/#!/agenda',
        name: 'agenda',
        meta: { nome: 'Agenda', icone: '' },
        beforeEnter: autenticar.privado,
  
      },
      {
        path: '/#!/ganttProjeto',
        name: 'ganttProjeto',
        meta: { nome: 'Gráfico de Projetos', icone: '' },
        beforeEnter: autenticar.privado,

      },
      {
        path: '/#!/home',
        name: 'home',
        meta: { nome: 'Tela de Inicio (Antiga)', icone: '' },
        beforeEnter: autenticar.privado,

      },
      {
        path: '/#!/midia',
        name: 'midia',
        meta: { nome: 'Mídia', icone: '' },
        beforeEnter: autenticar.privado,
      },
    ],
  },
]

//Rotas fora do menu
const fotasFora = [
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
]

const routes = [].concat(
  fotasFora,
  gruposMenu
    .map((a) => a.rotas)
    .reduce((lista, atual) => [].concat(lista, atual), []),
)

export const router = new VueRouter({
  routes,
})
