//Conexão com o recurso de relatórios

import Modelo from './modelo'

export default class Relatorios extends Modelo {
  constructor(objeto) {
    super(objeto)
    this._recurso = 'relatorios'
  }
}
