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
    </v-app>
  </v-app>
</template>

<script>
export default {
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
