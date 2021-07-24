<template>


          <v-list dense>
            <v-list-item link>
              <v-list-item-action>
                <oh-icon name="fa-users" />
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>Home</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item link>
              <v-list-item-action>
                <v-icon>mdi-email</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>Contact</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>

</template>
<script>

export default {
  components: {  },
  props: [],
  data: function () {
    return { teste: true }
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
<style></style>
