//funcões relacionadas com a autenticação

class Autenticacao {
  #lsSet = (chave, valor) => {
    localStorage.setItem('ngStorage-' + chave, `"${valor}"`)
  }

  #lsApaga = (chave) => {
    localStorage.removeItem(chave)
  }

  #ls = (chave) => {
    let valor = localStorage.getItem('ngStorage-' + chave)
    return valor ? valor.replace(/"/gm, '') : valor
  }

  gravar = (bearer, codigoCorporativo, codigoUsuario) => {
    //grava todas as autenticacoes
    this.bearer = bearer
    this.codigoCorporativo = codigoCorporativo
    this.codigoUsuario = codigoUsuario
  }

  get bearer() {
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

  limpar = () => {
    this.#lsApaga('bearer')
    this.#lsApaga('codigoCorporativo')
    this.#lsApaga('codigoUsuario')
  }

  autenticado = () => {
    //valida se conta está autenticada

    try {
      //virificar se tem bearer

      if (this.bearer || this.bearer != '') {
        return true
      }

      this.limpar()
      return false
    } catch (error) {
      this.limpar()
      return false
    }
  }
}

const autenticacao = new Autenticacao()

export default autenticacao
