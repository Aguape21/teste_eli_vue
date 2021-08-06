<template>
  <div>
    <router-view v-slot="{ Component }">
      <component :is="Component">
        <p>Oi!</p>
      </component>
    </router-view>

    <eli-modalIframame v-if="$route.query.iframe"></eli-modalIframame>

  </div>
</template>

<script lang="ts">
import eli_modalIframame from '@/componentes/ferramentas/eli-modalIframe.vue'

export default {
  name: 'App',
  components: {
    'eli-modalIframame': eli_modalIframame,
  },

}
</script>
