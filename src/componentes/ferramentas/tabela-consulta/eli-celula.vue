<template>
  <eli-celulaMoldura :titulo="titulo">

    <!-- Tipo e-mail -->
    <div v-if="tipo == 'email'">
      <a :href="'mailto:' + valor">{{ valor }}</a>
    </div>
    
    <!-- Tipo telefone -->
    <div v-else-if="tipo == 'telefone'">
      <a :href="'tel:' + valor">{{ valor }}</a>
    </div>

    <!-- Tipo texto padrão -->
    <div v-else>
      {{ valor }}
    </div>
  </eli-celulaMoldura>
</template>
<script lang="ts">
import Vue from 'vue'
import eli_celulaMoldura from '@/componentes/ferramentas/tabela-consulta/eli-celulaMoldura.vue'

export default Vue.extend({
  components: {
    'eli-celulaMoldura': eli_celulaMoldura,
  },
  props: {
    value: String,
    titulo: { type: String, default: 'Titulo da célula' },
    valor: {},
    tipo: { type: String },
  },
  data: function () {
    return {
      teste: true,
    }
  },
  created: function () {
    this.mudarTeste()
  },
  methods: {
    atualizarVModel() {
      this.$emit('input', this.value)
    },
    mudarTeste() {
      this.teste = false
    },
  },
})
</script>
<style scoped></style>
