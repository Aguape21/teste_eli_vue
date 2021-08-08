<!--
Modelo padrão de componente
-->

<template>
  <componente></componente>
</template>
<script lang="ts">
import componente from 'componente.vue'
import Vue, { PropType } from 'vue'
export default Vue.extend({
  components: { componente: componente },
  props: {
    value:String as  PropType<string>,
  },
  data: function () {
    return { teste: true }
  },
  created: function () {
    this.mudarTeste()
  },
  methods: {
    atualizarVModel() {
      this.$emit('input', this.value)
    },
    mudarTeste() {
      this.teste = false
    },
  },
})
</script>
<style scoped></style>
