<!--

É um componente com todos os recursos necessários para exebição de consulta de 
recursos

-->

<template>
  <v-container style="min-height: 500px;" fluid class="grey lighten-4">
    <b-row>
      <b-col cols="12">
        <eli-barraNavegacao />
      </b-col>
    </b-row>

    <div class="p-2">
      <b-row
        v-for="(linha, idz) in linhas"
        :key="linha.codigo"
        :style="{ 'background-color': idz % 2 ? '#E9FFF4' : '#ffffff' }"
      >
        <b-col cols="6" sm="4" md="2">
          <eli-celulaConsulta titulo="Empreendedor">
            José Carlos da Silva
          </eli-celulaConsulta>
        </b-col>

        <b-col cols="12" sm="8" md="4">
          <eli-celulaConsulta />
        </b-col>

        <b-col cols="12" sm="8" md="4">
          <eli-celulaConsulta />
        </b-col>
        <b-col cols="1" sm="1" md="1">
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
          <eli-paginacao v-model="pagina"></eli-paginacao>
        </b-col>
      </b-row>
    </div>
  </v-container>
</template>
<script lang="ts">
import Vue from 'vue'

import eli_barraNavegacao from '../eli-barraNavegacao.vue'
import eli_celulaConsulta from '../tabela-consulta/eli-celulaConsulta.vue'
import eli_paginacao from '../eli-paginacao.vue'

export default Vue.extend({
  components: {
    'eli-barraNavegacao': eli_barraNavegacao,
    'eli-celulaConsulta': eli_celulaConsulta,
    'eli-paginacao': eli_paginacao,
  },
  props: { value: String, linhas: Array },
  data: function () {
    return { pagina: 99 as number }
  },
  //created: function () {},
  methods: {
    atualizarVModel() {
      this.$emit('input', this.value)
    },
  },
})
</script>
<style scoped></style>
