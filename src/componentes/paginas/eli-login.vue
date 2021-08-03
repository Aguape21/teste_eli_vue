<template>
  <eli-centro>
    <v-row>
      <eli-logo></eli-logo>

      <v-card class="elevation-12">
        <v-toolbar color="primary" dark flat>
          Fazer login
          <v-spacer></v-spacer>
        </v-toolbar>
        <v-card-text>
          <b-alert v-if="mensagemAlerta" show :variant="variantAlerta">
            {{ mensagemAlerta }}
          </b-alert>
          <v-form>
            <v-text-field
              label="E-mail"
              name="email"
              v-model="email"
              prepend-icon="mdi-email"
              type="text"
            ></v-text-field>

            <v-text-field
              id="senha"
              label="Senha"
              name="senha"
              v-model="senha"
              prepend-icon="mdi-lock"
              type="password"
            ></v-text-field>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn @click="carregando(entrar())" color="primary">Entrar</v-btn>
        </v-card-actions>
      </v-card>
    </v-row>
  </eli-centro>
</template>

<script lang="ts">
import eli_centro from '@/componentes/retratos/eli-centro.vue'
import eli_logo from '@/componentes/ferramentas/eli-logo.vue'
import Usuarios from '@/modelos/usuarios'

import Vue from 'vue'
export default Vue.extend({
  components: {
    'eli-centro': eli_centro,
    'eli-logo': eli_logo,
  },

  data: () => ({
    email: process.env.VUE_APP_TESTE_EMAIL || '',
    senha: process.env.VUE_APP_TESTE_SENHA || '',
    variants: { danger: 'danger', success: 'success' },
    variantAlerta: '',
    mensagemAlerta: null as null | string,
  }),

  methods: {
    async entrar() {
      this.mensagemAlerta = null
      try {
        const usuario = new Usuarios()
        await usuario.login(this.email, this.senha)
        this.variantAlerta = this.variants.success
        this.mensagemAlerta = `Bem vindo(a) ${usuario.objeto.nome}.`
        if (this.$route.query.redirecionar) {
          window.location.href = this.$route.query.redirecionar.toString()
        } else {
          this.$router.push('passagem')
        }
      } catch (error) {
        this.variantAlerta = this.variants.danger
        this.mensagemAlerta = error
      }
    },
  },
})
</script>

<style>
#logo {
  margin: 20px;
}
</style>
