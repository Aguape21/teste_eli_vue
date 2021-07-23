<template>
  <eli-centro>
    <v-row>
      <v-img id="logo" src="~@/assets/imagens/logonome.png" />

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

<script>
import eli_centro from '../componentes/modelos/eli-centro.vue'
import Usuarios from '../modelos/usuarios'

export default {
  components: {
    'eli-centro': eli_centro,
  },

  data: () => ({
    email: process.env.VUE_APP_TESTE_EMAIL || '',
    senha: process.env.VUE_APP_TESTE_SENHA || '',
    variants: { danger: 'danger', success: 'success' },
    variantAlerta: '',
    mensagemAlerta: null,
  }),

  methods: {
    async entrar() {
      this.mensagemAlerta = null
      try {
        const usuario = await new Usuarios().login(this.email, this.senha)
        this.variantAlerta = this.variants.success
        this.mensagemAlerta = `Bem vindo(a) ${usuario.nome}.`
        this.$router.push('passagem');
      } catch (error) {
        this.variantAlerta = this.variants.danger
        this.mensagemAlerta = error
      }
    },
  },
}
</script>

<style>
#logo {
  margin: 20px;
}
</style>
