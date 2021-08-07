<template>
  <div>
    <router-view v-slot="{ Component }">
      <component :is="Component">
        <p>Oi!</p>
      </component>
    </router-view>
    <!-- 
Todos componentes de modal são chamados pelas querys de URL
de qualquer parte e são declarados aqui
  -->
    <eli-modalIframame v-if="$route.query.iframe"></eli-modalIframame>
    <eli-modalUsuario v-if="$route.query.modalUsuario"></eli-modalUsuario>
  </div>
</template>

<script lang="ts">
import eli_modalIframame from '@/componentes/ferramentas/eli-modalIframe.vue'
import eli_modalUsuario from '@/componentes/recursos/eli-modalUsuario.vue'

export default {
  name: 'App',
  components: {
    'eli-modalIframame': eli_modalIframame,
    'eli-modalUsuario': eli_modalUsuario,
  },
}
</script>
