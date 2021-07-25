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
          <v-container style="min-height: 500px;" fluid class="grey lighten-4">
            <b-row>
              <b-col cols="12">
                <b-breadcrumb>
                  <b-breadcrumb-item
                    v-for="(item, idz) of menus"
                    :href="item.href"
                    :to="item.to"
                    :key="idz + 'breadcrumb'"
                  >
                    {{ item.text }}
                  </b-breadcrumb-item>
                </b-breadcrumb>
              </b-col>
            </b-row>

            <div class="p-2">
              <b-row
                v-for="a in [1, 2, 3, 4]"
                :key="a"
                :style="{ 'background-color': a % 2 ? '#E9FFF4' : '#ffffff' }"
              >
                <b-col cols="2">
                  <legend style="font-size: 12px;">Empreendedor</legend>
                  Terra Cota
                </b-col>

                <b-col cols="4">
                  <legend style="font-size: 12px;">CNPK</legend>
                  000.000.000.000
                </b-col>

                <b-col cols="4">
                  <legend style="font-size: 12px;">Cidade</legend>
                  Terra Cota
                </b-col>
              </b-row>
            </div>
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
    menus:[{
      text:'Painel',
      to:'painel'
    }]
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
