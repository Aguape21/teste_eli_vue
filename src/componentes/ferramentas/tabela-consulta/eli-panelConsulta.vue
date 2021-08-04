<!--

É um componente com todos os recursos necessários para exebição de consulta de 
recursos

-->

<template>
  <v-container style="min-height: 500px;" fluid class="grey lighten-4">
    <b-row>
      <b-col cols="12">
        <eli-barraNavegacao></eli-barraNavegacao>
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
            <b-icon
              icon="question-circle-fill"
              font-scale="1"
              aria-label="Help"
            ></b-icon>
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
            :funcao="paginacao.funcao"
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
import {
  interfaceColuna,
  interfacePaginacaoConsulta,
} from '@/componentes/interfacesParaComponentes'

export default Vue.extend({
  components: {
    'eli-barraNavegacao': eli_barraNavegacao,
    'eli-celula': eli_celula,
    'eli-paginacao': eli_paginacao,
  },
  props: {
    value: String,
    linhas: Array,
    colunas: Array as PropType<interfaceColuna[]>,
    paginacao: Object as PropType<interfacePaginacaoConsulta>,
  },
  data: function () {
    return { pagina: 0 as number }
  },
  created: function () {
        this.pagina = ((this.paginacao.offset || 0) / this.paginacao.limit) | 0
  },
  methods: {
    atualizarVModel() {
      this.$emit('input', this.value)
    },
  },
})
</script>
<style scoped></style>
