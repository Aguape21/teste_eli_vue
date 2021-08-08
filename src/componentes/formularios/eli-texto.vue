<!--
 Documentação https://bootstrap-vue.org/docs/components/form-input
-->

<template>
  <b-col :cols="cols" :sm="sm">
    <div role="group">
      <label v-if="titulo" for="input-live">
        {{ titulo_ }}:
        <span v-if="!nulo_" style="color: red;">*</span>
      </label>
      <b-form-input
        id="input-live"
        v-model="value_"
        aria-describedby="input-live-help input-live-feedback"
        :placeholder="placeholder"
        trim
        :max="tamanho_"
      ></b-form-input>

      <!-- This is a form text block (formerly known as help block) -->
      <b-form-text v-if="descricao" id="input-live-help">
        {{ descricao }}
      </b-form-text>
    </div>
  </b-col>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { interfaceMetaDados } from '@/modelos/esquemasRecursos'
export default Vue.extend({
  components: {},
  props: {
    value: String,
    cols: { default: 12 },
    sm: { default: 6 },
    meta: Object as PropType<interfaceMetaDados>,
    titulo: { default: 'Título' },
    descricao: Object as PropType<string>,
    placeholder: {},
    nulo: { default: false },
    tamanho: { default: 100 },
  },

  data: function () {
    return {
      value_: '' as string | null | undefined,
      titulo_: '' as string | null | undefined,
      descricao_: '' as string | null | undefined,
      nulo_: true as boolean | null | undefined,
      tamanho_: 100 as number | null | undefined,
    }
  },

  created: function () {
    this.value_ = this.value
    this.titulo_ = this.meta.descricao ? this.meta.descricao : this.titulo
    this.descricao_ = this.descricao
    this.nulo_ =
      this.meta.nulo != null && this.meta.nulo != undefined
        ? this.meta.nulo
        : this.nulo
    this.tamanho_ = this.meta.tamanho ? this.meta.tamanho : this.tamanho
  },

  watch: {
    value_() {
      this.$emit('input', this.value_)
    },
  },
})
</script>
<style scoped></style>
