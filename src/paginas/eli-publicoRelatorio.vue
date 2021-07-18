<!--
#/publico/relatorios/5d750d15-c31b-47d8-8984-a20fe5723895
-->
<template>
  <eli-centro></eli-centro>
</template>

<script>
import eli_centro from '../componentes/modelos/eli-centro.vue'
import Relatorios from '../modelos/relatorios'

export default {
  components: {
    'eli-centro': eli_centro,
  },
  data: function () {
    return {
      codigoRelatorio: '',
    }
  },
  created: function () {
    debugger
    console.log(process.env)
    this.codigoRelatorio = this.$route.params.codigo
    this.carregarRelatorio()
  },

  methods: {
    carregarRelatorio() {
      this.relatorio = new Relatorios()
      this.relatorio.abrir()
    },
  },
}
</script>

<style></style>
