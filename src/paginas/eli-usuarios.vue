<template>
  <eli-baseMenuPainel>
    <eli-panelConsulta :linhas="linhas"></eli-panelConsulta>
  </eli-baseMenuPainel>
</template>

<script lang="ts">
import eli_baseMenuPainel from '../componentes/retratos/eli-baseMenuPainel.vue'
import eli_panelConsulta from '../componentes/ferramentas/tabela-consulta/eli-panelConsulta.vue'
import Usuarios from '../modelos/usuarios'

import Vue from 'vue'
export default Vue.extend({
  components: {
    'eli-baseMenuPainel': eli_baseMenuPainel,
    'eli-panelConsulta': eli_panelConsulta,
  },

  data: () => ({
    linhas: [] as Usuarios[],
  }),

  created: function () {
    this.carregando(this.listar())
  },

  methods: {
    async listar() {
      this.linhas = (await new Usuarios().buscarVarios()).map(
        (a) => new Usuarios(a),
      )
    },
  },
})
</script>

<style></style>
