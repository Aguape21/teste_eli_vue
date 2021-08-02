//Modelo padrão para classes relacionadas à recursos

import api from '../plugins/api'

interface objetoRecurso {
  [key: string]: string | number | null | undefined | string[]
}

export { objetoRecurso }

export default class Modelo {
  //indica o recurso da classe
  // usada para fazer as conexões com a API
  recurso = ''

  colunas: string | Array<string> = ''

  objeto: objetoRecurso = {}

  //contrução da classe com o objeto
  constructor(objeto?: objetoRecurso) {
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
}
