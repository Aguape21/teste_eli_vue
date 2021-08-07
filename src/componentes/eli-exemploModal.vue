<!--
Modelo padrão de componente de modal

Documentação
https://bootstrap-vue.org/docs/components/modal
-->

<template>
  <b-modal @hidden="sair" size="lg" v-model="verModal">
    <template #modal-title>
      {{ nome }}
    </template>

    Conteúdo!

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
export default Vue.extend({
  components: {},
  props: {
    value: String,
  },
  data: function () {
    return { verModal: false, nome: 'nomeModal', valor: '' as string | null }
  },
  created: function () {
    this.valor = this.$route.query[this.nome].toString()
    if (this.valor) {
      this.verModal = true
    }
  },
  methods: {
    atualizarVModel() {
      this.$emit('input', this.value)
    },

    sair() {
      const query = { ...this.$route.query }
      delete query[this.nome]
      this.$router.replace({ query: query })
    },
  },
})
</script>
<style scoped></style>
