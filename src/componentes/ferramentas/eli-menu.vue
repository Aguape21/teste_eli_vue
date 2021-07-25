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
<script>
import eli_blocoMenu from './eli-blocoMenu.vue'
import { gruposMenu } from '../../rotas/rotas'

export default {
  components: {
    'eli-blocoMenu': eli_blocoMenu,
  },
  props: [],
  data: function () {
    return { gruposMenu }
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
<style scoped></style>
