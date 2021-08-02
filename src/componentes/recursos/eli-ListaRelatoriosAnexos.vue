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
        <h5>
          <b-badge>{{ anexo.extensao() }}</b-badge>
        </h5>
      </b-col>
      <b-col cols="6">
        {{ anexo.objeto.titulo }}
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

import Vue from 'vue'

export default Vue.extend({
  data: () => ({
    anexo: {} as ListaRelatoriosAnexos,
  }),

  created: function () {
    this.carregando(this.carregar())
  },

  methods: {
    async carregar() {
      if (this.objeto) {
        //cria com base em objeto
        this.anexo = new ListaRelatoriosAnexos(this.objeto)
      } else if (this.codigo) {
        //cliar por meio do codigo
        this.anexo = new ListaRelatoriosAnexos()
        await this.anexo.abrir(this.codigo)
      } else if (this.classe) {
        //cria com a classe ja contruida
        this.anexo = this.classe
      } else {
        this.anexo = new ListaRelatoriosAnexos()
      }
    },
  },

  props: {
    codigo: String,
    objeto: Object,
    classe: Object,
  },
})
</script>
<style></style>
