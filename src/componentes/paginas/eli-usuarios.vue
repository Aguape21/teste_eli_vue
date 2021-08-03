<template>
  <eli-baseMenuPainel>
    <eli-panelConsulta :linhas="linhas" :colunas="colunas"></eli-panelConsulta>
  </eli-baseMenuPainel>
</template>

<script lang="ts">
import eli_baseMenuPainel from '../retratos/eli-baseMenuPainel.vue'
import eli_panelConsulta from '../ferramentas/tabela-consulta/eli-panelConsulta.vue'
import Usuarios from '../../modelos/usuarios'

import Vue from 'vue'
export default Vue.extend({
  components: {
    'eli-baseMenuPainel': eli_baseMenuPainel,
    'eli-panelConsulta': eli_panelConsulta,
  },

  data: () => ({
    linhas: [] as Usuarios[],
    colunas: [
      { titulo: 'Cargo', valor: (item: Usuarios) => item.cargo, tamanho: 2 },
      { titulo: 'Nome', valor: (item: Usuarios) => item.nome, tamanho: 2 },
      { titulo: 'E-mail', valor: (item: Usuarios) => item.email, tamanho: 3 },
      {
        titulo: 'Telefone',
        valor: (item: Usuarios) => item.telefone,
        tamanho: 2,
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
    ],
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
