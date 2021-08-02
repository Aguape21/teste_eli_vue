//Biblioteca de conexão com API

import { post, get } from './http'
import autenticacao from './autenticacao'
import urljoin from 'url-join'
import { objetoRecurso } from '@/modelos/recurso'
interface objetoGrapql {
  [key: string]: objetoRecurso
}

class API {
  //monta a url para consulta
  #montarUrl = (caminho: string): string =>
    urljoin(process.env.VUE_APP_API_BASE_URL, caminho)

  #cabecalho = (): { [key: string]: string } => {
    //essa parte para permitir a migração de versões
    //cabelhalho com cados de autenticação

    const saida = {
      'Content-type': 'application/json',
      Authorization: 'Bearer ' + autenticacao.bearer || '',
      CodigoCorporativo:
        'CodigoCorporativo ' + autenticacao.codigoCorporativo || '',
      CodigoUsuario: 'CodigoUsuario ' + autenticacao.codigoUsuario || '',
    }
    return saida
  }

  post = async (
    caminho: string,
    valor: { [key: string]: string | number | null },
  ): Promise<{ [key: string]: string | number | null }[]> =>
    new Promise((resposta, erro) => {
      try {
        post(this.#montarUrl(caminho), valor, this.#cabecalho())
          .then(function (response) {
            resposta(response.data)
          })
          .catch(function (erro_post) {
            if (erro_post && erro_post.response && erro_post.response.data) {
              erro(erro_post.response.data)
            } else {
              erro(erro_post)
            }
          })
      } catch (erro_try) {
        erro(erro_try)
      }
    })

  get = async (
    caminho: string,
  ): Promise<{ [key: string]: string | number | null }[]> =>
    new Promise((resposta, erro) => {
      try {
        get(this.#montarUrl(caminho), this.#cabecalho())
          .then(function (response) {
            resposta(response.data)
          })
          .catch(function (erro_get) {
            if (erro_get && erro_get.response && erro_get.response.data) {
              erro(erro_get.response.data)
            } else {
              erro(erro_get)
            }
          })
      } catch (erro_try) {
        erro(erro_try)
      }
    })

  //retorna um consulta de graphql
  //Entradas query de consulta e indicar se será feito sem senha
  graphql = (query: string, publico?: boolean): Promise<objetoGrapql | null> =>
    new Promise((resposta, erro) => {
      try {
        //remover espaços
        query = query.replace(/\s+/gm, ' ')

        const caminho = !publico
          ? '/consultas/graphql' //consulta graphql com login
          : '/consultas/publico/graphql' //consulta grapql pública

        post(this.#montarUrl(caminho), { query }, this.#cabecalho())
          .then(function (response) {
            resposta(response.data.data)
          })
          .catch(function (erro_post) {
            erro(erro_post)
          })
      } catch (erro_try) {
        erro(erro_try)
      }
    })
}

const api = new API()

export default api
