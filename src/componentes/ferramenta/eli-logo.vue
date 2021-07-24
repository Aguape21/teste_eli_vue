<template>
  <img :style="estilo" id="logo" :src="endereco" />
</template>

<script>
module.exports = {
  props: ['height', 'width', 'tipo'],
  data: function () {
    return {
      estilo: {},
      tipos: {
        normal: require('@/assets/imagens/logos/escala-branco.png'),
        verde: require('@/assets/imagens/logos/verde-verde.png'),
        branco: require('@/assets/imagens/logos/branco-branco.png'),
      },
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
}
</script>

<style></style>
