<template>
  <div id="app">
    <v-app id="inspire">
      <v-app id="inspire">
        <v-navigation-drawer v-model="drawer" app>
          <v-list dense>
            <v-list-item link>
              <v-list-item-action>
                <font-awesome-icon icon="user-secret" />
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
        </v-navigation-drawer>

        <v-app-bar app color="primary" dark>
          <v-app-bar-nav-icon @click.stop="drawer = !drawer">
            <font-awesome-icon icon="bars" size="2x" />
          </v-app-bar-nav-icon>

          <v-toolbar-title>
            <eli-logo height="35px"></eli-logo>
          </v-toolbar-title>

          <v-spacer></v-spacer>

          <v-menu left bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-app-bar-nav-icon v-bind="attrs" v-on="on">
                <font-awesome-icon icon="user" size="2x" />
              </v-app-bar-nav-icon>

              <v-toolbar-title>Luiz Silva</v-toolbar-title>
            </template>

            <v-list>
              <v-list-item v-for="n in 5" :key="n" @click="() => {}">
                <v-list-item-title>Option {{ n }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-app-bar>

        <v-main>
          <v-container class="fill-height" fluid>
            <v-row align="center" justify="center">
              <v-col style="min-height:500px" class="text-center">
               

                <v-tooltip left>
                  <template v-slot:activator="{ on }">
                    <v-btn :href="source" icon large target="_blank" v-on="on">
                      <v-icon large>mdi-code-tags</v-icon>
                    </v-btn>
                  </template>
                  <span>Source</span>
                </v-tooltip>
              </v-col>
            </v-row>
          </v-container>
        </v-main>
        <eli-rodape></eli-rodape>
      
      </v-app>
    </v-app>
  </div>
</template>

<script>
import eli_logo from '../ferramenta/eli-logo.vue'
import eli_rodape from '../ferramenta/eli-rodape.vue'

export default {
  created() {},

  components: {
    'eli-logo': eli_logo,
     'eli-rodape': eli_rodape,
  },
  props: {
    source: String,
  },
  data: () => ({
    drawer: false,
    group: null,
  }),

  watch: {
    group() {
      this.drawer = false
    },
  },
}
</script>

<style scoped></style>
