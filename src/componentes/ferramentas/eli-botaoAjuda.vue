<template>
  <b-row align-h="end">
    <div style="justify-content: left;">
      <a @click="$tours[componente].start()">
        <b-icon
          font-scale="1.5"
          class="m-2"
          icon="info-circle-fill"
          variant="primary"
        ></b-icon>
      </a>
      <v-tour
        :name="componente"
        :steps="trataTutorial()"
        :options="opcoes"
      ></v-tour>
    </div>
  </b-row>
</template>

<script lang="ts">
import Vue from 'vue'
import { PropType } from 'vue'
export default Vue.extend({
  methods: {
    trataTutorial():{ [key: string]: any }[] {
      return this.tutorial.map((a:{ [key: string]: any }) => {
        a.params = {
          placement: 'top',
        }
        return a
      })
    },
  },

  data: () => ({
    opcoes: {
      useKeyboardNavigation: true,
      labels: {
        buttonSkip: 'Pular Tutorial',
        buttonPrevious: 'Anterior',
        buttonNext: 'Próximo',
        buttonStop: 'Sair',
      },
    },
  }),
  props: {
    componente: String,
    tutorial: Array as PropType<{ [key: string]: any }[]>,
  },
})
</script>
