<template>
  <eli-baseMenuPainel>
    <eli-panelConsulta
      v-if="linhas"
      :linhas="linhas"
      :colunas="colunas"
      :paginacao="paginacao"
      :funcaoNovoFiltro="atualizarNovosFiltros"
      :funcaoNovaPagina="atualizarMudancaPagina"
      :filtros_busca="filtros_busca"
      :filtrosAplicados="filtrosAplicados"
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
} from '@/ts/interfacesParaComponentes'
import api from '@/ts/api'
import { router } from '@/rotas/rotas'

const registrosPorPagina = 15

import Vue from 'vue'
import { interfaceUsuarios } from '@/modelos/esquemasRecursos'
import {
  tiposCondicao,
  interfaceFiltro,
  condicaoParaQGraphql,
} from '@/ts/filtros'
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
    filtros_busca: [
      {
        coluna: 'nome',
        condicao: tiposCondicao.CONTEM_OU,
      },
      {
        coluna: 'email',
        condicao: tiposCondicao.CONTEM_OU,
      },
      {
        coluna: 'cargo',
        condicao: tiposCondicao.CONTEM_OU,
      },
      {
        coluna: 'telefone',
        condicao: tiposCondicao.CONTEM_OU,
      },
    ] as interfaceFiltro[],

    filtrosAplicados: [] as interfaceFiltro[],
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

      this.filtrosAplicados = filtrosUsuarios.filtros || []

      const busca = await api.graphql(`

      {
          usuarios_varios
          ( 
            ${condicaoParaQGraphql(this.filtrosAplicados, true)}
            offset:${filtrosUsuarios.offset || 0}, 
            limit:${registrosPorPagina}
          )
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
            usuarios_contar${
              condicaoParaQGraphql(filtrosUsuarios.filtros) == ''
                ? ''
                : '(' + condicaoParaQGraphql(filtrosUsuarios.filtros) + ')'
            }
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
      }
    },

    atualizarMudancaPagina(pagina: number) {
      const filtrosUsuarios: interfaceFiltroUrl =
        this.$route.params.filtrosUsuarios &&
        this.$route.params.filtrosUsuarios != ''
          ? JSON.parse(this.$route.params.filtrosUsuarios)
          : {}

      filtrosUsuarios.offset = pagina * registrosPorPagina

      router.push({
        name: 'usuarios',
        params: {
          filtrosUsuarios: JSON.stringify(filtrosUsuarios),
        },
      })
    },

    atualizarNovosFiltros(filtros: interfaceFiltro[]) {
      const filtrosUsuarios: interfaceFiltroUrl =
        this.$route.params.filtrosUsuarios &&
        this.$route.params.filtrosUsuarios != ''
          ? JSON.parse(this.$route.params.filtrosUsuarios)
          : {}

      filtrosUsuarios.offset = 0
      filtrosUsuarios.filtros = filtros

      router.push({
        name: 'usuarios',
        params: {
          filtrosUsuarios: JSON.stringify(filtrosUsuarios),
        },
      })
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
