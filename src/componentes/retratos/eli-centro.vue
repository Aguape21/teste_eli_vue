<template>
  <v-app>
    <v-app id="inspire">
      <v-main>
        <v-container fluid>
          <v-row align="center" justify="center">
            <slot />
          </v-row>
        </v-container>
      </v-main>
      <eli-rodape></eli-rodape>
    </v-app>
  </v-app>
</template>

<script lang="ts">
import eli_rodape from '../ferramentas/eli-rodape.vue'

import Vue from 'vue'
export default Vue.extend({
  components: { 'eli-rodape': eli_rodape },
  data: () => ({}),
})
</script>

<style scoped>
#inspire {
  background-image: url('~@/assets/imagens/papelparede.jpg');
  background-color: gray;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  background-attachment: fixed;
}
</style>
