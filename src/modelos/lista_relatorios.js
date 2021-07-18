//Conexão com o recurso de relatórios

import Modelo from './modelo'

export default class ListaRelatorios extends Modelo {



  constructor(objeto) {
    super(objeto)
    this._recurso = 'lista_relatorios'

  }
}
