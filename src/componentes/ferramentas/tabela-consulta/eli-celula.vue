<template>
  <eli-celulaMoldura :titulo="titulo">
    <!-- Tipo e-mail -->
    <div v-if="tipo == 'email'">
      {{ valor }}
      <a target="_blank" :href="'mailto:' + valor">
        <oh-icon name="md-email-outlined" />
      </a>
    </div>

    <!-- Tipo telefone -->
    <div v-else-if="tipo == 'telefone'">
      {{ numeroNacional(valor) }}
      <a target="_blank" :href="linkLigacao(valor)">
        <oh-icon name="bi-telephone-forward-fill" />
      </a>
      <a target="_blank" :href="linkWhatsApp(valor)">
        <oh-icon name="bi-whatsapp" />
      </a>
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
import { linkWhatsApp, linkLigacao, numeroNacional } from '@/plugins/telefone'

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
      linkWhatsApp,
      linkLigacao,
      numeroNacional,
    }
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
