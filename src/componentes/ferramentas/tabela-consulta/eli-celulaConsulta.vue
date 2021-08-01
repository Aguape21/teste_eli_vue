<!--

Encapsula um conteúdo com um título:
    Props: titulo
    Slot: qualquer conteúdo

-->
<template>
  <div>
    <legend style="font-size: 12px;">{{ titulo }}</legend>
    <slot>
      Conteúdo da célula!!
    </slot>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  components: {},
  props: {
    titulo: { type: String, default: 'Titulo da célula' },
  },
  data: function () {
    return { teste: true }
  },
  created: function () {
    this.mudarTeste()
  },
  methods: {
    mudarTeste() {
      this.teste = false
    },
  },
})
</script>
<style></style>
