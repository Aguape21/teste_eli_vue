# e-licencie-vue

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


## Bibliotecas de componentes

vue add vuetify


/Corrigir erro no desenvolvimento
ENOSPC: System limit for number of file watchers reached
comando
echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p

Material Components Vue

- https://matsp.github.io/material-components-vue/components/
- https://v2.vuetifyjs.com/en/getting-started/pre-made-layouts/


Material Design Framework 

- https://vuetifyjs.com/en/

Vue Material

- https://vuematerial.io/


Componente para botão flutuante
https://www.npmjs.com/package/vue-float-action-button


manual de icones
https://bootstrap-vue.org/docs/icons


## Exemplos

´´´
new Promise( async (resposta, erro) => {
try {
  resposta(true)
} catch (erro_try) {
  erro(erro_try)
}
})
´´´
Modelo de componente
´´´
<template><componente /></template> <script> import componente from 'componente.vue';   import Vue from 'vue';
  export default Vue.extend({components: { componente: componente }, props: ['value'], data: function () { return { teste: true } }, created: function () { this.mudarTeste() }, methods: { atualizarVModel() { this.$emit('input', this.value) }, mudarTeste() { this.teste = false }, }, } </script> <style scoped> </style>
´´´


Abrir filerof leve firefox -safe-mode


componente para ver texto grande 
https://bootstrap-vue.org/docs/components/dropdown#dropdown-form__BV_toggle_

