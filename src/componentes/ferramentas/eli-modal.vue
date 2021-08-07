<!--
Modelo padrão de componente de modal

Documentação
https://bootstrap-vue.org/docs/components/modal
-->

<template>
  <b-modal
    header-text-variant="light"
    header-bg-variant="primary"
    @hidden="sair"
    size="lg"
    v-model="verModal"
  >
    <template #modal-title>
      {{ titulo }}
    </template>

    <slot></slot>

    <template #modal-footer="{ ok, cancel }">
      <b-button
        v-show="funcaoCancelar"
        variant="secondary"
        @click="
          cancel()
          sair()
          funcaoCancelar()
        "
      >
        Cancelar
      </b-button>

      <b-button
        v-show="funcaoGravar"
        variant="primary"
        @click="
          sair()
          ok()
          funcaoGravar()
        "
      >
        Gravar
      </b-button>
    </template>
  </b-modal>
</template>
<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  components: {},
  props: {
    value: Boolean,
    titulo: { type: String, required: true },
    nome: { type: String, required: true },
    funcaoCancelar: Function,
    funcaoGravar: Function,
  },
  data: function () {
    return {
      verModal: false,
    }
  },

  created() {
    this.verModal = this.value
  },

  watch: {
    value: function () {
      this.verModal = this.value
    },
  },

  methods: {
    sair() {
      const query = { ...this.$route.query }
      delete query[this.nome]
      this.$router.replace({ query: query })
      this.$emit('input', false)
    },
  },
})
</script>
<style scoped></style>
