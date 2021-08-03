<template>
  <div id="app">
    <v-app id="inspire">
      <v-app id="keep">
        <v-app-bar app clipped-left color="#688c00" dark>
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
          <slot> </slot>
        </v-main>
        <eli-rodape></eli-rodape>
      </v-app>
    </v-app>
  </div>
</template>

<script lang="ts">
/* eslint-disable vue/no-unused-components */
import eli_logo from '../ferramentas/eli-logo.vue'
import eli_rodape from '../ferramentas/eli-rodape.vue'
import eli_menu from '../ferramentas/eli-menu.vue'


export default {
  components: {
    'eli-logo': eli_logo,
    'eli-rodape': eli_rodape,
    'eli-menu': eli_menu
  },

  props: {
    source: String,
  },
  data: (): any => ({
    drawer: null,
  }),
}
</script>

<style scoped>
#keep .v-navigation-drawer__border {
  display: none;
}

.text-on-pannel {
  background: #fff none repeat scroll 0 0;
  height: auto;
  margin-left: 20px;
  padding: 3px 5px;
  position: absolute;
  margin-top: -47px;
  border: 1px solid #337ab7;
  border-radius: 8px;
}

.panel {
  /* for text on pannel */
  margin-top: 27px !important;
}

.panel-body {
  padding-top: 30px !important;
}
</style>
