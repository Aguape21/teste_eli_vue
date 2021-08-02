import axios, { AxiosResponse } from 'axios'

import fileDownload from 'js-file-download'
import mime from 'mime-types'

//retorna uma consulta do tipo GET
export const get = (
  url: string,
  cabecalho: { [key: string]: string },
): Promise<AxiosResponse> =>
  new Promise((resposta, erro) => {
    try {
      axios({
        method: 'GET',
        url: url,
        headers: cabecalho,
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

//retorna uma consulta do tipo post
export const post = (
  url: string,
  objeto: { [key: string]: string|number|null },
  cabecalho: { [key: string]: string },
): Promise<AxiosResponse> =>
  new Promise((resposta, erro) => {
    try {
      axios({
        method: 'POST',
        url: url,
        data: objeto,
        headers: cabecalho,
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

//baixa um arquivo
export const baixar = (
  url: string,
  nome?: string,
  abrirNovaGuia?: boolean,
): Promise<boolean> =>
  new Promise((resposta, erro) => {
    try {
      //caso não receba nome, extrai da URL
      if (!nome || nome == '') {
        nome = url.split('/').pop()?.split('?')[0] || ''
      }

      axios({
        url: url,
        method: 'GET',
        responseType: 'blob',
      }).then((response) => {
        if (abrirNovaGuia) {
          const file = new Blob([response.data], {
            type: mime.contentType(nome||'') || 'application/octet-stream',
          })
          const fileURL = URL.createObjectURL(file)
          window.open(fileURL, '_blank')
        } else {
          fileDownload(response.data, nome||'')
        }

        resposta(true)
      })
    } catch (erro_try) {
      erro(erro_try)
    }
  })
