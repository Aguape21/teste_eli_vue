/*
    Essa bilioteca é gerada de forma automática em 
    http://0.0.0.0:8000/classes
    É um espelho fiel das tabelas do banco de dados.
*/

import { Recurso, interfaceRecurso } from './recurso'

export interface interfaceMetaDados {
  coluna: string
  descricao?: string
  editavel: boolean
  nulo: boolean
  tamanho?: number
}

export interface interfaceAcessos extends interfaceRecurso {
  codigo_corporativo?: string
  codigo_usuario?: string
  data_hora?: string
  ip?: string
  user_agent?: string
}
export class ClasseAcessos extends Recurso {
  constructor(objeto?: interfaceUsuarios) {
    super('acessos', objeto)
  }
  codigoCorporativo?: string
  codigoUsuario?: string
  dataHora?: string
  ip?: string
  userAgent?: string
  public get objeto(): interfaceAcessos {
    const saida: interfaceAlertasCompromissos = {}
    if (this.codigoCorporativo != undefined)
      saida.codigo_corporativo = this.codigoCorporativo
    if (this.codigoUsuario != undefined)
      saida.codigo_usuario = this.codigoUsuario
    if (this.dataHora != undefined) saida.data_hora = this.dataHora
    if (this.ip != undefined) saida.ip = this.ip
    if (this.userAgent != undefined) saida.user_agent = this.userAgent
    return saida
  }
  public set objeto(objeto: interfaceAcessos) {
    this.codigoCorporativo = objeto.codigo_corporativo
    this.codigoUsuario = objeto.codigo_usuario
    this.dataHora = objeto.data_hora
    this.ip = objeto.ip
    this.userAgent = objeto.user_agent
  }
  meta: { [key: string]: interfaceMetaDados } = {
    codigoCorporativo: {
      coluna: 'codigo_corporativo',
      editavel: true,
      nulo: false,
      tamanho: 36,
    },
    codigoUsuario: {
      coluna: 'codigo_usuario',
      editavel: true,
      nulo: false,
      tamanho: 36,
    },
    dataHora: { coluna: 'data_hora', editavel: true, nulo: false },
    ip: { coluna: 'ip', editavel: true, nulo: false, tamanho: 100 },
    userAgent: {
      coluna: 'user_agent',
      editavel: true,
      nulo: false,
      tamanho: 200,
    },
  }
}
export interface interfaceAlertasCompromissos extends interfaceRecurso {
  atualizado_view?: string
  codigo_corporativo?: string
  codigo?: string
  excluido?: string
  sincronizado?: string
  codigo_usuario_inclusao?: string
  data_hora_inclusao?: string
  codigo_usuario_alteracao?: string
  data_hora_alteracao?: string
  codigo_compromisso?: string
  numero?: string
  vencimento?: string
  executada?: string
  informacoes_complementares?: string
  codigos_usuarios_responsaveis?: string
  data_alerta?: string
  compromisso_tipo?: string
  compromisso_titulo?: string
  compromisso_descricao?: string
  compromisso_recorrencia?: string
  compromisso_intervalo?: string
  compromisso_quantidade_recorrencia?: string
  compromisso_obrigacao_legal?: string
  codigo_licenciador?: string
  codigo_empreendedor?: string
  codigo_empreendimento?: string
  empreendedor_nome?: string
  empreendedor_cpf?: string
  empreendedor_cnpj?: string
  empreendimento_nome?: string
  empreendimento_identificador?: string
  empreendimento_cpf?: string
  empreendimento_cnpj?: string
  licenciador_nome?: string
  situacao_texto?: string
  situacao_texto_7?: string
  situacao_texto_15?: string
  situacao_texto_30?: string
}
export class ClasseAlertasCompromissos extends Recurso {
  constructor(objeto?: interfaceUsuarios) {
    super('alertas_compromissos', objeto)
  }
  atualizadoView?: string
  codigoCorporativo?: string
  codigo?: string
  excluido?: string
  sincronizado?: string
  codigoUsuarioInclusao?: string
  dataHoraInclusao?: string
  codigoUsuarioAlteracao?: string
  dataHoraAlteracao?: string
  codigoCompromisso?: string
  numero?: string
  vencimento?: string
  executada?: string
  informacoesComplementares?: string
  codigosUsuariosResponsaveis?: string
  dataAlerta?: string
  compromissoTipo?: string
  compromissoTitulo?: string
  compromissoDescricao?: string
  compromissoRecorrencia?: string
  compromissoIntervalo?: string
  compromissoQuantidadeRecorrencia?: string
  compromissoObrigacaoLegal?: string
  codigoLicenciador?: string
  codigoEmpreendedor?: string
  codigoEmpreendimento?: string
  empreendedorNome?: string
  empreendedorCpf?: string
  empreendedorCnpj?: string
  empreendimentoNome?: string
  empreendimentoIdentificador?: string
  empreendimentoCpf?: string
  empreendimentoCnpj?: string
  licenciadorNome?: string
  situacaoTexto?: string
  situacaoTexto7?: string
  situacaoTexto15?: string
  situacaoTexto30?: string
  public get objeto(): interfaceAlertasCompromissos {
    const saida: interfaceAlertasCompromissos = {}
    if (this.atualizadoView != undefined)
      saida.atualizado_view = this.atualizadoView
    if (this.codigoCorporativo != undefined)
      saida.codigo_corporativo = this.codigoCorporativo
    if (this.codigo != undefined) saida.codigo = this.codigo
    if (this.excluido != undefined) saida.excluido = this.excluido
    if (this.sincronizado != undefined) saida.sincronizado = this.sincronizado
    if (this.codigoUsuarioInclusao != undefined)
      saida.codigo_usuario_inclusao = this.codigoUsuarioInclusao
    if (this.dataHoraInclusao != undefined)
      saida.data_hora_inclusao = this.dataHoraInclusao
    if (this.codigoUsuarioAlteracao != undefined)
      saida.codigo_usuario_alteracao = this.codigoUsuarioAlteracao
    if (this.dataHoraAlteracao != undefined)
      saida.data_hora_alteracao = this.dataHoraAlteracao
    if (this.codigoCompromisso != undefined)
      saida.codigo_compromisso = this.codigoCompromisso
    if (this.numero != undefined) saida.numero = this.numero
    if (this.vencimento != undefined) saida.vencimento = this.vencimento
    if (this.executada != undefined) saida.executada = this.executada
    if (this.informacoesComplementares != undefined)
      saida.informacoes_complementares = this.informacoesComplementares
    if (this.codigosUsuariosResponsaveis != undefined)
      saida.codigos_usuarios_responsaveis = this.codigosUsuariosResponsaveis
    if (this.dataAlerta != undefined) saida.data_alerta = this.dataAlerta
    if (this.compromissoTipo != undefined)
      saida.compromisso_tipo = this.compromissoTipo
    if (this.compromissoTitulo != undefined)
      saida.compromisso_titulo = this.compromissoTitulo
    if (this.compromissoDescricao != undefined)
      saida.compromisso_descricao = this.compromissoDescricao
    if (this.compromissoRecorrencia != undefined)
      saida.compromisso_recorrencia = this.compromissoRecorrencia
    if (this.compromissoIntervalo != undefined)
      saida.compromisso_intervalo = this.compromissoIntervalo
    if (this.compromissoQuantidadeRecorrencia != undefined)
      saida.compromisso_quantidade_recorrencia = this.compromissoQuantidadeRecorrencia
    if (this.compromissoObrigacaoLegal != undefined)
      saida.compromisso_obrigacao_legal = this.compromissoObrigacaoLegal
    if (this.codigoLicenciador != undefined)
      saida.codigo_licenciador = this.codigoLicenciador
    if (this.codigoEmpreendedor != undefined)
      saida.codigo_empreendedor = this.codigoEmpreendedor
    if (this.codigoEmpreendimento != undefined)
      saida.codigo_empreendimento = this.codigoEmpreendimento
    if (this.empreendedorNome != undefined)
      saida.empreendedor_nome = this.empreendedorNome
    if (this.empreendedorCpf != undefined)
      saida.empreendedor_cpf = this.empreendedorCpf
    if (this.empreendedorCnpj != undefined)
      saida.empreendedor_cnpj = this.empreendedorCnpj
    if (this.empreendimentoNome != undefined)
      saida.empreendimento_nome = this.empreendimentoNome
    if (this.empreendimentoIdentificador != undefined)
      saida.empreendimento_identificador = this.empreendimentoIdentificador
    if (this.empreendimentoCpf != undefined)
      saida.empreendimento_cpf = this.empreendimentoCpf
    if (this.empreendimentoCnpj != undefined)
      saida.empreendimento_cnpj = this.empreendimentoCnpj
    if (this.licenciadorNome != undefined)
      saida.licenciador_nome = this.licenciadorNome
    if (this.situacaoTexto != undefined)
      saida.situacao_texto = this.situacaoTexto
    if (this.situacaoTexto7 != undefined)
      saida.situacao_texto_7 = this.situacaoTexto7
    if (this.situacaoTexto15 != undefined)
      saida.situacao_texto_15 = this.situacaoTexto15
    if (this.situacaoTexto30 != undefined)
      saida.situacao_texto_30 = this.situacaoTexto30
    return saida
  }
  public set objeto(objeto: interfaceAlertasCompromissos) {
    this.atualizadoView = objeto.atualizado_view
    this.codigoCorporativo = objeto.codigo_corporativo
    this.codigo = objeto.codigo
    this.excluido = objeto.excluido
    this.sincronizado = objeto.sincronizado
    this.codigoUsuarioInclusao = objeto.codigo_usuario_inclusao
    this.dataHoraInclusao = objeto.data_hora_inclusao
    this.codigoUsuarioAlteracao = objeto.codigo_usuario_alteracao
    this.dataHoraAlteracao = objeto.data_hora_alteracao
    this.codigoCompromisso = objeto.codigo_compromisso
    this.numero = objeto.numero
    this.vencimento = objeto.vencimento
    this.executada = objeto.executada
    this.informacoesComplementares = objeto.informacoes_complementares
    this.codigosUsuariosResponsaveis = objeto.codigos_usuarios_responsaveis
    this.dataAlerta = objeto.data_alerta
    this.compromissoTipo = objeto.compromisso_tipo
    this.compromissoTitulo = objeto.compromisso_titulo
    this.compromissoDescricao = objeto.compromisso_descricao
    this.compromissoRecorrencia = objeto.compromisso_recorrencia
    this.compromissoIntervalo = objeto.compromisso_intervalo
    this.compromissoQuantidadeRecorrencia =
      objeto.compromisso_quantidade_recorrencia
    this.compromissoObrigacaoLegal = objeto.compromisso_obrigacao_legal
    this.codigoLicenciador = objeto.codigo_licenciador
    this.codigoEmpreendedor = objeto.codigo_empreendedor
    this.codigoEmpreendimento = objeto.codigo_empreendimento
    this.empreendedorNome = objeto.empreendedor_nome
    this.empreendedorCpf = objeto.empreendedor_cpf
    this.empreendedorCnpj = objeto.empreendedor_cnpj
    this.empreendimentoNome = objeto.empreendimento_nome
    this.empreendimentoIdentificador = objeto.empreendimento_identificador
    this.empreendimentoCpf = objeto.empreendimento_cpf
    this.empreendimentoCnpj = objeto.empreendimento_cnpj
    this.licenciadorNome = objeto.licenciador_nome
    this.situacaoTexto = objeto.situacao_texto
    this.situacaoTexto7 = objeto.situacao_texto_7
    this.situacaoTexto15 = objeto.situacao_texto_15
    this.situacaoTexto30 = objeto.situacao_texto_30
  }
  meta: { [key: string]: interfaceMetaDados } = {
    atualizadoView: {
      coluna: 'atualizado_view',
      editavel: true,
      nulo: true,
      tamanho: 50,
    },
    codigoCorporativo: {
      coluna: 'codigo_corporativo',
      editavel: true,
      nulo: false,
      tamanho: 36,
    },
    codigo: { coluna: 'codigo', editavel: true, nulo: false, tamanho: 36 },
    excluido: { coluna: 'excluido', editavel: true, nulo: true, tamanho: 1 },
    sincronizado: {
      coluna: 'sincronizado',
      editavel: true,
      nulo: true,
      tamanho: 1,
    },
    codigoUsuarioInclusao: {
      coluna: 'codigo_usuario_inclusao',
      editavel: true,
      nulo: true,
      tamanho: 36,
    },
    dataHoraInclusao: {
      coluna: 'data_hora_inclusao',
      editavel: true,
      nulo: true,
    },
    codigoUsuarioAlteracao: {
      coluna: 'codigo_usuario_alteracao',
      editavel: true,
      nulo: true,
      tamanho: 36,
    },
    dataHoraAlteracao: {
      coluna: 'data_hora_alteracao',
      editavel: true,
      nulo: true,
    },
    codigoCompromisso: {
      coluna: 'codigo_compromisso',
      editavel: true,
      nulo: true,
      tamanho: 36,
    },
    numero: { coluna: 'numero', editavel: true, nulo: true },
    vencimento: { coluna: 'vencimento', editavel: true, nulo: true },
    executada: { coluna: 'executada', editavel: true, nulo: true },
    informacoesComplementares: {
      coluna: 'informacoes_complementares',
      editavel: true,
      nulo: true,
      tamanho: 500,
    },
    codigosUsuariosResponsaveis: {
      coluna: 'codigos_usuarios_responsaveis',
      editavel: true,
      nulo: true,
    },
    dataAlerta: { coluna: 'data_alerta', editavel: true, nulo: true },
    compromissoTipo: {
      coluna: 'compromisso_tipo',
      editavel: true,
      nulo: true,
      tamanho: 100,
    },
    compromissoTitulo: {
      coluna: 'compromisso_titulo',
      editavel: true,
      nulo: true,
      tamanho: 150,
    },
    compromissoDescricao: {
      coluna: 'compromisso_descricao',
      editavel: true,
      nulo: true,
      tamanho: 500,
    },
    compromissoRecorrencia: {
      coluna: 'compromisso_recorrencia',
      editavel: true,
      nulo: true,
      tamanho: 36,
    },
    compromissoIntervalo: {
      coluna: 'compromisso_intervalo',
      editavel: true,
      nulo: true,
    },
    compromissoQuantidadeRecorrencia: {
      coluna: 'compromisso_quantidade_recorrencia',
      editavel: true,
      nulo: true,
    },
    compromissoObrigacaoLegal: {
      coluna: 'compromisso_obrigacao_legal',
      editavel: true,
      nulo: true,
      tamanho: 1,
    },
    codigoLicenciador: {
      coluna: 'codigo_licenciador',
      editavel: true,
      nulo: true,
      tamanho: 36,
    },
    codigoEmpreendedor: {
      coluna: 'codigo_empreendedor',
      editavel: true,
      nulo: true,
      tamanho: 36,
    },
    codigoEmpreendimento: {
      coluna: 'codigo_empreendimento',
      editavel: true,
      nulo: true,
      tamanho: 36,
    },
    empreendedorNome: {
      coluna: 'empreendedor_nome',
      editavel: true,
      nulo: true,
      tamanho: 100,
    },
    empreendedorCpf: {
      coluna: 'empreendedor_cpf',
      editavel: true,
      nulo: true,
      tamanho: 14,
    },
    empreendedorCnpj: {
      coluna: 'empreendedor_cnpj',
      editavel: true,
      nulo: true,
      tamanho: 18,
    },
    empreendimentoNome: {
      coluna: 'empreendimento_nome',
      editavel: true,
      nulo: true,
      tamanho: 100,
    },
    empreendimentoIdentificador: {
      coluna: 'empreendimento_identificador',
      editavel: true,
      nulo: true,
      tamanho: 30,
    },
    empreendimentoCpf: {
      coluna: 'empreendimento_cpf',
      editavel: true,
      nulo: true,
      tamanho: 14,
    },
    empreendimentoCnpj: {
      coluna: 'empreendimento_cnpj',
      editavel: true,
      nulo: true,
      tamanho: 18,
    },
    licenciadorNome: {
      coluna: 'licenciador_nome',
      editavel: true,
      nulo: true,
      tamanho: 100,
    },
    situacaoTexto: { coluna: 'situacao_texto', editavel: true, nulo: true },
    situacaoTexto7: { coluna: 'situacao_texto_7', editavel: true, nulo: true },
    situacaoTexto15: {
      coluna: 'situacao_texto_15',
      editavel: true,
      nulo: true,
    },
    situacaoTexto30: {
      coluna: 'situacao_texto_30',
      editavel: true,
      nulo: true,
    },
  }
}
export interface interfaceAlertasCondicionantes extends interfaceRecurso {
  atualizado_view?: string
  codigo_corporativo?: string
  codigo?: string
  excluido?: string
  sincronizado?: string
  codigo_usuario_inclusao?: string
  data_hora_inclusao?: string
  codigo_usuario_alteracao?: string
  data_hora_alteracao?: string
  codigo_condicionante?: string
  numero?: string
  vencimento?: string
  executada?: string
  numero_protocolo?: string
  informacoes_complementares?: string
  responsavel?: string
  data_alerta?: string
  condicionante_descricao?: string
  condicionante_informacoes_complementares?: string
  condicionante_recorrencia?: string
  condicionante_itervalo?: string
  condicionante_alerta_dias?: string
  departamento?: string
  codigos_usuarios_responsaveis?: string
  codigo_licenca?: string
  licenca_tipo?: string
  licenca_descricao_tipo_outras?: string
  licenca_numero?: string
  licenca_descricao?: string
  licenca_emissao?: string
  licenca_vencimento?: string
  codigo_empreendedor?: string
  empreendedor_nome?: string
  empreendedor_cpf?: string
  empreendedor_cnpj?: string
  codigo_empreendimento?: string
  empreendimento_nome?: string
  empreendimento_identificador?: string
  empreendimento_cpf?: string
  empreendimento_cnpj?: string
  codigo_licenciador?: string
  nome_licenciador?: string
  situacao_texto?: string
  situacao_texto_7?: string
  situacao_texto_15?: string
  situacao_texto_30?: string
}
export class ClasseAlertasCondicionantes extends Recurso {
  constructor(objeto?: interfaceUsuarios) {
    super('alertas_condicionantes', objeto)
  }
  atualizadoView?: string
  codigoCorporativo?: string
  codigo?: string
  excluido?: string
  sincronizado?: string
  codigoUsuarioInclusao?: string
  dataHoraInclusao?: string
  codigoUsuarioAlteracao?: string
  dataHoraAlteracao?: string
  codigoCondicionante?: string
  numero?: string
  vencimento?: string
  executada?: string
  numeroProtocolo?: string
  informacoesComplementares?: string
  responsavel?: string
  dataAlerta?: string
  condicionanteDescricao?: string
  condicionanteInformacoesComplementares?: string
  condicionanteRecorrencia?: string
  condicionanteItervalo?: string
  condicionanteAlertaDias?: string
  departamento?: string
  codigosUsuariosResponsaveis?: string
  codigoLicenca?: string
  licencaTipo?: string
  licencaDescricaoTipoOutras?: string
  licencaNumero?: string
  licencaDescricao?: string
  licencaEmissao?: string
  licencaVencimento?: string
  codigoEmpreendedor?: string
  empreendedorNome?: string
  empreendedorCpf?: string
  empreendedorCnpj?: string
  codigoEmpreendimento?: string
  empreendimentoNome?: string
  empreendimentoIdentificador?: string
  empreendimentoCpf?: string
  empreendimentoCnpj?: string
  codigoLicenciador?: string
  nomeLicenciador?: string
  situacaoTexto?: string
  situacaoTexto7?: string
  situacaoTexto15?: string
  situacaoTexto30?: string
  public get objeto(): interfaceAlertasCondicionantes {
    const saida: interfaceAlertasCompromissos = {}
    if (this.atualizadoView != undefined)
      saida.atualizado_view = this.atualizadoView
    if (this.codigoCorporativo != undefined)
      saida.codigo_corporativo = this.codigoCorporativo
    if (this.codigo != undefined) saida.codigo = this.codigo
    if (this.excluido != undefined) saida.excluido = this.excluido
    if (this.sincronizado != undefined) saida.sincronizado = this.sincronizado
    if (this.codigoUsuarioInclusao != undefined)
      saida.codigo_usuario_inclusao = this.codigoUsuarioInclusao
    if (this.dataHoraInclusao != undefined)
      saida.data_hora_inclusao = this.dataHoraInclusao
    if (this.codigoUsuarioAlteracao != undefined)
      saida.codigo_usuario_alteracao = this.codigoUsuarioAlteracao
    if (this.dataHoraAlteracao != undefined)
      saida.data_hora_alteracao = this.dataHoraAlteracao
    if (this.codigoCondicionante != undefined)
      saida.codigo_condicionante = this.codigoCondicionante
    if (this.numero != undefined) saida.numero = this.numero
    if (this.vencimento != undefined) saida.vencimento = this.vencimento
    if (this.executada != undefined) saida.executada = this.executada
    if (this.numeroProtocolo != undefined)
      saida.numero_protocolo = this.numeroProtocolo
    if (this.informacoesComplementares != undefined)
      saida.informacoes_complementares = this.informacoesComplementares
    if (this.responsavel != undefined) saida.responsavel = this.responsavel
    if (this.dataAlerta != undefined) saida.data_alerta = this.dataAlerta
    if (this.condicionanteDescricao != undefined)
      saida.condicionante_descricao = this.condicionanteDescricao
    if (this.condicionanteInformacoesComplementares != undefined)
      saida.condicionante_informacoes_complementares = this.condicionanteInformacoesComplementares
    if (this.condicionanteRecorrencia != undefined)
      saida.condicionante_recorrencia = this.condicionanteRecorrencia
    if (this.condicionanteItervalo != undefined)
      saida.condicionante_itervalo = this.condicionanteItervalo
    if (this.condicionanteAlertaDias != undefined)
      saida.condicionante_alerta_dias = this.condicionanteAlertaDias
    if (this.departamento != undefined) saida.departamento = this.departamento
    if (this.codigosUsuariosResponsaveis != undefined)
      saida.codigos_usuarios_responsaveis = this.codigosUsuariosResponsaveis
    if (this.codigoLicenca != undefined)
      saida.codigo_licenca = this.codigoLicenca
    if (this.licencaTipo != undefined) saida.licenca_tipo = this.licencaTipo
    if (this.licencaDescricaoTipoOutras != undefined)
      saida.licenca_descricao_tipo_outras = this.licencaDescricaoTipoOutras
    if (this.licencaNumero != undefined)
      saida.licenca_numero = this.licencaNumero
    if (this.licencaDescricao != undefined)
      saida.licenca_descricao = this.licencaDescricao
    if (this.licencaEmissao != undefined)
      saida.licenca_emissao = this.licencaEmissao
    if (this.licencaVencimento != undefined)
      saida.licenca_vencimento = this.licencaVencimento
    if (this.codigoEmpreendedor != undefined)
      saida.codigo_empreendedor = this.codigoEmpreendedor
    if (this.empreendedorNome != undefined)
      saida.empreendedor_nome = this.empreendedorNome
    if (this.empreendedorCpf != undefined)
      saida.empreendedor_cpf = this.empreendedorCpf
    if (this.empreendedorCnpj != undefined)
      saida.empreendedor_cnpj = this.empreendedorCnpj
    if (this.codigoEmpreendimento != undefined)
      saida.codigo_empreendimento = this.codigoEmpreendimento
    if (this.empreendimentoNome != undefined)
      saida.empreendimento_nome = this.empreendimentoNome
    if (this.empreendimentoIdentificador != undefined)
      saida.empreendimento_identificador = this.empreendimentoIdentificador
    if (this.empreendimentoCpf != undefined)
      saida.empreendimento_cpf = this.empreendimentoCpf
    if (this.empreendimentoCnpj != undefined)
      saida.empreendimento_cnpj = this.empreendimentoCnpj
    if (this.codigoLicenciador != undefined)
      saida.codigo_licenciador = this.codigoLicenciador
    if (this.nomeLicenciador != undefined)
      saida.nome_licenciador = this.nomeLicenciador
    if (this.situacaoTexto != undefined)
      saida.situacao_texto = this.situacaoTexto
    if (this.situacaoTexto7 != undefined)
      saida.situacao_texto_7 = this.situacaoTexto7
    if (this.situacaoTexto15 != undefined)
      saida.situacao_texto_15 = this.situacaoTexto15
    if (this.situacaoTexto30 != undefined)
      saida.situacao_texto_30 = this.situacaoTexto30
    return saida
  }
  public set objeto(objeto: interfaceAlertasCondicionantes) {
    this.atualizadoView = objeto.atualizado_view
    this.codigoCorporativo = objeto.codigo_corporativo
    this.codigo = objeto.codigo
    this.excluido = objeto.excluido
    this.sincronizado = objeto.sincronizado
    this.codigoUsuarioInclusao = objeto.codigo_usuario_inclusao
    this.dataHoraInclusao = objeto.data_hora_inclusao
    this.codigoUsuarioAlteracao = objeto.codigo_usuario_alteracao
    this.dataHoraAlteracao = objeto.data_hora_alteracao
    this.codigoCondicionante = objeto.codigo_condicionante
    this.numero = objeto.numero
    this.vencimento = objeto.vencimento
    this.executada = objeto.executada
    this.numeroProtocolo = objeto.numero_protocolo
    this.informacoesComplementares = objeto.informacoes_complementares
    this.responsavel = objeto.responsavel
    this.dataAlerta = objeto.data_alerta
    this.condicionanteDescricao = objeto.condicionante_descricao
    this.condicionanteInformacoesComplementares =
      objeto.condicionante_informacoes_complementares
    this.condicionanteRecorrencia = objeto.condicionante_recorrencia
    this.condicionanteItervalo = objeto.condicionante_itervalo
    this.condicionanteAlertaDias = objeto.condicionante_alerta_dias
    this.departamento = objeto.departamento
    this.codigosUsuariosResponsaveis = objeto.codigos_usuarios_responsaveis
    this.codigoLicenca = objeto.codigo_licenca
    this.licencaTipo = objeto.licenca_tipo
    this.licencaDescricaoTipoOutras = objeto.licenca_descricao_tipo_outras
    this.licencaNumero = objeto.licenca_numero
    this.licencaDescricao = objeto.licenca_descricao
    this.licencaEmissao = objeto.licenca_emissao
    this.licencaVencimento = objeto.licenca_vencimento
    this.codigoEmpreendedor = objeto.codigo_empreendedor
    this.empreendedorNome = objeto.empreendedor_nome
    this.empreendedorCpf = objeto.empreendedor_cpf
    this.empreendedorCnpj = objeto.empreendedor_cnpj
    this.codigoEmpreendimento = objeto.codigo_empreendimento
    this.empreendimentoNome = objeto.empreendimento_nome
    this.empreendimentoIdentificador = objeto.empreendimento_identificador
    this.empreendimentoCpf = objeto.empreendimento_cpf
    this.empreendimentoCnpj = objeto.empreendimento_cnpj
    this.codigoLicenciador = objeto.codigo_licenciador
    this.nomeLicenciador = objeto.nome_licenciador
    this.situacaoTexto = objeto.situacao_texto
    this.situacaoTexto7 = objeto.situacao_texto_7
    this.situacaoTexto15 = objeto.situacao_texto_15
    this.situacaoTexto30 = objeto.situacao_texto_30
  }
  meta: { [key: string]: interfaceMetaDados } = {
    atualizadoView: {
      coluna: 'atualizado_view',
      editavel: true,
      nulo: true,
      tamanho: 50,
    },
    codigoCorporativo: {
      coluna: 'codigo_corporativo',
      editavel: true,
      nulo: false,
      tamanho: 36,
    },
    codigo: { coluna: 'codigo', editavel: true, nulo: false, tamanho: 36 },
    excluido: { coluna: 'excluido', editavel: true, nulo: true, tamanho: 1 },
    sincronizado: {
      coluna: 'sincronizado',
      editavel: true,
      nulo: true,
      tamanho: 1,
    },
    codigoUsuarioInclusao: {
      coluna: 'codigo_usuario_inclusao',
      editavel: true,
      nulo: true,
      tamanho: 36,
    },
    dataHoraInclusao: {
      coluna: 'data_hora_inclusao',
      editavel: true,
      nulo: true,
    },
    codigoUsuarioAlteracao: {
      coluna: 'codigo_usuario_alteracao',
      editavel: true,
      nulo: true,
      tamanho: 36,
    },
    dataHoraAlteracao: {
      coluna: 'data_hora_alteracao',
      editavel: true,
      nulo: true,
    },
    codigoCondicionante: {
      coluna: 'codigo_condicionante',
      editavel: true,
      nulo: true,
      tamanho: 36,
    },
    numero: { coluna: 'numero', editavel: true, nulo: true },
    vencimento: { coluna: 'vencimento', editavel: true, nulo: true },
    executada: { coluna: 'executada', editavel: true, nulo: true },
    numeroProtocolo: {
      coluna: 'numero_protocolo',
      editavel: true,
      nulo: true,
      tamanho: 50,
    },
    informacoesComplementares: {
      coluna: 'informacoes_complementares',
      editavel: true,
      nulo: true,
      tamanho: 1200,
    },
    responsavel: {
      coluna: 'responsavel',
      editavel: true,
      nulo: true,
      tamanho: 100,
    },
    dataAlerta: { coluna: 'data_alerta', editavel: true, nulo: true },
    condicionanteDescricao: {
      coluna: 'condicionante_descricao',
      editavel: true,
      nulo: true,
      tamanho: 200,
    },
    condicionanteInformacoesComplementares: {
      coluna: 'condicionante_informacoes_complementares',
      editavel: true,
      nulo: true,
      tamanho: 1000,
    },
    condicionanteRecorrencia: {
      coluna: 'condicionante_recorrencia',
      editavel: true,
      nulo: true,
      tamanho: 1,
    },
    condicionanteItervalo: {
      coluna: 'condicionante_itervalo',
      editavel: true,
      nulo: true,
    },
    condicionanteAlertaDias: {
      coluna: 'condicionante_alerta_dias',
      editavel: true,
      nulo: true,
    },
    departamento: {
      coluna: 'departamento',
      editavel: true,
      nulo: true,
      tamanho: 100,
    },
    codigosUsuariosResponsaveis: {
      coluna: 'codigos_usuarios_responsaveis',
      editavel: true,
      nulo: true,
    },
    codigoLicenca: {
      coluna: 'codigo_licenca',
      editavel: true,
      nulo: true,
      tamanho: 36,
    },
    licencaTipo: {
      coluna: 'licenca_tipo',
      editavel: true,
      nulo: true,
      tamanho: 100,
    },
    licencaDescricaoTipoOutras: {
      coluna: 'licenca_descricao_tipo_outras',
      editavel: true,
      nulo: true,
      tamanho: 100,
    },
    licencaNumero: {
      coluna: 'licenca_numero',
      editavel: true,
      nulo: true,
      tamanho: 50,
    },
    licencaDescricao: {
      coluna: 'licenca_descricao',
      editavel: true,
      nulo: true,
      tamanho: 100,
    },
    licencaEmissao: { coluna: 'licenca_emissao', editavel: true, nulo: true },
    licencaVencimento: {
      coluna: 'licenca_vencimento',
      editavel: true,
      nulo: true,
    },
    codigoEmpreendedor: {
      coluna: 'codigo_empreendedor',
      editavel: true,
      nulo: true,
      tamanho: 36,
    },
    empreendedorNome: {
      coluna: 'empreendedor_nome',
      editavel: true,
      nulo: true,
      tamanho: 100,
    },
    empreendedorCpf: {
      coluna: 'empreendedor_cpf',
      editavel: true,
      nulo: true,
      tamanho: 14,
    },
    empreendedorCnpj: {
      coluna: 'empreendedor_cnpj',
      editavel: true,
      nulo: true,
      tamanho: 18,
    },
    codigoEmpreendimento: {
      coluna: 'codigo_empreendimento',
      editavel: true,
      nulo: true,
      tamanho: 36,
    },
    empreendimentoNome: {
      coluna: 'empreendimento_nome',
      editavel: true,
      nulo: true,
      tamanho: 100,
    },
    empreendimentoIdentificador: {
      coluna: 'empreendimento_identificador',
      editavel: true,
      nulo: true,
      tamanho: 30,
    },
    empreendimentoCpf: {
      coluna: 'empreendimento_cpf',
      editavel: true,
      nulo: true,
      tamanho: 14,
    },
    empreendimentoCnpj: {
      coluna: 'empreendimento_cnpj',
      editavel: true,
      nulo: true,
      tamanho: 18,
    },
    codigoLicenciador: {
      coluna: 'codigo_licenciador',
      editavel: true,
      nulo: true,
      tamanho: 36,
    },
    nomeLicenciador: {
      coluna: 'nome_licenciador',
      editavel: true,
      nulo: true,
      tamanho: 100,
    },
    situacaoTexto: { coluna: 'situacao_texto', editavel: true, nulo: true },
    situacaoTexto7: { coluna: 'situacao_texto_7', editavel: true, nulo: true },
    situacaoTexto15: {
      coluna: 'situacao_texto_15',
      editavel: true,
      nulo: true,
    },
    situacaoTexto30: {
      coluna: 'situacao_texto_30',
      editavel: true,
      nulo: true,
    },
  }
}
export interface interfaceAlertasLicencas extends interfaceRecurso {
  atualizado_view?: string
  codigo_corporativo?: string
  codigo?: string
  excluido?: string
  sincronizado?: string
  codigo_usuario_inclusao?: string
  data_hora_inclusao?: string
  codigo_usuario_alteracao?: string
  data_hora_alteracao?: string
  descricao?: string
  codigo_empreendedor?: string
  codigo_licenciador?: string
  numero_processo?: string
  tipo?: string
  numero?: string
  emissao?: string
  vencimento?: string
  vencimento_meses?: string
  renovacao?: string
  renovacao_dias?: string
  alerta?: string
  alerta_dias?: string
  informacoes_complementares?: string
  codigo_licenca_anterior?: string
  descricao_tipo_outras?: string
  codigo_licenca_posterior?: string
  data_protocolo_renovacao?: string
  numero_protocolo_renovacao?: string
  observacao_protocolo_renovacao?: string
  status?: string
  codigo_empreendimento?: string
  codigos_usuarios_responsaveis?: string
  empreendedor_nome?: string
  empreendedor_cpf?: string
  empreendedor_cnpj?: string
  empreendimento_nome?: string
  empreendimento_identificador?: string
  empreendimento_cpf?: string
  empreendimento_cnpj?: string
  nome_licenciador?: string
  situacao_texto?: string
  situacao_texto_7?: string
  situacao_texto_15?: string
  situacao_texto_30?: string
}
export class ClasseAlertasLicencas extends Recurso {
  constructor(objeto?: interfaceUsuarios) {
    super('alertas_licencas', objeto)
  }
  atualizadoView?: string
  codigoCorporativo?: string
  codigo?: string
  excluido?: string
  sincronizado?: string
  codigoUsuarioInclusao?: string
  dataHoraInclusao?: string
  codigoUsuarioAlteracao?: string
  dataHoraAlteracao?: string
  descricao?: string
  codigoEmpreendedor?: string
  codigoLicenciador?: string
  numeroProcesso?: string
  tipo?: string
  numero?: string
  emissao?: string
  vencimento?: string
  vencimentoMeses?: string
  renovacao?: string
  renovacaoDias?: string
  alerta?: string
  alertaDias?: string
  informacoesComplementares?: string
  codigoLicencaAnterior?: string
  descricaoTipoOutras?: string
  codigoLicencaPosterior?: string
  dataProtocoloRenovacao?: string
  numeroProtocoloRenovacao?: string
  observacaoProtocoloRenovacao?: string
  status?: string
  codigoEmpreendimento?: string
  codigosUsuariosResponsaveis?: string
  empreendedorNome?: string
  empreendedorCpf?: string
  empreendedorCnpj?: string
  empreendimentoNome?: string
  empreendimentoIdentificador?: string
  empreendimentoCpf?: string
  empreendimentoCnpj?: string
  nomeLicenciador?: string
  situacaoTexto?: string
  situacaoTexto7?: string
  situacaoTexto15?: string
  situacaoTexto30?: string
  public get objeto(): interfaceAlertasLicencas {
    const saida: interfaceAlertasCompromissos = {}
    if (this.atualizadoView != undefined)
      saida.atualizado_view = this.atualizadoView
    if (this.codigoCorporativo != undefined)
      saida.codigo_corporativo = this.codigoCorporativo
    if (this.codigo != undefined) saida.codigo = this.codigo
    if (this.excluido != undefined) saida.excluido = this.excluido
    if (this.sincronizado != undefined) saida.sincronizado = this.sincronizado
    if (this.codigoUsuarioInclusao != undefined)
      saida.codigo_usuario_inclusao = this.codigoUsuarioInclusao
    if (this.dataHoraInclusao != undefined)
      saida.data_hora_inclusao = this.dataHoraInclusao
    if (this.codigoUsuarioAlteracao != undefined)
      saida.codigo_usuario_alteracao = this.codigoUsuarioAlteracao
    if (this.dataHoraAlteracao != undefined)
      saida.data_hora_alteracao = this.dataHoraAlteracao
    if (this.descricao != undefined) saida.descricao = this.descricao
    if (this.codigoEmpreendedor != undefined)
      saida.codigo_empreendedor = this.codigoEmpreendedor
    if (this.codigoLicenciador != undefined)
      saida.codigo_licenciador = this.codigoLicenciador
    if (this.numeroProcesso != undefined)
      saida.numero_processo = this.numeroProcesso
    if (this.tipo != undefined) saida.tipo = this.tipo
    if (this.numero != undefined) saida.numero = this.numero
    if (this.emissao != undefined) saida.emissao = this.emissao
    if (this.vencimento != undefined) saida.vencimento = this.vencimento
    if (this.vencimentoMeses != undefined)
      saida.vencimento_meses = this.vencimentoMeses
    if (this.renovacao != undefined) saida.renovacao = this.renovacao
    if (this.renovacaoDias != undefined)
      saida.renovacao_dias = this.renovacaoDias
    if (this.alerta != undefined) saida.alerta = this.alerta
    if (this.alertaDias != undefined) saida.alerta_dias = this.alertaDias
    if (this.informacoesComplementares != undefined)
      saida.informacoes_complementares = this.informacoesComplementares
    if (this.codigoLicencaAnterior != undefined)
      saida.codigo_licenca_anterior = this.codigoLicencaAnterior
    if (this.descricaoTipoOutras != undefined)
      saida.descricao_tipo_outras = this.descricaoTipoOutras
    if (this.codigoLicencaPosterior != undefined)
      saida.codigo_licenca_posterior = this.codigoLicencaPosterior
    if (this.dataProtocoloRenovacao != undefined)
      saida.data_protocolo_renovacao = this.dataProtocoloRenovacao
    if (this.numeroProtocoloRenovacao != undefined)
      saida.numero_protocolo_renovacao = this.numeroProtocoloRenovacao
    if (this.observacaoProtocoloRenovacao != undefined)
      saida.observacao_protocolo_renovacao = this.observacaoProtocoloRenovacao
    if (this.status != undefined) saida.status = this.status
    if (this.codigoEmpreendimento != undefined)
      saida.codigo_empreendimento = this.codigoEmpreendimento
    if (this.codigosUsuariosResponsaveis != undefined)
      saida.codigos_usuarios_responsaveis = this.codigosUsuariosResponsaveis
    if (this.empreendedorNome != undefined)
      saida.empreendedor_nome = this.empreendedorNome
    if (this.empreendedorCpf != undefined)
      saida.empreendedor_cpf = this.empreendedorCpf
    if (this.empreendedorCnpj != undefined)
      saida.empreendedor_cnpj = this.empreendedorCnpj
    if (this.empreendimentoNome != undefined)
      saida.empreendimento_nome = this.empreendimentoNome
    if (this.empreendimentoIdentificador != undefined)
      saida.empreendimento_identificador = this.empreendimentoIdentificador
    if (this.empreendimentoCpf != undefined)
      saida.empreendimento_cpf = this.empreendimentoCpf
    if (this.empreendimentoCnpj != undefined)
      saida.empreendimento_cnpj = this.empreendimentoCnpj
    if (this.nomeLicenciador != undefined)
      saida.nome_licenciador = this.nomeLicenciador
    if (this.situacaoTexto != undefined)
      saida.situacao_texto = this.situacaoTexto
    if (this.situacaoTexto7 != undefined)
      saida.situacao_texto_7 = this.situacaoTexto7
    if (this.situacaoTexto15 != undefined)
      saida.situacao_texto_15 = this.situacaoTexto15
    if (this.situacaoTexto30 != undefined)
      saida.situacao_texto_30 = this.situacaoTexto30
    return saida
  }
  public set objeto(objeto: interfaceAlertasLicencas) {
    this.atualizadoView = objeto.atualizado_view
    this.codigoCorporativo = objeto.codigo_corporativo
    this.codigo = objeto.codigo
    this.excluido = objeto.excluido
    this.sincronizado = objeto.sincronizado
    this.codigoUsuarioInclusao = objeto.codigo_usuario_inclusao
    this.dataHoraInclusao = objeto.data_hora_inclusao
    this.codigoUsuarioAlteracao = objeto.codigo_usuario_alteracao
    this.dataHoraAlteracao = objeto.data_hora_alteracao
    this.descricao = objeto.descricao
    this.codigoEmpreendedor = objeto.codigo_empreendedor
    this.codigoLicenciador = objeto.codigo_licenciador
    this.numeroProcesso = objeto.numero_processo
    this.tipo = objeto.tipo
    this.numero = objeto.numero
    this.emissao = objeto.emissao
    this.vencimento = objeto.vencimento
    this.vencimentoMeses = objeto.vencimento_meses
    this.renovacao = objeto.renovacao
    this.renovacaoDias = objeto.renovacao_dias
    this.alerta = objeto.alerta
    this.alertaDias = objeto.alerta_dias
    this.informacoesComplementares = objeto.informacoes_complementares
    this.codigoLicencaAnterior = objeto.codigo_licenca_anterior
    this.descricaoTipoOutras = objeto.descricao_tipo_outras
    this.codigoLicencaPosterior = objeto.codigo_licenca_posterior
    this.dataProtocoloRenovacao = objeto.data_protocolo_renovacao
    this.numeroProtocoloRenovacao = objeto.numero_protocolo_renovacao
    this.observacaoProtocoloRenovacao = objeto.observacao_protocolo_renovacao
    this.status = objeto.status
    this.codigoEmpreendimento = objeto.codigo_empreendimento
    this.codigosUsuariosResponsaveis = objeto.codigos_usuarios_responsaveis
    this.empreendedorNome = objeto.empreendedor_nome
    this.empreendedorCpf = objeto.empreendedor_cpf
    this.empreendedorCnpj = objeto.empreendedor_cnpj
    this.empreendimentoNome = objeto.empreendimento_nome
    this.empreendimentoIdentificador = objeto.empreendimento_identificador
    this.empreendimentoCpf = objeto.empreendimento_cpf
    this.empreendimentoCnpj = objeto.empreendimento_cnpj
    this.nomeLicenciador = objeto.nome_licenciador
    this.situacaoTexto = objeto.situacao_texto
    this.situacaoTexto7 = objeto.situacao_texto_7
    this.situacaoTexto15 = objeto.situacao_texto_15
    this.situacaoTexto30 = objeto.situacao_texto_30
  }
  meta: { [key: string]: interfaceMetaDados } = {
    atualizadoView: {
      coluna: 'atualizado_view',
      editavel: true,
      nulo: true,
      tamanho: 50,
    },
    codigoCorporativo: {
      coluna: 'codigo_corporativo',
      editavel: true,
      nulo: false,
      tamanho: 36,
    },
    codigo: { coluna: 'codigo', editavel: true, nulo: false, tamanho: 36 },
    excluido: { coluna: 'excluido', editavel: true, nulo: true, tamanho: 1 },
    sincronizado: {
      coluna: 'sincronizado',
      editavel: true,
      nulo: true,
      tamanho: 1,
    },
    codigoUsuarioInclusao: {
      coluna: 'codigo_usuario_inclusao',
      editavel: true,
      nulo: true,
      tamanho: 36,
    },
    dataHoraInclusao: {
      coluna: 'data_hora_inclusao',
      editavel: true,
      nulo: true,
    },
    codigoUsuarioAlteracao: {
      coluna: 'codigo_usuario_alteracao',
      editavel: true,
      nulo: true,
      tamanho: 36,
    },
    dataHoraAlteracao: {
      coluna: 'data_hora_alteracao',
      editavel: true,
      nulo: true,
    },
    descricao: {
      coluna: 'descricao',
      editavel: true,
      nulo: true,
      tamanho: 100,
    },
    codigoEmpreendedor: {
      coluna: 'codigo_empreendedor',
      editavel: true,
      nulo: true,
      tamanho: 36,
    },
    codigoLicenciador: {
      coluna: 'codigo_licenciador',
      editavel: true,
      nulo: true,
      tamanho: 36,
    },
    numeroProcesso: {
      coluna: 'numero_processo',
      editavel: true,
      nulo: true,
      tamanho: 50,
    },
    tipo: { coluna: 'tipo', editavel: true, nulo: true, tamanho: 100 },
    numero: { coluna: 'numero', editavel: true, nulo: true, tamanho: 50 },
    emissao: { coluna: 'emissao', editavel: true, nulo: true },
    vencimento: { coluna: 'vencimento', editavel: true, nulo: true },
    vencimentoMeses: { coluna: 'vencimento_meses', editavel: true, nulo: true },
    renovacao: { coluna: 'renovacao', editavel: true, nulo: true },
    renovacaoDias: { coluna: 'renovacao_dias', editavel: true, nulo: true },
    alerta: { coluna: 'alerta', editavel: true, nulo: true },
    alertaDias: { coluna: 'alerta_dias', editavel: true, nulo: true },
    informacoesComplementares: {
      coluna: 'informacoes_complementares',
      editavel: true,
      nulo: true,
      tamanho: 500,
    },
    codigoLicencaAnterior: {
      coluna: 'codigo_licenca_anterior',
      editavel: true,
      nulo: true,
      tamanho: 36,
    },
    descricaoTipoOutras: {
      coluna: 'descricao_tipo_outras',
      editavel: true,
      nulo: true,
      tamanho: 100,
    },
    codigoLicencaPosterior: {
      coluna: 'codigo_licenca_posterior',
      editavel: true,
      nulo: true,
      tamanho: 36,
    },
    dataProtocoloRenovacao: {
      coluna: 'data_protocolo_renovacao',
      editavel: true,
      nulo: true,
    },
    numeroProtocoloRenovacao: {
      coluna: 'numero_protocolo_renovacao',
      editavel: true,
      nulo: true,
      tamanho: 50,
    },
    observacaoProtocoloRenovacao: {
      coluna: 'observacao_protocolo_renovacao',
      editavel: true,
      nulo: true,
      tamanho: 500,
    },
    status: { coluna: 'status', editavel: true, nulo: true },
    codigoEmpreendimento: {
      coluna: 'codigo_empreendimento',
      editavel: true,
      nulo: true,
      tamanho: 36,
    },
    codigosUsuariosResponsaveis: {
      coluna: 'codigos_usuarios_responsaveis',
      editavel: true,
      nulo: true,
    },
    empreendedorNome: {
      coluna: 'empreendedor_nome',
      editavel: true,
      nulo: true,
      tamanho: 100,
    },
    empreendedorCpf: {
      coluna: 'empreendedor_cpf',
      editavel: true,
      nulo: true,
      tamanho: 14,
    },
    empreendedorCnpj: {
      coluna: 'empreendedor_cnpj',
      editavel: true,
      nulo: true,
      tamanho: 18,
    },
    empreendimentoNome: {
      coluna: 'empreendimento_nome',
      editavel: true,
      nulo: true,
      tamanho: 100,
    },
    empreendimentoIdentificador: {
      coluna: 'empreendimento_identificador',
      editavel: true,
      nulo: true,
      tamanho: 30,
    },
    empreendimentoCpf: {
      coluna: 'empreendimento_cpf',
      editavel: true,
      nulo: true,
      tamanho: 14,
    },
    empreendimentoCnpj: {
      coluna: 'empreendimento_cnpj',
      editavel: true,
      nulo: true,
      tamanho: 18,
    },
    nomeLicenciador: {
      coluna: 'nome_licenciador',
      editavel: true,
      nulo: true,
      tamanho: 100,
    },
    situacaoTexto: { coluna: 'situacao_texto', editavel: true, nulo: true },
    situacaoTexto7: { coluna: 'situacao_texto_7', editavel: true, nulo: true },
    situacaoTexto15: {
      coluna: 'situacao_texto_15',
      editavel: true,
      nulo: true,
    },
    situacaoTexto30: {
      coluna: 'situacao_texto_30',
      editavel: true,
      nulo: true,
    },
  }
}
export interface interfaceAlertasProjetos extends interfaceRecurso {
  atualizado_view?: string
  codigo_corporativo?: string
  codigo?: string
  excluido?: string
  sincronizado?: string
  codigo_usuario_inclusao?: string
  data_hora_inclusao?: string
  codigo_usuario_alteracao?: string
  data_hora_alteracao?: string
  numero_processo?: string
  identificador?: string
  titulo?: string
  prazo?: string
  descricao?: string
  orcamento?: string
  situacao?: string
  codigo_licenciador?: string
  codigo_empreendedor?: string
  codigo_empreendimento?: string
  alerta_dias?: string
  codigos_usuarios_responsaveis?: string
  data_alerta?: string
  empreendedor_nome?: string
  empreendedor_cpf?: string
  empreendedor_cnpj?: string
  empreendimento_nome?: string
  empreendimento_identificador?: string
  empreendimento_cpf?: string
  empreendimento_cnpj?: string
  licenciador_nome?: string
  situacao_texto?: string
  situacao_texto_7?: string
  situacao_texto_15?: string
  situacao_texto_30?: string
}
export class ClasseAlertasProjetos extends Recurso {
  constructor(objeto?: interfaceUsuarios) {
    super('alertas_projetos', objeto)
  }
  atualizadoView?: string
  codigoCorporativo?: string
  codigo?: string
  excluido?: string
  sincronizado?: string
  codigoUsuarioInclusao?: string
  dataHoraInclusao?: string
  codigoUsuarioAlteracao?: string
  dataHoraAlteracao?: string
  numeroProcesso?: string
  identificador?: string
  titulo?: string
  prazo?: string
  descricao?: string
  orcamento?: string
  situacao?: string
  codigoLicenciador?: string
  codigoEmpreendedor?: string
  codigoEmpreendimento?: string
  alertaDias?: string
  codigosUsuariosResponsaveis?: string
  dataAlerta?: string
  empreendedorNome?: string
  empreendedorCpf?: string
  empreendedorCnpj?: string
  empreendimentoNome?: string
  empreendimentoIdentificador?: string
  empreendimentoCpf?: string
  empreendimentoCnpj?: string
  licenciadorNome?: string
  situacaoTexto?: string
  situacaoTexto7?: string
  situacaoTexto15?: string
  situacaoTexto30?: string
  public get objeto(): interfaceAlertasProjetos {
    const saida: interfaceAlertasCompromissos = {}
    if (this.atualizadoView != undefined)
      saida.atualizado_view = this.atualizadoView
    if (this.codigoCorporativo != undefined)
      saida.codigo_corporativo = this.codigoCorporativo
    if (this.codigo != undefined) saida.codigo = this.codigo
    if (this.excluido != undefined) saida.excluido = this.excluido
    if (this.sincronizado != undefined) saida.sincronizado = this.sincronizado
    if (this.codigoUsuarioInclusao != undefined)
      saida.codigo_usuario_inclusao = this.codigoUsuarioInclusao
    if (this.dataHoraInclusao != undefined)
      saida.data_hora_inclusao = this.dataHoraInclusao
    if (this.codigoUsuarioAlteracao != undefined)
      saida.codigo_usuario_alteracao = this.codigoUsuarioAlteracao
    if (this.dataHoraAlteracao != undefined)
      saida.data_hora_alteracao = this.dataHoraAlteracao
    if (this.numeroProcesso != undefined)
      saida.numero_processo = this.numeroProcesso
    if (this.identificador != undefined)
      saida.identificador = this.identificador
    if (this.titulo != undefined) saida.titulo = this.titulo
    if (this.prazo != undefined) saida.prazo = this.prazo
    if (this.descricao != undefined) saida.descricao = this.descricao
    if (this.orcamento != undefined) saida.orcamento = this.orcamento
    if (this.situacao != undefined) saida.situacao = this.situacao
    if (this.codigoLicenciador != undefined)
      saida.codigo_licenciador = this.codigoLicenciador
    if (this.codigoEmpreendedor != undefined)
      saida.codigo_empreendedor = this.codigoEmpreendedor
    if (this.codigoEmpreendimento != undefined)
      saida.codigo_empreendimento = this.codigoEmpreendimento
    if (this.alertaDias != undefined) saida.alerta_dias = this.alertaDias
    if (this.codigosUsuariosResponsaveis != undefined)
      saida.codigos_usuarios_responsaveis = this.codigosUsuariosResponsaveis
    if (this.dataAlerta != undefined) saida.data_alerta = this.dataAlerta
    if (this.empreendedorNome != undefined)
      saida.empreendedor_nome = this.empreendedorNome
    if (this.empreendedorCpf != undefined)
      saida.empreendedor_cpf = this.empreendedorCpf
    if (this.empreendedorCnpj != undefined)
      saida.empreendedor_cnpj = this.empreendedorCnpj
    if (this.empreendimentoNome != undefined)
      saida.empreendimento_nome = this.empreendimentoNome
    if (this.empreendimentoIdentificador != undefined)
      saida.empreendimento_identificador = this.empreendimentoIdentificador
    if (this.empreendimentoCpf != undefined)
      saida.empreendimento_cpf = this.empreendimentoCpf
    if (this.empreendimentoCnpj != undefined)
      saida.empreendimento_cnpj = this.empreendimentoCnpj
    if (this.licenciadorNome != undefined)
      saida.licenciador_nome = this.licenciadorNome
    if (this.situacaoTexto != undefined)
      saida.situacao_texto = this.situacaoTexto
    if (this.situacaoTexto7 != undefined)
      saida.situacao_texto_7 = this.situacaoTexto7
    if (this.situacaoTexto15 != undefined)
      saida.situacao_texto_15 = this.situacaoTexto15
    if (this.situacaoTexto30 != undefined)
      saida.situacao_texto_30 = this.situacaoTexto30
    return saida
  }
  public set objeto(objeto: interfaceAlertasProjetos) {
    this.atualizadoView = objeto.atualizado_view
    this.codigoCorporativo = objeto.codigo_corporativo
    this.codigo = objeto.codigo
    this.excluido = objeto.excluido
    this.sincronizado = objeto.sincronizado
    this.codigoUsuarioInclusao = objeto.codigo_usuario_inclusao
    this.dataHoraInclusao = objeto.data_hora_inclusao
    this.codigoUsuarioAlteracao = objeto.codigo_usuario_alteracao
    this.dataHoraAlteracao = objeto.data_hora_alteracao
    this.numeroProcesso = objeto.numero_processo
    this.identificador = objeto.identificador
    this.titulo = objeto.titulo
    this.prazo = objeto.prazo
    this.descricao = objeto.descricao
    this.orcamento = objeto.orcamento
    this.situacao = objeto.situacao
    this.codigoLicenciador = objeto.codigo_licenciador
    this.codigoEmpreendedor = objeto.codigo_empreendedor
    this.codigoEmpreendimento = objeto.codigo_empreendimento
    this.alertaDias = objeto.alerta_dias
    this.codigosUsuariosResponsaveis = objeto.codigos_usuarios_responsaveis
    this.dataAlerta = objeto.data_alerta
    this.empreendedorNome = objeto.empreendedor_nome
    this.empreendedorCpf = objeto.empreendedor_cpf
    this.empreendedorCnpj = objeto.empreendedor_cnpj
    this.empreendimentoNome = objeto.empreendimento_nome
    this.empreendimentoIdentificador = objeto.empreendimento_identificador
    this.empreendimentoCpf = objeto.empreendimento_cpf
    this.empreendimentoCnpj = objeto.empreendimento_cnpj
    this.licenciadorNome = objeto.licenciador_nome
    this.situacaoTexto = objeto.situacao_texto
    this.situacaoTexto7 = objeto.situacao_texto_7
    this.situacaoTexto15 = objeto.situacao_texto_15
    this.situacaoTexto30 = objeto.situacao_texto_30
  }
  meta: { [key: string]: interfaceMetaDados } = {
    atualizadoView: {
      coluna: 'atualizado_view',
      editavel: true,
      nulo: true,
      tamanho: 50,
    },
    codigoCorporativo: {
      coluna: 'codigo_corporativo',
      editavel: true,
      nulo: false,
      tamanho: 36,
    },
    codigo: { coluna: 'codigo', editavel: true, nulo: false, tamanho: 36 },
    excluido: { coluna: 'excluido', editavel: true, nulo: true, tamanho: 1 },
    sincronizado: {
      coluna: 'sincronizado',
      editavel: true,
      nulo: true,
      tamanho: 1,
    },
    codigoUsuarioInclusao: {
      coluna: 'codigo_usuario_inclusao',
      editavel: true,
      nulo: true,
      tamanho: 36,
    },
    dataHoraInclusao: {
      coluna: 'data_hora_inclusao',
      editavel: true,
      nulo: true,
    },
    codigoUsuarioAlteracao: {
      coluna: 'codigo_usuario_alteracao',
      editavel: true,
      nulo: true,
      tamanho: 36,
    },
    dataHoraAlteracao: {
      coluna: 'data_hora_alteracao',
      editavel: true,
      nulo: true,
    },
    numeroProcesso: {
      coluna: 'numero_processo',
      editavel: true,
      nulo: true,
      tamanho: 20,
    },
    identificador: {
      coluna: 'identificador',
      editavel: true,
      nulo: true,
      tamanho: 20,
    },
    titulo: { coluna: 'titulo', editavel: true, nulo: true, tamanho: 200 },
    prazo: { coluna: 'prazo', editavel: true, nulo: true },
    descricao: {
      coluna: 'descricao',
      editavel: true,
      nulo: true,
      tamanho: 1000,
    },
    orcamento: { coluna: 'orcamento', editavel: true, nulo: true },
    situacao: { coluna: 'situacao', editavel: true, nulo: true },
    codigoLicenciador: {
      coluna: 'codigo_licenciador',
      editavel: true,
      nulo: true,
      tamanho: 36,
    },
    codigoEmpreendedor: {
      coluna: 'codigo_empreendedor',
      editavel: true,
      nulo: true,
      tamanho: 36,
    },
    codigoEmpreendimento: {
      coluna: 'codigo_empreendimento',
      editavel: true,
      nulo: true,
      tamanho: 36,
    },
    alertaDias: { coluna: 'alerta_dias', editavel: true, nulo: true },
    codigosUsuariosResponsaveis: {
      coluna: 'codigos_usuarios_responsaveis',
      editavel: true,
      nulo: true,
    },
    dataAlerta: { coluna: 'data_alerta', editavel: true, nulo: true },
    empreendedorNome: {
      coluna: 'empreendedor_nome',
      editavel: true,
      nulo: true,
      tamanho: 100,
    },
    empreendedorCpf: {
      coluna: 'empreendedor_cpf',
      editavel: true,
      nulo: true,
      tamanho: 14,
    },
    empreendedorCnpj: {
      coluna: 'empreendedor_cnpj',
      editavel: true,
      nulo: true,
      tamanho: 18,
    },
    empreendimentoNome: {
      coluna: 'empreendimento_nome',
      editavel: true,
      nulo: true,
      tamanho: 100,
    },
    empreendimentoIdentificador: {
      coluna: 'empreendimento_identificador',
      editavel: true,
      nulo: true,
      tamanho: 30,
    },
    empreendimentoCpf: {
      coluna: 'empreendimento_cpf',
      editavel: true,
      nulo: true,
      tamanho: 14,
    },
    empreendimentoCnpj: {
      coluna: 'empreendimento_cnpj',
      editavel: true,
      nulo: true,
      tamanho: 18,
    },
    licenciadorNome: {
      coluna: 'licenciador_nome',
      editavel: true,
      nulo: true,
      tamanho: 100,
    },
    situacaoTexto: { coluna: 'situacao_texto', editavel: true, nulo: true },
    situacaoTexto7: { coluna: 'situacao_texto_7', editavel: true, nulo: true },
    situacaoTexto15: {
      coluna: 'situacao_texto_15',
      editavel: true,
      nulo: true,
    },
    situacaoTexto30: {
      coluna: 'situacao_texto_30',
      editavel: true,
      nulo: true,
    },
  }
}
export interface interfaceAlertasTarefasProjetos extends interfaceRecurso {
  atualizado_view?: string
  codigo_corporativo?: string
  codigo?: string
  excluido?: string
  sincronizado?: string
  codigo_usuario_inclusao?: string
  data_hora_inclusao?: string
  codigo_usuario_alteracao?: string
  data_hora_alteracao?: string
  codigo_projeto?: string
  titulo?: string
  descricao?: string
  prazo?: string
  situacao?: string
  situacao_texto?: string
  situacao_texto_7?: string
  situacao_texto_15?: string
  situacao_texto_30?: string
  prioridade?: string
  custo?: string
  alerta_dias?: string
  codigos_usuarios_responsaveis?: string
  data_alerta?: string
  projeto_numero_processo?: string
  projeto_identificador?: string
  projeto_titulo?: string
  projeto_prazo?: string
  projeto_descricao?: string
  projeto_orcamento?: string
  projeto_situacao?: string
  projeto_alerta_dias?: string
  codigo_licenciador?: string
  codigo_empreendedor?: string
  codigo_empreendimento?: string
  projeto_data_alerta?: string
  empreendedor_nome?: string
  empreendedor_cpf?: string
  empreendedor_cnpj?: string
  empreendimento_nome?: string
  empreendimento_identificador?: string
  empreendimento_cpf?: string
  empreendimento_cnpj?: string
  licenciador_nome?: string
}
export class ClasseAlertasTarefasProjetos extends Recurso {
  constructor(objeto?: interfaceUsuarios) {
    super('alertas_tarefas_projetos', objeto)
  }
  atualizadoView?: string
  codigoCorporativo?: string
  codigo?: string
  excluido?: string
  sincronizado?: string
  codigoUsuarioInclusao?: string
  dataHoraInclusao?: string
  codigoUsuarioAlteracao?: string
  dataHoraAlteracao?: string
  codigoProjeto?: string
  titulo?: string
  descricao?: string
  prazo?: string
  situacao?: string
  situacaoTexto?: string
  situacaoTexto7?: string
  situacaoTexto15?: string
  situacaoTexto30?: string
  prioridade?: string
  custo?: string
  alertaDias?: string
  codigosUsuariosResponsaveis?: string
  dataAlerta?: string
  projetoNumeroProcesso?: string
  projetoIdentificador?: string
  projetoTitulo?: string
  projetoPrazo?: string
  projetoDescricao?: string
  projetoOrcamento?: string
  projetoSituacao?: string
  projetoAlertaDias?: string
  codigoLicenciador?: string
  codigoEmpreendedor?: string
  codigoEmpreendimento?: string
  projetoDataAlerta?: string
  empreendedorNome?: string
  empreendedorCpf?: string
  empreendedorCnpj?: string
  empreendimentoNome?: string
  empreendimentoIdentificador?: string
  empreendimentoCpf?: string
  empreendimentoCnpj?: string
  licenciadorNome?: string
  public get objeto(): interfaceAlertasTarefasProjetos {
    const saida: interfaceAlertasCompromissos = {}
    if (this.atualizadoView != undefined)
      saida.atualizado_view = this.atualizadoView
    if (this.codigoCorporativo != undefined)
      saida.codigo_corporativo = this.codigoCorporativo
    if (this.codigo != undefined) saida.codigo = this.codigo
    if (this.excluido != undefined) saida.excluido = this.excluido
    if (this.sincronizado != undefined) saida.sincronizado = this.sincronizado
    if (this.codigoUsuarioInclusao != undefined)
      saida.codigo_usuario_inclusao = this.codigoUsuarioInclusao
    if (this.dataHoraInclusao != undefined)
      saida.data_hora_inclusao = this.dataHoraInclusao
    if (this.codigoUsuarioAlteracao != undefined)
      saida.codigo_usuario_alteracao = this.codigoUsuarioAlteracao
    if (this.dataHoraAlteracao != undefined)
      saida.data_hora_alteracao = this.dataHoraAlteracao
    if (this.codigoProjeto != undefined)
      saida.codigo_projeto = this.codigoProjeto
    if (this.titulo != undefined) saida.titulo = this.titulo
    if (this.descricao != undefined) saida.descricao = this.descricao
    if (this.prazo != undefined) saida.prazo = this.prazo
    if (this.situacao != undefined) saida.situacao = this.situacao
    if (this.situacaoTexto != undefined)
      saida.situacao_texto = this.situacaoTexto
    if (this.situacaoTexto7 != undefined)
      saida.situacao_texto_7 = this.situacaoTexto7
    if (this.situacaoTexto15 != undefined)
      saida.situacao_texto_15 = this.situacaoTexto15
    if (this.situacaoTexto30 != undefined)
      saida.situacao_texto_30 = this.situacaoTexto30
    if (this.prioridade != undefined) saida.prioridade = this.prioridade
    if (this.custo != undefined) saida.custo = this.custo
    if (this.alertaDias != undefined) saida.alerta_dias = this.alertaDias
    if (this.codigosUsuariosResponsaveis != undefined)
      saida.codigos_usuarios_responsaveis = this.codigosUsuariosResponsaveis
    if (this.dataAlerta != undefined) saida.data_alerta = this.dataAlerta
    if (this.projetoNumeroProcesso != undefined)
      saida.projeto_numero_processo = this.projetoNumeroProcesso
    if (this.projetoIdentificador != undefined)
      saida.projeto_identificador = this.projetoIdentificador
    if (this.projetoTitulo != undefined)
      saida.projeto_titulo = this.projetoTitulo
    if (this.projetoPrazo != undefined) saida.projeto_prazo = this.projetoPrazo
    if (this.projetoDescricao != undefined)
      saida.projeto_descricao = this.projetoDescricao
    if (this.projetoOrcamento != undefined)
      saida.projeto_orcamento = this.projetoOrcamento
    if (this.projetoSituacao != undefined)
      saida.projeto_situacao = this.projetoSituacao
    if (this.projetoAlertaDias != undefined)
      saida.projeto_alerta_dias = this.projetoAlertaDias
    if (this.codigoLicenciador != undefined)
      saida.codigo_licenciador = this.codigoLicenciador
    if (this.codigoEmpreendedor != undefined)
      saida.codigo_empreendedor = this.codigoEmpreendedor
    if (this.codigoEmpreendimento != undefined)
      saida.codigo_empreendimento = this.codigoEmpreendimento
    if (this.projetoDataAlerta != undefined)
      saida.projeto_data_alerta = this.projetoDataAlerta
    if (this.empreendedorNome != undefined)
      saida.empreendedor_nome = this.empreendedorNome
    if (this.empreendedorCpf != undefined)
      saida.empreendedor_cpf = this.empreendedorCpf
    if (this.empreendedorCnpj != undefined)
      saida.empreendedor_cnpj = this.empreendedorCnpj
    if (this.empreendimentoNome != undefined)
      saida.empreendimento_nome = this.empreendimentoNome
    if (this.empreendimentoIdentificador != undefined)
      saida.empreendimento_identificador = this.empreendimentoIdentificador
    if (this.empreendimentoCpf != undefined)
      saida.empreendimento_cpf = this.empreendimentoCpf
    if (this.empreendimentoCnpj != undefined)
      saida.empreendimento_cnpj = this.empreendimentoCnpj
    if (this.licenciadorNome != undefined)
      saida.licenciador_nome = this.licenciadorNome
    return saida
  }
  public set objeto(objeto: interfaceAlertasTarefasProjetos) {
    this.atualizadoView = objeto.atualizado_view
    this.codigoCorporativo = objeto.codigo_corporativo
    this.codigo = objeto.codigo
    this.excluido = objeto.excluido
    this.sincronizado = objeto.sincronizado
    this.codigoUsuarioInclusao = objeto.codigo_usuario_inclusao
    this.dataHoraInclusao = objeto.data_hora_inclusao
    this.codigoUsuarioAlteracao = objeto.codigo_usuario_alteracao
    this.dataHoraAlteracao = objeto.data_hora_alteracao
    this.codigoProjeto = objeto.codigo_projeto
    this.titulo = objeto.titulo
    this.descricao = objeto.descricao
    this.prazo = objeto.prazo
    this.situacao = objeto.situacao
    this.situacaoTexto = objeto.situacao_texto
    this.situacaoTexto7 = objeto.situacao_texto_7
    this.situacaoTexto15 = objeto.situacao_texto_15
    this.situacaoTexto30 = objeto.situacao_texto_30
    this.prioridade = objeto.prioridade
    this.custo = objeto.custo
    this.alertaDias = objeto.alerta_dias
    this.codigosUsuariosResponsaveis = objeto.codigos_usuarios_responsaveis
    this.dataAlerta = objeto.data_alerta
    this.projetoNumeroProcesso = objeto.projeto_numero_processo
    this.projetoIdentificador = objeto.projeto_identificador
    this.projetoTitulo = objeto.projeto_titulo
    this.projetoPrazo = objeto.projeto_prazo
    this.projetoDescricao = objeto.projeto_descricao
    this.projetoOrcamento = objeto.projeto_orcamento
    this.projetoSituacao = objeto.projeto_situacao
    this.projetoAlertaDias = objeto.projeto_alerta_dias
    this.codigoLicenciador = objeto.codigo_licenciador
    this.codigoEmpreendedor = objeto.codigo_empreendedor
    this.codigoEmpreendimento = objeto.codigo_empreendimento
    this.projetoDataAlerta = objeto.projeto_data_alerta
    this.empreendedorNome = objeto.empreendedor_nome
    this.empreendedorCpf = objeto.empreendedor_cpf
    this.empreendedorCnpj = objeto.empreendedor_cnpj
    this.empreendimentoNome = objeto.empreendimento_nome
    this.empreendimentoIdentificador = objeto.empreendimento_identificador
    this.empreendimentoCpf = objeto.empreendimento_cpf
    this.empreendimentoCnpj = objeto.empreendimento_cnpj
    this.licenciadorNome = objeto.licenciador_nome
  }
  meta: { [key: string]: interfaceMetaDados } = {
    atualizadoView: {
      coluna: 'atualizado_view',
      editavel: true,
      nulo: true,
      tamanho: 50,
    },
    codigoCorporativo: {
      coluna: 'codigo_corporativo',
      editavel: true,
      nulo: false,
      tamanho: 36,
    },
    codigo: { coluna: 'codigo', editavel: true, nulo: false, tamanho: 36 },
    excluido: { coluna: 'excluido', editavel: true, nulo: true, tamanho: 1 },
    sincronizado: {
      coluna: 'sincronizado',
      editavel: true,
      nulo: true,
      tamanho: 1,
    },
    codigoUsuarioInclusao: {
      coluna: 'codigo_usuario_inclusao',
      editavel: true,
      nulo: true,
      tamanho: 36,
    },
    dataHoraInclusao: {
      coluna: 'data_hora_inclusao',
      editavel: true,
      nulo: true,
    },
    codigoUsuarioAlteracao: {
      coluna: 'codigo_usuario_alteracao',
      editavel: true,
      nulo: true,
      tamanho: 36,
    },
    dataHoraAlteracao: {
      coluna: 'data_hora_alteracao',
      editavel: true,
      nulo: true,
    },
    codigoProjeto: {
      coluna: 'codigo_projeto',
      editavel: true,
      nulo: true,
      tamanho: 36,
    },
    titulo: { coluna: 'titulo', editavel: true, nulo: true, tamanho: 250 },
    descricao: {
      coluna: 'descricao',
      editavel: true,
      nulo: true,
      tamanho: 1000,
    },
    prazo: { coluna: 'prazo', editavel: true, nulo: true },
    situacao: { coluna: 'situacao', editavel: true, nulo: true },
    situacaoTexto: { coluna: 'situacao_texto', editavel: true, nulo: true },
    situacaoTexto7: { coluna: 'situacao_texto_7', editavel: true, nulo: true },
    situacaoTexto15: {
      coluna: 'situacao_texto_15',
      editavel: true,
      nulo: true,
    },
    situacaoTexto30: {
      coluna: 'situacao_texto_30',
      editavel: true,
      nulo: true,
    },
    prioridade: { coluna: 'prioridade', editavel: true, nulo: true },
    custo: { coluna: 'custo', editavel: true, nulo: true },
    alertaDias: { coluna: 'alerta_dias', editavel: true, nulo: true },
    codigosUsuariosResponsaveis: {
      coluna: 'codigos_usuarios_responsaveis',
      editavel: true,
      nulo: true,
    },
    dataAlerta: { coluna: 'data_alerta', editavel: true, nulo: true },
    projetoNumeroProcesso: {
      coluna: 'projeto_numero_processo',
      editavel: true,
      nulo: true,
      tamanho: 20,
    },
    projetoIdentificador: {
      coluna: 'projeto_identificador',
      editavel: true,
      nulo: true,
      tamanho: 20,
    },
    projetoTitulo: {
      coluna: 'projeto_titulo',
      editavel: true,
      nulo: true,
      tamanho: 200,
    },
    projetoPrazo: { coluna: 'projeto_prazo', editavel: true, nulo: true },
    projetoDescricao: {
      coluna: 'projeto_descricao',
      editavel: true,
      nulo: true,
      tamanho: 1000,
    },
    projetoOrcamento: {
      coluna: 'projeto_orcamento',
      editavel: true,
      nulo: true,
    },
    projetoSituacao: { coluna: 'projeto_situacao', editavel: true, nulo: true },
    projetoAlertaDias: {
      coluna: 'projeto_alerta_dias',
      editavel: true,
      nulo: true,
    },
    codigoLicenciador: {
      coluna: 'codigo_licenciador',
      editavel: true,
      nulo: true,
      tamanho: 36,
    },
    codigoEmpreendedor: {
      coluna: 'codigo_empreendedor',
      editavel: true,
      nulo: true,
      tamanho: 36,
    },
    codigoEmpreendimento: {
      coluna: 'codigo_empreendimento',
      editavel: true,
      nulo: true,
      tamanho: 36,
    },
    projetoDataAlerta: {
      coluna: 'projeto_data_alerta',
      editavel: true,
      nulo: true,
    },
    empreendedorNome: {
      coluna: 'empreendedor_nome',
      editavel: true,
      nulo: true,
      tamanho: 100,
    },
    empreendedorCpf: {
      coluna: 'empreendedor_cpf',
      editavel: true,
      nulo: true,
      tamanho: 14,
    },
    empreendedorCnpj: {
      coluna: 'empreendedor_cnpj',
      editavel: true,
      nulo: true,
      tamanho: 18,
    },
    empreendimentoNome: {
      coluna: 'empreendimento_nome',
      editavel: true,
      nulo: true,
      tamanho: 100,
    },
    empreendimentoIdentificador: {
      coluna: 'empreendimento_identificador',
      editavel: true,
      nulo: true,
      tamanho: 30,
    },
    empreendimentoCpf: {
      coluna: 'empreendimento_cpf',
      editavel: true,
      nulo: true,
      tamanho: 14,
    },
    empreendimentoCnpj: {
      coluna: 'empreendimento_cnpj',
      editavel: true,
      nulo: true,
      tamanho: 18,
    },
    licenciadorNome: {
      coluna: 'licenciador_nome',
      editavel: true,
      nulo: true,
      tamanho: 100,
    },
  }
}
export interface interfaceAnexos extends interfaceRecurso {
  codigo_corporativo?: string
  codigo?: string
  excluido?: string
  sincronizado?: string
  codigo_usuario_inclusao?: string
  data_hora_inclusao?: string
  codigo_usuario_alteracao?: string
  data_hora_alteracao?: string
  codigo_origem?: string
  descricao?: string
  observacao?: string
  nome_arquivo?: string
}
export class ClasseAnexos extends Recurso {
  constructor(objeto?: interfaceUsuarios) {
    super('anexos', objeto)
  }
  codigoCorporativo?: string
  codigo?: string
  excluido?: string
  sincronizado?: string
  codigoUsuarioInclusao?: string
  dataHoraInclusao?: string
  codigoUsuarioAlteracao?: string
  dataHoraAlteracao?: string
  codigoOrigem?: string
  descricao?: string
  observacao?: string
  nomeArquivo?: string
  public get objeto(): interfaceAnexos {
    const saida: interfaceAlertasCompromissos = {}
    if (this.codigoCorporativo != undefined)
      saida.codigo_corporativo = this.codigoCorporativo
    if (this.codigo != undefined) saida.codigo = this.codigo
    if (this.excluido != undefined) saida.excluido = this.excluido
    if (this.sincronizado != undefined) saida.sincronizado = this.sincronizado
    if (this.codigoUsuarioInclusao != undefined)
      saida.codigo_usuario_inclusao = this.codigoUsuarioInclusao
    if (this.dataHoraInclusao != undefined)
      saida.data_hora_inclusao = this.dataHoraInclusao
    if (this.codigoUsuarioAlteracao != undefined)
      saida.codigo_usuario_alteracao = this.codigoUsuarioAlteracao
    if (this.dataHoraAlteracao != undefined)
      saida.data_hora_alteracao = this.dataHoraAlteracao
    if (this.codigoOrigem != undefined) saida.codigo_origem = this.codigoOrigem
    if (this.descricao != undefined) saida.descricao = this.descricao
    if (this.observacao != undefined) saida.observacao = this.observacao
    if (this.nomeArquivo != undefined) saida.nome_arquivo = this.nomeArquivo
    return saida
  }
  public set objeto(objeto: interfaceAnexos) {
    this.codigoCorporativo = objeto.codigo_corporativo
    this.codigo = objeto.codigo
    this.excluido = objeto.excluido
    this.sincronizado = objeto.sincronizado
    this.codigoUsuarioInclusao = objeto.codigo_usuario_inclusao
    this.dataHoraInclusao = objeto.data_hora_inclusao
    this.codigoUsuarioAlteracao = objeto.codigo_usuario_alteracao
    this.dataHoraAlteracao = objeto.data_hora_alteracao
    this.codigoOrigem = objeto.codigo_origem
    this.descricao = objeto.descricao
    this.observacao = objeto.observacao
    this.nomeArquivo = objeto.nome_arquivo
  }
  meta: { [key: string]: interfaceMetaDados } = {
    codigoCorporativo: {
      coluna: 'codigo_corporativo',
      descricao: 'Código corporativo',
      editavel: true,
      nulo: false,
      tamanho: 36,
    },
    codigo: {
      coluna: 'codigo',
      descricao: 'Código',
      editavel: true,
      nulo: false,
      tamanho: 36,
    },
    excluido: {
      coluna: 'excluido',
      descricao: 'Excluído?',
      editavel: true,
      nulo: false,
      tamanho: 1,
    },
    sincronizado: {
      coluna: 'sincronizado',
      descricao: 'Sincronizado?',
      editavel: true,
      nulo: false,
      tamanho: 1,
    },
    codigoUsuarioInclusao: {
      coluna: 'codigo_usuario_inclusao',
      descricao: 'Usuário inclusão',
      editavel: true,
      nulo: false,
      tamanho: 36,
    },
    dataHoraInclusao: {
      coluna: 'data_hora_inclusao',
      descricao: 'Data/Hora inclusão',
      editavel: true,
      nulo: false,
    },
    codigoUsuarioAlteracao: {
      coluna: 'codigo_usuario_alteracao',
      descricao: 'Usuário alteração',
      editavel: true,
      nulo: true,
      tamanho: 36,
    },
    dataHoraAlteracao: {
      coluna: 'data_hora_alteracao',
      descricao: 'Data/Hora alteração',
      editavel: true,
      nulo: true,
    },
    codigoOrigem: {
      coluna: 'codigo_origem',
      descricao: 'Origem',
      editavel: true,
      nulo: false,
      tamanho: 36,
    },
    descricao: {
      coluna: 'descricao',
      descricao: 'Descrição',
      editavel: true,
      nulo: false,
      tamanho: 100,
    },
    observacao: {
      coluna: 'observacao',
      descricao: 'Observação',
      editavel: true,
      nulo: true,
      tamanho: 500,
    },
    nomeArquivo: {
      coluna: 'nome_arquivo',
      descricao: 'Nome do arquivo',
      editavel: true,
      nulo: true,
      tamanho: 200,
    },
  }
}
export interface interfaceAuditoria extends interfaceRecurso {
  codigo_corporativo?: string
  codigo?: string
  codigo_registro?: string
  tabela?: string
  coluna?: string
  valor_anterior?: string
  valor_posterior?: string
  codigo_usuario_alteracao?: string
  data_hora_alteracao?: string
}
export class ClasseAuditoria extends Recurso {
  constructor(objeto?: interfaceUsuarios) {
    super('auditoria', objeto)
  }
  codigoCorporativo?: string
  codigo?: string
  codigoRegistro?: string
  tabela?: string
  coluna?: string
  valorAnterior?: string
  valorPosterior?: string
  codigoUsuarioAlteracao?: string
  dataHoraAlteracao?: string
  public get objeto(): interfaceAuditoria {
    const saida: interfaceAlertasCompromissos = {}
    if (this.codigoCorporativo != undefined)
      saida.codigo_corporativo = this.codigoCorporativo
    if (this.codigo != undefined) saida.codigo = this.codigo
    if (this.codigoRegistro != undefined)
      saida.codigo_registro = this.codigoRegistro
    if (this.tabela != undefined) saida.tabela = this.tabela
    if (this.coluna != undefined) saida.coluna = this.coluna
    if (this.valorAnterior != undefined)
      saida.valor_anterior = this.valorAnterior
    if (this.valorPosterior != undefined)
      saida.valor_posterior = this.valorPosterior
    if (this.codigoUsuarioAlteracao != undefined)
      saida.codigo_usuario_alteracao = this.codigoUsuarioAlteracao
    if (this.dataHoraAlteracao != undefined)
      saida.data_hora_alteracao = this.dataHoraAlteracao
    return saida
  }
  public set objeto(objeto: interfaceAuditoria) {
    this.codigoCorporativo = objeto.codigo_corporativo
    this.codigo = objeto.codigo
    this.codigoRegistro = objeto.codigo_registro
    this.tabela = objeto.tabela
    this.coluna = objeto.coluna
    this.valorAnterior = objeto.valor_anterior
    this.valorPosterior = objeto.valor_posterior
    this.codigoUsuarioAlteracao = objeto.codigo_usuario_alteracao
    this.dataHoraAlteracao = objeto.data_hora_alteracao
  }
  meta: { [key: string]: interfaceMetaDados } = {
    codigoCorporativo: {
      coluna: 'codigo_corporativo',
      descricao: 'Código',
      editavel: true,
      nulo: false,
      tamanho: 36,
    },
    codigo: {
      coluna: 'codigo',
      descricao: 'Código corporativo',
      editavel: true,
      nulo: false,
      tamanho: 36,
    },
    codigoRegistro: {
      coluna: 'codigo_registro',
      descricao: 'Código registro alterado',
      editavel: true,
      nulo: false,
      tamanho: 36,
    },
    tabela: {
      coluna: 'tabela',
      descricao: 'Tabela alterada',
      editavel: true,
      nulo: false,
      tamanho: 100,
    },
    coluna: {
      coluna: 'coluna',
      descricao: 'Coluna alterada',
      editavel: true,
      nulo: false,
      tamanho: 100,
    },
    valorAnterior: {
      coluna: 'valor_anterior',
      descricao: 'Valor anterior',
      editavel: true,
      nulo: false,
    },
    valorPosterior: {
      coluna: 'valor_posterior',
      descricao: 'Valor posterior',
      editavel: true,
      nulo: false,
    },
    codigoUsuarioAlteracao: {
      coluna: 'codigo_usuario_alteracao',
      descricao: 'Código usuário alteração',
      editavel: true,
      nulo: false,
      tamanho: 36,
    },
    dataHoraAlteracao: {
      coluna: 'data_hora_alteracao',
      descricao: 'Data/Hora alteração',
      editavel: true,
      nulo: true,
    },
  }
}
export interface interfaceCep extends interfaceRecurso {
  cep?: string
  logradouro?: string
  bairro?: string
  localidade?: string
  uf?: string
  ibge?: string
}
export class ClasseCep extends Recurso {
  constructor(objeto?: interfaceUsuarios) {
    super('cep', objeto)
  }
  cep?: string
  logradouro?: string
  bairro?: string
  localidade?: string
  uf?: string
  ibge?: string
  public get objeto(): interfaceCep {
    const saida: interfaceAlertasCompromissos = {}
    if (this.cep != undefined) saida.cep = this.cep
    if (this.logradouro != undefined) saida.logradouro = this.logradouro
    if (this.bairro != undefined) saida.bairro = this.bairro
    if (this.localidade != undefined) saida.localidade = this.localidade
    if (this.uf != undefined) saida.uf = this.uf
    if (this.ibge != undefined) saida.ibge = this.ibge
    return saida
  }
  public set objeto(objeto: interfaceCep) {
    this.cep = objeto.cep
    this.logradouro = objeto.logradouro
    this.bairro = objeto.bairro
    this.localidade = objeto.localidade
    this.uf = objeto.uf
    this.ibge = objeto.ibge
  }
  meta: { [key: string]: interfaceMetaDados } = {
    cep: { coluna: 'cep', editavel: true, nulo: false, tamanho: 8 },
    logradouro: {
      coluna: 'logradouro',
      editavel: true,
      nulo: false,
      tamanho: 100,
    },
    bairro: { coluna: 'bairro', editavel: true, nulo: false, tamanho: 100 },
    localidade: {
      coluna: 'localidade',
      editavel: true,
      nulo: false,
      tamanho: 100,
    },
    uf: { coluna: 'uf', editavel: true, nulo: false, tamanho: 2 },
    ibge: { coluna: 'ibge', editavel: true, nulo: true },
  }
}
export interface interfaceCidades extends interfaceRecurso {
  codigo?: string
  nome?: string
  codigo_estado?: string
}
export class ClasseCidades extends Recurso {
  constructor(objeto?: interfaceUsuarios) {
    super('cidades', objeto)
  }
  codigo?: string
  nome?: string
  codigoEstado?: string
  public get objeto(): interfaceCidades {
    const saida: interfaceAlertasCompromissos = {}
    if (this.codigo != undefined) saida.codigo = this.codigo
    if (this.nome != undefined) saida.nome = this.nome
    if (this.codigoEstado != undefined) saida.codigo_estado = this.codigoEstado
    return saida
  }
  public set objeto(objeto: interfaceCidades) {
    this.codigo = objeto.codigo
    this.nome = objeto.nome
    this.codigoEstado = objeto.codigo_estado
  }
  meta: { [key: string]: interfaceMetaDados } = {
    codigo: { coluna: 'codigo', editavel: true, nulo: false },
    nome: { coluna: 'nome', editavel: true, nulo: false, tamanho: 100 },
    codigoEstado: { coluna: 'codigo_estado', editavel: true, nulo: false },
  }
}
export interface interfaceComentarios extends interfaceRecurso {
  codigo_corporativo?: string
  codigo?: string
  excluido?: string
  sincronizado?: string
  codigo_usuario_inclusao?: string
  data_hora_inclusao?: string
  codigo_usuario_alteracao?: string
  data_hora_alteracao?: string
  codigo_origem?: string
  comentario?: string
}
export class ClasseComentarios extends Recurso {
  constructor(objeto?: interfaceUsuarios) {
    super('comentarios', objeto)
  }
  codigoCorporativo?: string
  codigo?: string
  excluido?: string
  sincronizado?: string
  codigoUsuarioInclusao?: string
  dataHoraInclusao?: string
  codigoUsuarioAlteracao?: string
  dataHoraAlteracao?: string
  codigoOrigem?: string
  comentario?: string
  public get objeto(): interfaceComentarios {
    const saida: interfaceAlertasCompromissos = {}
    if (this.codigoCorporativo != undefined)
      saida.codigo_corporativo = this.codigoCorporativo
    if (this.codigo != undefined) saida.codigo = this.codigo
    if (this.excluido != undefined) saida.excluido = this.excluido
    if (this.sincronizado != undefined) saida.sincronizado = this.sincronizado
    if (this.codigoUsuarioInclusao != undefined)
      saida.codigo_usuario_inclusao = this.codigoUsuarioInclusao
    if (this.dataHoraInclusao != undefined)
      saida.data_hora_inclusao = this.dataHoraInclusao
    if (this.codigoUsuarioAlteracao != undefined)
      saida.codigo_usuario_alteracao = this.codigoUsuarioAlteracao
    if (this.dataHoraAlteracao != undefined)
      saida.data_hora_alteracao = this.dataHoraAlteracao
    if (this.codigoOrigem != undefined) saida.codigo_origem = this.codigoOrigem
    if (this.comentario != undefined) saida.comentario = this.comentario
    return saida
  }
  public set objeto(objeto: interfaceComentarios) {
    this.codigoCorporativo = objeto.codigo_corporativo
    this.codigo = objeto.codigo
    this.excluido = objeto.excluido
    this.sincronizado = objeto.sincronizado
    this.codigoUsuarioInclusao = objeto.codigo_usuario_inclusao
    this.dataHoraInclusao = objeto.data_hora_inclusao
    this.codigoUsuarioAlteracao = objeto.codigo_usuario_alteracao
    this.dataHoraAlteracao = objeto.data_hora_alteracao
    this.codigoOrigem = objeto.codigo_origem
    this.comentario = objeto.comentario
  }
  meta: { [key: string]: interfaceMetaDados } = {
    codigoCorporativo: {
      coluna: 'codigo_corporativo',
      descricao: 'Código corporativo',
      editavel: true,
      nulo: false,
      tamanho: 36,
    },
    codigo: {
      coluna: 'codigo',
      descricao: 'Código',
      editavel: true,
      nulo: false,
      tamanho: 36,
    },
    excluido: {
      coluna: 'excluido',
      descricao: 'Excluído?',
      editavel: true,
      nulo: false,
      tamanho: 1,
    },
    sincronizado: {
      coluna: 'sincronizado',
      descricao: 'Sincronizado?',
      editavel: true,
      nulo: false,
      tamanho: 1,
    },
    codigoUsuarioInclusao: {
      coluna: 'codigo_usuario_inclusao',
      descricao: 'Usuário inclusão',
      editavel: true,
      nulo: false,
      tamanho: 36,
    },
    dataHoraInclusao: {
      coluna: 'data_hora_inclusao',
      descricao: 'Data/Hora inclusão',
      editavel: true,
      nulo: false,
    },
    codigoUsuarioAlteracao: {
      coluna: 'codigo_usuario_alteracao',
      descricao: 'Usuário alteração',
      editavel: true,
      nulo: true,
      tamanho: 36,
    },
    dataHoraAlteracao: {
      coluna: 'data_hora_alteracao',
      descricao: 'Data/Hora alteração',
      editavel: true,
      nulo: true,
    },
    codigoOrigem: {
      coluna: 'codigo_origem',
      descricao: 'Tarefa',
      editavel: true,
      nulo: false,
      tamanho: 36,
    },
    comentario: {
      coluna: 'comentario',
      descricao: 'Comentário',
      editavel: true,
      nulo: false,
      tamanho: 1000,
    },
  }
}
export interface interfaceCompromissoExecucoes extends interfaceRecurso {
  codigo_corporativo?: string
  codigo?: string
  excluido?: string
  sincronizado?: string
  codigo_usuario_inclusao?: string
  data_hora_inclusao?: string
  codigo_usuario_alteracao?: string
  data_hora_alteracao?: string
  codigo_compromisso?: string
  numero?: string
  vencimento?: string
  executada?: string
  informacoes_complementares?: string
}
export class ClasseCompromissoExecucoes extends Recurso {
  constructor(objeto?: interfaceUsuarios) {
    super('compromisso_execucoes', objeto)
  }
  codigoCorporativo?: string
  codigo?: string
  excluido?: string
  sincronizado?: string
  codigoUsuarioInclusao?: string
  dataHoraInclusao?: string
  codigoUsuarioAlteracao?: string
  dataHoraAlteracao?: string
  codigoCompromisso?: string
  numero?: string
  vencimento?: string
  executada?: string
  informacoesComplementares?: string
  public get objeto(): interfaceCompromissoExecucoes {
    const saida: interfaceAlertasCompromissos = {}
    if (this.codigoCorporativo != undefined)
      saida.codigo_corporativo = this.codigoCorporativo
    if (this.codigo != undefined) saida.codigo = this.codigo
    if (this.excluido != undefined) saida.excluido = this.excluido
    if (this.sincronizado != undefined) saida.sincronizado = this.sincronizado
    if (this.codigoUsuarioInclusao != undefined)
      saida.codigo_usuario_inclusao = this.codigoUsuarioInclusao
    if (this.dataHoraInclusao != undefined)
      saida.data_hora_inclusao = this.dataHoraInclusao
    if (this.codigoUsuarioAlteracao != undefined)
      saida.codigo_usuario_alteracao = this.codigoUsuarioAlteracao
    if (this.dataHoraAlteracao != undefined)
      saida.data_hora_alteracao = this.dataHoraAlteracao
    if (this.codigoCompromisso != undefined)
      saida.codigo_compromisso = this.codigoCompromisso
    if (this.numero != undefined) saida.numero = this.numero
    if (this.vencimento != undefined) saida.vencimento = this.vencimento
    if (this.executada != undefined) saida.executada = this.executada
    if (this.informacoesComplementares != undefined)
      saida.informacoes_complementares = this.informacoesComplementares
    return saida
  }
  public set objeto(objeto: interfaceCompromissoExecucoes) {
    this.codigoCorporativo = objeto.codigo_corporativo
    this.codigo = objeto.codigo
    this.excluido = objeto.excluido
    this.sincronizado = objeto.sincronizado
    this.codigoUsuarioInclusao = objeto.codigo_usuario_inclusao
    this.dataHoraInclusao = objeto.data_hora_inclusao
    this.codigoUsuarioAlteracao = objeto.codigo_usuario_alteracao
    this.dataHoraAlteracao = objeto.data_hora_alteracao
    this.codigoCompromisso = objeto.codigo_compromisso
    this.numero = objeto.numero
    this.vencimento = objeto.vencimento
    this.executada = objeto.executada
    this.informacoesComplementares = objeto.informacoes_complementares
  }
  meta: { [key: string]: interfaceMetaDados } = {
    codigoCorporativo: {
      coluna: 'codigo_corporativo',
      descricao: 'Código corporativo',
      editavel: true,
      nulo: false,
      tamanho: 36,
    },
    codigo: {
      coluna: 'codigo',
      descricao: 'Código',
      editavel: true,
      nulo: false,
      tamanho: 36,
    },
    excluido: {
      coluna: 'excluido',
      descricao: 'Excluído?',
      editavel: true,
      nulo: false,
      tamanho: 1,
    },
    sincronizado: {
      coluna: 'sincronizado',
      descricao: 'Sincronizado?',
      editavel: true,
      nulo: false,
      tamanho: 1,
    },
    codigoUsuarioInclusao: {
      coluna: 'codigo_usuario_inclusao',
      descricao: 'Usuário inclusão',
      editavel: true,
      nulo: false,
      tamanho: 36,
    },
    dataHoraInclusao: {
      coluna: 'data_hora_inclusao',
      descricao: 'Data/Hora inclusão',
      editavel: true,
      nulo: false,
    },
    codigoUsuarioAlteracao: {
      coluna: 'codigo_usuario_alteracao',
      descricao: 'Usuário alteração',
      editavel: true,
      nulo: true,
      tamanho: 36,
    },
    dataHoraAlteracao: {
      coluna: 'data_hora_alteracao',
      descricao: 'Data/Hora alteração',
      editavel: true,
      nulo: true,
    },
    codigoCompromisso: {
      coluna: 'codigo_compromisso',
      descricao: 'Código da compromisso',
      editavel: true,
      nulo: false,
      tamanho: 36,
    },
    numero: {
      coluna: 'numero',
      descricao: 'Número',
      editavel: true,
      nulo: false,
    },
    vencimento: {
      coluna: 'vencimento',
      descricao: 'Vencimento',
      editavel: true,
      nulo: false,
    },
    executada: {
      coluna: 'executada',
      descricao: 'Executada em',
      editavel: true,
      nulo: true,
    },
    informacoesComplementares: {
      coluna: 'informacoes_complementares',
      descricao: 'Informações Complementares',
      editavel: true,
      nulo: true,
      tamanho: 500,
    },
  }
}
export interface interfaceCompromissos extends interfaceRecurso {
  codigo_corporativo?: string
  codigo?: string
  excluido?: string
  sincronizado?: string
  codigo_usuario_inclusao?: string
  data_hora_inclusao?: string
  codigo_usuario_alteracao?: string
  data_hora_alteracao?: string
  tipo?: string
  titulo?: string
  descricao?: string
  codigo_licenciador?: string
  codigo_empreendedor?: string
  codigo_empreendimento?: string
  recorrencia?: string
  intervalo?: string
  quantidade_recorrencia?: string
  primeira_execucao?: string
  alerta_dias?: string
  obrigacao_legal?: string
}
export class ClasseCompromissos extends Recurso {
  constructor(objeto?: interfaceUsuarios) {
    super('compromissos', objeto)
  }
  codigoCorporativo?: string
  codigo?: string
  excluido?: string
  sincronizado?: string
  codigoUsuarioInclusao?: string
  dataHoraInclusao?: string
  codigoUsuarioAlteracao?: string
  dataHoraAlteracao?: string
  tipo?: string
  titulo?: string
  descricao?: string
  codigoLicenciador?: string
  codigoEmpreendedor?: string
  codigoEmpreendimento?: string
  recorrencia?: string
  intervalo?: string
  quantidadeRecorrencia?: string
  primeiraExecucao?: string
  alertaDias?: string
  obrigacaoLegal?: string
  public get objeto(): interfaceCompromissos {
    const saida: interfaceAlertasCompromissos = {}
    if (this.codigoCorporativo != undefined)
      saida.codigo_corporativo = this.codigoCorporativo
    if (this.codigo != undefined) saida.codigo = this.codigo
    if (this.excluido != undefined) saida.excluido = this.excluido
    if (this.sincronizado != undefined) saida.sincronizado = this.sincronizado
    if (this.codigoUsuarioInclusao != undefined)
      saida.codigo_usuario_inclusao = this.codigoUsuarioInclusao
    if (this.dataHoraInclusao != undefined)
      saida.data_hora_inclusao = this.dataHoraInclusao
    if (this.codigoUsuarioAlteracao != undefined)
      saida.codigo_usuario_alteracao = this.codigoUsuarioAlteracao
    if (this.dataHoraAlteracao != undefined)
      saida.data_hora_alteracao = this.dataHoraAlteracao
    if (this.tipo != undefined) saida.tipo = this.tipo
    if (this.titulo != undefined) saida.titulo = this.titulo
    if (this.descricao != undefined) saida.descricao = this.descricao
    if (this.codigoLicenciador != undefined)
      saida.codigo_licenciador = this.codigoLicenciador
    if (this.codigoEmpreendedor != undefined)
      saida.codigo_empreendedor = this.codigoEmpreendedor
    if (this.codigoEmpreendimento != undefined)
      saida.codigo_empreendimento = this.codigoEmpreendimento
    if (this.recorrencia != undefined) saida.recorrencia = this.recorrencia
    if (this.intervalo != undefined) saida.intervalo = this.intervalo
    if (this.quantidadeRecorrencia != undefined)
      saida.quantidade_recorrencia = this.quantidadeRecorrencia
    if (this.primeiraExecucao != undefined)
      saida.primeira_execucao = this.primeiraExecucao
    if (this.alertaDias != undefined) saida.alerta_dias = this.alertaDias
    if (this.obrigacaoLegal != undefined)
      saida.obrigacao_legal = this.obrigacaoLegal
    return saida
  }
  public set objeto(objeto: interfaceCompromissos) {
    this.codigoCorporativo = objeto.codigo_corporativo
    this.codigo = objeto.codigo
    this.excluido = objeto.excluido
    this.sincronizado = objeto.sincronizado
    this.codigoUsuarioInclusao = objeto.codigo_usuario_inclusao
    this.dataHoraInclusao = objeto.data_hora_inclusao
    this.codigoUsuarioAlteracao = objeto.codigo_usuario_alteracao
    this.dataHoraAlteracao = objeto.data_hora_alteracao
    this.tipo = objeto.tipo
    this.titulo = objeto.titulo
    this.descricao = objeto.descricao
    this.codigoLicenciador = objeto.codigo_licenciador
    this.codigoEmpreendedor = objeto.codigo_empreendedor
    this.codigoEmpreendimento = objeto.codigo_empreendimento
    this.recorrencia = objeto.recorrencia
    this.intervalo = objeto.intervalo
    this.quantidadeRecorrencia = objeto.quantidade_recorrencia
    this.primeiraExecucao = objeto.primeira_execucao
    this.alertaDias = objeto.alerta_dias
    this.obrigacaoLegal = objeto.obrigacao_legal
  }
  meta: { [key: string]: interfaceMetaDados } = {
    codigoCorporativo: {
      coluna: 'codigo_corporativo',
      descricao: 'Código corporativo',
      editavel: true,
      nulo: false,
      tamanho: 36,
    },
    codigo: {
      coluna: 'codigo',
      descricao: 'Código',
      editavel: true,
      nulo: false,
      tamanho: 36,
    },
    excluido: {
      coluna: 'excluido',
      descricao: 'Excluído?',
      editavel: true,
      nulo: false,
      tamanho: 1,
    },
    sincronizado: {
      coluna: 'sincronizado',
      descricao: 'Sincronizado?',
      editavel: true,
      nulo: false,
      tamanho: 1,
    },
    codigoUsuarioInclusao: {
      coluna: 'codigo_usuario_inclusao',
      descricao: 'Usuário inclusão',
      editavel: true,
      nulo: false,
      tamanho: 36,
    },
    dataHoraInclusao: {
      coluna: 'data_hora_inclusao',
      descricao: 'Data/Hora inclusão',
      editavel: true,
      nulo: false,
    },
    codigoUsuarioAlteracao: {
      coluna: 'codigo_usuario_alteracao',
      descricao: 'Usuário alteração',
      editavel: true,
      nulo: true,
      tamanho: 36,
    },
    dataHoraAlteracao: {
      coluna: 'data_hora_alteracao',
      descricao: 'Data/Hora alteração',
      editavel: true,
      nulo: true,
    },
    tipo: {
      coluna: 'tipo',
      descricao: 'Tipo',
      editavel: true,
      nulo: true,
      tamanho: 100,
    },
    titulo: {
      coluna: 'titulo',
      descricao: 'Título',
      editavel: true,
      nulo: false,
      tamanho: 150,
    },
    descricao: {
      coluna: 'descricao',
      descricao: 'Descrição',
      editavel: true,
      nulo: true,
      tamanho: 500,
    },
    codigoLicenciador: {
      coluna: 'codigo_licenciador',
      descricao: 'Licenciador',
      editavel: true,
      nulo: true,
      tamanho: 36,
    },
    codigoEmpreendedor: {
      coluna: 'codigo_empreendedor',
      descricao: 'Empreendedor',
      editavel: true,
      nulo: true,
      tamanho: 36,
    },
    codigoEmpreendimento: {
      coluna: 'codigo_empreendimento',
      descricao: 'Empreendimento',
      editavel: true,
      nulo: true,
      tamanho: 36,
    },
    recorrencia: {
      coluna: 'recorrencia',
      descricao: 'Tipo da recorrência',
      editavel: true,
      nulo: true,
      tamanho: 36,
    },
    intervalo: {
      coluna: 'intervalo',
      descricao: 'Intervalo da recorrência',
      editavel: true,
      nulo: true,
    },
    quantidadeRecorrencia: {
      coluna: 'quantidade_recorrencia',
      descricao: 'Quantidade de recorrência',
      editavel: true,
      nulo: true,
    },
    primeiraExecucao: {
      coluna: 'primeira_execucao',
      descricao: '1° execução',
      editavel: true,
      nulo: false,
    },
    alertaDias: {
      coluna: 'alerta_dias',
      descricao: 'Alerta',
      editavel: true,
      nulo: true,
    },
    obrigacaoLegal: {
      coluna: 'obrigacao_legal',
      descricao: 'Obrigação Legal',
      editavel: true,
      nulo: false,
      tamanho: 1,
    },
  }
}
export interface interfaceCompromissosResponsaveis extends interfaceRecurso {
  codigo_corporativo?: string
  codigo?: string
  excluido?: string
  sincronizado?: string
  codigo_usuario_inclusao?: string
  data_hora_inclusao?: string
  codigo_usuario_alteracao?: string
  data_hora_alteracao?: string
  codigo_origem?: string
  codigo_usuario?: string
}
export class ClasseCompromissosResponsaveis extends Recurso {
  constructor(objeto?: interfaceUsuarios) {
    super('compromissos_responsaveis', objeto)
  }
  codigoCorporativo?: string
  codigo?: string
  excluido?: string
  sincronizado?: string
  codigoUsuarioInclusao?: string
  dataHoraInclusao?: string
  codigoUsuarioAlteracao?: string
  dataHoraAlteracao?: string
  codigoOrigem?: string
  codigoUsuario?: string
  public get objeto(): interfaceCompromissosResponsaveis {
    const saida: interfaceAlertasCompromissos = {}
    if (this.codigoCorporativo != undefined)
      saida.codigo_corporativo = this.codigoCorporativo
    if (this.codigo != undefined) saida.codigo = this.codigo
    if (this.excluido != undefined) saida.excluido = this.excluido
    if (this.sincronizado != undefined) saida.sincronizado = this.sincronizado
    if (this.codigoUsuarioInclusao != undefined)
      saida.codigo_usuario_inclusao = this.codigoUsuarioInclusao
    if (this.dataHoraInclusao != undefined)
      saida.data_hora_inclusao = this.dataHoraInclusao
    if (this.codigoUsuarioAlteracao != undefined)
      saida.codigo_usuario_alteracao = this.codigoUsuarioAlteracao
    if (this.dataHoraAlteracao != undefined)
      saida.data_hora_alteracao = this.dataHoraAlteracao
    if (this.codigoOrigem != undefined) saida.codigo_origem = this.codigoOrigem
    if (this.codigoUsuario != undefined)
      saida.codigo_usuario = this.codigoUsuario
    return saida
  }
  public set objeto(objeto: interfaceCompromissosResponsaveis) {
    this.codigoCorporativo = objeto.codigo_corporativo
    this.codigo = objeto.codigo
    this.excluido = objeto.excluido
    this.sincronizado = objeto.sincronizado
    this.codigoUsuarioInclusao = objeto.codigo_usuario_inclusao
    this.dataHoraInclusao = objeto.data_hora_inclusao
    this.codigoUsuarioAlteracao = objeto.codigo_usuario_alteracao
    this.dataHoraAlteracao = objeto.data_hora_alteracao
    this.codigoOrigem = objeto.codigo_origem
    this.codigoUsuario = objeto.codigo_usuario
  }
  meta: { [key: string]: interfaceMetaDados } = {
    codigoCorporativo: {
      coluna: 'codigo_corporativo',
      descricao: 'Código corporativo',
      editavel: true,
      nulo: false,
      tamanho: 36,
    },
    codigo: {
      coluna: 'codigo',
      descricao: 'Código',
      editavel: true,
      nulo: false,
      tamanho: 36,
    },
    excluido: {
      coluna: 'excluido',
      descricao: 'Excluído?',
      editavel: true,
      nulo: false,
      tamanho: 1,
    },
    sincronizado: {
      coluna: 'sincronizado',
      descricao: 'Sincronizado?',
      editavel: true,
      nulo: false,
      tamanho: 1,
    },
    codigoUsuarioInclusao: {
      coluna: 'codigo_usuario_inclusao',
      descricao: 'Usuário inclusão',
      editavel: true,
      nulo: false,
      tamanho: 36,
    },
    dataHoraInclusao: {
      coluna: 'data_hora_inclusao',
      descricao: 'Data/Hora inclusão',
      editavel: true,
      nulo: false,
    },
    codigoUsuarioAlteracao: {
      coluna: 'codigo_usuario_alteracao',
      descricao: 'Usuário alteração',
      editavel: true,
      nulo: true,
      tamanho: 36,
    },
    dataHoraAlteracao: {
      coluna: 'data_hora_alteracao',
      descricao: 'Data/Hora alteração',
      editavel: true,
      nulo: true,
    },
    codigoOrigem: {
      coluna: 'codigo_origem',
      descricao: 'Compromissos',
      editavel: true,
      nulo: false,
      tamanho: 36,
    },
    codigoUsuario: {
      coluna: 'codigo_usuario',
      descricao: 'Usuário',
      editavel: true,
      nulo: false,
      tamanho: 36,
    },
  }
}
export interface interfaceCondicionantesExecucoes extends interfaceRecurso {
  codigo_corporativo?: string
  codigo?: string
  excluido?: string
  sincronizado?: string
  codigo_usuario_inclusao?: string
  data_hora_inclusao?: string
  codigo_usuario_alteracao?: string
  data_hora_alteracao?: string
  codigo_condicionante?: string
  numero?: string
  vencimento?: string
  executada?: string
  numero_protocolo?: string
  informacoes_complementares?: string
  responsavel?: string
}
export class ClasseCondicionantesExecucoes extends Recurso {
  constructor(objeto?: interfaceUsuarios) {
    super('condicionantes_execucoes', objeto)
  }
  codigoCorporativo?: string
  codigo?: string
  excluido?: string
  sincronizado?: string
  codigoUsuarioInclusao?: string
  dataHoraInclusao?: string
  codigoUsuarioAlteracao?: string
  dataHoraAlteracao?: string
  codigoCondicionante?: string
  numero?: string
  vencimento?: string
  executada?: string
  numeroProtocolo?: string
  informacoesComplementares?: string
  responsavel?: string
  public get objeto(): interfaceCondicionantesExecucoes {
    const saida: interfaceAlertasCompromissos = {}
    if (this.codigoCorporativo != undefined)
      saida.codigo_corporativo = this.codigoCorporativo
    if (this.codigo != undefined) saida.codigo = this.codigo
    if (this.excluido != undefined) saida.excluido = this.excluido
    if (this.sincronizado != undefined) saida.sincronizado = this.sincronizado
    if (this.codigoUsuarioInclusao != undefined)
      saida.codigo_usuario_inclusao = this.codigoUsuarioInclusao
    if (this.dataHoraInclusao != undefined)
      saida.data_hora_inclusao = this.dataHoraInclusao
    if (this.codigoUsuarioAlteracao != undefined)
      saida.codigo_usuario_alteracao = this.codigoUsuarioAlteracao
    if (this.dataHoraAlteracao != undefined)
      saida.data_hora_alteracao = this.dataHoraAlteracao
    if (this.codigoCondicionante != undefined)
      saida.codigo_condicionante = this.codigoCondicionante
    if (this.numero != undefined) saida.numero = this.numero
    if (this.vencimento != undefined) saida.vencimento = this.vencimento
    if (this.executada != undefined) saida.executada = this.executada
    if (this.numeroProtocolo != undefined)
      saida.numero_protocolo = this.numeroProtocolo
    if (this.informacoesComplementares != undefined)
      saida.informacoes_complementares = this.informacoesComplementares
    if (this.responsavel != undefined) saida.responsavel = this.responsavel
    return saida
  }
  public set objeto(objeto: interfaceCondicionantesExecucoes) {
    this.codigoCorporativo = objeto.codigo_corporativo
    this.codigo = objeto.codigo
    this.excluido = objeto.excluido
    this.sincronizado = objeto.sincronizado
    this.codigoUsuarioInclusao = objeto.codigo_usuario_inclusao
    this.dataHoraInclusao = objeto.data_hora_inclusao
    this.codigoUsuarioAlteracao = objeto.codigo_usuario_alteracao
    this.dataHoraAlteracao = objeto.data_hora_alteracao
    this.codigoCondicionante = objeto.codigo_condicionante
    this.numero = objeto.numero
    this.vencimento = objeto.vencimento
    this.executada = objeto.executada
    this.numeroProtocolo = objeto.numero_protocolo
    this.informacoesComplementares = objeto.informacoes_complementares
    this.responsavel = objeto.responsavel
  }
  meta: { [key: string]: interfaceMetaDados } = {
    codigoCorporativo: {
      coluna: 'codigo_corporativo',
      descricao: 'Código corporativo',
      editavel: true,
      nulo: false,
      tamanho: 36,
    },
    codigo: {
      coluna: 'codigo',
      descricao: 'Código',
      editavel: true,
      nulo: false,
      tamanho: 36,
    },
    excluido: {
      coluna: 'excluido',
      descricao: 'Excluído?',
      editavel: true,
      nulo: false,
      tamanho: 1,
    },
    sincronizado: {
      coluna: 'sincronizado',
      descricao: 'Sincronizado?',
      editavel: true,
      nulo: false,
      tamanho: 1,
    },
    codigoUsuarioInclusao: {
      coluna: 'codigo_usuario_inclusao',
      descricao: 'Usuário inclusão',
      editavel: true,
      nulo: false,
      tamanho: 36,
    },
    dataHoraInclusao: {
      coluna: 'data_hora_inclusao',
      descricao: 'Data/Hora inclusão',
      editavel: true,
      nulo: false,
    },
    codigoUsuarioAlteracao: {
      coluna: 'codigo_usuario_alteracao',
      descricao: 'Usuário alteração',
      editavel: true,
      nulo: true,
      tamanho: 36,
    },
    dataHoraAlteracao: {
      coluna: 'data_hora_alteracao',
      descricao: 'Data/Hora alteração',
      editavel: true,
      nulo: true,
    },
    codigoCondicionante: {
      coluna: 'codigo_condicionante',
      descricao: 'Código da condicionante',
      editavel: true,
      nulo: false,
      tamanho: 36,
    },
    numero: {
      coluna: 'numero',
      descricao: 'Número',
      editavel: true,
      nulo: false,
    },
    vencimento: {
      coluna: 'vencimento',
      descricao: 'Vencimento',
      editavel: true,
      nulo: false,
    },
    executada: {
      coluna: 'executada',
      descricao: 'Executada em',
      editavel: true,
      nulo: true,
    },
    numeroProtocolo: {
      coluna: 'numero_protocolo',
      descricao: 'Número do protocolo',
      editavel: true,
      nulo: true,
      tamanho: 50,
    },
    informacoesComplementares: {
      coluna: 'informacoes_complementares',
      descricao: 'Informações complementares',
      editavel: true,
      nulo: true,
      tamanho: 1200,
    },
    responsavel: {
      coluna: 'responsavel',
      descricao: 'Responsável',
      editavel: true,
      nulo: true,
      tamanho: 100,
    },
  }
}
export interface interfaceCondicionantesExecucoesPossuida
  extends interfaceRecurso {
  codigo_corporativo?: string
  codigo?: string
  excluido?: string
  sincronizado?: string
  codigo_usuario_inclusao?: string
  data_hora_inclusao?: string
  codigo_usuario_alteracao?: string
  data_hora_alteracao?: string
  codigo_condicionante?: string
  numero?: string
  vencimento?: string
  executada?: string
  numero_protocolo?: string
  informacoes_complementares?: string
  responsavel?: string
}
export class ClasseCondicionantesExecucoesPossuida extends Recurso {
  constructor(objeto?: interfaceUsuarios) {
    super('condicionantes_execucoes_possuida', objeto)
  }
  codigoCorporativo?: string
  codigo?: string
  excluido?: string
  sincronizado?: string
  codigoUsuarioInclusao?: string
  dataHoraInclusao?: string
  codigoUsuarioAlteracao?: string
  dataHoraAlteracao?: string
  codigoCondicionante?: string
  numero?: string
  vencimento?: string
  executada?: string
  numeroProtocolo?: string
  informacoesComplementares?: string
  responsavel?: string
  public get objeto(): interfaceCondicionantesExecucoesPossuida {
    const saida: interfaceAlertasCompromissos = {}
    if (this.codigoCorporativo != undefined)
      saida.codigo_corporativo = this.codigoCorporativo
    if (this.codigo != undefined) saida.codigo = this.codigo
    if (this.excluido != undefined) saida.excluido = this.excluido
    if (this.sincronizado != undefined) saida.sincronizado = this.sincronizado
    if (this.codigoUsuarioInclusao != undefined)
      saida.codigo_usuario_inclusao = this.codigoUsuarioInclusao
    if (this.dataHoraInclusao != undefined)
      saida.data_hora_inclusao = this.dataHoraInclusao
    if (this.codigoUsuarioAlteracao != undefined)
      saida.codigo_usuario_alteracao = this.codigoUsuarioAlteracao
    if (this.dataHoraAlteracao != undefined)
      saida.data_hora_alteracao = this.dataHoraAlteracao
    if (this.codigoCondicionante != undefined)
      saida.codigo_condicionante = this.codigoCondicionante
    if (this.numero != undefined) saida.numero = this.numero
    if (this.vencimento != undefined) saida.vencimento = this.vencimento
    if (this.executada != undefined) saida.executada = this.executada
    if (this.numeroProtocolo != undefined)
      saida.numero_protocolo = this.numeroProtocolo
    if (this.informacoesComplementares != undefined)
      saida.informacoes_complementares = this.informacoesComplementares
    if (this.responsavel != undefined) saida.responsavel = this.responsavel
    return saida
  }
  public set objeto(objeto: interfaceCondicionantesExecucoesPossuida) {
    this.codigoCorporativo = objeto.codigo_corporativo
    this.codigo = objeto.codigo
    this.excluido = objeto.excluido
    this.sincronizado = objeto.sincronizado
    this.codigoUsuarioInclusao = objeto.codigo_usuario_inclusao
    this.dataHoraInclusao = objeto.data_hora_inclusao
    this.codigoUsuarioAlteracao = objeto.codigo_usuario_alteracao
    this.dataHoraAlteracao = objeto.data_hora_alteracao
    this.codigoCondicionante = objeto.codigo_condicionante
    this.numero = objeto.numero
    this.vencimento = objeto.vencimento
    this.executada = objeto.executada
    this.numeroProtocolo = objeto.numero_protocolo
    this.informacoesComplementares = objeto.informacoes_complementares
    this.responsavel = objeto.responsavel
  }
  meta: { [key: string]: interfaceMetaDados } = {
    codigoCorporativo: {
      coluna: 'codigo_corporativo',
      descricao: 'Código corporativo',
      editavel: true,
      nulo: false,
      tamanho: 36,
    },
    codigo: {
      coluna: 'codigo',
      descricao: 'Código',
      editavel: true,
      nulo: false,
      tamanho: 36,
    },
    excluido: {
      coluna: 'excluido',
      descricao: 'Excluído?',
      editavel: true,
      nulo: false,
      tamanho: 1,
    },
    sincronizado: {
      coluna: 'sincronizado',
      descricao: 'Sincronizado?',
      editavel: true,
      nulo: false,
      tamanho: 1,
    },
    codigoUsuarioInclusao: {
      coluna: 'codigo_usuario_inclusao',
      descricao: 'Usuário inclusão',
      editavel: true,
      nulo: false,
      tamanho: 36,
    },
    dataHoraInclusao: {
      coluna: 'data_hora_inclusao',
      descricao: 'Data/Hora inclusão',
      editavel: true,
      nulo: false,
    },
    codigoUsuarioAlteracao: {
      coluna: 'codigo_usuario_alteracao',
      descricao: 'Usuário alteração',
      editavel: true,
      nulo: true,
      tamanho: 36,
    },
    dataHoraAlteracao: {
      coluna: 'data_hora_alteracao',
      descricao: 'Data/Hora alteração',
      editavel: true,
      nulo: true,
    },
    codigoCondicionante: {
      coluna: 'codigo_condicionante',
      descricao: 'Código da condicionante',
      editavel: true,
      nulo: false,
      tamanho: 36,
    },
    numero: {
      coluna: 'numero',
      descricao: 'Número',
      editavel: true,
      nulo: false,
    },
    vencimento: {
      coluna: 'vencimento',
      descricao: 'Vencimento',
      editavel: true,
      nulo: false,
    },
    executada: {
      coluna: 'executada',
      descricao: 'Executada em',
      editavel: true,
      nulo: true,
    },
    numeroProtocolo: {
      coluna: 'numero_protocolo',
      descricao: 'Número do protocolo',
      editavel: true,
      nulo: true,
      tamanho: 50,
    },
    informacoesComplementares: {
      coluna: 'informacoes_complementares',
      descricao: 'Informações complementares',
      editavel: true,
      nulo: true,
      tamanho: 1200,
    },
    responsavel: {
      coluna: 'responsavel',
      descricao: 'Responsável',
      editavel: true,
      nulo: true,
      tamanho: 100,
    },
  }
}
export interface interfaceCondicionantesResponsaveis extends interfaceRecurso {
  codigo_corporativo?: string
  codigo?: string
  excluido?: string
  sincronizado?: string
  codigo_usuario_inclusao?: string
  data_hora_inclusao?: string
  codigo_usuario_alteracao?: string
  data_hora_alteracao?: string
  codigo_origem?: string
  codigo_usuario?: string
}
export class ClasseCondicionantesResponsaveis extends Recurso {
  constructor(objeto?: interfaceUsuarios) {
    super('condicionantes_responsaveis', objeto)
  }
  codigoCorporativo?: string
  codigo?: string
  excluido?: string
  sincronizado?: string
  codigoUsuarioInclusao?: string
  dataHoraInclusao?: string
  codigoUsuarioAlteracao?: string
  dataHoraAlteracao?: string
  codigoOrigem?: string
  codigoUsuario?: string
  public get objeto(): interfaceCondicionantesResponsaveis {
    const saida: interfaceAlertasCompromissos = {}
    if (this.codigoCorporativo != undefined)
      saida.codigo_corporativo = this.codigoCorporativo
    if (this.codigo != undefined) saida.codigo = this.codigo
    if (this.excluido != undefined) saida.excluido = this.excluido
    if (this.sincronizado != undefined) saida.sincronizado = this.sincronizado
    if (this.codigoUsuarioInclusao != undefined)
      saida.codigo_usuario_inclusao = this.codigoUsuarioInclusao
    if (this.dataHoraInclusao != undefined)
      saida.data_hora_inclusao = this.dataHoraInclusao
    if (this.codigoUsuarioAlteracao != undefined)
      saida.codigo_usuario_alteracao = this.codigoUsuarioAlteracao
    if (this.dataHoraAlteracao != undefined)
      saida.data_hora_alteracao = this.dataHoraAlteracao
    if (this.codigoOrigem != undefined) saida.codigo_origem = this.codigoOrigem
    if (this.codigoUsuario != undefined)
      saida.codigo_usuario = this.codigoUsuario
    return saida
  }
  public set objeto(objeto: interfaceCondicionantesResponsaveis) {
    this.codigoCorporativo = objeto.codigo_corporativo
    this.codigo = objeto.codigo
    this.excluido = objeto.excluido
    this.sincronizado = objeto.sincronizado
    this.codigoUsuarioInclusao = objeto.codigo_usuario_inclusao
    this.dataHoraInclusao = objeto.data_hora_inclusao
    this.codigoUsuarioAlteracao = objeto.codigo_usuario_alteracao
    this.dataHoraAlteracao = objeto.data_hora_alteracao
    this.codigoOrigem = objeto.codigo_origem
    this.codigoUsuario = objeto.codigo_usuario
  }
  meta: { [key: string]: interfaceMetaDados } = {
    codigoCorporativo: {
      coluna: 'codigo_corporativo',
      descricao: 'Código corporativo',
      editavel: true,
      nulo: false,
      tamanho: 36,
    },
    codigo: {
      coluna: 'codigo',
      descricao: 'Código',
      editavel: true,
      nulo: false,
      tamanho: 36,
    },
    excluido: {
      coluna: 'excluido',
      descricao: 'Excluído?',
      editavel: true,
      nulo: false,
      tamanho: 1,
    },
    sincronizado: {
      coluna: 'sincronizado',
      descricao: 'Sincronizado?',
      editavel: true,
      nulo: false,
      tamanho: 1,
    },
    codigoUsuarioInclusao: {
      coluna: 'codigo_usuario_inclusao',
      descricao: 'Usuário inclusão',
      editavel: true,
      nulo: false,
      tamanho: 36,
    },
    dataHoraInclusao: {
      coluna: 'data_hora_inclusao',
      descricao: 'Data/Hora inclusão',
      editavel: true,
      nulo: false,
    },
    codigoUsuarioAlteracao: {
      coluna: 'codigo_usuario_alteracao',
      descricao: 'Usuário alteração',
      editavel: true,
      nulo: true,
      tamanho: 36,
    },
    dataHoraAlteracao: {
      coluna: 'data_hora_alteracao',
      descricao: 'Data/Hora alteração',
      editavel: true,
      nulo: true,
    },
    codigoOrigem: {
      coluna: 'codigo_origem',
      descricao: 'Condicionante',
      editavel: true,
      nulo: false,
      tamanho: 36,
    },
    codigoUsuario: {
      coluna: 'codigo_usuario',
      descricao: 'Usuário',
      editavel: true,
      nulo: false,
      tamanho: 36,
    },
  }
}
export interface interfaceConfiguracoes extends interfaceRecurso {
  codigo_corporativo?: string
  codigo?: string
  excluido?: string
  sincronizado?: string
  codigo_usuario_inclusao?: string
  data_hora_inclusao?: string
  codigo_usuario_alteracao?: string
  data_hora_alteracao?: string
  plano?: string
  limite_usuarios?: string
  intervalo_resumo_prazos?: string
  notificacao_web?: string
  notificacao_email?: string
  notificacao_sms?: string
  notificacao_whatsapp?: string
  bloqueio?: string
  origem?: string
  limite_projetos?: string
  relatorio_logo_codigo?: string
  relatorio_logo_nome?: string
  nome_corporativo?: string
  informacao_1?: string
  informacao_2?: string
  informacao_3?: string
}
export class ClasseConfiguracoes extends Recurso {
  constructor(objeto?: interfaceUsuarios) {
    super('configuracoes', objeto)
  }
  codigoCorporativo?: string
  codigo?: string
  excluido?: string
  sincronizado?: string
  codigoUsuarioInclusao?: string
  dataHoraInclusao?: string
  codigoUsuarioAlteracao?: string
  dataHoraAlteracao?: string
  plano?: string
  limiteUsuarios?: string
  intervaloResumoPrazos?: string
  notificacaoWeb?: string
  notificacaoEmail?: string
  notificacaoSms?: string
  notificacaoWhatsapp?: string
  bloqueio?: string
  origem?: string
  limiteProjetos?: string
  relatorioLogoCodigo?: string
  relatorioLogoNome?: string
  nomeCorporativo?: string
  informacao1?: string
  informacao2?: string
  informacao3?: string
  public get objeto(): interfaceConfiguracoes {
    const saida: interfaceAlertasCompromissos = {}
    if (this.codigoCorporativo != undefined)
      saida.codigo_corporativo = this.codigoCorporativo
    if (this.codigo != undefined) saida.codigo = this.codigo
    if (this.excluido != undefined) saida.excluido = this.excluido
    if (this.sincronizado != undefined) saida.sincronizado = this.sincronizado
    if (this.codigoUsuarioInclusao != undefined)
      saida.codigo_usuario_inclusao = this.codigoUsuarioInclusao
    if (this.dataHoraInclusao != undefined)
      saida.data_hora_inclusao = this.dataHoraInclusao
    if (this.codigoUsuarioAlteracao != undefined)
      saida.codigo_usuario_alteracao = this.codigoUsuarioAlteracao
    if (this.dataHoraAlteracao != undefined)
      saida.data_hora_alteracao = this.dataHoraAlteracao
    if (this.plano != undefined) saida.plano = this.plano
    if (this.limiteUsuarios != undefined)
      saida.limite_usuarios = this.limiteUsuarios
    if (this.intervaloResumoPrazos != undefined)
      saida.intervalo_resumo_prazos = this.intervaloResumoPrazos
    if (this.notificacaoWeb != undefined)
      saida.notificacao_web = this.notificacaoWeb
    if (this.notificacaoEmail != undefined)
      saida.notificacao_email = this.notificacaoEmail
    if (this.notificacaoSms != undefined)
      saida.notificacao_sms = this.notificacaoSms
    if (this.notificacaoWhatsapp != undefined)
      saida.notificacao_whatsapp = this.notificacaoWhatsapp
    if (this.bloqueio != undefined) saida.bloqueio = this.bloqueio
    if (this.origem != undefined) saida.origem = this.origem
    if (this.limiteProjetos != undefined)
      saida.limite_projetos = this.limiteProjetos
    if (this.relatorioLogoCodigo != undefined)
      saida.relatorio_logo_codigo = this.relatorioLogoCodigo
    if (this.relatorioLogoNome != undefined)
      saida.relatorio_logo_nome = this.relatorioLogoNome
    if (this.nomeCorporativo != undefined)
      saida.nome_corporativo = this.nomeCorporativo
    if (this.informacao1 != undefined) saida.informacao_1 = this.informacao1
    if (this.informacao2 != undefined) saida.informacao_2 = this.informacao2
    if (this.informacao3 != undefined) saida.informacao_3 = this.informacao3
    return saida
  }
  public set objeto(objeto: interfaceConfiguracoes) {
    this.codigoCorporativo = objeto.codigo_corporativo
    this.codigo = objeto.codigo
    this.excluido = objeto.excluido
    this.sincronizado = objeto.sincronizado
    this.codigoUsuarioInclusao = objeto.codigo_usuario_inclusao
    this.dataHoraInclusao = objeto.data_hora_inclusao
    this.codigoUsuarioAlteracao = objeto.codigo_usuario_alteracao
    this.dataHoraAlteracao = objeto.data_hora_alteracao
    this.plano = objeto.plano
    this.limiteUsuarios = objeto.limite_usuarios
    this.intervaloResumoPrazos = objeto.intervalo_resumo_prazos
    this.notificacaoWeb = objeto.notificacao_web
    this.notificacaoEmail = objeto.notificacao_email
    this.notificacaoSms = objeto.notificacao_sms
    this.notificacaoWhatsapp = objeto.notificacao_whatsapp
    this.bloqueio = objeto.bloqueio
    this.origem = objeto.origem
    this.limiteProjetos = objeto.limite_projetos
    this.relatorioLogoCodigo = objeto.relatorio_logo_codigo
    this.relatorioLogoNome = objeto.relatorio_logo_nome
    this.nomeCorporativo = objeto.nome_corporativo
    this.informacao1 = objeto.informacao_1
    this.informacao2 = objeto.informacao_2
    this.informacao3 = objeto.informacao_3
  }
  meta: { [key: string]: interfaceMetaDados } = {
    codigoCorporativo: {
      coluna: 'codigo_corporativo',
      descricao: 'Código corporativo',
      editavel: true,
      nulo: false,
      tamanho: 36,
    },
    codigo: {
      coluna: 'codigo',
      descricao: 'Código',
      editavel: true,
      nulo: false,
      tamanho: 36,
    },
    excluido: {
      coluna: 'excluido',
      descricao: 'Excluído?',
      editavel: true,
      nulo: false,
      tamanho: 1,
    },
    sincronizado: {
      coluna: 'sincronizado',
      descricao: 'Sincronizado?',
      editavel: true,
      nulo: false,
      tamanho: 1,
    },
    codigoUsuarioInclusao: {
      coluna: 'codigo_usuario_inclusao',
      descricao: 'Usuário inclusão',
      editavel: true,
      nulo: false,
      tamanho: 36,
    },
    dataHoraInclusao: {
      coluna: 'data_hora_inclusao',
      descricao: 'Data/Hora inclusão',
      editavel: true,
      nulo: false,
    },
    codigoUsuarioAlteracao: {
      coluna: 'codigo_usuario_alteracao',
      descricao: 'Usuário alteração',
      editavel: true,
      nulo: true,
      tamanho: 36,
    },
    dataHoraAlteracao: {
      coluna: 'data_hora_alteracao',
      descricao: 'Data/Hora alteração',
      editavel: true,
      nulo: true,
    },
    plano: {
      coluna: 'plano',
      descricao: 'Plano',
      editavel: true,
      nulo: false,
      tamanho: 20,
    },
    limiteUsuarios: {
      coluna: 'limite_usuarios',
      descricao: 'Limite de usuários',
      editavel: true,
      nulo: false,
    },
    intervaloResumoPrazos: {
      coluna: 'intervalo_resumo_prazos',
      descricao: 'Intervalo do resumo de prazos',
      editavel: true,
      nulo: false,
      tamanho: 1,
    },
    notificacaoWeb: {
      coluna: 'notificacao_web',
      descricao: 'Notificação pelo navegador?',
      editavel: true,
      nulo: false,
      tamanho: 1,
    },
    notificacaoEmail: {
      coluna: 'notificacao_email',
      descricao: 'Notificação por e-mail?',
      editavel: true,
      nulo: false,
      tamanho: 1,
    },
    notificacaoSms: {
      coluna: 'notificacao_sms',
      descricao: 'Notificação por SMS?',
      editavel: true,
      nulo: false,
      tamanho: 1,
    },
    notificacaoWhatsapp: {
      coluna: 'notificacao_whatsapp',
      descricao: 'Notificação por WhatsApp?',
      editavel: true,
      nulo: false,
      tamanho: 1,
    },
    bloqueio: {
      coluna: 'bloqueio',
      descricao: 'Data/Hora bloqueio',
      editavel: true,
      nulo: true,
    },
    origem: {
      coluna: 'origem',
      descricao: 'Origem',
      editavel: true,
      nulo: true,
      tamanho: 50,
    },
    limiteProjetos: {
      coluna: 'limite_projetos',
      descricao: 'Limite de projetos',
      editavel: true,
      nulo: true,
    },
    relatorioLogoCodigo: {
      coluna: 'relatorio_logo_codigo',
      descricao: 'Código do logo do relatório',
      editavel: true,
      nulo: true,
      tamanho: 36,
    },
    relatorioLogoNome: {
      coluna: 'relatorio_logo_nome',
      descricao: 'Nome do logo do relatório',
      editavel: true,
      nulo: true,
      tamanho: 100,
    },
    nomeCorporativo: {
      coluna: 'nome_corporativo',
      descricao: 'Nome Corporativo',
      editavel: true,
      nulo: true,
      tamanho: 200,
    },
    informacao1: {
      coluna: 'informacao_1',
      descricao: 'Informação 01',
      editavel: true,
      nulo: true,
      tamanho: 200,
    },
    informacao2: {
      coluna: 'informacao_2',
      descricao: 'Informação 02',
      editavel: true,
      nulo: true,
      tamanho: 200,
    },
    informacao3: {
      coluna: 'informacao_3',
      descricao: 'Informação 03',
      editavel: true,
      nulo: true,
      tamanho: 300,
    },
  }
}
export interface interfaceContatos extends interfaceRecurso {
  codigo_corporativo?: string
  codigo?: string
  excluido?: string
  sincronizado?: string
  codigo_usuario_inclusao?: string
  data_hora_inclusao?: string
  codigo_usuario_alteracao?: string
  data_hora_alteracao?: string
  codigo_origem?: string
  nome?: string
  telefone?: string
  email?: string
  setor?: string
  cargo?: string
  observacoes?: string
}
export class ClasseContatos extends Recurso {
  constructor(objeto?: interfaceUsuarios) {
    super('contatos', objeto)
  }
  codigoCorporativo?: string
  codigo?: string
  excluido?: string
  sincronizado?: string
  codigoUsuarioInclusao?: string
  dataHoraInclusao?: string
  codigoUsuarioAlteracao?: string
  dataHoraAlteracao?: string
  codigoOrigem?: string
  nome?: string
  telefone?: string
  email?: string
  setor?: string
  cargo?: string
  observacoes?: string
  public get objeto(): interfaceContatos {
    const saida: interfaceAlertasCompromissos = {}
    if (this.codigoCorporativo != undefined)
      saida.codigo_corporativo = this.codigoCorporativo
    if (this.codigo != undefined) saida.codigo = this.codigo
    if (this.excluido != undefined) saida.excluido = this.excluido
    if (this.sincronizado != undefined) saida.sincronizado = this.sincronizado
    if (this.codigoUsuarioInclusao != undefined)
      saida.codigo_usuario_inclusao = this.codigoUsuarioInclusao
    if (this.dataHoraInclusao != undefined)
      saida.data_hora_inclusao = this.dataHoraInclusao
    if (this.codigoUsuarioAlteracao != undefined)
      saida.codigo_usuario_alteracao = this.codigoUsuarioAlteracao
    if (this.dataHoraAlteracao != undefined)
      saida.data_hora_alteracao = this.dataHoraAlteracao
    if (this.codigoOrigem != undefined) saida.codigo_origem = this.codigoOrigem
    if (this.nome != undefined) saida.nome = this.nome
    if (this.telefone != undefined) saida.telefone = this.telefone
    if (this.email != undefined) saida.email = this.email
    if (this.setor != undefined) saida.setor = this.setor
    if (this.cargo != undefined) saida.cargo = this.cargo
    if (this.observacoes != undefined) saida.observacoes = this.observacoes
    return saida
  }
  public set objeto(objeto: interfaceContatos) {
    this.codigoCorporativo = objeto.codigo_corporativo
    this.codigo = objeto.codigo
    this.excluido = objeto.excluido
    this.sincronizado = objeto.sincronizado
    this.codigoUsuarioInclusao = objeto.codigo_usuario_inclusao
    this.dataHoraInclusao = objeto.data_hora_inclusao
    this.codigoUsuarioAlteracao = objeto.codigo_usuario_alteracao
    this.dataHoraAlteracao = objeto.data_hora_alteracao
    this.codigoOrigem = objeto.codigo_origem
    this.nome = objeto.nome
    this.telefone = objeto.telefone
    this.email = objeto.email
    this.setor = objeto.setor
    this.cargo = objeto.cargo
    this.observacoes = objeto.observacoes
  }
  meta: { [key: string]: interfaceMetaDados } = {
    codigoCorporativo: {
      coluna: 'codigo_corporativo',
      descricao: 'Código',
      editavel: true,
      nulo: false,
      tamanho: 36,
    },
    codigo: {
      coluna: 'codigo',
      descricao: 'Código corporativo',
      editavel: true,
      nulo: false,
      tamanho: 36,
    },
    excluido: {
      coluna: 'excluido',
      descricao: 'Excluído?',
      editavel: true,
      nulo: false,
      tamanho: 1,
    },
    sincronizado: {
      coluna: 'sincronizado',
      descricao: 'Sincronizado?',
      editavel: true,
      nulo: false,
      tamanho: 1,
    },
    codigoUsuarioInclusao: {
      coluna: 'codigo_usuario_inclusao',
      descricao: 'Usuário inclusão',
      editavel: true,
      nulo: false,
      tamanho: 36,
    },
    dataHoraInclusao: {
      coluna: 'data_hora_inclusao',
      descricao: 'Data/Hora inclusão',
      editavel: true,
      nulo: false,
    },
    codigoUsuarioAlteracao: {
      coluna: 'codigo_usuario_alteracao',
      descricao: 'Usuário alteração',
      editavel: true,
      nulo: true,
      tamanho: 36,
    },
    dataHoraAlteracao: {
      coluna: 'data_hora_alteracao',
      descricao: 'Data/Hora alteração',
      editavel: true,
      nulo: true,
    },
    codigoOrigem: {
      coluna: 'codigo_origem',
      descricao: 'Origem',
      editavel: true,
      nulo: false,
      tamanho: 36,
    },
    nome: {
      coluna: 'nome',
      descricao: 'Nome',
      editavel: true,
      nulo: false,
      tamanho: 100,
    },
    telefone: {
      coluna: 'telefone',
      descricao: 'Telefone',
      editavel: true,
      nulo: true,
      tamanho: 30,
    },
    email: {
      coluna: 'email',
      descricao: 'E-mail',
      editavel: true,
      nulo: true,
      tamanho: 100,
    },
    setor: {
      coluna: 'setor',
      descricao: 'Setor',
      editavel: true,
      nulo: true,
      tamanho: 50,
    },
    cargo: {
      coluna: 'cargo',
      descricao: 'Cargo',
      editavel: true,
      nulo: true,
      tamanho: 50,
    },
    observacoes: {
      coluna: 'observacoes',
      descricao: 'Observações',
      editavel: true,
      nulo: true,
      tamanho: 500,
    },
  }
}
export interface interfaceDestinatariosAlerta extends interfaceRecurso {
  codigo_corporativo?: string
  codigo?: string
  excluido?: string
  sincronizado?: string
  codigo_usuario_inclusao?: string
  data_hora_inclusao?: string
  codigo_usuario_alteracao?: string
  data_hora_alteracao?: string
  codigo_origem?: string
  nome?: string
  email?: string
  observacoes?: string
}
export class ClasseDestinatariosAlerta extends Recurso {
  constructor(objeto?: interfaceUsuarios) {
    super('destinatarios_alerta', objeto)
  }
  codigoCorporativo?: string
  codigo?: string
  excluido?: string
  sincronizado?: string
  codigoUsuarioInclusao?: string
  dataHoraInclusao?: string
  codigoUsuarioAlteracao?: string
  dataHoraAlteracao?: string
  codigoOrigem?: string
  nome?: string
  email?: string
  observacoes?: string
  public get objeto(): interfaceDestinatariosAlerta {
    const saida: interfaceAlertasCompromissos = {}
    if (this.codigoCorporativo != undefined)
      saida.codigo_corporativo = this.codigoCorporativo
    if (this.codigo != undefined) saida.codigo = this.codigo
    if (this.excluido != undefined) saida.excluido = this.excluido
    if (this.sincronizado != undefined) saida.sincronizado = this.sincronizado
    if (this.codigoUsuarioInclusao != undefined)
      saida.codigo_usuario_inclusao = this.codigoUsuarioInclusao
    if (this.dataHoraInclusao != undefined)
      saida.data_hora_inclusao = this.dataHoraInclusao
    if (this.codigoUsuarioAlteracao != undefined)
      saida.codigo_usuario_alteracao = this.codigoUsuarioAlteracao
    if (this.dataHoraAlteracao != undefined)
      saida.data_hora_alteracao = this.dataHoraAlteracao
    if (this.codigoOrigem != undefined) saida.codigo_origem = this.codigoOrigem
    if (this.nome != undefined) saida.nome = this.nome
    if (this.email != undefined) saida.email = this.email
    if (this.observacoes != undefined) saida.observacoes = this.observacoes
    return saida
  }
  public set objeto(objeto: interfaceDestinatariosAlerta) {
    this.codigoCorporativo = objeto.codigo_corporativo
    this.codigo = objeto.codigo
    this.excluido = objeto.excluido
    this.sincronizado = objeto.sincronizado
    this.codigoUsuarioInclusao = objeto.codigo_usuario_inclusao
    this.dataHoraInclusao = objeto.data_hora_inclusao
    this.codigoUsuarioAlteracao = objeto.codigo_usuario_alteracao
    this.dataHoraAlteracao = objeto.data_hora_alteracao
    this.codigoOrigem = objeto.codigo_origem
    this.nome = objeto.nome
    this.email = objeto.email
    this.observacoes = objeto.observacoes
  }
  meta: { [key: string]: interfaceMetaDados } = {
    codigoCorporativo: {
      coluna: 'codigo_corporativo',
      descricao: 'Código corporativo',
      editavel: true,
      nulo: false,
      tamanho: 36,
    },
    codigo: {
      coluna: 'codigo',
      descricao: 'Código',
      editavel: true,
      nulo: false,
      tamanho: 36,
    },
    excluido: {
      coluna: 'excluido',
      descricao: 'Excluído?',
      editavel: true,
      nulo: false,
      tamanho: 1,
    },
    sincronizado: {
      coluna: 'sincronizado',
      descricao: 'Sincronizado?',
      editavel: true,
      nulo: false,
      tamanho: 1,
    },
    codigoUsuarioInclusao: {
      coluna: 'codigo_usuario_inclusao',
      descricao: 'Usuário inclusão',
      editavel: true,
      nulo: false,
      tamanho: 36,
    },
    dataHoraInclusao: {
      coluna: 'data_hora_inclusao',
      descricao: 'Data/Hora inclusão',
      editavel: true,
      nulo: false,
    },
    codigoUsuarioAlteracao: {
      coluna: 'codigo_usuario_alteracao',
      descricao: 'Usuário alteração',
      editavel: true,
      nulo: true,
      tamanho: 36,
    },
    dataHoraAlteracao: {
      coluna: 'data_hora_alteracao',
      descricao: 'Data/Hora alteração',
      editavel: true,
      nulo: true,
    },
    codigoOrigem: {
      coluna: 'codigo_origem',
      descricao: 'Origem',
      editavel: true,
      nulo: false,
      tamanho: 36,
    },
    nome: {
      coluna: 'nome',
      descricao: 'Nome',
      editavel: true,
      nulo: false,
      tamanho: 100,
    },
    email: {
      coluna: 'email',
      descricao: 'E-mail',
      editavel: true,
      nulo: false,
      tamanho: 50,
    },
    observacoes: {
      coluna: 'observacoes',
      descricao: 'Observações',
      editavel: true,
      nulo: true,
      tamanho: 500,
    },
  }
}
export interface interfaceEmpreendedores extends interfaceRecurso {
  codigo_corporativo?: string
  codigo?: string
  excluido?: string
  sincronizado?: string
  codigo_usuario_inclusao?: string
  data_hora_inclusao?: string
  codigo_usuario_alteracao?: string
  data_hora_alteracao?: string
  nome?: string
  cnpj?: string
  cpf?: string
  cep?: string
  logradouro?: string
  numero?: string
  bairro?: string
  complemento?: string
  codigo_cidade?: string
  telefone?: string
  email?: string
  nome_representante_legal?: string
  data_nascimento_representante_legal?: string
  sexo_representante_legal?: string
  nacionalidade_representante_legal?: string
  estado_civil_representante_legal?: string
  profissao_representante_legal?: string
  rg_representante_legal?: string
  cpf_representante_legal?: string
  telefone_representante_legal?: string
  email_representante_legal?: string
}
export class ClasseEmpreendedores extends Recurso {
  constructor(objeto?: interfaceUsuarios) {
    super('empreendedores', objeto)
  }
  codigoCorporativo?: string
  codigo?: string
  excluido?: string
  sincronizado?: string
  codigoUsuarioInclusao?: string
  dataHoraInclusao?: string
  codigoUsuarioAlteracao?: string
  dataHoraAlteracao?: string
  nome?: string
  cnpj?: string
  cpf?: string
  cep?: string
  logradouro?: string
  numero?: string
  bairro?: string
  complemento?: string
  codigoCidade?: string
  telefone?: string
  email?: string
  nomeRepresentanteLegal?: string
  dataNascimentoRepresentanteLegal?: string
  sexoRepresentanteLegal?: string
  nacionalidadeRepresentanteLegal?: string
  estadoCivilRepresentanteLegal?: string
  profissaoRepresentanteLegal?: string
  rgRepresentanteLegal?: string
  cpfRepresentanteLegal?: string
  telefoneRepresentanteLegal?: string
  emailRepresentanteLegal?: string
  public get objeto(): interfaceEmpreendedores {
    const saida: interfaceAlertasCompromissos = {}
    if (this.codigoCorporativo != undefined)
      saida.codigo_corporativo = this.codigoCorporativo
    if (this.codigo != undefined) saida.codigo = this.codigo
    if (this.excluido != undefined) saida.excluido = this.excluido
    if (this.sincronizado != undefined) saida.sincronizado = this.sincronizado
    if (this.codigoUsuarioInclusao != undefined)
      saida.codigo_usuario_inclusao = this.codigoUsuarioInclusao
    if (this.dataHoraInclusao != undefined)
      saida.data_hora_inclusao = this.dataHoraInclusao
    if (this.codigoUsuarioAlteracao != undefined)
      saida.codigo_usuario_alteracao = this.codigoUsuarioAlteracao
    if (this.dataHoraAlteracao != undefined)
      saida.data_hora_alteracao = this.dataHoraAlteracao
    if (this.nome != undefined) saida.nome = this.nome
    if (this.cnpj != undefined) saida.cnpj = this.cnpj
    if (this.cpf != undefined) saida.cpf = this.cpf
    if (this.cep != undefined) saida.cep = this.cep
    if (this.logradouro != undefined) saida.logradouro = this.logradouro
    if (this.numero != undefined) saida.numero = this.numero
    if (this.bairro != undefined) saida.bairro = this.bairro
    if (this.complemento != undefined) saida.complemento = this.complemento
    if (this.codigoCidade != undefined) saida.codigo_cidade = this.codigoCidade
    if (this.telefone != undefined) saida.telefone = this.telefone
    if (this.email != undefined) saida.email = this.email
    if (this.nomeRepresentanteLegal != undefined)
      saida.nome_representante_legal = this.nomeRepresentanteLegal
    if (this.dataNascimentoRepresentanteLegal != undefined)
      saida.data_nascimento_representante_legal = this.dataNascimentoRepresentanteLegal
    if (this.sexoRepresentanteLegal != undefined)
      saida.sexo_representante_legal = this.sexoRepresentanteLegal
    if (this.nacionalidadeRepresentanteLegal != undefined)
      saida.nacionalidade_representante_legal = this.nacionalidadeRepresentanteLegal
    if (this.estadoCivilRepresentanteLegal != undefined)
      saida.estado_civil_representante_legal = this.estadoCivilRepresentanteLegal
    if (this.profissaoRepresentanteLegal != undefined)
      saida.profissao_representante_legal = this.profissaoRepresentanteLegal
    if (this.rgRepresentanteLegal != undefined)
      saida.rg_representante_legal = this.rgRepresentanteLegal
    if (this.cpfRepresentanteLegal != undefined)
      saida.cpf_representante_legal = this.cpfRepresentanteLegal
    if (this.telefoneRepresentanteLegal != undefined)
      saida.telefone_representante_legal = this.telefoneRepresentanteLegal
    if (this.emailRepresentanteLegal != undefined)
      saida.email_representante_legal = this.emailRepresentanteLegal
    return saida
  }
  public set objeto(objeto: interfaceEmpreendedores) {
    this.codigoCorporativo = objeto.codigo_corporativo
    this.codigo = objeto.codigo
    this.excluido = objeto.excluido
    this.sincronizado = objeto.sincronizado
    this.codigoUsuarioInclusao = objeto.codigo_usuario_inclusao
    this.dataHoraInclusao = objeto.data_hora_inclusao
    this.codigoUsuarioAlteracao = objeto.codigo_usuario_alteracao
    this.dataHoraAlteracao = objeto.data_hora_alteracao
    this.nome = objeto.nome
    this.cnpj = objeto.cnpj
    this.cpf = objeto.cpf
    this.cep = objeto.cep
    this.logradouro = objeto.logradouro
    this.numero = objeto.numero
    this.bairro = objeto.bairro
    this.complemento = objeto.complemento
    this.codigoCidade = objeto.codigo_cidade
    this.telefone = objeto.telefone
    this.email = objeto.email
    this.nomeRepresentanteLegal = objeto.nome_representante_legal
    this.dataNascimentoRepresentanteLegal =
      objeto.data_nascimento_representante_legal
    this.sexoRepresentanteLegal = objeto.sexo_representante_legal
    this.nacionalidadeRepresentanteLegal =
      objeto.nacionalidade_representante_legal
    this.estadoCivilRepresentanteLegal = objeto.estado_civil_representante_legal
    this.profissaoRepresentanteLegal = objeto.profissao_representante_legal
    this.rgRepresentanteLegal = objeto.rg_representante_legal
    this.cpfRepresentanteLegal = objeto.cpf_representante_legal
    this.telefoneRepresentanteLegal = objeto.telefone_representante_legal
    this.emailRepresentanteLegal = objeto.email_representante_legal
  }
  meta: { [key: string]: interfaceMetaDados } = {
    codigoCorporativo: {
      coluna: 'codigo_corporativo',
      descricao: 'Código corporativo',
      editavel: true,
      nulo: false,
      tamanho: 36,
    },
    codigo: {
      coluna: 'codigo',
      descricao: 'Código',
      editavel: true,
      nulo: false,
      tamanho: 36,
    },
    excluido: {
      coluna: 'excluido',
      descricao: 'Excluído?',
      editavel: true,
      nulo: false,
      tamanho: 1,
    },
    sincronizado: {
      coluna: 'sincronizado',
      descricao: 'Sincronizado?',
      editavel: true,
      nulo: false,
      tamanho: 1,
    },
    codigoUsuarioInclusao: {
      coluna: 'codigo_usuario_inclusao',
      descricao: 'Usuário inclusão',
      editavel: true,
      nulo: false,
      tamanho: 36,
    },
    dataHoraInclusao: {
      coluna: 'data_hora_inclusao',
      descricao: 'Data/Hora inclusão',
      editavel: true,
      nulo: false,
    },
    codigoUsuarioAlteracao: {
      coluna: 'codigo_usuario_alteracao',
      descricao: 'Usuário alteração',
      editavel: true,
      nulo: true,
      tamanho: 36,
    },
    dataHoraAlteracao: {
      coluna: 'data_hora_alteracao',
      descricao: 'Data/Hora alteração',
      editavel: true,
      nulo: true,
    },
    nome: {
      coluna: 'nome',
      descricao: 'Nome',
      editavel: true,
      nulo: false,
      tamanho: 100,
    },
    cnpj: {
      coluna: 'cnpj',
      descricao: 'CNPJ',
      editavel: true,
      nulo: true,
      tamanho: 18,
    },
    cpf: {
      coluna: 'cpf',
      descricao: 'CPF',
      editavel: true,
      nulo: true,
      tamanho: 14,
    },
    cep: {
      coluna: 'cep',
      descricao: 'CEP',
      editavel: true,
      nulo: true,
      tamanho: 9,
    },
    logradouro: {
      coluna: 'logradouro',
      descricao: 'Logradouro',
      editavel: true,
      nulo: true,
      tamanho: 100,
    },
    numero: {
      coluna: 'numero',
      descricao: 'Número',
      editavel: true,
      nulo: true,
      tamanho: 10,
    },
    bairro: {
      coluna: 'bairro',
      descricao: 'Bairro',
      editavel: true,
      nulo: true,
      tamanho: 50,
    },
    complemento: {
      coluna: 'complemento',
      descricao: 'Complemento',
      editavel: true,
      nulo: true,
      tamanho: 100,
    },
    codigoCidade: {
      coluna: 'codigo_cidade',
      descricao: 'Cidade',
      editavel: true,
      nulo: true,
    },
    telefone: {
      coluna: 'telefone',
      descricao: 'Telefone',
      editavel: true,
      nulo: true,
      tamanho: 20,
    },
    email: {
      coluna: 'email',
      descricao: 'E-mail',
      editavel: true,
      nulo: true,
      tamanho: 50,
    },
    nomeRepresentanteLegal: {
      coluna: 'nome_representante_legal',
      descricao: 'Nome do Representante Legal',
      editavel: true,
      nulo: true,
      tamanho: 100,
    },
    dataNascimentoRepresentanteLegal: {
      coluna: 'data_nascimento_representante_legal',
      descricao: 'Data de nascimento do Representante Legal',
      editavel: true,
      nulo: true,
    },
    sexoRepresentanteLegal: {
      coluna: 'sexo_representante_legal',
      descricao: 'Sexo do Representante Legal',
      editavel: true,
      nulo: true,
      tamanho: 1,
    },
    nacionalidadeRepresentanteLegal: {
      coluna: 'nacionalidade_representante_legal',
      descricao: 'Nacionalidade do Representante Legal',
      editavel: true,
      nulo: true,
      tamanho: 1,
    },
    estadoCivilRepresentanteLegal: {
      coluna: 'estado_civil_representante_legal',
      descricao: 'Estado Civil do Representante Legal',
      editavel: true,
      nulo: true,
      tamanho: 1,
    },
    profissaoRepresentanteLegal: {
      coluna: 'profissao_representante_legal',
      descricao: 'Profissão do Representante Legal',
      editavel: true,
      nulo: true,
      tamanho: 100,
    },
    rgRepresentanteLegal: {
      coluna: 'rg_representante_legal',
      descricao: 'RG do Representante Legal',
      editavel: true,
      nulo: true,
      tamanho: 20,
    },
    cpfRepresentanteLegal: {
      coluna: 'cpf_representante_legal',
      descricao: 'CPF do Representante Legal',
      editavel: true,
      nulo: true,
      tamanho: 14,
    },
    telefoneRepresentanteLegal: {
      coluna: 'telefone_representante_legal',
      descricao: 'Telefone do Representante Legal',
      editavel: true,
      nulo: true,
      tamanho: 20,
    },
    emailRepresentanteLegal: {
      coluna: 'email_representante_legal',
      descricao: 'E-mail do Representante Legal',
      editavel: true,
      nulo: true,
      tamanho: 50,
    },
  }
}
export interface interfaceEmpreendedoresUsuarios extends interfaceRecurso {
  codigo_corporativo?: string
  codigo?: string
  excluido?: string
  sincronizado?: string
  codigo_usuario_inclusao?: string
  data_hora_inclusao?: string
  codigo_usuario_alteracao?: string
  data_hora_alteracao?: string
  codigo_empreendedor?: string
  codigo_usuario?: string
}
export class ClasseEmpreendedoresUsuarios extends Recurso {
  constructor(objeto?: interfaceUsuarios) {
    super('empreendedores_usuarios', objeto)
  }
  codigoCorporativo?: string
  codigo?: string
  excluido?: string
  sincronizado?: string
  codigoUsuarioInclusao?: string
  dataHoraInclusao?: string
  codigoUsuarioAlteracao?: string
  dataHoraAlteracao?: string
  codigoEmpreendedor?: string
  codigoUsuario?: string
  public get objeto(): interfaceEmpreendedoresUsuarios {
    const saida: interfaceAlertasCompromissos = {}
    if (this.codigoCorporativo != undefined)
      saida.codigo_corporativo = this.codigoCorporativo
    if (this.codigo != undefined) saida.codigo = this.codigo
    if (this.excluido != undefined) saida.excluido = this.excluido
    if (this.sincronizado != undefined) saida.sincronizado = this.sincronizado
    if (this.codigoUsuarioInclusao != undefined)
      saida.codigo_usuario_inclusao = this.codigoUsuarioInclusao
    if (this.dataHoraInclusao != undefined)
      saida.data_hora_inclusao = this.dataHoraInclusao
    if (this.codigoUsuarioAlteracao != undefined)
      saida.codigo_usuario_alteracao = this.codigoUsuarioAlteracao
    if (this.dataHoraAlteracao != undefined)
      saida.data_hora_alteracao = this.dataHoraAlteracao
    if (this.codigoEmpreendedor != undefined)
      saida.codigo_empreendedor = this.codigoEmpreendedor
    if (this.codigoUsuario != undefined)
      saida.codigo_usuario = this.codigoUsuario
    return saida
  }
  public set objeto(objeto: interfaceEmpreendedoresUsuarios) {
    this.codigoCorporativo = objeto.codigo_corporativo
    this.codigo = objeto.codigo
    this.excluido = objeto.excluido
    this.sincronizado = objeto.sincronizado
    this.codigoUsuarioInclusao = objeto.codigo_usuario_inclusao
    this.dataHoraInclusao = objeto.data_hora_inclusao
    this.codigoUsuarioAlteracao = objeto.codigo_usuario_alteracao
    this.dataHoraAlteracao = objeto.data_hora_alteracao
    this.codigoEmpreendedor = objeto.codigo_empreendedor
    this.codigoUsuario = objeto.codigo_usuario
  }
  meta: { [key: string]: interfaceMetaDados } = {
    codigoCorporativo: {
      coluna: 'codigo_corporativo',
      descricao: 'Código corporativo',
      editavel: true,
      nulo: false,
      tamanho: 36,
    },
    codigo: {
      coluna: 'codigo',
      descricao: 'Código',
      editavel: true,
      nulo: false,
      tamanho: 36,
    },
    excluido: {
      coluna: 'excluido',
      descricao: 'Excluído?',
      editavel: true,
      nulo: false,
      tamanho: 1,
    },
    sincronizado: {
      coluna: 'sincronizado',
      descricao: 'Sincronizado?',
      editavel: true,
      nulo: false,
      tamanho: 1,
    },
    codigoUsuarioInclusao: {
      coluna: 'codigo_usuario_inclusao',
      descricao: 'Usuário inclusão',
      editavel: true,
      nulo: false,
      tamanho: 36,
    },
    dataHoraInclusao: {
      coluna: 'data_hora_inclusao',
      descricao: 'Data/Hora inclusão',
      editavel: true,
      nulo: false,
    },
    codigoUsuarioAlteracao: {
      coluna: 'codigo_usuario_alteracao',
      descricao: 'Usuário alteração',
      editavel: true,
      nulo: true,
      tamanho: 36,
    },
    dataHoraAlteracao: {
      coluna: 'data_hora_alteracao',
      descricao: 'Data/Hora alteração',
      editavel: true,
      nulo: true,
    },
    codigoEmpreendedor: {
      coluna: 'codigo_empreendedor',
      descricao: 'Usuário',
      editavel: true,
      nulo: false,
      tamanho: 36,
    },
    codigoUsuario: {
      coluna: 'codigo_usuario',
      editavel: true,
      nulo: false,
      tamanho: 36,
    },
  }
}
export interface interfaceEmpreendimentos extends interfaceRecurso {
  codigo_corporativo?: string
  codigo?: string
  excluido?: string
  sincronizado?: string
  codigo_usuario_inclusao?: string
  data_hora_inclusao?: string
  codigo_usuario_alteracao?: string
  data_hora_alteracao?: string
  nome?: string
  cnpj?: string
  cep?: string
  logradouro?: string
  numero?: string
  bairro?: string
  complemento?: string
  codigo_cidade?: string
  codigo_empreendedor?: string
  cpf?: string
  identificador?: string
}
export class ClasseEmpreendimentos extends Recurso {
  constructor(objeto?: interfaceUsuarios) {
    super('empreendimentos', objeto)
  }
  codigoCorporativo?: string
  codigo?: string
  excluido?: string
  sincronizado?: string
  codigoUsuarioInclusao?: string
  dataHoraInclusao?: string
  codigoUsuarioAlteracao?: string
  dataHoraAlteracao?: string
  nome?: string
  cnpj?: string
  cep?: string
  logradouro?: string
  numero?: string
  bairro?: string
  complemento?: string
  codigoCidade?: string
  codigoEmpreendedor?: string
  cpf?: string
  identificador?: string
  public get objeto(): interfaceEmpreendimentos {
    const saida: interfaceAlertasCompromissos = {}
    if (this.codigoCorporativo != undefined)
      saida.codigo_corporativo = this.codigoCorporativo
    if (this.codigo != undefined) saida.codigo = this.codigo
    if (this.excluido != undefined) saida.excluido = this.excluido
    if (this.sincronizado != undefined) saida.sincronizado = this.sincronizado
    if (this.codigoUsuarioInclusao != undefined)
      saida.codigo_usuario_inclusao = this.codigoUsuarioInclusao
    if (this.dataHoraInclusao != undefined)
      saida.data_hora_inclusao = this.dataHoraInclusao
    if (this.codigoUsuarioAlteracao != undefined)
      saida.codigo_usuario_alteracao = this.codigoUsuarioAlteracao
    if (this.dataHoraAlteracao != undefined)
      saida.data_hora_alteracao = this.dataHoraAlteracao
    if (this.nome != undefined) saida.nome = this.nome
    if (this.cnpj != undefined) saida.cnpj = this.cnpj
    if (this.cep != undefined) saida.cep = this.cep
    if (this.logradouro != undefined) saida.logradouro = this.logradouro
    if (this.numero != undefined) saida.numero = this.numero
    if (this.bairro != undefined) saida.bairro = this.bairro
    if (this.complemento != undefined) saida.complemento = this.complemento
    if (this.codigoCidade != undefined) saida.codigo_cidade = this.codigoCidade
    if (this.codigoEmpreendedor != undefined)
      saida.codigo_empreendedor = this.codigoEmpreendedor
    if (this.cpf != undefined) saida.cpf = this.cpf
    if (this.identificador != undefined)
      saida.identificador = this.identificador
    return saida
  }
  public set objeto(objeto: interfaceEmpreendimentos) {
    this.codigoCorporativo = objeto.codigo_corporativo
    this.codigo = objeto.codigo
    this.excluido = objeto.excluido
    this.sincronizado = objeto.sincronizado
    this.codigoUsuarioInclusao = objeto.codigo_usuario_inclusao
    this.dataHoraInclusao = objeto.data_hora_inclusao
    this.codigoUsuarioAlteracao = objeto.codigo_usuario_alteracao
    this.dataHoraAlteracao = objeto.data_hora_alteracao
    this.nome = objeto.nome
    this.cnpj = objeto.cnpj
    this.cep = objeto.cep
    this.logradouro = objeto.logradouro
    this.numero = objeto.numero
    this.bairro = objeto.bairro
    this.complemento = objeto.complemento
    this.codigoCidade = objeto.codigo_cidade
    this.codigoEmpreendedor = objeto.codigo_empreendedor
    this.cpf = objeto.cpf
    this.identificador = objeto.identificador
  }
  meta: { [key: string]: interfaceMetaDados } = {
    codigoCorporativo: {
      coluna: 'codigo_corporativo',
      descricao: 'Código corporativo',
      editavel: true,
      nulo: false,
      tamanho: 36,
    },
    codigo: {
      coluna: 'codigo',
      descricao: 'Código',
      editavel: true,
      nulo: false,
      tamanho: 36,
    },
    excluido: {
      coluna: 'excluido',
      descricao: 'Excluído?',
      editavel: true,
      nulo: false,
      tamanho: 1,
    },
    sincronizado: {
      coluna: 'sincronizado',
      descricao: 'Sincronizado?',
      editavel: true,
      nulo: false,
      tamanho: 1,
    },
    codigoUsuarioInclusao: {
      coluna: 'codigo_usuario_inclusao',
      descricao: 'Usuário inclusão',
      editavel: true,
      nulo: false,
      tamanho: 36,
    },
    dataHoraInclusao: {
      coluna: 'data_hora_inclusao',
      descricao: 'Data/Hora inclusão',
      editavel: true,
      nulo: false,
    },
    codigoUsuarioAlteracao: {
      coluna: 'codigo_usuario_alteracao',
      descricao: 'Usuário alteração',
      editavel: true,
      nulo: true,
      tamanho: 36,
    },
    dataHoraAlteracao: {
      coluna: 'data_hora_alteracao',
      descricao: 'Data/Hora alteração',
      editavel: true,
      nulo: true,
    },
    nome: {
      coluna: 'nome',
      descricao: 'Nome',
      editavel: true,
      nulo: false,
      tamanho: 100,
    },
    cnpj: {
      coluna: 'cnpj',
      descricao: 'CNPJ',
      editavel: true,
      nulo: true,
      tamanho: 18,
    },
    cep: {
      coluna: 'cep',
      descricao: 'CEP',
      editavel: true,
      nulo: true,
      tamanho: 9,
    },
    logradouro: {
      coluna: 'logradouro',
      descricao: 'Logradouro',
      editavel: true,
      nulo: true,
      tamanho: 100,
    },
    numero: {
      coluna: 'numero',
      descricao: 'Número',
      editavel: true,
      nulo: true,
      tamanho: 10,
    },
    bairro: {
      coluna: 'bairro',
      descricao: 'Bairro',
      editavel: true,
      nulo: true,
      tamanho: 50,
    },
    complemento: {
      coluna: 'complemento',
      descricao: 'Complemento',
      editavel: true,
      nulo: true,
      tamanho: 100,
    },
    codigoCidade: {
      coluna: 'codigo_cidade',
      descricao: 'Cidade',
      editavel: true,
      nulo: true,
    },
    codigoEmpreendedor: {
      coluna: 'codigo_empreendedor',
      descricao: 'Empreendedor',
      editavel: true,
      nulo: true,
      tamanho: 36,
    },
    cpf: {
      coluna: 'cpf',
      descricao: 'CPF',
      editavel: true,
      nulo: true,
      tamanho: 14,
    },
    identificador: {
      coluna: 'identificador',
      descricao: 'Identificador',
      editavel: true,
      nulo: true,
      tamanho: 30,
    },
  }
}
export interface interfaceEmpreendimentosUsuarios extends interfaceRecurso {
  codigo_corporativo?: string
  codigo?: string
  excluido?: string
  sincronizado?: string
  codigo_usuario_inclusao?: string
  data_hora_inclusao?: string
  codigo_usuario_alteracao?: string
  data_hora_alteracao?: string
  codigo_empreendimento?: string
  codigo_usuario?: string
}
export class ClasseEmpreendimentosUsuarios extends Recurso {
  constructor(objeto?: interfaceUsuarios) {
    super('empreendimentos_usuarios', objeto)
  }
  codigoCorporativo?: string
  codigo?: string
  excluido?: string
  sincronizado?: string
  codigoUsuarioInclusao?: string
  dataHoraInclusao?: string
  codigoUsuarioAlteracao?: string
  dataHoraAlteracao?: string
  codigoEmpreendimento?: string
  codigoUsuario?: string
  public get objeto(): interfaceEmpreendimentosUsuarios {
    const saida: interfaceAlertasCompromissos = {}
    if (this.codigoCorporativo != undefined)
      saida.codigo_corporativo = this.codigoCorporativo
    if (this.codigo != undefined) saida.codigo = this.codigo
    if (this.excluido != undefined) saida.excluido = this.excluido
    if (this.sincronizado != undefined) saida.sincronizado = this.sincronizado
    if (this.codigoUsuarioInclusao != undefined)
      saida.codigo_usuario_inclusao = this.codigoUsuarioInclusao
    if (this.dataHoraInclusao != undefined)
      saida.data_hora_inclusao = this.dataHoraInclusao
    if (this.codigoUsuarioAlteracao != undefined)
      saida.codigo_usuario_alteracao = this.codigoUsuarioAlteracao
    if (this.dataHoraAlteracao != undefined)
      saida.data_hora_alteracao = this.dataHoraAlteracao
    if (this.codigoEmpreendimento != undefined)
      saida.codigo_empreendimento = this.codigoEmpreendimento
    if (this.codigoUsuario != undefined)
      saida.codigo_usuario = this.codigoUsuario
    return saida
  }
  public set objeto(objeto: interfaceEmpreendimentosUsuarios) {
    this.codigoCorporativo = objeto.codigo_corporativo
    this.codigo = objeto.codigo
    this.excluido = objeto.excluido
    this.sincronizado = objeto.sincronizado
    this.codigoUsuarioInclusao = objeto.codigo_usuario_inclusao
    this.dataHoraInclusao = objeto.data_hora_inclusao
    this.codigoUsuarioAlteracao = objeto.codigo_usuario_alteracao
    this.dataHoraAlteracao = objeto.data_hora_alteracao
    this.codigoEmpreendimento = objeto.codigo_empreendimento
    this.codigoUsuario = objeto.codigo_usuario
  }
  meta: { [key: string]: interfaceMetaDados } = {
    codigoCorporativo: {
      coluna: 'codigo_corporativo',
      descricao: 'Código corporativo',
      editavel: true,
      nulo: false,
      tamanho: 36,
    },
    codigo: {
      coluna: 'codigo',
      descricao: 'Código',
      editavel: true,
      nulo: false,
      tamanho: 36,
    },
    excluido: {
      coluna: 'excluido',
      descricao: 'Excluído?',
      editavel: true,
      nulo: false,
      tamanho: 1,
    },
    sincronizado: {
      coluna: 'sincronizado',
      descricao: 'Sincronizado?',
      editavel: true,
      nulo: false,
      tamanho: 1,
    },
    codigoUsuarioInclusao: {
      coluna: 'codigo_usuario_inclusao',
      descricao: 'Usuário inclusão',
      editavel: true,
      nulo: false,
      tamanho: 36,
    },
    dataHoraInclusao: {
      coluna: 'data_hora_inclusao',
      descricao: 'Data/Hora inclusão',
      editavel: true,
      nulo: false,
    },
    codigoUsuarioAlteracao: {
      coluna: 'codigo_usuario_alteracao',
      descricao: 'Usuário alteração',
      editavel: true,
      nulo: true,
      tamanho: 36,
    },
    dataHoraAlteracao: {
      coluna: 'data_hora_alteracao',
      descricao: 'Data/Hora alteração',
      editavel: true,
      nulo: true,
    },
    codigoEmpreendimento: {
      coluna: 'codigo_empreendimento',
      descricao: 'Usuário',
      editavel: true,
      nulo: false,
      tamanho: 36,
    },
    codigoUsuario: {
      coluna: 'codigo_usuario',
      editavel: true,
      nulo: false,
      tamanho: 36,
    },
  }
}
export interface interfaceEstados extends interfaceRecurso {
  codigo?: string
  nome?: string
  sigla?: string
}
export class ClasseEstados extends Recurso {
  constructor(objeto?: interfaceUsuarios) {
    super('estados', objeto)
  }
  codigo?: string
  nome?: string
  sigla?: string
  public get objeto(): interfaceEstados {
    const saida: interfaceAlertasCompromissos = {}
    if (this.codigo != undefined) saida.codigo = this.codigo
    if (this.nome != undefined) saida.nome = this.nome
    if (this.sigla != undefined) saida.sigla = this.sigla
    return saida
  }
  public set objeto(objeto: interfaceEstados) {
    this.codigo = objeto.codigo
    this.nome = objeto.nome
    this.sigla = objeto.sigla
  }
  meta: { [key: string]: interfaceMetaDados } = {
    codigo: { coluna: 'codigo', editavel: true, nulo: false },
    nome: { coluna: 'nome', editavel: true, nulo: false, tamanho: 100 },
    sigla: { coluna: 'sigla', editavel: true, nulo: false, tamanho: 2 },
  }
}
export interface interfaceInternoUsuariosAtivos extends interfaceRecurso {
  nome?: string
  email?: string
  administrador?: string
  plano?: string
  data_hora_inclusao?: string
  bloqueio?: string
}
export class ClasseInternoUsuariosAtivos extends Recurso {
  constructor(objeto?: interfaceUsuarios) {
    super('interno_usuarios_ativos', objeto)
  }
  nome?: string
  email?: string
  administrador?: string
  plano?: string
  dataHoraInclusao?: string
  bloqueio?: string
  public get objeto(): interfaceInternoUsuariosAtivos {
    const saida: interfaceAlertasCompromissos = {}
    if (this.nome != undefined) saida.nome = this.nome
    if (this.email != undefined) saida.email = this.email
    if (this.administrador != undefined)
      saida.administrador = this.administrador
    if (this.plano != undefined) saida.plano = this.plano
    if (this.dataHoraInclusao != undefined)
      saida.data_hora_inclusao = this.dataHoraInclusao
    if (this.bloqueio != undefined) saida.bloqueio = this.bloqueio
    return saida
  }
  public set objeto(objeto: interfaceInternoUsuariosAtivos) {
    this.nome = objeto.nome
    this.email = objeto.email
    this.administrador = objeto.administrador
    this.plano = objeto.plano
    this.dataHoraInclusao = objeto.data_hora_inclusao
    this.bloqueio = objeto.bloqueio
  }
  meta: { [key: string]: interfaceMetaDados } = {
    nome: { coluna: 'nome', editavel: false, nulo: true, tamanho: 100 },
    email: { coluna: 'email', editavel: false, nulo: true, tamanho: 50 },
    administrador: {
      coluna: 'administrador',
      editavel: false,
      nulo: true,
      tamanho: 1,
    },
    plano: { coluna: 'plano', editavel: false, nulo: true, tamanho: 20 },
    dataHoraInclusao: {
      coluna: 'data_hora_inclusao',
      editavel: false,
      nulo: true,
    },
    bloqueio: { coluna: 'bloqueio', editavel: false, nulo: true },
  }
}
export interface interfaceLicencas extends interfaceRecurso {
  codigo_corporativo?: string
  codigo?: string
  excluido?: string
  sincronizado?: string
  codigo_usuario_inclusao?: string
  data_hora_inclusao?: string
  codigo_usuario_alteracao?: string
  data_hora_alteracao?: string
  descricao?: string
  codigo_empreendedor?: string
  codigo_licenciador?: string
  numero_processo?: string
  tipo?: string
  numero?: string
  emissao?: string
  vencimento?: string
  vencimento_meses?: string
  renovacao?: string
  renovacao_dias?: string
  alerta?: string
  alerta_dias?: string
  informacoes_complementares?: string
  codigo_licenca_anterior?: string
  descricao_tipo_outras?: string
  codigo_licenca_posterior?: string
  data_protocolo_renovacao?: string
  numero_protocolo_renovacao?: string
  observacao_protocolo_renovacao?: string
  status?: string
  codigo_empreendimento?: string
}
export class ClasseLicencas extends Recurso {
  constructor(objeto?: interfaceUsuarios) {
    super('licencas', objeto)
  }
  codigoCorporativo?: string
  codigo?: string
  excluido?: string
  sincronizado?: string
  codigoUsuarioInclusao?: string
  dataHoraInclusao?: string
  codigoUsuarioAlteracao?: string
  dataHoraAlteracao?: string
  descricao?: string
  codigoEmpreendedor?: string
  codigoLicenciador?: string
  numeroProcesso?: string
  tipo?: string
  numero?: string
  emissao?: string
  vencimento?: string
  vencimentoMeses?: string
  renovacao?: string
  renovacaoDias?: string
  alerta?: string
  alertaDias?: string
  informacoesComplementares?: string
  codigoLicencaAnterior?: string
  descricaoTipoOutras?: string
  codigoLicencaPosterior?: string
  dataProtocoloRenovacao?: string
  numeroProtocoloRenovacao?: string
  observacaoProtocoloRenovacao?: string
  status?: string
  codigoEmpreendimento?: string
  public get objeto(): interfaceLicencas {
    const saida: interfaceAlertasCompromissos = {}
    if (this.codigoCorporativo != undefined)
      saida.codigo_corporativo = this.codigoCorporativo
    if (this.codigo != undefined) saida.codigo = this.codigo
    if (this.excluido != undefined) saida.excluido = this.excluido
    if (this.sincronizado != undefined) saida.sincronizado = this.sincronizado
    if (this.codigoUsuarioInclusao != undefined)
      saida.codigo_usuario_inclusao = this.codigoUsuarioInclusao
    if (this.dataHoraInclusao != undefined)
      saida.data_hora_inclusao = this.dataHoraInclusao
    if (this.codigoUsuarioAlteracao != undefined)
      saida.codigo_usuario_alteracao = this.codigoUsuarioAlteracao
    if (this.dataHoraAlteracao != undefined)
      saida.data_hora_alteracao = this.dataHoraAlteracao
    if (this.descricao != undefined) saida.descricao = this.descricao
    if (this.codigoEmpreendedor != undefined)
      saida.codigo_empreendedor = this.codigoEmpreendedor
    if (this.codigoLicenciador != undefined)
      saida.codigo_licenciador = this.codigoLicenciador
    if (this.numeroProcesso != undefined)
      saida.numero_processo = this.numeroProcesso
    if (this.tipo != undefined) saida.tipo = this.tipo
    if (this.numero != undefined) saida.numero = this.numero
    if (this.emissao != undefined) saida.emissao = this.emissao
    if (this.vencimento != undefined) saida.vencimento = this.vencimento
    if (this.vencimentoMeses != undefined)
      saida.vencimento_meses = this.vencimentoMeses
    if (this.renovacao != undefined) saida.renovacao = this.renovacao
    if (this.renovacaoDias != undefined)
      saida.renovacao_dias = this.renovacaoDias
    if (this.alerta != undefined) saida.alerta = this.alerta
    if (this.alertaDias != undefined) saida.alerta_dias = this.alertaDias
    if (this.informacoesComplementares != undefined)
      saida.informacoes_complementares = this.informacoesComplementares
    if (this.codigoLicencaAnterior != undefined)
      saida.codigo_licenca_anterior = this.codigoLicencaAnterior
    if (this.descricaoTipoOutras != undefined)
      saida.descricao_tipo_outras = this.descricaoTipoOutras
    if (this.codigoLicencaPosterior != undefined)
      saida.codigo_licenca_posterior = this.codigoLicencaPosterior
    if (this.dataProtocoloRenovacao != undefined)
      saida.data_protocolo_renovacao = this.dataProtocoloRenovacao
    if (this.numeroProtocoloRenovacao != undefined)
      saida.numero_protocolo_renovacao = this.numeroProtocoloRenovacao
    if (this.observacaoProtocoloRenovacao != undefined)
      saida.observacao_protocolo_renovacao = this.observacaoProtocoloRenovacao
    if (this.status != undefined) saida.status = this.status
    if (this.codigoEmpreendimento != undefined)
      saida.codigo_empreendimento = this.codigoEmpreendimento
    return saida
  }
  public set objeto(objeto: interfaceLicencas) {
    this.codigoCorporativo = objeto.codigo_corporativo
    this.codigo = objeto.codigo
    this.excluido = objeto.excluido
    this.sincronizado = objeto.sincronizado
    this.codigoUsuarioInclusao = objeto.codigo_usuario_inclusao
    this.dataHoraInclusao = objeto.data_hora_inclusao
    this.codigoUsuarioAlteracao = objeto.codigo_usuario_alteracao
    this.dataHoraAlteracao = objeto.data_hora_alteracao
    this.descricao = objeto.descricao
    this.codigoEmpreendedor = objeto.codigo_empreendedor
    this.codigoLicenciador = objeto.codigo_licenciador
    this.numeroProcesso = objeto.numero_processo
    this.tipo = objeto.tipo
    this.numero = objeto.numero
    this.emissao = objeto.emissao
    this.vencimento = objeto.vencimento
    this.vencimentoMeses = objeto.vencimento_meses
    this.renovacao = objeto.renovacao
    this.renovacaoDias = objeto.renovacao_dias
    this.alerta = objeto.alerta
    this.alertaDias = objeto.alerta_dias
    this.informacoesComplementares = objeto.informacoes_complementares
    this.codigoLicencaAnterior = objeto.codigo_licenca_anterior
    this.descricaoTipoOutras = objeto.descricao_tipo_outras
    this.codigoLicencaPosterior = objeto.codigo_licenca_posterior
    this.dataProtocoloRenovacao = objeto.data_protocolo_renovacao
    this.numeroProtocoloRenovacao = objeto.numero_protocolo_renovacao
    this.observacaoProtocoloRenovacao = objeto.observacao_protocolo_renovacao
    this.status = objeto.status
    this.codigoEmpreendimento = objeto.codigo_empreendimento
  }
  meta: { [key: string]: interfaceMetaDados } = {
    codigoCorporativo: {
      coluna: 'codigo_corporativo',
      descricao: 'Código corporativo',
      editavel: true,
      nulo: false,
      tamanho: 36,
    },
    codigo: {
      coluna: 'codigo',
      descricao: 'Código',
      editavel: true,
      nulo: false,
      tamanho: 36,
    },
    excluido: {
      coluna: 'excluido',
      descricao: 'Excluído?',
      editavel: true,
      nulo: false,
      tamanho: 1,
    },
    sincronizado: {
      coluna: 'sincronizado',
      descricao: 'Sincronizado?',
      editavel: true,
      nulo: false,
      tamanho: 1,
    },
    codigoUsuarioInclusao: {
      coluna: 'codigo_usuario_inclusao',
      descricao: 'Usuário inclusão',
      editavel: true,
      nulo: false,
      tamanho: 36,
    },
    dataHoraInclusao: {
      coluna: 'data_hora_inclusao',
      descricao: 'Data/Hora inclusão',
      editavel: true,
      nulo: false,
    },
    codigoUsuarioAlteracao: {
      coluna: 'codigo_usuario_alteracao',
      descricao: 'Usuário alteração',
      editavel: true,
      nulo: true,
      tamanho: 36,
    },
    dataHoraAlteracao: {
      coluna: 'data_hora_alteracao',
      descricao: 'Data/Hora alteração',
      editavel: true,
      nulo: true,
    },
    descricao: {
      coluna: 'descricao',
      descricao: 'Descrição',
      editavel: true,
      nulo: false,
      tamanho: 100,
    },
    codigoEmpreendedor: {
      coluna: 'codigo_empreendedor',
      descricao: 'Empreendedor',
      editavel: true,
      nulo: false,
      tamanho: 36,
    },
    codigoLicenciador: {
      coluna: 'codigo_licenciador',
      descricao: 'Licenciador',
      editavel: true,
      nulo: false,
      tamanho: 36,
    },
    numeroProcesso: {
      coluna: 'numero_processo',
      descricao: 'Número do processo',
      editavel: true,
      nulo: true,
      tamanho: 50,
    },
    tipo: {
      coluna: 'tipo',
      descricao: 'Tipo',
      editavel: true,
      nulo: false,
      tamanho: 100,
    },
    numero: {
      coluna: 'numero',
      descricao: 'Número da licença',
      editavel: true,
      nulo: false,
      tamanho: 50,
    },
    emissao: {
      coluna: 'emissao',
      descricao: 'Emissão',
      editavel: true,
      nulo: false,
    },
    vencimento: {
      coluna: 'vencimento',
      descricao: 'Vencimento',
      editavel: true,
      nulo: false,
    },
    vencimentoMeses: {
      coluna: 'vencimento_meses',
      descricao: 'Vencimento (em meses)',
      editavel: true,
      nulo: false,
    },
    renovacao: {
      coluna: 'renovacao',
      descricao: 'Renovação',
      editavel: true,
      nulo: false,
    },
    renovacaoDias: {
      coluna: 'renovacao_dias',
      descricao: 'Renovação (em dias)',
      editavel: true,
      nulo: false,
    },
    alerta: {
      coluna: 'alerta',
      descricao: 'Alerta',
      editavel: true,
      nulo: false,
    },
    alertaDias: {
      coluna: 'alerta_dias',
      descricao: 'Alerta (em dias)',
      editavel: true,
      nulo: false,
    },
    informacoesComplementares: {
      coluna: 'informacoes_complementares',
      descricao: 'Informações complementares',
      editavel: true,
      nulo: true,
      tamanho: 500,
    },
    codigoLicencaAnterior: {
      coluna: 'codigo_licenca_anterior',
      descricao: 'Código da licença anterior',
      editavel: true,
      nulo: true,
      tamanho: 36,
    },
    descricaoTipoOutras: {
      coluna: 'descricao_tipo_outras',
      descricao: 'Tipo (Outras)',
      editavel: true,
      nulo: true,
      tamanho: 100,
    },
    codigoLicencaPosterior: {
      coluna: 'codigo_licenca_posterior',
      descricao: 'Código da licença posterior',
      editavel: true,
      nulo: true,
      tamanho: 36,
    },
    dataProtocoloRenovacao: {
      coluna: 'data_protocolo_renovacao',
      descricao: 'Data do Prot. Renovação',
      editavel: true,
      nulo: true,
    },
    numeroProtocoloRenovacao: {
      coluna: 'numero_protocolo_renovacao',
      descricao: 'Número do Prot. Renovação',
      editavel: true,
      nulo: true,
      tamanho: 50,
    },
    observacaoProtocoloRenovacao: {
      coluna: 'observacao_protocolo_renovacao',
      descricao: 'Observação do Prot. Renovação',
      editavel: true,
      nulo: true,
      tamanho: 500,
    },
    status: {
      coluna: 'status',
      descricao: 'Status',
      editavel: true,
      nulo: false,
    },
    codigoEmpreendimento: {
      coluna: 'codigo_empreendimento',
      descricao: 'Empreendimento',
      editavel: true,
      nulo: true,
      tamanho: 36,
    },
  }
}
export interface interfaceLicencasCondicionantes extends interfaceRecurso {
  codigo_corporativo?: string
  codigo?: string
  excluido?: string
  sincronizado?: string
  codigo_usuario_inclusao?: string
  data_hora_inclusao?: string
  codigo_usuario_alteracao?: string
  data_hora_alteracao?: string
  codigo_licenca?: string
  descricao?: string
  recorrencia?: string
  intervalo?: string
  alerta_dias?: string
  informacoes_complementares?: string
  dias_vencimento_primeira_execucao?: string
  identificador?: string
  departamento?: string
}
export class ClasseLicencasCondicionantes extends Recurso {
  constructor(objeto?: interfaceUsuarios) {
    super('licencas_condicionantes', objeto)
  }
  codigoCorporativo?: string
  codigo?: string
  excluido?: string
  sincronizado?: string
  codigoUsuarioInclusao?: string
  dataHoraInclusao?: string
  codigoUsuarioAlteracao?: string
  dataHoraAlteracao?: string
  codigoLicenca?: string
  descricao?: string
  recorrencia?: string
  intervalo?: string
  alertaDias?: string
  informacoesComplementares?: string
  diasVencimentoPrimeiraExecucao?: string
  identificador?: string
  departamento?: string
  public get objeto(): interfaceLicencasCondicionantes {
    const saida: interfaceAlertasCompromissos = {}
    if (this.codigoCorporativo != undefined)
      saida.codigo_corporativo = this.codigoCorporativo
    if (this.codigo != undefined) saida.codigo = this.codigo
    if (this.excluido != undefined) saida.excluido = this.excluido
    if (this.sincronizado != undefined) saida.sincronizado = this.sincronizado
    if (this.codigoUsuarioInclusao != undefined)
      saida.codigo_usuario_inclusao = this.codigoUsuarioInclusao
    if (this.dataHoraInclusao != undefined)
      saida.data_hora_inclusao = this.dataHoraInclusao
    if (this.codigoUsuarioAlteracao != undefined)
      saida.codigo_usuario_alteracao = this.codigoUsuarioAlteracao
    if (this.dataHoraAlteracao != undefined)
      saida.data_hora_alteracao = this.dataHoraAlteracao
    if (this.codigoLicenca != undefined)
      saida.codigo_licenca = this.codigoLicenca
    if (this.descricao != undefined) saida.descricao = this.descricao
    if (this.recorrencia != undefined) saida.recorrencia = this.recorrencia
    if (this.intervalo != undefined) saida.intervalo = this.intervalo
    if (this.alertaDias != undefined) saida.alerta_dias = this.alertaDias
    if (this.informacoesComplementares != undefined)
      saida.informacoes_complementares = this.informacoesComplementares
    if (this.diasVencimentoPrimeiraExecucao != undefined)
      saida.dias_vencimento_primeira_execucao = this.diasVencimentoPrimeiraExecucao
    if (this.identificador != undefined)
      saida.identificador = this.identificador
    if (this.departamento != undefined) saida.departamento = this.departamento
    return saida
  }
  public set objeto(objeto: interfaceLicencasCondicionantes) {
    this.codigoCorporativo = objeto.codigo_corporativo
    this.codigo = objeto.codigo
    this.excluido = objeto.excluido
    this.sincronizado = objeto.sincronizado
    this.codigoUsuarioInclusao = objeto.codigo_usuario_inclusao
    this.dataHoraInclusao = objeto.data_hora_inclusao
    this.codigoUsuarioAlteracao = objeto.codigo_usuario_alteracao
    this.dataHoraAlteracao = objeto.data_hora_alteracao
    this.codigoLicenca = objeto.codigo_licenca
    this.descricao = objeto.descricao
    this.recorrencia = objeto.recorrencia
    this.intervalo = objeto.intervalo
    this.alertaDias = objeto.alerta_dias
    this.informacoesComplementares = objeto.informacoes_complementares
    this.diasVencimentoPrimeiraExecucao =
      objeto.dias_vencimento_primeira_execucao
    this.identificador = objeto.identificador
    this.departamento = objeto.departamento
  }
  meta: { [key: string]: interfaceMetaDados } = {
    codigoCorporativo: {
      coluna: 'codigo_corporativo',
      descricao: 'Código corporativo',
      editavel: true,
      nulo: false,
      tamanho: 36,
    },
    codigo: {
      coluna: 'codigo',
      descricao: 'Código',
      editavel: true,
      nulo: false,
      tamanho: 36,
    },
    excluido: {
      coluna: 'excluido',
      descricao: 'Excluído?',
      editavel: true,
      nulo: false,
      tamanho: 1,
    },
    sincronizado: {
      coluna: 'sincronizado',
      descricao: 'Sincronizado?',
      editavel: true,
      nulo: false,
      tamanho: 1,
    },
    codigoUsuarioInclusao: {
      coluna: 'codigo_usuario_inclusao',
      descricao: 'Usuário inclusão',
      editavel: true,
      nulo: false,
      tamanho: 36,
    },
    dataHoraInclusao: {
      coluna: 'data_hora_inclusao',
      descricao: 'Data/Hora inclusão',
      editavel: true,
      nulo: false,
    },
    codigoUsuarioAlteracao: {
      coluna: 'codigo_usuario_alteracao',
      descricao: 'Usuário alteração',
      editavel: true,
      nulo: true,
      tamanho: 36,
    },
    dataHoraAlteracao: {
      coluna: 'data_hora_alteracao',
      descricao: 'Data/Hora alteração',
      editavel: true,
      nulo: true,
    },
    codigoLicenca: {
      coluna: 'codigo_licenca',
      descricao: 'Código da licença',
      editavel: true,
      nulo: false,
      tamanho: 36,
    },
    descricao: {
      coluna: 'descricao',
      descricao: 'Descrição',
      editavel: true,
      nulo: false,
      tamanho: 200,
    },
    recorrencia: {
      coluna: 'recorrencia',
      descricao: 'Tipo de recorrência',
      editavel: true,
      nulo: false,
      tamanho: 1,
    },
    intervalo: {
      coluna: 'intervalo',
      descricao: 'Intervalo da recorrência',
      editavel: true,
      nulo: true,
    },
    alertaDias: {
      coluna: 'alerta_dias',
      descricao: 'Alerta (em dias)',
      editavel: true,
      nulo: false,
    },
    informacoesComplementares: {
      coluna: 'informacoes_complementares',
      descricao: 'Informações complementares',
      editavel: true,
      nulo: true,
      tamanho: 1000,
    },
    diasVencimentoPrimeiraExecucao: {
      coluna: 'dias_vencimento_primeira_execucao',
      descricao: 'Dias vencimento 1ª execução',
      editavel: true,
      nulo: true,
    },
    identificador: {
      coluna: 'identificador',
      descricao: 'Identificador',
      editavel: true,
      nulo: true,
      tamanho: 30,
    },
    departamento: {
      coluna: 'departamento',
      descricao: 'Departamento',
      editavel: true,
      nulo: true,
      tamanho: 100,
    },
  }
}
export interface interfaceLicencasResponsaveis extends interfaceRecurso {
  codigo_corporativo?: string
  codigo?: string
  excluido?: string
  sincronizado?: string
  codigo_usuario_inclusao?: string
  data_hora_inclusao?: string
  codigo_usuario_alteracao?: string
  data_hora_alteracao?: string
  codigo_origem?: string
  codigo_usuario?: string
}
export class ClasseLicencasResponsaveis extends Recurso {
  constructor(objeto?: interfaceUsuarios) {
    super('licencas_responsaveis', objeto)
  }
  codigoCorporativo?: string
  codigo?: string
  excluido?: string
  sincronizado?: string
  codigoUsuarioInclusao?: string
  dataHoraInclusao?: string
  codigoUsuarioAlteracao?: string
  dataHoraAlteracao?: string
  codigoOrigem?: string
  codigoUsuario?: string
  public get objeto(): interfaceLicencasResponsaveis {
    const saida: interfaceAlertasCompromissos = {}
    if (this.codigoCorporativo != undefined)
      saida.codigo_corporativo = this.codigoCorporativo
    if (this.codigo != undefined) saida.codigo = this.codigo
    if (this.excluido != undefined) saida.excluido = this.excluido
    if (this.sincronizado != undefined) saida.sincronizado = this.sincronizado
    if (this.codigoUsuarioInclusao != undefined)
      saida.codigo_usuario_inclusao = this.codigoUsuarioInclusao
    if (this.dataHoraInclusao != undefined)
      saida.data_hora_inclusao = this.dataHoraInclusao
    if (this.codigoUsuarioAlteracao != undefined)
      saida.codigo_usuario_alteracao = this.codigoUsuarioAlteracao
    if (this.dataHoraAlteracao != undefined)
      saida.data_hora_alteracao = this.dataHoraAlteracao
    if (this.codigoOrigem != undefined) saida.codigo_origem = this.codigoOrigem
    if (this.codigoUsuario != undefined)
      saida.codigo_usuario = this.codigoUsuario
    return saida
  }
  public set objeto(objeto: interfaceLicencasResponsaveis) {
    this.codigoCorporativo = objeto.codigo_corporativo
    this.codigo = objeto.codigo
    this.excluido = objeto.excluido
    this.sincronizado = objeto.sincronizado
    this.codigoUsuarioInclusao = objeto.codigo_usuario_inclusao
    this.dataHoraInclusao = objeto.data_hora_inclusao
    this.codigoUsuarioAlteracao = objeto.codigo_usuario_alteracao
    this.dataHoraAlteracao = objeto.data_hora_alteracao
    this.codigoOrigem = objeto.codigo_origem
    this.codigoUsuario = objeto.codigo_usuario
  }
  meta: { [key: string]: interfaceMetaDados } = {
    codigoCorporativo: {
      coluna: 'codigo_corporativo',
      descricao: 'Código corporativo',
      editavel: true,
      nulo: false,
      tamanho: 36,
    },
    codigo: {
      coluna: 'codigo',
      descricao: 'Código',
      editavel: true,
      nulo: false,
      tamanho: 36,
    },
    excluido: {
      coluna: 'excluido',
      descricao: 'Excluído?',
      editavel: true,
      nulo: false,
      tamanho: 1,
    },
    sincronizado: {
      coluna: 'sincronizado',
      descricao: 'Sincronizado?',
      editavel: true,
      nulo: false,
      tamanho: 1,
    },
    codigoUsuarioInclusao: {
      coluna: 'codigo_usuario_inclusao',
      descricao: 'Usuário inclusão',
      editavel: true,
      nulo: false,
      tamanho: 36,
    },
    dataHoraInclusao: {
      coluna: 'data_hora_inclusao',
      descricao: 'Data/Hora inclusão',
      editavel: true,
      nulo: false,
    },
    codigoUsuarioAlteracao: {
      coluna: 'codigo_usuario_alteracao',
      descricao: 'Usuário alteração',
      editavel: true,
      nulo: true,
      tamanho: 36,
    },
    dataHoraAlteracao: {
      coluna: 'data_hora_alteracao',
      descricao: 'Data/Hora alteração',
      editavel: true,
      nulo: true,
    },
    codigoOrigem: {
      coluna: 'codigo_origem',
      descricao: 'Licença',
      editavel: true,
      nulo: false,
      tamanho: 36,
    },
    codigoUsuario: {
      coluna: 'codigo_usuario',
      descricao: 'Usuário',
      editavel: true,
      nulo: false,
      tamanho: 36,
    },
  }
}
export interface interfaceLicenciadores extends interfaceRecurso {
  codigo_corporativo?: string
  codigo?: string
  excluido?: string
  sincronizado?: string
  codigo_usuario_inclusao?: string
  data_hora_inclusao?: string
  codigo_usuario_alteracao?: string
  data_hora_alteracao?: string
  nome?: string
  codigo_cidade?: string
  telefone?: string
  email?: string
}
export class ClasseLicenciadores extends Recurso {
  constructor(objeto?: interfaceUsuarios) {
    super('licenciadores', objeto)
  }
  codigoCorporativo?: string
  codigo?: string
  excluido?: string
  sincronizado?: string
  codigoUsuarioInclusao?: string
  dataHoraInclusao?: string
  codigoUsuarioAlteracao?: string
  dataHoraAlteracao?: string
  nome?: string
  codigoCidade?: string
  telefone?: string
  email?: string
  public get objeto(): interfaceLicenciadores {
    const saida: interfaceAlertasCompromissos = {}
    if (this.codigoCorporativo != undefined)
      saida.codigo_corporativo = this.codigoCorporativo
    if (this.codigo != undefined) saida.codigo = this.codigo
    if (this.excluido != undefined) saida.excluido = this.excluido
    if (this.sincronizado != undefined) saida.sincronizado = this.sincronizado
    if (this.codigoUsuarioInclusao != undefined)
      saida.codigo_usuario_inclusao = this.codigoUsuarioInclusao
    if (this.dataHoraInclusao != undefined)
      saida.data_hora_inclusao = this.dataHoraInclusao
    if (this.codigoUsuarioAlteracao != undefined)
      saida.codigo_usuario_alteracao = this.codigoUsuarioAlteracao
    if (this.dataHoraAlteracao != undefined)
      saida.data_hora_alteracao = this.dataHoraAlteracao
    if (this.nome != undefined) saida.nome = this.nome
    if (this.codigoCidade != undefined) saida.codigo_cidade = this.codigoCidade
    if (this.telefone != undefined) saida.telefone = this.telefone
    if (this.email != undefined) saida.email = this.email
    return saida
  }
  public set objeto(objeto: interfaceLicenciadores) {
    this.codigoCorporativo = objeto.codigo_corporativo
    this.codigo = objeto.codigo
    this.excluido = objeto.excluido
    this.sincronizado = objeto.sincronizado
    this.codigoUsuarioInclusao = objeto.codigo_usuario_inclusao
    this.dataHoraInclusao = objeto.data_hora_inclusao
    this.codigoUsuarioAlteracao = objeto.codigo_usuario_alteracao
    this.dataHoraAlteracao = objeto.data_hora_alteracao
    this.nome = objeto.nome
    this.codigoCidade = objeto.codigo_cidade
    this.telefone = objeto.telefone
    this.email = objeto.email
  }
  meta: { [key: string]: interfaceMetaDados } = {
    codigoCorporativo: {
      coluna: 'codigo_corporativo',
      descricao: 'Código corporativo',
      editavel: true,
      nulo: false,
      tamanho: 36,
    },
    codigo: {
      coluna: 'codigo',
      descricao: 'Código',
      editavel: true,
      nulo: false,
      tamanho: 36,
    },
    excluido: {
      coluna: 'excluido',
      descricao: 'Excluído?',
      editavel: true,
      nulo: false,
      tamanho: 1,
    },
    sincronizado: {
      coluna: 'sincronizado',
      descricao: 'Sincronizado?',
      editavel: true,
      nulo: false,
      tamanho: 1,
    },
    codigoUsuarioInclusao: {
      coluna: 'codigo_usuario_inclusao',
      descricao: 'Usuário inclusão',
      editavel: true,
      nulo: false,
      tamanho: 36,
    },
    dataHoraInclusao: {
      coluna: 'data_hora_inclusao',
      descricao: 'Data/Hora inclusão',
      editavel: true,
      nulo: false,
    },
    codigoUsuarioAlteracao: {
      coluna: 'codigo_usuario_alteracao',
      descricao: 'Usuário alteração',
      editavel: true,
      nulo: true,
      tamanho: 36,
    },
    dataHoraAlteracao: {
      coluna: 'data_hora_alteracao',
      descricao: 'Data/Hora alteração',
      editavel: true,
      nulo: true,
    },
    nome: {
      coluna: 'nome',
      descricao: 'Nome',
      editavel: true,
      nulo: false,
      tamanho: 100,
    },
    codigoCidade: {
      coluna: 'codigo_cidade',
      descricao: 'Cidade',
      editavel: true,
      nulo: true,
    },
    telefone: {
      coluna: 'telefone',
      descricao: 'Telefone',
      editavel: true,
      nulo: true,
      tamanho: 20,
    },
    email: {
      coluna: 'email',
      descricao: 'E-mail',
      editavel: true,
      nulo: true,
      tamanho: 50,
    },
  }
}
export interface interfaceListaDepartamentosCoportativo
  extends interfaceRecurso {
  departamento?: string
  codigo_corporativo?: string
}
export class ClasseListaDepartamentosCoportativo extends Recurso {
  constructor(objeto?: interfaceUsuarios) {
    super('lista_departamentos_coportativo', objeto)
  }
  departamento?: string
  codigoCorporativo?: string
  public get objeto(): interfaceListaDepartamentosCoportativo {
    const saida: interfaceAlertasCompromissos = {}
    if (this.departamento != undefined) saida.departamento = this.departamento
    if (this.codigoCorporativo != undefined)
      saida.codigo_corporativo = this.codigoCorporativo
    return saida
  }
  public set objeto(objeto: interfaceListaDepartamentosCoportativo) {
    this.departamento = objeto.departamento
    this.codigoCorporativo = objeto.codigo_corporativo
  }
  meta: { [key: string]: interfaceMetaDados } = {
    departamento: {
      coluna: 'departamento',
      editavel: false,
      nulo: true,
      tamanho: 100,
    },
    codigoCorporativo: {
      coluna: 'codigo_corporativo',
      editavel: false,
      nulo: true,
      tamanho: 36,
    },
  }
}
export interface interfaceListaRelatorios extends interfaceRecurso {
  codigo_corporativo?: string
  codigo?: string
  excluido?: string
  sincronizado?: string
  codigo_usuario_inclusao?: string
  data_hora_inclusao?: string
  codigo_usuario_alteracao?: string
  data_hora_alteracao?: string
  descricao?: string
  nome_arquivo?: string
  nome_usuario_inclusao?: string
  parametros?: string
  codigos_relatorios_anexos?: string
}
export class ClasseListaRelatorios extends Recurso {
  constructor(objeto?: interfaceUsuarios) {
    super('lista_relatorios', objeto)
  }
  codigoCorporativo?: string
  codigo?: string
  excluido?: string
  sincronizado?: string
  codigoUsuarioInclusao?: string
  dataHoraInclusao?: string
  codigoUsuarioAlteracao?: string
  dataHoraAlteracao?: string
  descricao?: string
  nomeArquivo?: string
  nomeUsuarioInclusao?: string
  parametros?: string
  codigosRelatoriosAnexos?: string
  public get objeto(): interfaceListaRelatorios {
    const saida: interfaceAlertasCompromissos = {}
    if (this.codigoCorporativo != undefined)
      saida.codigo_corporativo = this.codigoCorporativo
    if (this.codigo != undefined) saida.codigo = this.codigo
    if (this.excluido != undefined) saida.excluido = this.excluido
    if (this.sincronizado != undefined) saida.sincronizado = this.sincronizado
    if (this.codigoUsuarioInclusao != undefined)
      saida.codigo_usuario_inclusao = this.codigoUsuarioInclusao
    if (this.dataHoraInclusao != undefined)
      saida.data_hora_inclusao = this.dataHoraInclusao
    if (this.codigoUsuarioAlteracao != undefined)
      saida.codigo_usuario_alteracao = this.codigoUsuarioAlteracao
    if (this.dataHoraAlteracao != undefined)
      saida.data_hora_alteracao = this.dataHoraAlteracao
    if (this.descricao != undefined) saida.descricao = this.descricao
    if (this.nomeArquivo != undefined) saida.nome_arquivo = this.nomeArquivo
    if (this.nomeUsuarioInclusao != undefined)
      saida.nome_usuario_inclusao = this.nomeUsuarioInclusao
    if (this.parametros != undefined) saida.parametros = this.parametros
    if (this.codigosRelatoriosAnexos != undefined)
      saida.codigos_relatorios_anexos = this.codigosRelatoriosAnexos
    return saida
  }
  public set objeto(objeto: interfaceListaRelatorios) {
    this.codigoCorporativo = objeto.codigo_corporativo
    this.codigo = objeto.codigo
    this.excluido = objeto.excluido
    this.sincronizado = objeto.sincronizado
    this.codigoUsuarioInclusao = objeto.codigo_usuario_inclusao
    this.dataHoraInclusao = objeto.data_hora_inclusao
    this.codigoUsuarioAlteracao = objeto.codigo_usuario_alteracao
    this.dataHoraAlteracao = objeto.data_hora_alteracao
    this.descricao = objeto.descricao
    this.nomeArquivo = objeto.nome_arquivo
    this.nomeUsuarioInclusao = objeto.nome_usuario_inclusao
    this.parametros = objeto.parametros
    this.codigosRelatoriosAnexos = objeto.codigos_relatorios_anexos
  }
  meta: { [key: string]: interfaceMetaDados } = {
    codigoCorporativo: {
      coluna: 'codigo_corporativo',
      editavel: false,
      nulo: true,
      tamanho: 36,
    },
    codigo: { coluna: 'codigo', editavel: false, nulo: true, tamanho: 36 },
    excluido: { coluna: 'excluido', editavel: false, nulo: true, tamanho: 1 },
    sincronizado: {
      coluna: 'sincronizado',
      editavel: false,
      nulo: true,
      tamanho: 1,
    },
    codigoUsuarioInclusao: {
      coluna: 'codigo_usuario_inclusao',
      editavel: false,
      nulo: true,
      tamanho: 36,
    },
    dataHoraInclusao: {
      coluna: 'data_hora_inclusao',
      editavel: false,
      nulo: true,
    },
    codigoUsuarioAlteracao: {
      coluna: 'codigo_usuario_alteracao',
      editavel: false,
      nulo: true,
      tamanho: 36,
    },
    dataHoraAlteracao: {
      coluna: 'data_hora_alteracao',
      editavel: false,
      nulo: true,
    },
    descricao: {
      coluna: 'descricao',
      editavel: false,
      nulo: true,
      tamanho: 100,
    },
    nomeArquivo: {
      coluna: 'nome_arquivo',
      editavel: false,
      nulo: true,
      tamanho: 200,
    },
    nomeUsuarioInclusao: {
      coluna: 'nome_usuario_inclusao',
      editavel: false,
      nulo: true,
      tamanho: 100,
    },
    parametros: { coluna: 'parametros', editavel: false, nulo: true },
    codigosRelatoriosAnexos: {
      coluna: 'codigos_relatorios_anexos',
      editavel: false,
      nulo: true,
    },
  }
}
export interface interfaceListaRelatoriosAnexos extends interfaceRecurso {
  codigo_corporativo?: string
  codigo?: string
  excluido?: string
  sincronizado?: string
  codigo_usuario_inclusao?: string
  nome_usuario_inclusao?: string
  data_hora_inclusao?: string
  codigo_usuario_alteracao?: string
  data_hora_alteracao?: string
  codigo_anexo?: string
  codigo_retatorio?: string
  titulo?: string
  ordem?: string
  descricao?: string
  observacao?: string
  nome_arquivo?: string
}
export class ClasseListaRelatoriosAnexos extends Recurso {
  constructor(objeto?: interfaceUsuarios) {
    super('lista_relatorios_anexos', objeto)
  }
  codigoCorporativo?: string
  codigo?: string
  excluido?: string
  sincronizado?: string
  codigoUsuarioInclusao?: string
  nomeUsuarioInclusao?: string
  dataHoraInclusao?: string
  codigoUsuarioAlteracao?: string
  dataHoraAlteracao?: string
  codigoAnexo?: string
  codigoRetatorio?: string
  titulo?: string
  ordem?: string
  descricao?: string
  observacao?: string
  nomeArquivo?: string
  public get objeto(): interfaceListaRelatoriosAnexos {
    const saida: interfaceAlertasCompromissos = {}
    if (this.codigoCorporativo != undefined)
      saida.codigo_corporativo = this.codigoCorporativo
    if (this.codigo != undefined) saida.codigo = this.codigo
    if (this.excluido != undefined) saida.excluido = this.excluido
    if (this.sincronizado != undefined) saida.sincronizado = this.sincronizado
    if (this.codigoUsuarioInclusao != undefined)
      saida.codigo_usuario_inclusao = this.codigoUsuarioInclusao
    if (this.nomeUsuarioInclusao != undefined)
      saida.nome_usuario_inclusao = this.nomeUsuarioInclusao
    if (this.dataHoraInclusao != undefined)
      saida.data_hora_inclusao = this.dataHoraInclusao
    if (this.codigoUsuarioAlteracao != undefined)
      saida.codigo_usuario_alteracao = this.codigoUsuarioAlteracao
    if (this.dataHoraAlteracao != undefined)
      saida.data_hora_alteracao = this.dataHoraAlteracao
    if (this.codigoAnexo != undefined) saida.codigo_anexo = this.codigoAnexo
    if (this.codigoRetatorio != undefined)
      saida.codigo_retatorio = this.codigoRetatorio
    if (this.titulo != undefined) saida.titulo = this.titulo
    if (this.ordem != undefined) saida.ordem = this.ordem
    if (this.descricao != undefined) saida.descricao = this.descricao
    if (this.observacao != undefined) saida.observacao = this.observacao
    if (this.nomeArquivo != undefined) saida.nome_arquivo = this.nomeArquivo
    return saida
  }
  public set objeto(objeto: interfaceListaRelatoriosAnexos) {
    this.codigoCorporativo = objeto.codigo_corporativo
    this.codigo = objeto.codigo
    this.excluido = objeto.excluido
    this.sincronizado = objeto.sincronizado
    this.codigoUsuarioInclusao = objeto.codigo_usuario_inclusao
    this.nomeUsuarioInclusao = objeto.nome_usuario_inclusao
    this.dataHoraInclusao = objeto.data_hora_inclusao
    this.codigoUsuarioAlteracao = objeto.codigo_usuario_alteracao
    this.dataHoraAlteracao = objeto.data_hora_alteracao
    this.codigoAnexo = objeto.codigo_anexo
    this.codigoRetatorio = objeto.codigo_retatorio
    this.titulo = objeto.titulo
    this.ordem = objeto.ordem
    this.descricao = objeto.descricao
    this.observacao = objeto.observacao
    this.nomeArquivo = objeto.nome_arquivo
  }
  meta: { [key: string]: interfaceMetaDados } = {
    codigoCorporativo: {
      coluna: 'codigo_corporativo',
      editavel: false,
      nulo: true,
      tamanho: 36,
    },
    codigo: { coluna: 'codigo', editavel: false, nulo: true, tamanho: 36 },
    excluido: { coluna: 'excluido', editavel: false, nulo: true, tamanho: 1 },
    sincronizado: {
      coluna: 'sincronizado',
      editavel: false,
      nulo: true,
      tamanho: 1,
    },
    codigoUsuarioInclusao: {
      coluna: 'codigo_usuario_inclusao',
      editavel: false,
      nulo: true,
      tamanho: 36,
    },
    nomeUsuarioInclusao: {
      coluna: 'nome_usuario_inclusao',
      editavel: false,
      nulo: true,
      tamanho: 100,
    },
    dataHoraInclusao: {
      coluna: 'data_hora_inclusao',
      editavel: false,
      nulo: true,
    },
    codigoUsuarioAlteracao: {
      coluna: 'codigo_usuario_alteracao',
      editavel: false,
      nulo: true,
      tamanho: 36,
    },
    dataHoraAlteracao: {
      coluna: 'data_hora_alteracao',
      editavel: false,
      nulo: true,
    },
    codigoAnexo: {
      coluna: 'codigo_anexo',
      editavel: false,
      nulo: true,
      tamanho: 36,
    },
    codigoRetatorio: {
      coluna: 'codigo_retatorio',
      editavel: false,
      nulo: true,
      tamanho: 36,
    },
    titulo: { coluna: 'titulo', editavel: false, nulo: true, tamanho: 125 },
    ordem: { coluna: 'ordem', editavel: false, nulo: true },
    descricao: {
      coluna: 'descricao',
      editavel: false,
      nulo: true,
      tamanho: 100,
    },
    observacao: {
      coluna: 'observacao',
      editavel: false,
      nulo: true,
      tamanho: 500,
    },
    nomeArquivo: {
      coluna: 'nome_arquivo',
      editavel: false,
      nulo: true,
      tamanho: 200,
    },
  }
}
export interface interfaceModelos extends interfaceRecurso {
  codigo?: string
  titulo?: string
}
export class ClasseModelos extends Recurso {
  constructor(objeto?: interfaceUsuarios) {
    super('modelos', objeto)
  }
  codigo?: string
  titulo?: string
  public get objeto(): interfaceModelos {
    const saida: interfaceAlertasCompromissos = {}
    if (this.codigo != undefined) saida.codigo = this.codigo
    if (this.titulo != undefined) saida.titulo = this.titulo
    return saida
  }
  public set objeto(objeto: interfaceModelos) {
    this.codigo = objeto.codigo
    this.titulo = objeto.titulo
  }
  meta: { [key: string]: interfaceMetaDados } = {
    codigo: {
      coluna: 'codigo',
      descricao: 'Código',
      editavel: true,
      nulo: false,
    },
    titulo: {
      coluna: 'titulo',
      descricao: 'Título',
      editavel: true,
      nulo: false,
      tamanho: 200,
    },
  }
}
export interface interfaceModelosTarefas extends interfaceRecurso {
  codigo?: string
  codigo_modelo?: string
  titulo?: string
  descricao?: string
  prioridade?: string
  custo?: string
}
export class ClasseModelosTarefas extends Recurso {
  constructor(objeto?: interfaceUsuarios) {
    super('modelos_tarefas', objeto)
  }
  codigo?: string
  codigoModelo?: string
  titulo?: string
  descricao?: string
  prioridade?: string
  custo?: string
  public get objeto(): interfaceModelosTarefas {
    const saida: interfaceAlertasCompromissos = {}
    if (this.codigo != undefined) saida.codigo = this.codigo
    if (this.codigoModelo != undefined) saida.codigo_modelo = this.codigoModelo
    if (this.titulo != undefined) saida.titulo = this.titulo
    if (this.descricao != undefined) saida.descricao = this.descricao
    if (this.prioridade != undefined) saida.prioridade = this.prioridade
    if (this.custo != undefined) saida.custo = this.custo
    return saida
  }
  public set objeto(objeto: interfaceModelosTarefas) {
    this.codigo = objeto.codigo
    this.codigoModelo = objeto.codigo_modelo
    this.titulo = objeto.titulo
    this.descricao = objeto.descricao
    this.prioridade = objeto.prioridade
    this.custo = objeto.custo
  }
  meta: { [key: string]: interfaceMetaDados } = {
    codigo: {
      coluna: 'codigo',
      descricao: 'Código',
      editavel: true,
      nulo: false,
    },
    codigoModelo: {
      coluna: 'codigo_modelo',
      descricao: 'Modelo',
      editavel: true,
      nulo: false,
    },
    titulo: {
      coluna: 'titulo',
      descricao: 'Título',
      editavel: true,
      nulo: false,
      tamanho: 250,
    },
    descricao: {
      coluna: 'descricao',
      descricao: 'Descrição',
      editavel: true,
      nulo: false,
      tamanho: 1000,
    },
    prioridade: {
      coluna: 'prioridade',
      descricao: 'Prioridade',
      editavel: true,
      nulo: false,
    },
    custo: { coluna: 'custo', descricao: 'Custo', editavel: true, nulo: true },
  }
}
export interface interfaceParametros extends interfaceRecurso {
  codigo_corporativo?: string
  codigo?: string
  excluido?: string
  sincronizado?: string
  codigo_usuario_inclusao?: string
  data_hora_inclusao?: string
  codigo_usuario_alteracao?: string
  data_hora_alteracao?: string
  versao_minima_app_android?: string
  dias_gratis_web?: string
}
export class ClasseParametros extends Recurso {
  constructor(objeto?: interfaceUsuarios) {
    super('parametros', objeto)
  }
  codigoCorporativo?: string
  codigo?: string
  excluido?: string
  sincronizado?: string
  codigoUsuarioInclusao?: string
  dataHoraInclusao?: string
  codigoUsuarioAlteracao?: string
  dataHoraAlteracao?: string
  versaoMinimaAppAndroid?: string
  diasGratisWeb?: string
  public get objeto(): interfaceParametros {
    const saida: interfaceAlertasCompromissos = {}
    if (this.codigoCorporativo != undefined)
      saida.codigo_corporativo = this.codigoCorporativo
    if (this.codigo != undefined) saida.codigo = this.codigo
    if (this.excluido != undefined) saida.excluido = this.excluido
    if (this.sincronizado != undefined) saida.sincronizado = this.sincronizado
    if (this.codigoUsuarioInclusao != undefined)
      saida.codigo_usuario_inclusao = this.codigoUsuarioInclusao
    if (this.dataHoraInclusao != undefined)
      saida.data_hora_inclusao = this.dataHoraInclusao
    if (this.codigoUsuarioAlteracao != undefined)
      saida.codigo_usuario_alteracao = this.codigoUsuarioAlteracao
    if (this.dataHoraAlteracao != undefined)
      saida.data_hora_alteracao = this.dataHoraAlteracao
    if (this.versaoMinimaAppAndroid != undefined)
      saida.versao_minima_app_android = this.versaoMinimaAppAndroid
    if (this.diasGratisWeb != undefined)
      saida.dias_gratis_web = this.diasGratisWeb
    return saida
  }
  public set objeto(objeto: interfaceParametros) {
    this.codigoCorporativo = objeto.codigo_corporativo
    this.codigo = objeto.codigo
    this.excluido = objeto.excluido
    this.sincronizado = objeto.sincronizado
    this.codigoUsuarioInclusao = objeto.codigo_usuario_inclusao
    this.dataHoraInclusao = objeto.data_hora_inclusao
    this.codigoUsuarioAlteracao = objeto.codigo_usuario_alteracao
    this.dataHoraAlteracao = objeto.data_hora_alteracao
    this.versaoMinimaAppAndroid = objeto.versao_minima_app_android
    this.diasGratisWeb = objeto.dias_gratis_web
  }
  meta: { [key: string]: interfaceMetaDados } = {
    codigoCorporativo: {
      coluna: 'codigo_corporativo',
      descricao: 'Código corporativo',
      editavel: true,
      nulo: false,
      tamanho: 36,
    },
    codigo: {
      coluna: 'codigo',
      descricao: 'Código',
      editavel: true,
      nulo: false,
      tamanho: 36,
    },
    excluido: {
      coluna: 'excluido',
      descricao: 'Excluído?',
      editavel: true,
      nulo: false,
      tamanho: 1,
    },
    sincronizado: {
      coluna: 'sincronizado',
      descricao: 'Sincronizado?',
      editavel: true,
      nulo: false,
      tamanho: 1,
    },
    codigoUsuarioInclusao: {
      coluna: 'codigo_usuario_inclusao',
      descricao: 'Usuário inclusão',
      editavel: true,
      nulo: false,
      tamanho: 36,
    },
    dataHoraInclusao: {
      coluna: 'data_hora_inclusao',
      descricao: 'Data/Hora inclusão',
      editavel: true,
      nulo: false,
    },
    codigoUsuarioAlteracao: {
      coluna: 'codigo_usuario_alteracao',
      descricao: 'Usuário alteração',
      editavel: true,
      nulo: true,
      tamanho: 36,
    },
    dataHoraAlteracao: {
      coluna: 'data_hora_alteracao',
      descricao: 'Data/Hora alteração',
      editavel: true,
      nulo: true,
    },
    versaoMinimaAppAndroid: {
      coluna: 'versao_minima_app_android',
      descricao: 'Versão mínima do aplicativo Android',
      editavel: true,
      nulo: false,
    },
    diasGratisWeb: {
      coluna: 'dias_gratis_web',
      descricao: 'Dias grátis Web',
      editavel: true,
      nulo: false,
    },
  }
}
export interface interfaceProjetos extends interfaceRecurso {
  codigo_corporativo?: string
  codigo?: string
  excluido?: string
  sincronizado?: string
  codigo_usuario_inclusao?: string
  data_hora_inclusao?: string
  codigo_usuario_alteracao?: string
  data_hora_alteracao?: string
  numero_processo?: string
  identificador?: string
  titulo?: string
  prazo?: string
  descricao?: string
  orcamento?: string
  situacao?: string
  codigo_licenciador?: string
  codigo_empreendedor?: string
  codigo_empreendimento?: string
  alerta_dias?: string
}
export class ClasseProjetos extends Recurso {
  constructor(objeto?: interfaceUsuarios) {
    super('projetos', objeto)
  }
  codigoCorporativo?: string
  codigo?: string
  excluido?: string
  sincronizado?: string
  codigoUsuarioInclusao?: string
  dataHoraInclusao?: string
  codigoUsuarioAlteracao?: string
  dataHoraAlteracao?: string
  numeroProcesso?: string
  identificador?: string
  titulo?: string
  prazo?: string
  descricao?: string
  orcamento?: string
  situacao?: string
  codigoLicenciador?: string
  codigoEmpreendedor?: string
  codigoEmpreendimento?: string
  alertaDias?: string
  public get objeto(): interfaceProjetos {
    const saida: interfaceAlertasCompromissos = {}
    if (this.codigoCorporativo != undefined)
      saida.codigo_corporativo = this.codigoCorporativo
    if (this.codigo != undefined) saida.codigo = this.codigo
    if (this.excluido != undefined) saida.excluido = this.excluido
    if (this.sincronizado != undefined) saida.sincronizado = this.sincronizado
    if (this.codigoUsuarioInclusao != undefined)
      saida.codigo_usuario_inclusao = this.codigoUsuarioInclusao
    if (this.dataHoraInclusao != undefined)
      saida.data_hora_inclusao = this.dataHoraInclusao
    if (this.codigoUsuarioAlteracao != undefined)
      saida.codigo_usuario_alteracao = this.codigoUsuarioAlteracao
    if (this.dataHoraAlteracao != undefined)
      saida.data_hora_alteracao = this.dataHoraAlteracao
    if (this.numeroProcesso != undefined)
      saida.numero_processo = this.numeroProcesso
    if (this.identificador != undefined)
      saida.identificador = this.identificador
    if (this.titulo != undefined) saida.titulo = this.titulo
    if (this.prazo != undefined) saida.prazo = this.prazo
    if (this.descricao != undefined) saida.descricao = this.descricao
    if (this.orcamento != undefined) saida.orcamento = this.orcamento
    if (this.situacao != undefined) saida.situacao = this.situacao
    if (this.codigoLicenciador != undefined)
      saida.codigo_licenciador = this.codigoLicenciador
    if (this.codigoEmpreendedor != undefined)
      saida.codigo_empreendedor = this.codigoEmpreendedor
    if (this.codigoEmpreendimento != undefined)
      saida.codigo_empreendimento = this.codigoEmpreendimento
    if (this.alertaDias != undefined) saida.alerta_dias = this.alertaDias
    return saida
  }
  public set objeto(objeto: interfaceProjetos) {
    this.codigoCorporativo = objeto.codigo_corporativo
    this.codigo = objeto.codigo
    this.excluido = objeto.excluido
    this.sincronizado = objeto.sincronizado
    this.codigoUsuarioInclusao = objeto.codigo_usuario_inclusao
    this.dataHoraInclusao = objeto.data_hora_inclusao
    this.codigoUsuarioAlteracao = objeto.codigo_usuario_alteracao
    this.dataHoraAlteracao = objeto.data_hora_alteracao
    this.numeroProcesso = objeto.numero_processo
    this.identificador = objeto.identificador
    this.titulo = objeto.titulo
    this.prazo = objeto.prazo
    this.descricao = objeto.descricao
    this.orcamento = objeto.orcamento
    this.situacao = objeto.situacao
    this.codigoLicenciador = objeto.codigo_licenciador
    this.codigoEmpreendedor = objeto.codigo_empreendedor
    this.codigoEmpreendimento = objeto.codigo_empreendimento
    this.alertaDias = objeto.alerta_dias
  }
  meta: { [key: string]: interfaceMetaDados } = {
    codigoCorporativo: {
      coluna: 'codigo_corporativo',
      descricao: 'Código',
      editavel: true,
      nulo: false,
      tamanho: 36,
    },
    codigo: {
      coluna: 'codigo',
      descricao: 'Código corporativo',
      editavel: true,
      nulo: false,
      tamanho: 36,
    },
    excluido: {
      coluna: 'excluido',
      descricao: 'Excluído?',
      editavel: true,
      nulo: false,
      tamanho: 1,
    },
    sincronizado: {
      coluna: 'sincronizado',
      descricao: 'Sincronizado?',
      editavel: true,
      nulo: false,
      tamanho: 1,
    },
    codigoUsuarioInclusao: {
      coluna: 'codigo_usuario_inclusao',
      descricao: 'Usuário inclusão',
      editavel: true,
      nulo: false,
      tamanho: 36,
    },
    dataHoraInclusao: {
      coluna: 'data_hora_inclusao',
      descricao: 'Data/Hora inclusão',
      editavel: true,
      nulo: false,
    },
    codigoUsuarioAlteracao: {
      coluna: 'codigo_usuario_alteracao',
      descricao: 'Usuário alteração',
      editavel: true,
      nulo: true,
      tamanho: 36,
    },
    dataHoraAlteracao: {
      coluna: 'data_hora_alteracao',
      descricao: 'Data/Hora alteração',
      editavel: true,
      nulo: true,
    },
    numeroProcesso: {
      coluna: 'numero_processo',
      descricao: 'Número do processo',
      editavel: true,
      nulo: true,
      tamanho: 20,
    },
    identificador: {
      coluna: 'identificador',
      descricao: 'Identificador',
      editavel: true,
      nulo: true,
      tamanho: 20,
    },
    titulo: {
      coluna: 'titulo',
      descricao: 'Título',
      editavel: true,
      nulo: false,
      tamanho: 200,
    },
    prazo: { coluna: 'prazo', descricao: 'Prazo', editavel: true, nulo: false },
    descricao: {
      coluna: 'descricao',
      descricao: 'Descrição',
      editavel: true,
      nulo: true,
      tamanho: 1000,
    },
    orcamento: {
      coluna: 'orcamento',
      descricao: 'Orçamento',
      editavel: true,
      nulo: true,
    },
    situacao: {
      coluna: 'situacao',
      descricao: 'Situação',
      editavel: true,
      nulo: false,
    },
    codigoLicenciador: {
      coluna: 'codigo_licenciador',
      descricao: 'Licenciador',
      editavel: true,
      nulo: true,
      tamanho: 36,
    },
    codigoEmpreendedor: {
      coluna: 'codigo_empreendedor',
      descricao: 'Empreendedor',
      editavel: true,
      nulo: true,
      tamanho: 36,
    },
    codigoEmpreendimento: {
      coluna: 'codigo_empreendimento',
      descricao: 'Empreendimento',
      editavel: true,
      nulo: true,
      tamanho: 36,
    },
    alertaDias: {
      coluna: 'alerta_dias',
      descricao: 'Alerta (em dias)',
      editavel: true,
      nulo: true,
    },
  }
}
export interface interfaceProjetosResponsaveis extends interfaceRecurso {
  codigo_corporativo?: string
  codigo?: string
  excluido?: string
  sincronizado?: string
  codigo_usuario_inclusao?: string
  data_hora_inclusao?: string
  codigo_usuario_alteracao?: string
  data_hora_alteracao?: string
  codigo_origem?: string
  codigo_usuario?: string
}
export class ClasseProjetosResponsaveis extends Recurso {
  constructor(objeto?: interfaceUsuarios) {
    super('projetos_responsaveis', objeto)
  }
  codigoCorporativo?: string
  codigo?: string
  excluido?: string
  sincronizado?: string
  codigoUsuarioInclusao?: string
  dataHoraInclusao?: string
  codigoUsuarioAlteracao?: string
  dataHoraAlteracao?: string
  codigoOrigem?: string
  codigoUsuario?: string
  public get objeto(): interfaceProjetosResponsaveis {
    const saida: interfaceAlertasCompromissos = {}
    if (this.codigoCorporativo != undefined)
      saida.codigo_corporativo = this.codigoCorporativo
    if (this.codigo != undefined) saida.codigo = this.codigo
    if (this.excluido != undefined) saida.excluido = this.excluido
    if (this.sincronizado != undefined) saida.sincronizado = this.sincronizado
    if (this.codigoUsuarioInclusao != undefined)
      saida.codigo_usuario_inclusao = this.codigoUsuarioInclusao
    if (this.dataHoraInclusao != undefined)
      saida.data_hora_inclusao = this.dataHoraInclusao
    if (this.codigoUsuarioAlteracao != undefined)
      saida.codigo_usuario_alteracao = this.codigoUsuarioAlteracao
    if (this.dataHoraAlteracao != undefined)
      saida.data_hora_alteracao = this.dataHoraAlteracao
    if (this.codigoOrigem != undefined) saida.codigo_origem = this.codigoOrigem
    if (this.codigoUsuario != undefined)
      saida.codigo_usuario = this.codigoUsuario
    return saida
  }
  public set objeto(objeto: interfaceProjetosResponsaveis) {
    this.codigoCorporativo = objeto.codigo_corporativo
    this.codigo = objeto.codigo
    this.excluido = objeto.excluido
    this.sincronizado = objeto.sincronizado
    this.codigoUsuarioInclusao = objeto.codigo_usuario_inclusao
    this.dataHoraInclusao = objeto.data_hora_inclusao
    this.codigoUsuarioAlteracao = objeto.codigo_usuario_alteracao
    this.dataHoraAlteracao = objeto.data_hora_alteracao
    this.codigoOrigem = objeto.codigo_origem
    this.codigoUsuario = objeto.codigo_usuario
  }
  meta: { [key: string]: interfaceMetaDados } = {
    codigoCorporativo: {
      coluna: 'codigo_corporativo',
      descricao: 'Código corporativo',
      editavel: true,
      nulo: false,
      tamanho: 36,
    },
    codigo: {
      coluna: 'codigo',
      descricao: 'Código',
      editavel: true,
      nulo: false,
      tamanho: 36,
    },
    excluido: {
      coluna: 'excluido',
      descricao: 'Excluído?',
      editavel: true,
      nulo: false,
      tamanho: 1,
    },
    sincronizado: {
      coluna: 'sincronizado',
      descricao: 'Sincronizado?',
      editavel: true,
      nulo: false,
      tamanho: 1,
    },
    codigoUsuarioInclusao: {
      coluna: 'codigo_usuario_inclusao',
      descricao: 'Usuário inclusão',
      editavel: true,
      nulo: false,
      tamanho: 36,
    },
    dataHoraInclusao: {
      coluna: 'data_hora_inclusao',
      descricao: 'Data/Hora inclusão',
      editavel: true,
      nulo: false,
    },
    codigoUsuarioAlteracao: {
      coluna: 'codigo_usuario_alteracao',
      descricao: 'Usuário alteração',
      editavel: true,
      nulo: true,
      tamanho: 36,
    },
    dataHoraAlteracao: {
      coluna: 'data_hora_alteracao',
      descricao: 'Data/Hora alteração',
      editavel: true,
      nulo: true,
    },
    codigoOrigem: {
      coluna: 'codigo_origem',
      descricao: 'Projeto',
      editavel: true,
      nulo: false,
      tamanho: 36,
    },
    codigoUsuario: {
      coluna: 'codigo_usuario',
      descricao: 'Usuário',
      editavel: true,
      nulo: false,
      tamanho: 36,
    },
  }
}
export interface interfaceProjetosTarefas extends interfaceRecurso {
  codigo_corporativo?: string
  codigo?: string
  excluido?: string
  sincronizado?: string
  codigo_usuario_inclusao?: string
  data_hora_inclusao?: string
  codigo_usuario_alteracao?: string
  data_hora_alteracao?: string
  codigo_projeto?: string
  titulo?: string
  descricao?: string
  prazo?: string
  situacao?: string
  prioridade?: string
  custo?: string
  alerta_dias?: string
}
export class ClasseProjetosTarefas extends Recurso {
  constructor(objeto?: interfaceUsuarios) {
    super('projetos_tarefas', objeto)
  }
  codigoCorporativo?: string
  codigo?: string
  excluido?: string
  sincronizado?: string
  codigoUsuarioInclusao?: string
  dataHoraInclusao?: string
  codigoUsuarioAlteracao?: string
  dataHoraAlteracao?: string
  codigoProjeto?: string
  titulo?: string
  descricao?: string
  prazo?: string
  situacao?: string
  prioridade?: string
  custo?: string
  alertaDias?: string
  public get objeto(): interfaceProjetosTarefas {
    const saida: interfaceAlertasCompromissos = {}
    if (this.codigoCorporativo != undefined)
      saida.codigo_corporativo = this.codigoCorporativo
    if (this.codigo != undefined) saida.codigo = this.codigo
    if (this.excluido != undefined) saida.excluido = this.excluido
    if (this.sincronizado != undefined) saida.sincronizado = this.sincronizado
    if (this.codigoUsuarioInclusao != undefined)
      saida.codigo_usuario_inclusao = this.codigoUsuarioInclusao
    if (this.dataHoraInclusao != undefined)
      saida.data_hora_inclusao = this.dataHoraInclusao
    if (this.codigoUsuarioAlteracao != undefined)
      saida.codigo_usuario_alteracao = this.codigoUsuarioAlteracao
    if (this.dataHoraAlteracao != undefined)
      saida.data_hora_alteracao = this.dataHoraAlteracao
    if (this.codigoProjeto != undefined)
      saida.codigo_projeto = this.codigoProjeto
    if (this.titulo != undefined) saida.titulo = this.titulo
    if (this.descricao != undefined) saida.descricao = this.descricao
    if (this.prazo != undefined) saida.prazo = this.prazo
    if (this.situacao != undefined) saida.situacao = this.situacao
    if (this.prioridade != undefined) saida.prioridade = this.prioridade
    if (this.custo != undefined) saida.custo = this.custo
    if (this.alertaDias != undefined) saida.alerta_dias = this.alertaDias
    return saida
  }
  public set objeto(objeto: interfaceProjetosTarefas) {
    this.codigoCorporativo = objeto.codigo_corporativo
    this.codigo = objeto.codigo
    this.excluido = objeto.excluido
    this.sincronizado = objeto.sincronizado
    this.codigoUsuarioInclusao = objeto.codigo_usuario_inclusao
    this.dataHoraInclusao = objeto.data_hora_inclusao
    this.codigoUsuarioAlteracao = objeto.codigo_usuario_alteracao
    this.dataHoraAlteracao = objeto.data_hora_alteracao
    this.codigoProjeto = objeto.codigo_projeto
    this.titulo = objeto.titulo
    this.descricao = objeto.descricao
    this.prazo = objeto.prazo
    this.situacao = objeto.situacao
    this.prioridade = objeto.prioridade
    this.custo = objeto.custo
    this.alertaDias = objeto.alerta_dias
  }
  meta: { [key: string]: interfaceMetaDados } = {
    codigoCorporativo: {
      coluna: 'codigo_corporativo',
      descricao: 'Código corporativo',
      editavel: true,
      nulo: false,
      tamanho: 36,
    },
    codigo: {
      coluna: 'codigo',
      descricao: 'Código',
      editavel: true,
      nulo: false,
      tamanho: 36,
    },
    excluido: {
      coluna: 'excluido',
      descricao: 'Excluído?',
      editavel: true,
      nulo: false,
      tamanho: 1,
    },
    sincronizado: {
      coluna: 'sincronizado',
      descricao: 'Sincronizado?',
      editavel: true,
      nulo: false,
      tamanho: 1,
    },
    codigoUsuarioInclusao: {
      coluna: 'codigo_usuario_inclusao',
      descricao: 'Usuário inclusão',
      editavel: true,
      nulo: false,
      tamanho: 36,
    },
    dataHoraInclusao: {
      coluna: 'data_hora_inclusao',
      descricao: 'Data/Hora inclusão',
      editavel: true,
      nulo: false,
    },
    codigoUsuarioAlteracao: {
      coluna: 'codigo_usuario_alteracao',
      descricao: 'Usuário alteração',
      editavel: true,
      nulo: true,
      tamanho: 36,
    },
    dataHoraAlteracao: {
      coluna: 'data_hora_alteracao',
      descricao: 'Data/Hora alteração',
      editavel: true,
      nulo: true,
    },
    codigoProjeto: {
      coluna: 'codigo_projeto',
      descricao: 'Projeto',
      editavel: true,
      nulo: false,
      tamanho: 36,
    },
    titulo: {
      coluna: 'titulo',
      descricao: 'Título',
      editavel: true,
      nulo: false,
      tamanho: 250,
    },
    descricao: {
      coluna: 'descricao',
      descricao: 'Descrição',
      editavel: true,
      nulo: true,
      tamanho: 1000,
    },
    prazo: { coluna: 'prazo', descricao: 'Prazo', editavel: true, nulo: true },
    situacao: {
      coluna: 'situacao',
      descricao: 'Situação',
      editavel: true,
      nulo: false,
    },
    prioridade: {
      coluna: 'prioridade',
      descricao: 'Prioridade',
      editavel: true,
      nulo: false,
    },
    custo: { coluna: 'custo', descricao: 'Custo', editavel: true, nulo: true },
    alertaDias: {
      coluna: 'alerta_dias',
      descricao: 'Alerta (em dias)',
      editavel: true,
      nulo: true,
    },
  }
}
export interface interfaceRelatorios extends interfaceRecurso {
  codigo_corporativo?: string
  codigo?: string
  excluido?: string
  sincronizado?: string
  codigo_usuario_inclusao?: string
  data_hora_inclusao?: string
  codigo_usuario_alteracao?: string
  data_hora_alteracao?: string
  descricao?: string
  nome_arquivo?: string
  parametros?: string
}
export class ClasseRelatorios extends Recurso {
  constructor(objeto?: interfaceUsuarios) {
    super('relatorios', objeto)
  }
  codigoCorporativo?: string
  codigo?: string
  excluido?: string
  sincronizado?: string
  codigoUsuarioInclusao?: string
  dataHoraInclusao?: string
  codigoUsuarioAlteracao?: string
  dataHoraAlteracao?: string
  descricao?: string
  nomeArquivo?: string
  parametros?: string
  public get objeto(): interfaceRelatorios {
    const saida: interfaceAlertasCompromissos = {}
    if (this.codigoCorporativo != undefined)
      saida.codigo_corporativo = this.codigoCorporativo
    if (this.codigo != undefined) saida.codigo = this.codigo
    if (this.excluido != undefined) saida.excluido = this.excluido
    if (this.sincronizado != undefined) saida.sincronizado = this.sincronizado
    if (this.codigoUsuarioInclusao != undefined)
      saida.codigo_usuario_inclusao = this.codigoUsuarioInclusao
    if (this.dataHoraInclusao != undefined)
      saida.data_hora_inclusao = this.dataHoraInclusao
    if (this.codigoUsuarioAlteracao != undefined)
      saida.codigo_usuario_alteracao = this.codigoUsuarioAlteracao
    if (this.dataHoraAlteracao != undefined)
      saida.data_hora_alteracao = this.dataHoraAlteracao
    if (this.descricao != undefined) saida.descricao = this.descricao
    if (this.nomeArquivo != undefined) saida.nome_arquivo = this.nomeArquivo
    if (this.parametros != undefined) saida.parametros = this.parametros
    return saida
  }
  public set objeto(objeto: interfaceRelatorios) {
    this.codigoCorporativo = objeto.codigo_corporativo
    this.codigo = objeto.codigo
    this.excluido = objeto.excluido
    this.sincronizado = objeto.sincronizado
    this.codigoUsuarioInclusao = objeto.codigo_usuario_inclusao
    this.dataHoraInclusao = objeto.data_hora_inclusao
    this.codigoUsuarioAlteracao = objeto.codigo_usuario_alteracao
    this.dataHoraAlteracao = objeto.data_hora_alteracao
    this.descricao = objeto.descricao
    this.nomeArquivo = objeto.nome_arquivo
    this.parametros = objeto.parametros
  }
  meta: { [key: string]: interfaceMetaDados } = {
    codigoCorporativo: {
      coluna: 'codigo_corporativo',
      descricao: 'Código corporativo',
      editavel: true,
      nulo: false,
      tamanho: 36,
    },
    codigo: {
      coluna: 'codigo',
      descricao: 'Código',
      editavel: true,
      nulo: false,
      tamanho: 36,
    },
    excluido: {
      coluna: 'excluido',
      descricao: 'Excluído?',
      editavel: true,
      nulo: false,
      tamanho: 1,
    },
    sincronizado: {
      coluna: 'sincronizado',
      descricao: 'Sincronizado?',
      editavel: true,
      nulo: false,
      tamanho: 1,
    },
    codigoUsuarioInclusao: {
      coluna: 'codigo_usuario_inclusao',
      descricao: 'Usuário inclusão',
      editavel: true,
      nulo: false,
      tamanho: 36,
    },
    dataHoraInclusao: {
      coluna: 'data_hora_inclusao',
      descricao: 'Data/Hora inclusão',
      editavel: true,
      nulo: false,
    },
    codigoUsuarioAlteracao: {
      coluna: 'codigo_usuario_alteracao',
      descricao: 'Usuário alteração',
      editavel: true,
      nulo: true,
      tamanho: 36,
    },
    dataHoraAlteracao: {
      coluna: 'data_hora_alteracao',
      descricao: 'Data/Hora alteração',
      editavel: true,
      nulo: true,
    },
    descricao: {
      coluna: 'descricao',
      descricao: 'Descrição',
      editavel: true,
      nulo: false,
      tamanho: 100,
    },
    nomeArquivo: {
      coluna: 'nome_arquivo',
      descricao: 'Nome do arquivo',
      editavel: true,
      nulo: true,
      tamanho: 200,
    },
    parametros: {
      coluna: 'parametros',
      descricao: 'Parâmetros',
      editavel: true,
      nulo: true,
    },
  }
}
export interface interfaceRelatoriosAnexos extends interfaceRecurso {
  codigo_corporativo?: string
  codigo?: string
  excluido?: string
  sincronizado?: string
  codigo_usuario_inclusao?: string
  data_hora_inclusao?: string
  codigo_usuario_alteracao?: string
  data_hora_alteracao?: string
  codigo_anexo?: string
  codigo_retatorio?: string
  titulo?: string
  ordem?: string
}
export class ClasseRelatoriosAnexos extends Recurso {
  constructor(objeto?: interfaceUsuarios) {
    super('relatorios_anexos', objeto)
  }
  codigoCorporativo?: string
  codigo?: string
  excluido?: string
  sincronizado?: string
  codigoUsuarioInclusao?: string
  dataHoraInclusao?: string
  codigoUsuarioAlteracao?: string
  dataHoraAlteracao?: string
  codigoAnexo?: string
  codigoRetatorio?: string
  titulo?: string
  ordem?: string
  public get objeto(): interfaceRelatoriosAnexos {
    const saida: interfaceAlertasCompromissos = {}
    if (this.codigoCorporativo != undefined)
      saida.codigo_corporativo = this.codigoCorporativo
    if (this.codigo != undefined) saida.codigo = this.codigo
    if (this.excluido != undefined) saida.excluido = this.excluido
    if (this.sincronizado != undefined) saida.sincronizado = this.sincronizado
    if (this.codigoUsuarioInclusao != undefined)
      saida.codigo_usuario_inclusao = this.codigoUsuarioInclusao
    if (this.dataHoraInclusao != undefined)
      saida.data_hora_inclusao = this.dataHoraInclusao
    if (this.codigoUsuarioAlteracao != undefined)
      saida.codigo_usuario_alteracao = this.codigoUsuarioAlteracao
    if (this.dataHoraAlteracao != undefined)
      saida.data_hora_alteracao = this.dataHoraAlteracao
    if (this.codigoAnexo != undefined) saida.codigo_anexo = this.codigoAnexo
    if (this.codigoRetatorio != undefined)
      saida.codigo_retatorio = this.codigoRetatorio
    if (this.titulo != undefined) saida.titulo = this.titulo
    if (this.ordem != undefined) saida.ordem = this.ordem
    return saida
  }
  public set objeto(objeto: interfaceRelatoriosAnexos) {
    this.codigoCorporativo = objeto.codigo_corporativo
    this.codigo = objeto.codigo
    this.excluido = objeto.excluido
    this.sincronizado = objeto.sincronizado
    this.codigoUsuarioInclusao = objeto.codigo_usuario_inclusao
    this.dataHoraInclusao = objeto.data_hora_inclusao
    this.codigoUsuarioAlteracao = objeto.codigo_usuario_alteracao
    this.dataHoraAlteracao = objeto.data_hora_alteracao
    this.codigoAnexo = objeto.codigo_anexo
    this.codigoRetatorio = objeto.codigo_retatorio
    this.titulo = objeto.titulo
    this.ordem = objeto.ordem
  }
  meta: { [key: string]: interfaceMetaDados } = {
    codigoCorporativo: {
      coluna: 'codigo_corporativo',
      descricao: 'Código corporativo',
      editavel: true,
      nulo: false,
      tamanho: 36,
    },
    codigo: {
      coluna: 'codigo',
      descricao: 'Código',
      editavel: true,
      nulo: false,
      tamanho: 36,
    },
    excluido: {
      coluna: 'excluido',
      descricao: 'Excluído?',
      editavel: true,
      nulo: false,
      tamanho: 1,
    },
    sincronizado: {
      coluna: 'sincronizado',
      descricao: 'Sincronizado?',
      editavel: true,
      nulo: false,
      tamanho: 1,
    },
    codigoUsuarioInclusao: {
      coluna: 'codigo_usuario_inclusao',
      descricao: 'Usuário inclusão',
      editavel: true,
      nulo: false,
      tamanho: 36,
    },
    dataHoraInclusao: {
      coluna: 'data_hora_inclusao',
      descricao: 'Data/Hora inclusão',
      editavel: true,
      nulo: false,
    },
    codigoUsuarioAlteracao: {
      coluna: 'codigo_usuario_alteracao',
      descricao: 'Usuário alteração',
      editavel: true,
      nulo: true,
      tamanho: 36,
    },
    dataHoraAlteracao: {
      coluna: 'data_hora_alteracao',
      descricao: 'Data/Hora alteração',
      editavel: true,
      nulo: true,
    },
    codigoAnexo: {
      coluna: 'codigo_anexo',
      descricao: 'Anexo',
      editavel: true,
      nulo: false,
      tamanho: 36,
    },
    codigoRetatorio: {
      coluna: 'codigo_retatorio',
      descricao: 'Relatório',
      editavel: true,
      nulo: false,
      tamanho: 36,
    },
    titulo: {
      coluna: 'titulo',
      descricao: 'Titulo do anexo no relatório',
      editavel: true,
      nulo: false,
      tamanho: 125,
    },
    ordem: { coluna: 'ordem', editavel: true, nulo: false },
  }
}
export interface interfaceTarefasPredecessoras extends interfaceRecurso {
  codigo_corporativo?: string
  codigo?: string
  excluido?: string
  sincronizado?: string
  codigo_usuario_inclusao?: string
  data_hora_inclusao?: string
  codigo_usuario_alteracao?: string
  data_hora_alteracao?: string
  codigo_tarefa?: string
  codigo_tarefa_predecessora?: string
}
export class ClasseTarefasPredecessoras extends Recurso {
  constructor(objeto?: interfaceUsuarios) {
    super('tarefas_predecessoras', objeto)
  }
  codigoCorporativo?: string
  codigo?: string
  excluido?: string
  sincronizado?: string
  codigoUsuarioInclusao?: string
  dataHoraInclusao?: string
  codigoUsuarioAlteracao?: string
  dataHoraAlteracao?: string
  codigoTarefa?: string
  codigoTarefaPredecessora?: string
  public get objeto(): interfaceTarefasPredecessoras {
    const saida: interfaceAlertasCompromissos = {}
    if (this.codigoCorporativo != undefined)
      saida.codigo_corporativo = this.codigoCorporativo
    if (this.codigo != undefined) saida.codigo = this.codigo
    if (this.excluido != undefined) saida.excluido = this.excluido
    if (this.sincronizado != undefined) saida.sincronizado = this.sincronizado
    if (this.codigoUsuarioInclusao != undefined)
      saida.codigo_usuario_inclusao = this.codigoUsuarioInclusao
    if (this.dataHoraInclusao != undefined)
      saida.data_hora_inclusao = this.dataHoraInclusao
    if (this.codigoUsuarioAlteracao != undefined)
      saida.codigo_usuario_alteracao = this.codigoUsuarioAlteracao
    if (this.dataHoraAlteracao != undefined)
      saida.data_hora_alteracao = this.dataHoraAlteracao
    if (this.codigoTarefa != undefined) saida.codigo_tarefa = this.codigoTarefa
    if (this.codigoTarefaPredecessora != undefined)
      saida.codigo_tarefa_predecessora = this.codigoTarefaPredecessora
    return saida
  }
  public set objeto(objeto: interfaceTarefasPredecessoras) {
    this.codigoCorporativo = objeto.codigo_corporativo
    this.codigo = objeto.codigo
    this.excluido = objeto.excluido
    this.sincronizado = objeto.sincronizado
    this.codigoUsuarioInclusao = objeto.codigo_usuario_inclusao
    this.dataHoraInclusao = objeto.data_hora_inclusao
    this.codigoUsuarioAlteracao = objeto.codigo_usuario_alteracao
    this.dataHoraAlteracao = objeto.data_hora_alteracao
    this.codigoTarefa = objeto.codigo_tarefa
    this.codigoTarefaPredecessora = objeto.codigo_tarefa_predecessora
  }
  meta: { [key: string]: interfaceMetaDados } = {
    codigoCorporativo: {
      coluna: 'codigo_corporativo',
      descricao: 'Código corporativo',
      editavel: true,
      nulo: false,
      tamanho: 36,
    },
    codigo: {
      coluna: 'codigo',
      descricao: 'Código',
      editavel: true,
      nulo: false,
      tamanho: 36,
    },
    excluido: {
      coluna: 'excluido',
      descricao: 'Excluído?',
      editavel: true,
      nulo: false,
      tamanho: 1,
    },
    sincronizado: {
      coluna: 'sincronizado',
      descricao: 'Sincronizado?',
      editavel: true,
      nulo: false,
      tamanho: 1,
    },
    codigoUsuarioInclusao: {
      coluna: 'codigo_usuario_inclusao',
      descricao: 'Usuário inclusão',
      editavel: true,
      nulo: false,
      tamanho: 36,
    },
    dataHoraInclusao: {
      coluna: 'data_hora_inclusao',
      descricao: 'Data/Hora inclusão',
      editavel: true,
      nulo: false,
    },
    codigoUsuarioAlteracao: {
      coluna: 'codigo_usuario_alteracao',
      descricao: 'Usuário alteração',
      editavel: true,
      nulo: true,
      tamanho: 36,
    },
    dataHoraAlteracao: {
      coluna: 'data_hora_alteracao',
      descricao: 'Data/Hora alteração',
      editavel: true,
      nulo: true,
    },
    codigoTarefa: {
      coluna: 'codigo_tarefa',
      descricao: 'Tarefa principal',
      editavel: true,
      nulo: false,
      tamanho: 36,
    },
    codigoTarefaPredecessora: {
      coluna: 'codigo_tarefa_predecessora',
      descricao: 'Tarefa predecessora',
      editavel: true,
      nulo: false,
      tamanho: 36,
    },
  }
}
export interface interfaceTarefasResponsaveis extends interfaceRecurso {
  codigo_corporativo?: string
  codigo?: string
  excluido?: string
  sincronizado?: string
  codigo_usuario_inclusao?: string
  data_hora_inclusao?: string
  codigo_usuario_alteracao?: string
  data_hora_alteracao?: string
  codigo_tarefa?: string
  codigo_usuario?: string
}
export class ClasseTarefasResponsaveis extends Recurso {
  constructor(objeto?: interfaceUsuarios) {
    super('tarefas_responsaveis', objeto)
  }
  codigoCorporativo?: string
  codigo?: string
  excluido?: string
  sincronizado?: string
  codigoUsuarioInclusao?: string
  dataHoraInclusao?: string
  codigoUsuarioAlteracao?: string
  dataHoraAlteracao?: string
  codigoTarefa?: string
  codigoUsuario?: string
  public get objeto(): interfaceTarefasResponsaveis {
    const saida: interfaceAlertasCompromissos = {}
    if (this.codigoCorporativo != undefined)
      saida.codigo_corporativo = this.codigoCorporativo
    if (this.codigo != undefined) saida.codigo = this.codigo
    if (this.excluido != undefined) saida.excluido = this.excluido
    if (this.sincronizado != undefined) saida.sincronizado = this.sincronizado
    if (this.codigoUsuarioInclusao != undefined)
      saida.codigo_usuario_inclusao = this.codigoUsuarioInclusao
    if (this.dataHoraInclusao != undefined)
      saida.data_hora_inclusao = this.dataHoraInclusao
    if (this.codigoUsuarioAlteracao != undefined)
      saida.codigo_usuario_alteracao = this.codigoUsuarioAlteracao
    if (this.dataHoraAlteracao != undefined)
      saida.data_hora_alteracao = this.dataHoraAlteracao
    if (this.codigoTarefa != undefined) saida.codigo_tarefa = this.codigoTarefa
    if (this.codigoUsuario != undefined)
      saida.codigo_usuario = this.codigoUsuario
    return saida
  }
  public set objeto(objeto: interfaceTarefasResponsaveis) {
    this.codigoCorporativo = objeto.codigo_corporativo
    this.codigo = objeto.codigo
    this.excluido = objeto.excluido
    this.sincronizado = objeto.sincronizado
    this.codigoUsuarioInclusao = objeto.codigo_usuario_inclusao
    this.dataHoraInclusao = objeto.data_hora_inclusao
    this.codigoUsuarioAlteracao = objeto.codigo_usuario_alteracao
    this.dataHoraAlteracao = objeto.data_hora_alteracao
    this.codigoTarefa = objeto.codigo_tarefa
    this.codigoUsuario = objeto.codigo_usuario
  }
  meta: { [key: string]: interfaceMetaDados } = {
    codigoCorporativo: {
      coluna: 'codigo_corporativo',
      descricao: 'Código corporativo',
      editavel: true,
      nulo: false,
      tamanho: 36,
    },
    codigo: {
      coluna: 'codigo',
      descricao: 'Código',
      editavel: true,
      nulo: false,
      tamanho: 36,
    },
    excluido: {
      coluna: 'excluido',
      descricao: 'Excluído?',
      editavel: true,
      nulo: false,
      tamanho: 1,
    },
    sincronizado: {
      coluna: 'sincronizado',
      descricao: 'Sincronizado?',
      editavel: true,
      nulo: false,
      tamanho: 1,
    },
    codigoUsuarioInclusao: {
      coluna: 'codigo_usuario_inclusao',
      descricao: 'Usuário inclusão',
      editavel: true,
      nulo: false,
      tamanho: 36,
    },
    dataHoraInclusao: {
      coluna: 'data_hora_inclusao',
      descricao: 'Data/Hora inclusão',
      editavel: true,
      nulo: false,
    },
    codigoUsuarioAlteracao: {
      coluna: 'codigo_usuario_alteracao',
      descricao: 'Usuário alteração',
      editavel: true,
      nulo: true,
      tamanho: 36,
    },
    dataHoraAlteracao: {
      coluna: 'data_hora_alteracao',
      descricao: 'Data/Hora alteração',
      editavel: true,
      nulo: true,
    },
    codigoTarefa: {
      coluna: 'codigo_tarefa',
      descricao: 'Tarefa',
      editavel: true,
      nulo: false,
      tamanho: 36,
    },
    codigoUsuario: {
      coluna: 'codigo_usuario',
      descricao: 'Usuário',
      editavel: true,
      nulo: false,
      tamanho: 36,
    },
  }
}
export interface interfaceUsuarios extends interfaceRecurso {
  codigo_corporativo?: string
  codigo?: string
  excluido?: string
  sincronizado?: string
  codigo_usuario_inclusao?: string
  data_hora_inclusao?: string
  codigo_usuario_alteracao?: string
  data_hora_alteracao?: string
  nome?: string
  sexo?: string
  data_nascimento?: string
  telefone?: string
  email?: string
  senha?: string
  administrador?: string
  cargo?: string
  registro_profissional?: string
  cadastros_base?: string
}
export class ClasseUsuarios extends Recurso {
  constructor(objeto?: interfaceUsuarios) {
    super('usuarios', objeto)
  }
  codigoCorporativo?: string
  codigo?: string
  excluido?: string
  sincronizado?: string
  codigoUsuarioInclusao?: string
  dataHoraInclusao?: string
  codigoUsuarioAlteracao?: string
  dataHoraAlteracao?: string
  nome?: string
  sexo?: string
  dataNascimento?: string
  telefone?: string
  email?: string
  senha?: string
  administrador?: string
  cargo?: string
  registroProfissional?: string
  cadastrosBase?: string
  public get objeto(): interfaceUsuarios {
    const saida: interfaceAlertasCompromissos = {}
    if (this.codigoCorporativo != undefined)
      saida.codigo_corporativo = this.codigoCorporativo
    if (this.codigo != undefined) saida.codigo = this.codigo
    if (this.excluido != undefined) saida.excluido = this.excluido
    if (this.sincronizado != undefined) saida.sincronizado = this.sincronizado
    if (this.codigoUsuarioInclusao != undefined)
      saida.codigo_usuario_inclusao = this.codigoUsuarioInclusao
    if (this.dataHoraInclusao != undefined)
      saida.data_hora_inclusao = this.dataHoraInclusao
    if (this.codigoUsuarioAlteracao != undefined)
      saida.codigo_usuario_alteracao = this.codigoUsuarioAlteracao
    if (this.dataHoraAlteracao != undefined)
      saida.data_hora_alteracao = this.dataHoraAlteracao
    if (this.nome != undefined) saida.nome = this.nome
    if (this.sexo != undefined) saida.sexo = this.sexo
    if (this.dataNascimento != undefined)
      saida.data_nascimento = this.dataNascimento
    if (this.telefone != undefined) saida.telefone = this.telefone
    if (this.email != undefined) saida.email = this.email
    if (this.senha != undefined) saida.senha = this.senha
    if (this.administrador != undefined)
      saida.administrador = this.administrador
    if (this.cargo != undefined) saida.cargo = this.cargo
    if (this.registroProfissional != undefined)
      saida.registro_profissional = this.registroProfissional
    if (this.cadastrosBase != undefined)
      saida.cadastros_base = this.cadastrosBase
    return saida
  }
  public set objeto(objeto: interfaceUsuarios) {
    this.codigoCorporativo = objeto.codigo_corporativo
    this.codigo = objeto.codigo
    this.excluido = objeto.excluido
    this.sincronizado = objeto.sincronizado
    this.codigoUsuarioInclusao = objeto.codigo_usuario_inclusao
    this.dataHoraInclusao = objeto.data_hora_inclusao
    this.codigoUsuarioAlteracao = objeto.codigo_usuario_alteracao
    this.dataHoraAlteracao = objeto.data_hora_alteracao
    this.nome = objeto.nome
    this.sexo = objeto.sexo
    this.dataNascimento = objeto.data_nascimento
    this.telefone = objeto.telefone
    this.email = objeto.email
    this.senha = objeto.senha
    this.administrador = objeto.administrador
    this.cargo = objeto.cargo
    this.registroProfissional = objeto.registro_profissional
    this.cadastrosBase = objeto.cadastros_base
  }
  meta: { [key: string]: interfaceMetaDados } = {
    codigoCorporativo: {
      coluna: 'codigo_corporativo',
      descricao: 'Código corporativo',
      editavel: true,
      nulo: false,
      tamanho: 36,
    },
    codigo: {
      coluna: 'codigo',
      descricao: 'Código',
      editavel: true,
      nulo: false,
      tamanho: 36,
    },
    excluido: {
      coluna: 'excluido',
      descricao: 'Excluído?',
      editavel: true,
      nulo: false,
      tamanho: 1,
    },
    sincronizado: {
      coluna: 'sincronizado',
      descricao: 'Sincronizado?',
      editavel: true,
      nulo: false,
      tamanho: 1,
    },
    codigoUsuarioInclusao: {
      coluna: 'codigo_usuario_inclusao',
      descricao: 'Usuário inclusão',
      editavel: true,
      nulo: false,
      tamanho: 36,
    },
    dataHoraInclusao: {
      coluna: 'data_hora_inclusao',
      descricao: 'Data/Hora inclusão',
      editavel: true,
      nulo: false,
    },
    codigoUsuarioAlteracao: {
      coluna: 'codigo_usuario_alteracao',
      descricao: 'Usuário alteração',
      editavel: true,
      nulo: true,
      tamanho: 36,
    },
    dataHoraAlteracao: {
      coluna: 'data_hora_alteracao',
      descricao: 'Data/Hora alteração',
      editavel: true,
      nulo: true,
    },
    nome: {
      coluna: 'nome',
      descricao: 'Nome',
      editavel: true,
      nulo: false,
      tamanho: 100,
    },
    sexo: {
      coluna: 'sexo',
      descricao: 'Sexo',
      editavel: true,
      nulo: true,
      tamanho: 1,
    },
    dataNascimento: {
      coluna: 'data_nascimento',
      descricao: 'Data nascimento',
      editavel: true,
      nulo: true,
    },
    telefone: {
      coluna: 'telefone',
      descricao: 'Telefone',
      editavel: true,
      nulo: false,
      tamanho: 20,
    },
    email: {
      coluna: 'email',
      descricao: 'E-mail',
      editavel: true,
      nulo: false,
      tamanho: 50,
    },
    senha: {
      coluna: 'senha',
      descricao: 'Senha',
      editavel: true,
      nulo: false,
      tamanho: 32,
    },
    administrador: {
      coluna: 'administrador',
      descricao: 'Administrador?',
      editavel: true,
      nulo: false,
      tamanho: 1,
    },
    cargo: {
      coluna: 'cargo',
      descricao: 'Cargo',
      editavel: true,
      nulo: true,
      tamanho: 100,
    },
    registroProfissional: {
      coluna: 'registro_profissional',
      descricao: 'Registro Profissional',
      editavel: true,
      nulo: true,
      tamanho: 50,
    },
    cadastrosBase: {
      coluna: 'cadastros_base',
      descricao: 'Cadastros Base',
      editavel: true,
      nulo: true,
      tamanho: 1,
    },
  }
}
