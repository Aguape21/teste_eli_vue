<template>
  <eli-modal
    v-model="verModal"
    titulo="Editar Usuario"
    :nome="nome"
    :funcaoCancelar="() => {}"
    :funcaoGravar="() => {}"
  >
    <b-row>
      <eli-texto
      :titulo="usuario.meta.nome.comment"

       v-model="usuario.nome"></eli-texto>
    </b-row>
  </eli-modal>
</template>
<script lang="ts">
import uuid from '@/plugins/uuid'
import Usuarios from '@/modelos/usuarios'
import Vue from 'vue'
import eli_modal from '@/componentes/ferramentas/eli-modal.vue'
import eli_texto from '@/componentes/formularios/eli-texto.vue'
export default Vue.extend({
  components: {
    'eli-modal': eli_modal,
    'eli-texto': eli_texto,
  },
  data: function () {
    return {
      verModal: false,
      nome: 'modalUsuario',
      usuario: {} as Usuarios,
      valor: '' as string | null,
      teste: '',
    }
  },
  created: function () {
    this.valor = this.$route.query[this.nome].toString()

    if (this.valor) {
      this.abrirUsuario()
    }
  },
  methods: {
    async abrirUsuario() {
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
<style></style>
