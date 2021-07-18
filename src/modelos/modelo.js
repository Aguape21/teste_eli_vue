//Modelo padrão para classes relacionadas à recursos

import { graphql } from '../plugins/http'

export default class Modelo {
  //indica o recurso da classe
  // usada para fazer as conexões com a API
  _recurso = ''

  _query_abrir = ''

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
  abrir = async (codigo, colunas, publico) => {

    const query = `{
      ${this._recurso}(codigo:"${codigo}"){
        ${(typeof colunas == 'string'
          ? colunas.trim().split(/[\s,;]+/gm)
          : colunas
        ).join(', ')}
      }
      }`
    const busca = await graphql(query, publico)

    //retona erro de não encotrado
    if (!busca[this._recurso]) {
      throw new Error(
        `Consulta não retornou um resultado. Verifique os dados novamente ou consulte o adminstrador de sua conta, pode ser que você não tenha pemissão de acesso.`,
      )
    }

    this.objeto = busca[this._recurso]

    return this;
  }
}
