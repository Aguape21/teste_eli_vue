<!--
Componente para exibição de anexo
-->

<template>
  <div></div>
</template>
<script>

import ListaRelatoriosAnexos from '../../modelos/lista_relatorios_anexos'


export default {

     data: () => ({
    item: null,
  }),

  created: function () {

  },

  methods: {
    async carregar() {

      if (this.objeto) {
          this.item = new ListaRelatoriosAnexos(this.objeto)
      } else {
           this.item = new ListaRelatoriosAnexos()
           }

    },
  },

  props: {
    codigo: String,
    objeto: Object,
  },
}
</script>
<style></style>
