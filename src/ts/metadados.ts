/*
    metadados das tabelas da API
*/

import { version } from '../../package.json'
import { lMetadados } from '@/plugins/dexie'
import api from '@/ts/api'

interface interfaceMetaDados {
  field: string
  size: string
  null: string
  key: string
  comment: string
  versao?: string
  recurso?: string
}

const carregarMetas = async (
  recurso: string,
): Promise<{ [key: string]: interfaceMetaDados }> => {
  const buscaLocal = lMetadados.filter(
    (a) => a.recurso == recurso && a.versao == version,
  )

  const saida: { [key: string]: interfaceMetaDados } = {}

  if ((await buscaLocal.count()) == 0) {
    const buscaApi: { [key: string]: any } = await api.get(
      'dados/metadados/recurso/' + recurso,
    )

    for (const a of buscaApi.fields) {
      saida[a.field] = a
      a.recurso = recurso
      a.versao = version
      const reg = await lMetadados
        .where({ recurso: a.recurso, field: a.field })
        .first()
      if (reg) {
        a.id = reg.id
      }
      await lMetadados.put(a)
    }
  } else {
    const dados = await buscaLocal.toArray()
    dados.forEach((a) => (saida[a.field] = a))
  }
  return saida
}

export { carregarMetas, interfaceMetaDados }
