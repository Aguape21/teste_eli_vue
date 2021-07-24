<template>
<div>
  <b-link v-b-toggle.collapse-1 variant="primary">Toggle Collapse</b-link>
  <b-collapse id="collapse-1" class="mt-2">
    <b-card>
      <p class="card-text">Collapse contents Here</p>
      <b-button v-b-toggle.collapse-1-inner size="sm">Toggle Inner Collapse</b-button>
      <b-collapse id="collapse-1-inner" class="mt-2">
        <b-card>Hello!</b-card>
      </b-collapse>
    </b-card>
  </b-collapse>
</div>
</template>
<script>
export default {
  components: {},
  props: [],
  data: function () {
    return { teste: true }
  },
  created: function () {
    this.mudarTeste()
  },
  methods: {
    mudarTeste() {
      this.teste = false
    },
  },
}
</script>
<style></style>
