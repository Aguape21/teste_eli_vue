//Conexão com o recurso de relatórios

import {ClasseListaRelatorios} from './esquemasRecursos'
import { interfaceRecurso } from './recurso'
import { baixar } from '../plugins/http'

export default class ListaRelatorios extends ClasseListaRelatorios {
  recurso = 'lista_relatorios'
  colunas = ` codigo
                codigo_corporativo
                descricao
                nome_arquivo
                nome_usuario_inclusao
                codigos_relatorios_anexos
                codigo_usuario_alteracao
                data_hora_inclusao
`

  constructor(objeto?:interfaceRecurso) {
    super(objeto)
  }

  baixar = (novaGuia?:boolean) : Promise<boolean>  => {
    const url =
      'https://azteca.s3.us-east-1.amazonaws.com/relatorios/' +
      this.objeto.codigo_corporativo +
      '/' +
      this.objeto.codigo
    return baixar(url, this.objeto.nome_arquivo?.toString(), novaGuia)
  }
}
