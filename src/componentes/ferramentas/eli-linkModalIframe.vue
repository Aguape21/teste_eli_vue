<template>
  <a @click="modalShow = !modalShow">
    {{ texto }}

    <b-modal size="lg" v-model="modalShow">
      <template #modal-title>
        {{ texto }}
      </template>

      <b-embed
        type="iframe"
        aspect="16by9"
        :src="link"
        allowfullscreen
      ></b-embed>
    </b-modal>
  </a>
</template>
<script lang="ts">
  import Vue from 'vue';
  export default Vue.extend({components: {},
  props: ['texto', 'link'],
  data: function () {
    return { modalShow: false }
  },
  created: function () {
    this.mudarTeste()
  },
  methods: {
    mudarTeste() {
      this.teste = false
    },
  },
}
</script>
<style></style>
