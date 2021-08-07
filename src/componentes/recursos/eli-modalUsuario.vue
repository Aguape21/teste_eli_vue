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
      Usuário
    </template>

    Conteúdo!
    <template #modal-footer="{ ok, cancel }">
      <b-button
        variant="danger"
        @click="
          cancel()
          sair()
        "
      >
        Cancelar
      </b-button>

      <b-button
        variant="primary"
        @click="
          sair()
          ok()
        "
      >
        Gravar
      </b-button>
    </template>
  </b-modal>
</template>
<script lang="ts">
import Vue from 'vue'
import uuid from '@/plugins/uuid'
import Usuarios from '@/modelos/usuarios'

export default Vue.extend({
  components: {},
  props: {},
  data: function () {
    return {
      verModal: false,
      nome: 'modalUsuario',
      usuario: {} as Usuarios,
      valor: '' as string | null,
    }
  },
  created: async function () {
    this.valor = this.$route.query[this.nome].toString()

    if (this.valor) {
      this.abrirModal()
    }
  },
  methods: {
    sair() {
      const query = { ...this.$route.query }
      delete query[this.nome]
      this.$router.replace({ query: query })
    },

    async abrirModal() {
      if (uuid.validar(this.valor)) {
        await this.usuario.abrir(this.valor || '')
      } else {
        const objeto = JSON.parse(this.valor || '')
        this.usuario.objeto = objeto
      }

      this.verModal = true
    },
  },
})
</script>
<style scoped></style>
