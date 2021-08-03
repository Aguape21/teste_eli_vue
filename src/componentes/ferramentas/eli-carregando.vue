<template>
  <!-- -bind:class="classes" -->
  <div
    class="loading-screen"
    v-show="loading"
    v
    v-bind:style="{ backgroundColor: background }"
  >
    <component v-if="customLoader" v-bind:is="customLoader"></component>
    <div v-else>
      <div>
        <img id="gif" src="~@/assets/imagens/quero-quero.gif" alt="" />
      </div>
      <p class="loading-text">{{ text }}</p>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  data():any {
    return {
      text: 'Loading',
      classes: null,
      loading: false,
      background: 'rgba(255,255,255,0.5)' as string,
      customLoader: null,
    }
  },
  computed: {

  },
}
</script>
<style scoped>
#gif {
  width: 120px;
  height: 120px;
  border-radius: 50%;
}

.loading-screen {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 300;
  flex-direction: column;
  user-select: none;
}
.loading-circle {
  width: 50px;
  height: 50px;
  border-radius: 100%;
  border: 2px solid transparent;
  border-left-color: #ababab;
  animation: circleanimation 0.45s linear infinite;
}
.loading-text {
  margin-top: 15px;
  color: #ffffff;
  font-size: 14px;
  text-align: center;
  font-weight: bold;
}
@keyframes circleanimation {
  from {
    transform: rotateZ(0deg);
  }
  to {
    transform: rotateZ(360deg);
  }
}
</style>
