<!--
 Documentação https://bootstrap-vue.org/docs/components/form-input
-->

<template>
  <b-col :cols="cols" :sm="sm">
    <div role="group">
      <label v-if="titulo" for="input-live">{{ titulo }}:<span style="color:red">*</span>  </label> 
      <b-form-input
        id="input-live"
        v-model="valor"
        aria-describedby="input-live-help input-live-feedback"
        :placeholder="placeholder"
        trim
        :max="tamanho"
      ></b-form-input>

      <!-- This is a form text block (formerly known as help block) -->
      <b-form-text v-if="descricao" id="input-live-help">
        {{ descricao }}
      </b-form-text>
    </div>
  </b-col>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  components: {},
  props: {
    value: String,
    cols: { default: 12 },
    sm: { default: 6 },
    titulo: { default: 'Título' },
    descricao: {},
    placeholder: {},
    nulo: { default: 'YES' },
    tamanho: { default: 100 },
  },

  data: function () {
    return { valor: '' }
  },

  created: function () {
    this.valor = this.value
  },

  watch: {
    valor() {
      this.$emit('input', this.valor)
    },
  },
})
</script>
<style scoped></style>
