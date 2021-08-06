<!--
Modelo padrão de componente
-->

<template>
  <b-input-group class="mt-3">
    <b-form-input v-model="valorBusca"></b-form-input>
    <b-input-group-append>
      <b-button
        @click="$emit('filtrarPelaCaixaDeBusca', valorBusca)"
        variant="outline-primary"
      >
        <oh-icon name="co-search" />
      </b-button>
    </b-input-group-append>
  </b-input-group>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  components: {},
  props: {
    value: String,
  },
  data: function () {
    return { valorBusca: '' }
  },

  created() {
    this.valorBusca = this.value
  },

  methods: {
    atualizarVModel() {
      this.$emit('input', this.value)
    },
  },
})
</script>
<style scoped></style>
