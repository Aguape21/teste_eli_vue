<template>
  <div id="app">
    <v-app id="inspire">
      <v-app id="keep">
        <v-app-bar app clipped-left color="primary" dark>
          <v-app-bar-nav-icon @click.stop="drawer = !drawer">
            <oh-icon name="fa-bars" />
          </v-app-bar-nav-icon>

          <v-toolbar-title>
            <eli-logo height="35px"></eli-logo>
          </v-toolbar-title>

          <v-spacer></v-spacer>

          <v-menu left bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-app-bar-nav-icon v-bind="attrs" v-on="on">
                <oh-icon name="fa-user-edit" scale="1.5" />
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

        <v-navigation-drawer
          v-model="drawer"
          app
          clipped
          color="grey lighten-4"
        >
          <eli-menu></eli-menu>
        </v-navigation-drawer>

        <v-main>
          <v-container
            style="min-height: 500px;"
            fluid
            class="grey lighten-4 fill-height"
          >
            <v-row justify="center" align="center">
              <v-col class="shrink">
                <v-tooltip right>
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
/* eslint-disable vue/no-unused-components */
import eli_logo from '../ferramentas/eli-logo.vue'
import eli_rodape from '../ferramentas/eli-rodape.vue'
import eli_menu from '../ferramentas/eli-menu'

export default {
  created() {},

  components: {
    'eli-logo': eli_logo,
    'eli-rodape': eli_rodape,
    'eli-menu': eli_menu,
  },

  props: {
    source: String,
  },
  data: () => ({
    drawer: null,
  }),
}
</script>

<style scoped>
#keep .v-navigation-drawer__border {
  display: none;
}
</style>
