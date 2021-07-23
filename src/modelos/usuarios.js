//Conexão com o recurso de usuarios

import Modelo from './modelo'
import api from '../plugins/api'
import autenticacao from '../plugins/autenticacao'

export default class Usuarios extends Modelo {
  _recurso = 'usuarios'
  _colunas = `codigo_corporativo
              codigo
              nome
              sexo
              data_nascimento
              telefone
              email
              administrador
              cargo
              registro_profissional
              cadastros_base
`

  constructor(objeto) {
    super(objeto)
  }

  //Baixa/abre um recuros pelo código
  login = async (email, senha) => {
    const r = await api.post('processos/login', {
      usuario: email.trim(),
      senha: senha,
    })

    this.objeto = r[0]

    //gravar dados de autenticação
    autenticacao.gravar(this.bearer, this.codigo_corporativo, this.codigo)

    return this
  }
}
