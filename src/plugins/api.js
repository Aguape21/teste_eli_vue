//Biblioteca de conexão com API

import { post, get } from './http.js'
const urljoin = require('url-join')

class API {
  //monta a url para consulta
  #montarUrl = (caminho) => urljoin(process.env.VUE_APP_API_BASE_URL, caminho)

  #cabecalho = () => {
    //essa parte para permitir a migração de versões
    //cabelhalho com cados de autenticação

    const ls = (chave) => {
      let valor = localStorage.getItem('ngStorage-' + chave)
      return valor ? valor.replace(/"/gm, '') : valor
    }

    const saida = {
      'Content-type': 'application/json',
      Authorization: 'Bearer ' + ls('bearer') || '',
      CodigoCorporativo: 'CodigoCorporativo ' + ls('codigoCorporativo') || '',
      CodigoUsuario: 'CodigoUsuario ' + ls('codigoUsuario') || '',
    }
    return saida
  }

  post = async (caminho, valor) =>
    new Promise((resposta, erro) => {
      try {
        post(this.#montarUrl(caminho), valor, this.#cabecalho())
          .then(function (response) {
            resposta(response.data)
          })
          .catch(function (erro_post) {
            erro(erro_post)
          })
      } catch (erro_try) {
        erro(erro_try)
      }
    })

  get = async (caminho) =>
    new Promise((resposta, erro) => {
      try {
        get(this.#montarUrl(caminho), this.#cabecalho())
          .then(function (response) {
            resposta(response.data)
          })
          .catch(function (erro_post) {
            erro(erro_post)
          })
      } catch (erro_try) {
        erro(erro_try)
      }
    })

  //retorna um consulta de graphql
  //Entradas query de consulta e indicar se será feito sem senha
  graphql = (query, publico) =>
    new Promise((resposta, erro) => {
      try {
          debugger
        //remover espaços
        query = query.replace(/\s+/gm, ' ')

        const caminho = !publico
          ? '/consultas/graphql' //consulta graphql com login
          : '/consultas/publico/graphql' //consulta grapql pública

        post(this.#montarUrl(caminho), { query })
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
