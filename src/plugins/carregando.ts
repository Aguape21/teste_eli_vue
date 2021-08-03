//adapitado de https://github.com/noxludio/vuejs-loading-plugin/blob/master/index.js

/*
como usar
this.carregando(true)
this.carregando(false)
*/

import { VueConstructor } from 'vue'

const configuracaoCarregando = {
  dark: true, // default false
  text: 'Aguarde ...', // default 'Carregando'
  loading: true, // default false
  //customLoader: myVueComponent, // replaces the spinner and text with your own
  //background: 'rgb(255,255,255)', // set custom background
  //classes: ['myclass'] // array, object or string
}

import eli_carregando from '@/componentes/ferramentas/eli-carregando.vue'

let vm: any = {}

const InstalarCarregando = {
  install(Vue: VueConstructor<Vue>):void {
    const loadingPlugin = Vue.extend(eli_carregando)
    vm = new loadingPlugin({
      data: configuracaoCarregando,
    }).$mount()

    document.body.appendChild(vm.$el)
    vm.loading = false
    Vue.prototype.carregando = (fn: Promise<any>):  Promise<boolean> => {

      return new Promise((resolve, reject) => {
        vm.loading = true
        const finished = (cb: any) => {
          return (result: any) => {
            cb(result)
            vm.loading = false
          }
        }
        fn.then(finished(resolve)).catch(finished(reject))
      })
    }
  },
}

export default InstalarCarregando
