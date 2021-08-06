<template>
  <b-modal @hidden="sair" size="lg" v-model="modalShow">
    <template #modal-title>
      {{ link.texto }}
    </template>
    <b-embed
      type="iframe"
      aspect="16by9"
      :src="link.link"
      allowfullscreen
    ></b-embed>

    <template #modal-footer="{ ok }">
      <b-button
        variant="primary"
        @click="
          sair()
          ok()
        "
      >
        Certo
      </b-button>
    </template>
  </b-modal>
</template>
<script lang="ts">
import Vue from 'vue'
import links from '@/ts/linksEContatos'
export default Vue.extend({
  components: {},
  data: function () {
    return { modalShow: false, links, link: {} }
  },

  methods: {
    sair() {
      const query = { ...this.$route.query }
      delete query.iframe
      this.$router.replace({ query: query })
    },
  },

  created: function () {
    if (
      this.$route.query.iframe &&
      links[this.$route.query.iframe.toString()]
    ) {
      this.link = links[this.$route.query.iframe.toString()]
      this.modalShow = true
    }
  },
})
</script>
<style></style>
