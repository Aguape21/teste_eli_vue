//Conexão com o recurso de usuarios


import { objetoRecurso } from './recurso'
import api from '../plugins/api'
import autenticacao from '../plugins/autenticacao'
import { EsquemaUsuarios } from './esquemasRecursos'

export default class Usuarios extends EsquemaUsuarios {
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

  constructor(objeto?: objetoRecurso) {
    super(objeto)
  }

  //Baixa/abre um recuros pelo código
  login = async (email: string, senha: string):Promise<void> => {
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
