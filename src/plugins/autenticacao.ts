//funcões relacionadas com a autenticação

import { router } from '@/rotas/rotas'

class Autenticacao {
  //Grava no local storage
  #lsSet = (chave: string, valor: string | null) => {
    localStorage.setItem('ngStorage-' + chave, `"${valor}"`)
  }

  //apaga local storage
  #lsApaga = (chave: string): void => {
    localStorage.removeItem(chave)
  }

  //le registro do local sotorage
  #ls = (chave: string): string | null => {
    const valor: string | null = localStorage.getItem('ngStorage-' + chave)
    return valor ? valor.replace(/"/gm, '') : valor
  }

  //grava dados base para autenticação
  gravar = (
    bearer: string,
    codigoCorporativo: string,
    codigoUsuario: string,
  ): void => {
    //grava todas as autenticacoes
    this.bearer = bearer
    this.codigoCorporativo = codigoCorporativo
    this.codigoUsuario = codigoUsuario
  }

  get bearer(): string | null {
    return this.#ls('bearer')
  }

  set bearer(bearer) {
    this.#lsSet('bearer', bearer)
  }

  get codigoCorporativo() {
    return this.#ls('codigoCorporativo')
  }

  set codigoCorporativo(codigoCorporativo) {
    this.#lsSet('codigoCorporativo', codigoCorporativo)
  }

  get codigoUsuario() {
    return this.#ls('codigoUsuario')
  }

  set codigoUsuario(codigoUsuario) {
    this.#lsSet('codigoUsuario', codigoUsuario)
  }

  //limpa dados de utenticação
  limpar = () => {
    this.#lsApaga('bearer')
    this.#lsApaga('codigoCorporativo')
    this.#lsApaga('codigoUsuario')
  }

  //valida se conta está autenticada
  autenticado = () => {
    try {
      //virificar se tem bearer


      if (this.bearer && this.bearer != '') {
        return true
      }

      this.limpar()
      return false
    } catch (error) {
      this.limpar()
      return false
    }
  }

  deslogar = () => {

    this.#lsApaga('bearer')
    const url = router.resolve({
      name: 'login',
      query: { redirecionar: window.location.href },
    })

    window.location.href = url.href
  }
}

const autenticacao = new Autenticacao()

export default autenticacao
