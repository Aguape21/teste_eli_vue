<template>
  <eli-modal
    v-model="abrirModal"
    :titulo="link.texto"
    nome="iframe"
    :funcaoCancelar="() => {}"
  >
    <b-embed
      type="iframe"
      aspect="16by9"
      :src="link.link"
      allowfullscreen
    ></b-embed>
  </eli-modal>
</template>
<script lang="ts">
import Vue from 'vue'
import links from '@/ts/linksEContatos'
import eli_modal from '@/componentes/ferramentas/eli-modal.vue'
export default Vue.extend({
  components: {
    'eli-modal': eli_modal,
  },
  data: function () {
    return { abrirModal: false, links, link: {} }
  },

  methods: {},

  created: function () {
    console.log('Chegou')
    if (
      this.$route.query.iframe &&
      links[this.$route.query.iframe.toString()]
    ) {
      this.link = links[this.$route.query.iframe.toString()]
      this.abrirModal = true
    }
  },
})
</script>
<style></style>
