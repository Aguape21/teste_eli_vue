//Conexão com o recurso de relatórios

import {ClasseListaRelatoriosAnexos} from './esquemasRecursos'
import { interfaceRecurso } from './recurso'
import { baixar } from '../plugins/http'
import api from '../plugins/api'

export default class ListaRelatoriosAnexos extends ClasseListaRelatoriosAnexos {
  recurso = 'lista_relatorios_anexos'
  colunas =
    'codigo titulo codigo_corporativo codigo_anexo nome_arquivo descricao observacao ordem'

  constructor(objeto?: interfaceRecurso) {
    super(objeto)
  }

  baixar = (novaGuia?: boolean):Promise<boolean>  => {
    const url =
      'https://azteca.s3.us-east-1.amazonaws.com/anexos/' +
      this.objeto.codigo_corporativo +
      '/' +
      this.objeto.codigo_anexo
    return baixar(url, this.objeto.nome_arquivo?.toString(), novaGuia)
  }

  extensao(): string {

    const re = /((\.\w{1,4})?(\.\w+))$/gm
    const exe = re.exec((this.objeto.nome_arquivo || '').toString())
    return exe ? exe[0] : '.bin'
  }
}

const abrirVariosPorCodigo = async (codigos: string[]):Promise<ListaRelatoriosAnexos[]>  => {
  const query =
    '{' +
    codigos
      .map(
        (a, idz) =>
          `_${idz}:lista_relatorios_anexos(codigo:"${a}"){ ${
            new ListaRelatoriosAnexos().colunas
          } }`,
      )
      .join('\n') +
    '}'

  const busca = await api.graphql(query, true)

  if (busca) {
    return Object.values(busca).map((a) => new ListaRelatoriosAnexos(a))
  } else {
    return []
  }
}

export { abrirVariosPorCodigo }
