//Conexão com o recurso de relatórios

import Modelo from './modelo'
import { baixar } from '../plugins/http'

export default class ListaRelatorios extends Modelo {
  constructor(objeto) {
    super(objeto)
    this._recurso = 'lista_relatorios'
  }

  baixar = (novaGuia) => {
    const url =
      'https://azteca.s3.us-east-1.amazonaws.com/relatorios/' +
      this.codigo_corporativo +
      '/' +
      this.codigo
    return baixar(url, this.nome_arquivo, novaGuia)
  }
}
