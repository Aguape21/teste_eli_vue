<template>
  <eli-centro>
    <v-img id="logo" src="~@/assets/imagens/logonome.png" />

    <v-card class="elevation-12">
      <v-toolbar color="primary" dark flat>
        Fazer login
        <v-spacer></v-spacer>
      </v-toolbar>
      <v-card-text>
        <v-form>
          <v-text-field
            label="E-mail"
            name="email"
            prepend-icon="mdi-email"
            type="text"
          ></v-text-field>

          <v-text-field
            id="senha"
            label="Senha"
            name="senha"
            prepend-icon="mdi-lock"
            type="password"
          ></v-text-field>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary">Entrar</v-btn>
      </v-card-actions>
    </v-card>
  </eli-centro>
</template>

<script>
import eli_centro from '../componentes/modelos/eli-centro.vue'

export default {
  components: {
    'eli-centro': eli_centro,
  },
}
</script>

<style>
#logo {
  margin: 20px;
}
</style>
