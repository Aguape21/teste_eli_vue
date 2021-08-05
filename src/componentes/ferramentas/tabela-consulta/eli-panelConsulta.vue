<!--

É um componente com todos os recursos necessários para exebição de consulta de 
recursos

-->

<template>
  <v-container style="min-height: 500px;" fluid class="grey lighten-4">
    <b-row>
      <b-col cols="12" sm="6" md="8">
        <eli-barraNavegacao></eli-barraNavegacao>
      </b-col>

      <b-col cols="12" sm="6" md="4">
        <eli-caixaDeBusca
          @filtrarPelaCaixaDeBusca="filtrarPelaCaixaDeBusca"
          :value="textoCaixaBusca"
        ></eli-caixaDeBusca>
      </b-col>
    </b-row>

    <div class="p-2">
      <b-row
        v-for="(linha, idz) in linhas"
        :key="linha.codigo"
        :style="{ 'background-color': idz % 2 ? '#E9FFF4' : '#ffffff' }"
      >
        <b-col cols="12" sm="10" md="11">
          <b-row>
            <b-col
              v-for="(coluna, idzC) in colunas"
              :key="'celula-' + idzC + linha.codigo"
              :cols="coluna.tamanho * 3 < 12 ? coluna.tamanho * 3 : 12"
              :sm="coluna.tamanho * 2 < 12 ? coluna.tamanho * 2 : 12"
              :md="coluna.tamanho"
            >
              <eli-celula
                :titulo="coluna.titulo"
                :valor="coluna.valor(linha)"
                :tipo="coluna.tipo"
                v-if="coluna.valor(linha) && coluna.valor(linha) != ''"
              ></eli-celula>
            </b-col>
          </b-row>
        </b-col>

        <b-col cols="12" sm="2" md="1">
          <b-button v-b-toggle="'acoes-' + linha.codigo" variant="primary">
            <oh-icon name="fa-share-square" />
          </b-button>
        </b-col>

        <b-collapse :id="'acoes-' + linha.codigo">
          <b-col cols="12">
            <b-button-group>
              <b-button variant="success">Success</b-button>
              <b-button variant="info">Info</b-button>
              <b-button variant="warning">Warning</b-button>
              <b-button variant="success">Success</b-button>
              <b-button variant="info">Info</b-button>
              <b-button variant="warning">Warning</b-button>
              <b-button variant="success">Success</b-button>
              <b-button variant="info">Info</b-button>
              <b-button variant="warning">Warning</b-button>
            </b-button-group>
          </b-col>
        </b-collapse>
      </b-row>

      <b-row>
        <b-col cols="12">
          <eli-paginacao
            v-model="pagina"
            :quantidadeRegistros="paginacao.quantidadeRegistros"
            :registrosPorPagina="paginacao.limit"
            :funcao="funcaoNovaPagina"
          ></eli-paginacao>
        </b-col>
      </b-row>
    </div>
  </v-container>
</template>
<script lang="ts">
import Vue, { PropType } from 'vue'

import eli_barraNavegacao from '@/componentes/ferramentas/eli-barraNavegacao.vue'
import eli_celula from '@/componentes/ferramentas/tabela-consulta/eli-celula.vue'
import eli_paginacao from '@/componentes/ferramentas/eli-paginacao.vue'
import eli_caixaDeBusca from '@/componentes/ferramentas/tabela-consulta/eli-caixaBusca.vue'
import {
  interfaceColuna,
  interfacePaginacaoConsulta,
} from '@/ts/interfacesParaComponentes'
import { interfaceFiltro } from '@/ts/filtros'

export default Vue.extend({
  components: {
    'eli-barraNavegacao': eli_barraNavegacao,
    'eli-celula': eli_celula,
    'eli-paginacao': eli_paginacao,
    'eli-caixaDeBusca': eli_caixaDeBusca,
  },
  props: {
    value: String,
    linhas: Array,
    colunas: Array as PropType<interfaceColuna[]>,
    paginacao: Object as PropType<interfacePaginacaoConsulta>,
    filtros_busca: Array as PropType<interfaceFiltro[]>,
    filtrosAplicados: Array as PropType<interfaceFiltro[]>,
    funcaoNovoFiltro: Function as PropType<
      (filtros: interfaceFiltro[]) => void
    >,
    funcaoNovaPagina: Function as PropType<(pagina: number) => void>,
  },
  data: function () {
    return { pagina: 0 as number, textoCaixaBusca: '' }
  },
  created: function () {
    this.pagina = ((this.paginacao.offset || 0) / this.paginacao.limit) | 0

    //encontrar termo de busca
    if (this.filtrosAplicados && this.filtrosAplicados.length > 0) {
      const ft = this.filtros_busca[0]

      const busca = this.filtrosAplicados.find(
        (a) => a.condicao == ft.condicao && a.coluna == ft.coluna,
      )
      if (busca) {
        this.textoCaixaBusca = (busca.valor || '').toString()
      }
    }
  },
  methods: {
    atualizarVModel() {
      this.$emit('input', this.value)
    },

    filtrarPelaCaixaDeBusca(valor: string) {
      if (valor && valor != '') {
        const filtroFuncao: interfaceFiltro[] = this.filtros_busca.map((a) => {
          a.valor = valor
          return a
        })
        this.funcaoNovoFiltro(filtroFuncao)
      } else {
        this.funcaoNovoFiltro([])
      }
    },
  },
})
</script>
<style scoped></style>
