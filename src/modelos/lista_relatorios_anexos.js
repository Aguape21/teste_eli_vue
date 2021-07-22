//Conexão com o recurso de relatórios

import Modelo from './modelo'
import { baixar } from '../plugins/http'
import api from '../plugins/api'

export default class ListaRelatoriosAnexos extends Modelo {
  _recurso = 'lista_relatorios_anexos'
  _colunas =
    'codigo titulo codigo_corporativo codigo_anexo nome_arquivo descricao observacao ordem'

  constructor(objeto) {
    super(objeto)
  }

  baixar = (novaGuia) => {
    const url =
      'https://azteca.s3.us-east-1.amazonaws.com/anexos/' +
      this.codigo_corporativo +
      '/' +
      this.codigo_anexo
    return baixar(url, this.nome_arquivo, novaGuia)
  }
}

const abrirVariosPorCodigo = async (codigos) => {
  const query =
    '{' +
    codigos
      .map(
        (a, idz) =>
          `_${idz}:lista_relatorios_anexos(codigo:"${a}"){ ${new ListaRelatoriosAnexos()._colunas} }`,
      )
      .join('\n') +
    '}'



  const busca = await api.graphql(query, true)

  return Object.values(busca).map((a) => new ListaRelatoriosAnexos(a))
}

export {abrirVariosPorCodigo}