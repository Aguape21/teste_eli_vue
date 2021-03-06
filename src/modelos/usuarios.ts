//Conexão com o recurso de usuarios

import { ClasseUsuarios, interfaceUsuarios } from './esquemasRecursos'
import api from '../plugins/api'
import autenticacao from '../plugins/autenticacao'

export default class Usuarios extends ClasseUsuarios {
  recurso = 'usuarios'
  colunas = `codigo_corporativo
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

  constructor(objeto?: interfaceUsuarios) {
    super(objeto)
  }

  //Baixa/abre um recuros pelo código
  login = async (email: string, senha: string): Promise<void> => {
    const r = await api.post('processos/login', {
      usuario: email.trim(),
      senha: senha,
    })

    this.objeto = r[0]

    //gravar dados de autenticação
    autenticacao.gravar(
      this.objeto.bearer?.toString() || '',
      this.objeto.codigo_corporativo?.toString() || '',
      this.objeto.codigo?.toString() || '',
    )
  }
}
