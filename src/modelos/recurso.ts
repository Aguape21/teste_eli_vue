//Recurso padrão para classes relacionadas à recursos

import api from '@/ts/api'

interface interfaceRecurso {
  [key: string]: string | number | null | undefined | string[]
}

interface interfaceMetaDados extends interfaceRecurso {
  field?: string
  size: string
  null: string
  key: string
  comment: string
}

export { interfaceRecurso }

export class Recurso {
  //indica o recurso da classe
  // usada para fazer as conexões com a API
  recurso = ''

  meta: { [key: string]: interfaceMetaDados } = {}

  colunas: string | Array<string> = ''

  public _objeto: interfaceRecurso = {}

  public get objeto(): interfaceRecurso {
    return this._objeto
  }
  public set objeto(value: interfaceRecurso) {
    this._objeto = value
  }

  //contrução da classe com o objeto
  constructor(objeto?: interfaceRecurso) {
    this.objeto = objeto || {}
  }

  //Baixa/abre um recuros pelo código
  abrir = async (codigo: string, publico?: boolean): Promise<void> => {
    const query = `{
      ${this.recurso}(codigo:"${codigo}"){
        ${(typeof this.colunas == 'string'
          ? this.colunas.trim().split(/[\s,;]+/gm)
          : this.colunas
        ).join(', ')}
      }
      }`

    const busca = await api.graphql(query, publico)

    //retona erro de não encotrado
    if (!busca || !busca[this.recurso]) {
      throw new Error(
        `Consulta não retornou um resultado. Verifique os dados novamente ou consulte o administrador de sua conta, pode ser que você não tenha pemissão de acesso.`,
      )
    }

    if (busca && busca[this.recurso]) {
      this.objeto = busca[this.recurso]
    }
  }



  baixarMeta = async (): Promise<{ [key: string]: interfaceMetaDados }> => {

    if (Object.keys(this.meta).length == 0) {
      const busca: any[] = await api.get(
        'dados/metadados/recurso/' + this.recurso,
      )
      busca.forEach((a) => (this.meta[a.field] = a))
    }
    return this.meta
  }

  //Baixa/abre um recuros pelo código
  buscarVarios = async (): Promise<interfaceRecurso[]> => {
    const query = `{
      ${this.recurso}_varios{
        ${(typeof this.colunas == 'string'
          ? this.colunas.trim().split(/[\s,;]+/gm)
          : this.colunas
        ).join(', ')}
      }
      }`

    const busca = await api.graphql(query)

    return busca ? busca[`${this.recurso}_varios`] : []
  }
}
