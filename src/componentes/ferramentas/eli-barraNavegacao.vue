<!--

Exibe uma barra de navegação tipo [Painel / Contatos / Novo Contato ]

Props: 


-->

<template>
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
</template>
<script lang="ts">
export default {
  components: {},
  props: {
    menus: {
      type: Array,

      default: () => [
        {
          text: 'Painel',
          to: { name: 'painel' },
        },
        {
          text: 'Usuarios',
          to: {
            name: 'usuarios',
            params: {
              filtrosUsuarios: JSON.stringify([
                { coluna: 'nome', condicao: 'CONTEM', valor: 'Carlos' },
              ]),
            },
          },
        },
      ],
    },
  },
  data() {
    return { teste: true }
  },
  methods: {
  },
}
</script>
<style></style>
