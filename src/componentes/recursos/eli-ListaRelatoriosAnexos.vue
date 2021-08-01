<!--
Componente para exibição de anexo em linha de tabela
  Props:
    codigo: Codigo do Lista Anexos
    Objeto: Objeto do tipo ListaRelatoriosAnexos
-->

<template>
  <div>
    <b-row>
      <b-col cols="2">
        <img :src="icone()" alt="" />
      </b-col>
      <b-col cols="6">
        {{ anexo.titulo }}
      </b-col>
      <b-col cols="4">
        <b-button-toolbar>
          <b-button-group class="mr-1">
            <b-button
              @click="carregando(anexo.baixar(false))"
              variant="primary"
              title="Baixar"
            >
              <b-icon icon="cloud-download" aria-hidden="true"></b-icon>
            </b-button>

            <b-button
              @click="carregando(anexo.baixar(true))"
              variant="primary"
              title="Abrir em nova aba"
            >
              <b-icon icon="eye" aria-hidden="true"></b-icon>
            </b-button>
          </b-button-group>
        </b-button-toolbar>
      </b-col>
    </b-row>
  </div>
</template>
<script lang="ts">
import ListaRelatoriosAnexos from '../../modelos/lista_relatorios_anexos'
const prettyFileIcons = require('pretty-file-icons')
import Vue from 'vue'

export default Vue.extend({
  data: () => ({
    anexo: null as null | ListaRelatoriosAnexos,
  }),

  created: function () {
    this.carregando(this.carregar())
  },

  methods: {
    async carregar() {
      if (this.objeto) {
        this.anexo = this.objeto
      } else {
        this.anexo = new ListaRelatoriosAnexos()
      }

      if (this.codigo && this.anexo) {
        this.anexo.abrir(this.codigo, true)
      }
    },

    icone() {
      return require('pretty-file-icons/svg/' +
        prettyFileIcons.getIcon(this.anexo?.objeto.nome_arquivo, 'svg'))
    },
  },

  props: {
    codigo: String,
    objeto: Object,
  },
})
</script>
<style></style>
