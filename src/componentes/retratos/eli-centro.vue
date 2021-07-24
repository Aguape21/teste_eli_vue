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

<script>

import eli_rodape from '../ferramenta/eli-rodape.vue'

export default {
  components:{'eli-rodape':eli_rodape},
  data: () => ({}),
}
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
