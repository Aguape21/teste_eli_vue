<template>
  <router-view v-slot="{ Component }">
    <component :is="Component">
      <p>Oi!</p>
    </component>
  </router-view>
</template>

<script lang="ts">
export default {
  name: 'App',
  components: {},
}
</script>
