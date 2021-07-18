//Modelo padrão para classes relacionadas à recursos

import {graphql} from '../plugins/http'

export default class Modelo {
  //indica o recurso da classe
  // usada para fazer as conexões com a API
  _recurso = ''

  //contrução da classe com o objeto
  constructor(objeto) {
    this.objeto = objeto || {}
  }

  get objeto() {
    //Retorna um objeto com os parâmetros primários da classe

    const objeto = {}

    for (const [k, v] of Object.entries(this)) {
      if (
        !k.startsWith('_') &&
        ['string', 'number', 'boolean'].indexOf(typeof v) >= 0 &&
        v == null
      ) {
        objeto[k] = v
      }
    }

    return objeto
  }

  set objeto(objeto) {
    //transforma um objeto em parâmetros da classe

    for (const [k, v] of Object.entries(objeto)) {
      this[k] = v
    }
  }


  //Baixa/abre um recuros pelo código
  abrir = (codigo,publico)=>{
    debugger;
    graphql('{}',publico)
  }


}
