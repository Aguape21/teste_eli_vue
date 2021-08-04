<template>
  <eli-baseMenuPainel>
    <eli-panelConsulta
      v-if="linhas"
      :linhas="linhas"
      :colunas="colunas"
      :paginacao="paginacao"
    ></eli-panelConsulta>
  </eli-baseMenuPainel>
</template>

<script lang="ts">
import eli_baseMenuPainel from '@/componentes/retratos/eli-baseMenuPainel.vue'
import eli_panelConsulta from '@/componentes/ferramentas/tabela-consulta/eli-panelConsulta.vue'
import Usuarios from '@/modelos/usuarios'
import {
  interfaceColuna,
  interfacePaginacaoConsulta,
  interfaceFiltroUrl,
} from '@/componentes/interfacesParaComponentes'
import api from '@/plugins/api'
import { router } from '@/rotas/rotas'

const registrosPorPagina = 1

import Vue from 'vue'
import { interfaceUsuarios } from '@/modelos/esquemasRecursos'
export default Vue.extend({
  components: {
    'eli-baseMenuPainel': eli_baseMenuPainel,
    'eli-panelConsulta': eli_panelConsulta,
  },

  data: () => ({
    linhas: null as Usuarios[] | null,
    colunas: [
      { titulo: 'Cargo', valor: (item: Usuarios) => item.cargo, tamanho: 2 },
      { titulo: 'Nome', valor: (item: Usuarios) => item.nome, tamanho: 2 },
      {
        titulo: 'E-mail',
        valor: (item: Usuarios) => item.email,
        tamanho: 3,
        tipo: 'email',
      },
      {
        titulo: 'Telefone',
        valor: (item: Usuarios) => item.telefone,
        tamanho: 2,
        tipo: 'telefone',
      },
      {
        titulo: 'Administrador',
        valor: (item: Usuarios) => (item.administrador == 'S' ? 'Sim' : 'Não'),
        tamanho: 1,
      },
      {
        titulo: 'Cadastros Base',
        valor: (item: Usuarios) => (item.cadastrosBase == 'S' ? 'Sim' : 'Não'),
        tamanho: 1,
      },
    ] as interfaceColuna[],
    paginacao: {} as interfacePaginacaoConsulta,
  }),

  created: function () {
    this.carregando(this.listar())
  },

  methods: {
    async listar() {
      //Pegar filtro na url
      const filtrosUsuarios: interfaceFiltroUrl =
        this.$route.params.filtrosUsuarios &&
        this.$route.params.filtrosUsuarios != ''
          ? JSON.parse(this.$route.params.filtrosUsuarios)
          : {}

      const busca = await api.graphql(`

      {
          usuarios_varios
          (offset:${filtrosUsuarios.offset || 0}, 
          limit:${registrosPorPagina})
          {
            codigo_corporativo,
            codigo
            nome
            sexo
            data_nascimento
            telefone
            email
            administrador
            cargo
            registro_profissional
            cadastros_base
            data_hora_inclusao
          }
            usuarios_contar
          }
      `)

      //lista de usuarios
      this.linhas = busca.usuarios_varios.map(
        (a: interfaceUsuarios | undefined) => new Usuarios(a),
      )

      //dados de paginação
      this.paginacao = {
        quantidadeRegistros: busca.usuarios_contar,
        offset: filtrosUsuarios.offset || 0,
        limit: registrosPorPagina,
        //ação de navegação ao clicar na páginação
        funcao: (pagina) => {
          router.push({
            name: 'usuarios',
            params: {
              filtrosUsuarios: JSON.stringify({
                offset: pagina * registrosPorPagina,
              }),
            },
          })
        },
      }
    },
  },

  watch: {
    '$route.params.filtrosUsuarios': function () {
            this.carregando(this.listar())

    },
  },
})
</script>

<style></style>
