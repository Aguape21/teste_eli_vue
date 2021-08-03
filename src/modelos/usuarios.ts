//Conexão com o recurso de usuarios

import { ClasseUsuarios, interfaceUsuarios } from '@/modelos/esquemasRecursos'
import api from '@/plugins/api'
import autenticacao from '@/plugins/autenticacao'

export default class Usuarios extends ClasseUsuarios {
  recurso = 'usuarios'

  bearer = ''

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
    this.bearer = ((r[0].bearer)?.toString()) || ''

    //gravar dados de autenticação
    autenticacao.gravar(
      this.bearer?.toString() || '',
      this.codigoCorporativo?.toString() || '',
      this.codigo?.toString() || '',
    )
  }
}


