//Conexão com o recurso de relatórios

import Modelo from './modelo'
import { baixar } from '../plugins/http'

export default class ListaRelatorios extends Modelo {
  _recurso = 'lista_relatorios'
  _colunas = ` codigo
                codigo_corporativo
                descricao
                nome_arquivo
                nome_usuario_inclusao
                codigos_relatorios_anexos
                codigo_usuario_alteracao
                data_hora_inclusao
`

  constructor(objeto) {
    super(objeto)
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
