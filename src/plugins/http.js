import axios from 'axios'
var urljoin = require('url-join')

//monta a url para consulta
const montarUrl = (caminho) =>
  caminho.toLocaleLowerCase().startsWith('http://') ||
  caminho.toLocaleLowerCase().startsWith('https://')
    ? caminho
    : urljoin(process.env.VUE_APP_API_BASE_URL, caminho)

//retorna uma consulta do tipo GET
export const get = (caminho) =>
  new Promise((resposta, erro) => {
    try {
      axios
        .get(montarUrl(caminho))
        .then(function (response) {
          resposta(response)
        })
        .catch(function (erro_get) {
          erro(erro_get)
        })
    } catch (erro_try) {
      erro(erro_try)
    }
  })

//retorna uma consulta do tipo post
export const post = (caminho, objeto) =>
  new Promise((resposta, erro) => {
    try {
      axios
        .post(montarUrl(caminho), objeto)
        .then(function (response) {
          resposta(response)
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
export const graphql = (query, publico) =>
  new Promise((resposta, erro) => {
    try {
      //remover espaços
      query = query.replace(/\s+/gm, ' ')

      const caminho = !publico
        ? '/consultas/graphql' //consulta graphql com login
        : '/consultas/publico/graphql' //consulta grapql pública

      post(caminho, { query })
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
