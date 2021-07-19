<!--
localhost:8080/#/publico/relatorios/08fe691b-9f5b-4d05-9685-3b7ad6e1c6a2
-->
<template>
  <eli-centro>
    <v-card>
    {{ listaRelatorios.descricao }}
    </v-card>
    
    </eli-centro>
</template>

<script>
//template de página
import eli_centro from '../componentes/modelos/eli-centro.vue'
//modelo de objeto
import ListaRelatorios from '../modelos/lista_relatorios'

export default {
  components: {
    'eli-centro': eli_centro,
  },
  data: function () {
    return {
      codigoRelatorio: '',
      listaRelatorios: {},
    }
  },
  created: function () {
    this.codigoRelatorio = this.$route.params.codigo
   this.carregando(this.carregarRelatorio());
  },

  methods: {
    async carregarRelatorio() {
      this.listaRelatorios = await new ListaRelatorios().abrir(
        this.codigoRelatorio,
        ` codigo
        descricao
        nome_arquivo
        nome_usuario_inclusao
        codigos_relatorios_anexos
        codigo_usuario_alteracao`,
        true,
      )
    },
  },
}
</script>

<style></style>
