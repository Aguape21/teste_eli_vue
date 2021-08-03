<template>
  <div>
    <ul>
      <li>
        <router-link
          :to="{
            name: 'publicoRelatorios',
            params: { codigo: 'fc570aff-d5c0-4d03-9466-42f9bfba9254' },
          }"
        >
          Exemplo de relatório
        </router-link>
      </li>

      <li>
        <router-link
          :to="{
            name: 'login',
          }"
        >
          Login
        </router-link>
      </li>

      <li>
        <router-link
          :to="{
            name: 'usuarios',
          }"
        >
          Usuários
        </router-link>
      </li>

      <li>
        <button @click="autenticacao.bearer = '12345'">
          Vencer Autenticação
        </button>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import autenticacao from '@/plugins/autenticacao'
import Vue from 'vue'

export default Vue.extend({
  components: {},

  data: () => ({ autenticacao }),

  methods: {},
})
</script>

<style></style>
