<template>
  <img :style="estilo" id="logo" :src="endereco" />
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'logoElicencie',
  props: { height: [Number, String], width: [Number, String], tipo: String },
  data: function () {
    return {
      estilo: {} as { [key: string]: any },
      tipos: {
        normal: require('@/assets/imagens/logos/escala-branco.png'),
        verde: require('@/assets/imagens/logos/verde-verde.png'),
        branco: require('@/assets/imagens/logos/branco-branco.png'),
      } as { [key: string]: any },
      endereco: '',
    }
  },
  created: function () {
    if (this.height) {
      this.estilo.height = this.height
    }

    if (this.width) {
      this.estilo.width = this.width
    }

    this.endereco =
      this.tipo && this.tipos[this.tipo]
        ? this.tipos[this.tipo]
        : this.tipos.normal
  },

  methods: {
    //teste() {},
  },
})
</script>

<style></style>
