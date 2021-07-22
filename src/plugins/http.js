import axios from 'axios'
const urljoin = require('url-join')
const fileDownload = require('js-file-download')
const mime = require('mime-types')

const cabecalho = () => {
  //essa parte para permitir a migração de versões

  const ls = (chave) => {
    let valor = localStorage.getItem('ngStorage-' + chave)
    return valor.replace(/"/gm,'')
  }

  const saida = {
    'Content-type': 'application/json',
    Authorization: 'Bearer ' + ls('bearer') || '',
    CodigoCorporativo: 'CodigoCorporativo ' + ls('codigoCorporativo') || '',
    CodigoUsuario: 'CodigoUsuario ' + ls('codigoUsuario') || '',
  }
  return saida
}

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
      axios({
        method: 'GET',
        url: montarUrl(caminho),
        headers: cabecalho(),
      })
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
      axios({
        method: 'POST',
        url: montarUrl(caminho),
        data: objeto,
        headers: cabecalho(),
      })
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

//baixa um arquivo
export const baixar = (url, nome, abrirNovaGuia) =>
  new Promise((resposta, erro) => {
    try {
      //caso não receba nome, extrai da URL
      if (!nome || nome == '') {
        nome = url.split('/').pop().split('?')[0]
      }

      axios({
        url: url,
        method: 'GET',
        responseType: 'blob',
      }).then((response) => {
        if (abrirNovaGuia) {
          const file = new Blob([response.data], {
            type: mime.contentType(nome) || 'application/octet-stream',
          })
          const fileURL = URL.createObjectURL(file)
          window.open(fileURL, '_blank')
        } else {
          fileDownload(response.data, nome)
        }

        resposta(true)
      })
    } catch (erro_try) {
      erro(erro_try)
    }
  })
