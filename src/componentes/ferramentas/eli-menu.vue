<template>
  <div>
    <eli-blocoMenu
      v-for="(item, idz) in gruposMenu"
      :key="idz + '-blocoMenu '"
      :nome="item.nome"
      :icone="item.icone"
      :rotas="item.rotas"
    />
  </div>
</template>
<script lang="ts">
import eli_blocoMenu from './eli-blocoMenu.vue'
import { gruposMenu } from '../../rotas/rotas'

import Vue from 'vue'
export default Vue.extend({
  components: {
    'eli-blocoMenu': eli_blocoMenu,
  },
  props: [],
  data: function () {
    return { gruposMenu }
  },
  methods: {},
})
</script>
<style scoped></style>
