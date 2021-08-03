/*
    Essa bilioteca é gerada de forma automática em 
    http://0.0.0.0:8000/classes
    É um espelho fiel das tabelas do banco de dados.
*/

import { Recurso, interfaceRecurso } from '@/modelos/recurso'

export interface interfaceAcessos extends interfaceRecurso {
  codigo_corporativo?: string
  codigo_usuario?: string
  data_hora?: string
  ip?: string
  user_agent?: string
}
export class ClasseAcessos extends Recurso {
  recurso = 'acessos'
  codigoCorporativo?: string
  codigoUsuario?: string
  dataHora?: string
  ip?: string
  userAgent?: string
  public get objeto(): interfaceAcessos {
    return {
      codigo_corporativo: this.codigoCorporativo,
      codigo_usuario: this.codigoUsuario,
      data_hora: this.dataHora,
      ip: this.ip,
      user_agent: this.userAgent,
    }
  }
  public set objeto(objeto: interfaceAcessos) {
    this.codigoCorporativo = objeto.codigo_corporativo
    this.codigoUsuario = objeto.codigo_usuario
    this.dataHora = objeto.data_hora
    this.ip = objeto.ip
    this.userAgent = objeto.user_agent
  }
}
export interface interfaceAlertasCompromissos extends interfaceRecurso {
  atualizado_view?: string
  codigo?: string
  codigo_compromisso?: string
  codigo_corporativo?: string
  codigo_empreendedor?: string
  codigo_empreendimento?: string
  codigo_licenciador?: string
  codigo_usuario_alteracao?: string
  codigo_usuario_inclusao?: string
  codigos_usuarios_responsaveis?: string[]
  compromisso_descricao?: string
  compromisso_intervalo?: number
  compromisso_obrigacao_legal?: string
  compromisso_quantidade_recorrencia?: number
  compromisso_recorrencia?: string
  compromisso_tipo?: string
  compromisso_titulo?: string
  data_alerta?: string
  data_hora_alteracao?: string
  data_hora_inclusao?: string
  empreendedor_cnpj?: string
  empreendedor_cpf?: string
  empreendedor_nome?: string
  empreendimento_cnpj?: string
  empreendimento_cpf?: string
  empreendimento_identificador?: string
  empreendimento_nome?: string
  excluido?: string
  executada?: string
  informacoes_complementares?: string
  licenciador_nome?: string
  numero?: number
  sincronizado?: string
  situacao_texto?: string
  situacao_texto_15?: string
  situacao_texto_30?: string
  situacao_texto_7?: string
  vencimento?: string
}
export class ClasseAlertasCompromissos extends Recurso {
  recurso = 'alertas_compromissos'
  atualizadoView?: string
  codigo?: string
  codigoCompromisso?: string
  codigoCorporativo?: string
  codigoEmpreendedor?: string
  codigoEmpreendimento?: string
  codigoLicenciador?: string
  codigoUsuarioAlteracao?: string
  codigoUsuarioInclusao?: string
  codigosUsuariosResponsaveis?: string[]
  compromissoDescricao?: string
  compromissoIntervalo?: number
  compromissoObrigacaoLegal?: string
  compromissoQuantidadeRecorrencia?: number
  compromissoRecorrencia?: string
  compromissoTipo?: string
  compromissoTitulo?: string
  dataAlerta?: string
  dataHoraAlteracao?: string
  dataHoraInclusao?: string
  empreendedorCnpj?: string
  empreendedorCpf?: string
  empreendedorNome?: string
  empreendimentoCnpj?: string
  empreendimentoCpf?: string
  empreendimentoIdentificador?: string
  empreendimentoNome?: string
  excluido?: string
  executada?: string
  informacoesComplementares?: string
  licenciadorNome?: string
  numero?: number
  sincronizado?: string
  situacaoTexto?: string
  situacaoTexto15?: string
  situacaoTexto30?: string
  situacaoTexto7?: string
  vencimento?: string
  public get objeto(): interfaceAlertasCompromissos {
    return {
      atualizado_view: this.atualizadoView,
      codigo: this.codigo,
      codigo_compromisso: this.codigoCompromisso,
      codigo_corporativo: this.codigoCorporativo,
      codigo_empreendedor: this.codigoEmpreendedor,
      codigo_empreendimento: this.codigoEmpreendimento,
      codigo_licenciador: this.codigoLicenciador,
      codigo_usuario_alteracao: this.codigoUsuarioAlteracao,
      codigo_usuario_inclusao: this.codigoUsuarioInclusao,
      codigos_usuarios_responsaveis: this.codigosUsuariosResponsaveis,
      compromisso_descricao: this.compromissoDescricao,
      compromisso_intervalo: this.compromissoIntervalo,
      compromisso_obrigacao_legal: this.compromissoObrigacaoLegal,
      compromisso_quantidade_recorrencia: this.compromissoQuantidadeRecorrencia,
      compromisso_recorrencia: this.compromissoRecorrencia,
      compromisso_tipo: this.compromissoTipo,
      compromisso_titulo: this.compromissoTitulo,
      data_alerta: this.dataAlerta,
      data_hora_alteracao: this.dataHoraAlteracao,
      data_hora_inclusao: this.dataHoraInclusao,
      empreendedor_cnpj: this.empreendedorCnpj,
      empreendedor_cpf: this.empreendedorCpf,
      empreendedor_nome: this.empreendedorNome,
      empreendimento_cnpj: this.empreendimentoCnpj,
      empreendimento_cpf: this.empreendimentoCpf,
      empreendimento_identificador: this.empreendimentoIdentificador,
      empreendimento_nome: this.empreendimentoNome,
      excluido: this.excluido,
      executada: this.executada,
      informacoes_complementares: this.informacoesComplementares,
      licenciador_nome: this.licenciadorNome,
      numero: this.numero,
      sincronizado: this.sincronizado,
      situacao_texto: this.situacaoTexto,
      situacao_texto_15: this.situacaoTexto15,
      situacao_texto_30: this.situacaoTexto30,
      situacao_texto_7: this.situacaoTexto7,
      vencimento: this.vencimento,
    }
  }
  public set objeto(objeto: interfaceAlertasCompromissos) {
    this.atualizadoView = objeto.atualizado_view
    this.codigo = objeto.codigo
    this.codigoCompromisso = objeto.codigo_compromisso
    this.codigoCorporativo = objeto.codigo_corporativo
    this.codigoEmpreendedor = objeto.codigo_empreendedor
    this.codigoEmpreendimento = objeto.codigo_empreendimento
    this.codigoLicenciador = objeto.codigo_licenciador
    this.codigoUsuarioAlteracao = objeto.codigo_usuario_alteracao
    this.codigoUsuarioInclusao = objeto.codigo_usuario_inclusao
    this.codigosUsuariosResponsaveis = objeto.codigos_usuarios_responsaveis
    this.compromissoDescricao = objeto.compromisso_descricao
    this.compromissoIntervalo = objeto.compromisso_intervalo
    this.compromissoObrigacaoLegal = objeto.compromisso_obrigacao_legal
    this.compromissoQuantidadeRecorrencia =
      objeto.compromisso_quantidade_recorrencia
    this.compromissoRecorrencia = objeto.compromisso_recorrencia
    this.compromissoTipo = objeto.compromisso_tipo
    this.compromissoTitulo = objeto.compromisso_titulo
    this.dataAlerta = objeto.data_alerta
    this.dataHoraAlteracao = objeto.data_hora_alteracao
    this.dataHoraInclusao = objeto.data_hora_inclusao
    this.empreendedorCnpj = objeto.empreendedor_cnpj
    this.empreendedorCpf = objeto.empreendedor_cpf
    this.empreendedorNome = objeto.empreendedor_nome
    this.empreendimentoCnpj = objeto.empreendimento_cnpj
    this.empreendimentoCpf = objeto.empreendimento_cpf
    this.empreendimentoIdentificador = objeto.empreendimento_identificador
    this.empreendimentoNome = objeto.empreendimento_nome
    this.excluido = objeto.excluido
    this.executada = objeto.executada
    this.informacoesComplementares = objeto.informacoes_complementares
    this.licenciadorNome = objeto.licenciador_nome
    this.numero = objeto.numero
    this.sincronizado = objeto.sincronizado
    this.situacaoTexto = objeto.situacao_texto
    this.situacaoTexto15 = objeto.situacao_texto_15
    this.situacaoTexto30 = objeto.situacao_texto_30
    this.situacaoTexto7 = objeto.situacao_texto_7
    this.vencimento = objeto.vencimento
  }
}
export interface interfaceAlertasCondicionantes extends interfaceRecurso {
  atualizado_view?: string
  codigo?: string
  codigo_condicionante?: string
  codigo_corporativo?: string
  codigo_empreendedor?: string
  codigo_empreendimento?: string
  codigo_licenca?: string
  codigo_licenciador?: string
  codigo_usuario_alteracao?: string
  codigo_usuario_inclusao?: string
  codigos_usuarios_responsaveis?: string[]
  condicionante_alerta_dias?: number
  condicionante_descricao?: string
  condicionante_informacoes_complementares?: string
  condicionante_itervalo?: number
  condicionante_recorrencia?: string
  data_alerta?: string
  data_hora_alteracao?: string
  data_hora_inclusao?: string
  departamento?: string
  empreendedor_cnpj?: string
  empreendedor_cpf?: string
  empreendedor_nome?: string
  empreendimento_cnpj?: string
  empreendimento_cpf?: string
  empreendimento_identificador?: string
  empreendimento_nome?: string
  excluido?: string
  executada?: string
  informacoes_complementares?: string
  licenca_descricao?: string
  licenca_descricao_tipo_outras?: string
  licenca_emissao?: string
  licenca_numero?: string
  licenca_tipo?: string
  licenca_vencimento?: string
  nome_licenciador?: string
  numero?: number
  numero_protocolo?: string
  responsavel?: string
  sincronizado?: string
  situacao_texto?: string
  situacao_texto_15?: string
  situacao_texto_30?: string
  situacao_texto_7?: string
  vencimento?: string
}
export class ClasseAlertasCondicionantes extends Recurso {
  recurso = 'alertas_condicionantes'
  atualizadoView?: string
  codigo?: string
  codigoCondicionante?: string
  codigoCorporativo?: string
  codigoEmpreendedor?: string
  codigoEmpreendimento?: string
  codigoLicenca?: string
  codigoLicenciador?: string
  codigoUsuarioAlteracao?: string
  codigoUsuarioInclusao?: string
  codigosUsuariosResponsaveis?: string[]
  condicionanteAlertaDias?: number
  condicionanteDescricao?: string
  condicionanteInformacoesComplementares?: string
  condicionanteItervalo?: number
  condicionanteRecorrencia?: string
  dataAlerta?: string
  dataHoraAlteracao?: string
  dataHoraInclusao?: string
  departamento?: string
  empreendedorCnpj?: string
  empreendedorCpf?: string
  empreendedorNome?: string
  empreendimentoCnpj?: string
  empreendimentoCpf?: string
  empreendimentoIdentificador?: string
  empreendimentoNome?: string
  excluido?: string
  executada?: string
  informacoesComplementares?: string
  licencaDescricao?: string
  licencaDescricaoTipoOutras?: string
  licencaEmissao?: string
  licencaNumero?: string
  licencaTipo?: string
  licencaVencimento?: string
  nomeLicenciador?: string
  numero?: number
  numeroProtocolo?: string
  responsavel?: string
  sincronizado?: string
  situacaoTexto?: string
  situacaoTexto15?: string
  situacaoTexto30?: string
  situacaoTexto7?: string
  vencimento?: string
  public get objeto(): interfaceAlertasCondicionantes {
    return {
      atualizado_view: this.atualizadoView,
      codigo: this.codigo,
      codigo_condicionante: this.codigoCondicionante,
      codigo_corporativo: this.codigoCorporativo,
      codigo_empreendedor: this.codigoEmpreendedor,
      codigo_empreendimento: this.codigoEmpreendimento,
      codigo_licenca: this.codigoLicenca,
      codigo_licenciador: this.codigoLicenciador,
      codigo_usuario_alteracao: this.codigoUsuarioAlteracao,
      codigo_usuario_inclusao: this.codigoUsuarioInclusao,
      codigos_usuarios_responsaveis: this.codigosUsuariosResponsaveis,
      condicionante_alerta_dias: this.condicionanteAlertaDias,
      condicionante_descricao: this.condicionanteDescricao,
      condicionante_informacoes_complementares: this
        .condicionanteInformacoesComplementares,
      condicionante_itervalo: this.condicionanteItervalo,
      condicionante_recorrencia: this.condicionanteRecorrencia,
      data_alerta: this.dataAlerta,
      data_hora_alteracao: this.dataHoraAlteracao,
      data_hora_inclusao: this.dataHoraInclusao,
      departamento: this.departamento,
      empreendedor_cnpj: this.empreendedorCnpj,
      empreendedor_cpf: this.empreendedorCpf,
      empreendedor_nome: this.empreendedorNome,
      empreendimento_cnpj: this.empreendimentoCnpj,
      empreendimento_cpf: this.empreendimentoCpf,
      empreendimento_identificador: this.empreendimentoIdentificador,
      empreendimento_nome: this.empreendimentoNome,
      excluido: this.excluido,
      executada: this.executada,
      informacoes_complementares: this.informacoesComplementares,
      licenca_descricao: this.licencaDescricao,
      licenca_descricao_tipo_outras: this.licencaDescricaoTipoOutras,
      licenca_emissao: this.licencaEmissao,
      licenca_numero: this.licencaNumero,
      licenca_tipo: this.licencaTipo,
      licenca_vencimento: this.licencaVencimento,
      nome_licenciador: this.nomeLicenciador,
      numero: this.numero,
      numero_protocolo: this.numeroProtocolo,
      responsavel: this.responsavel,
      sincronizado: this.sincronizado,
      situacao_texto: this.situacaoTexto,
      situacao_texto_15: this.situacaoTexto15,
      situacao_texto_30: this.situacaoTexto30,
      situacao_texto_7: this.situacaoTexto7,
      vencimento: this.vencimento,
    }
  }
  public set objeto(objeto: interfaceAlertasCondicionantes) {
    this.atualizadoView = objeto.atualizado_view
    this.codigo = objeto.codigo
    this.codigoCondicionante = objeto.codigo_condicionante
    this.codigoCorporativo = objeto.codigo_corporativo
    this.codigoEmpreendedor = objeto.codigo_empreendedor
    this.codigoEmpreendimento = objeto.codigo_empreendimento
    this.codigoLicenca = objeto.codigo_licenca
    this.codigoLicenciador = objeto.codigo_licenciador
    this.codigoUsuarioAlteracao = objeto.codigo_usuario_alteracao
    this.codigoUsuarioInclusao = objeto.codigo_usuario_inclusao
    this.codigosUsuariosResponsaveis = objeto.codigos_usuarios_responsaveis
    this.condicionanteAlertaDias = objeto.condicionante_alerta_dias
    this.condicionanteDescricao = objeto.condicionante_descricao
    this.condicionanteInformacoesComplementares =
      objeto.condicionante_informacoes_complementares
    this.condicionanteItervalo = objeto.condicionante_itervalo
    this.condicionanteRecorrencia = objeto.condicionante_recorrencia
    this.dataAlerta = objeto.data_alerta
    this.dataHoraAlteracao = objeto.data_hora_alteracao
    this.dataHoraInclusao = objeto.data_hora_inclusao
    this.departamento = objeto.departamento
    this.empreendedorCnpj = objeto.empreendedor_cnpj
    this.empreendedorCpf = objeto.empreendedor_cpf
    this.empreendedorNome = objeto.empreendedor_nome
    this.empreendimentoCnpj = objeto.empreendimento_cnpj
    this.empreendimentoCpf = objeto.empreendimento_cpf
    this.empreendimentoIdentificador = objeto.empreendimento_identificador
    this.empreendimentoNome = objeto.empreendimento_nome
    this.excluido = objeto.excluido
    this.executada = objeto.executada
    this.informacoesComplementares = objeto.informacoes_complementares
    this.licencaDescricao = objeto.licenca_descricao
    this.licencaDescricaoTipoOutras = objeto.licenca_descricao_tipo_outras
    this.licencaEmissao = objeto.licenca_emissao
    this.licencaNumero = objeto.licenca_numero
    this.licencaTipo = objeto.licenca_tipo
    this.licencaVencimento = objeto.licenca_vencimento
    this.nomeLicenciador = objeto.nome_licenciador
    this.numero = objeto.numero
    this.numeroProtocolo = objeto.numero_protocolo
    this.responsavel = objeto.responsavel
    this.sincronizado = objeto.sincronizado
    this.situacaoTexto = objeto.situacao_texto
    this.situacaoTexto15 = objeto.situacao_texto_15
    this.situacaoTexto30 = objeto.situacao_texto_30
    this.situacaoTexto7 = objeto.situacao_texto_7
    this.vencimento = objeto.vencimento
  }
}
export interface interfaceAlertasLicencas extends interfaceRecurso {
  alerta?: string
  alerta_dias?: number
  atualizado_view?: string
  codigo?: string
  codigo_corporativo?: string
  codigo_empreendedor?: string
  codigo_empreendimento?: string
  codigo_licenca_anterior?: string
  codigo_licenca_posterior?: string
  codigo_licenciador?: string
  codigo_usuario_alteracao?: string
  codigo_usuario_inclusao?: string
  codigos_usuarios_responsaveis?: string[]
  data_hora_alteracao?: string
  data_hora_inclusao?: string
  data_protocolo_renovacao?: string
  descricao?: string
  descricao_tipo_outras?: string
  emissao?: string
  empreendedor_cnpj?: string
  empreendedor_cpf?: string
  empreendedor_nome?: string
  empreendimento_cnpj?: string
  empreendimento_cpf?: string
  empreendimento_identificador?: string
  empreendimento_nome?: string
  excluido?: string
  informacoes_complementares?: string
  nome_licenciador?: string
  numero?: string
  numero_processo?: string
  numero_protocolo_renovacao?: string
  observacao_protocolo_renovacao?: string
  renovacao?: string
  renovacao_dias?: number
  sincronizado?: string
  situacao_texto?: string
  situacao_texto_15?: string
  situacao_texto_30?: string
  situacao_texto_7?: string
  status?: number
  tipo?: string
  vencimento?: string
  vencimento_meses?: number
}
export class ClasseAlertasLicencas extends Recurso {
  recurso = 'alertas_licencas'
  alerta?: string
  alertaDias?: number
  atualizadoView?: string
  codigo?: string
  codigoCorporativo?: string
  codigoEmpreendedor?: string
  codigoEmpreendimento?: string
  codigoLicencaAnterior?: string
  codigoLicencaPosterior?: string
  codigoLicenciador?: string
  codigoUsuarioAlteracao?: string
  codigoUsuarioInclusao?: string
  codigosUsuariosResponsaveis?: string[]
  dataHoraAlteracao?: string
  dataHoraInclusao?: string
  dataProtocoloRenovacao?: string
  descricao?: string
  descricaoTipoOutras?: string
  emissao?: string
  empreendedorCnpj?: string
  empreendedorCpf?: string
  empreendedorNome?: string
  empreendimentoCnpj?: string
  empreendimentoCpf?: string
  empreendimentoIdentificador?: string
  empreendimentoNome?: string
  excluido?: string
  informacoesComplementares?: string
  nomeLicenciador?: string
  numero?: string
  numeroProcesso?: string
  numeroProtocoloRenovacao?: string
  observacaoProtocoloRenovacao?: string
  renovacao?: string
  renovacaoDias?: number
  sincronizado?: string
  situacaoTexto?: string
  situacaoTexto15?: string
  situacaoTexto30?: string
  situacaoTexto7?: string
  status?: number
  tipo?: string
  vencimento?: string
  vencimentoMeses?: number
  public get objeto(): interfaceAlertasLicencas {
    return {
      alerta: this.alerta,
      alerta_dias: this.alertaDias,
      atualizado_view: this.atualizadoView,
      codigo: this.codigo,
      codigo_corporativo: this.codigoCorporativo,
      codigo_empreendedor: this.codigoEmpreendedor,
      codigo_empreendimento: this.codigoEmpreendimento,
      codigo_licenca_anterior: this.codigoLicencaAnterior,
      codigo_licenca_posterior: this.codigoLicencaPosterior,
      codigo_licenciador: this.codigoLicenciador,
      codigo_usuario_alteracao: this.codigoUsuarioAlteracao,
      codigo_usuario_inclusao: this.codigoUsuarioInclusao,
      codigos_usuarios_responsaveis: this.codigosUsuariosResponsaveis,
      data_hora_alteracao: this.dataHoraAlteracao,
      data_hora_inclusao: this.dataHoraInclusao,
      data_protocolo_renovacao: this.dataProtocoloRenovacao,
      descricao: this.descricao,
      descricao_tipo_outras: this.descricaoTipoOutras,
      emissao: this.emissao,
      empreendedor_cnpj: this.empreendedorCnpj,
      empreendedor_cpf: this.empreendedorCpf,
      empreendedor_nome: this.empreendedorNome,
      empreendimento_cnpj: this.empreendimentoCnpj,
      empreendimento_cpf: this.empreendimentoCpf,
      empreendimento_identificador: this.empreendimentoIdentificador,
      empreendimento_nome: this.empreendimentoNome,
      excluido: this.excluido,
      informacoes_complementares: this.informacoesComplementares,
      nome_licenciador: this.nomeLicenciador,
      numero: this.numero,
      numero_processo: this.numeroProcesso,
      numero_protocolo_renovacao: this.numeroProtocoloRenovacao,
      observacao_protocolo_renovacao: this.observacaoProtocoloRenovacao,
      renovacao: this.renovacao,
      renovacao_dias: this.renovacaoDias,
      sincronizado: this.sincronizado,
      situacao_texto: this.situacaoTexto,
      situacao_texto_15: this.situacaoTexto15,
      situacao_texto_30: this.situacaoTexto30,
      situacao_texto_7: this.situacaoTexto7,
      status: this.status,
      tipo: this.tipo,
      vencimento: this.vencimento,
      vencimento_meses: this.vencimentoMeses,
    }
  }
  public set objeto(objeto: interfaceAlertasLicencas) {
    this.alerta = objeto.alerta
    this.alertaDias = objeto.alerta_dias
    this.atualizadoView = objeto.atualizado_view
    this.codigo = objeto.codigo
    this.codigoCorporativo = objeto.codigo_corporativo
    this.codigoEmpreendedor = objeto.codigo_empreendedor
    this.codigoEmpreendimento = objeto.codigo_empreendimento
    this.codigoLicencaAnterior = objeto.codigo_licenca_anterior
    this.codigoLicencaPosterior = objeto.codigo_licenca_posterior
    this.codigoLicenciador = objeto.codigo_licenciador
    this.codigoUsuarioAlteracao = objeto.codigo_usuario_alteracao
    this.codigoUsuarioInclusao = objeto.codigo_usuario_inclusao
    this.codigosUsuariosResponsaveis = objeto.codigos_usuarios_responsaveis
    this.dataHoraAlteracao = objeto.data_hora_alteracao
    this.dataHoraInclusao = objeto.data_hora_inclusao
    this.dataProtocoloRenovacao = objeto.data_protocolo_renovacao
    this.descricao = objeto.descricao
    this.descricaoTipoOutras = objeto.descricao_tipo_outras
    this.emissao = objeto.emissao
    this.empreendedorCnpj = objeto.empreendedor_cnpj
    this.empreendedorCpf = objeto.empreendedor_cpf
    this.empreendedorNome = objeto.empreendedor_nome
    this.empreendimentoCnpj = objeto.empreendimento_cnpj
    this.empreendimentoCpf = objeto.empreendimento_cpf
    this.empreendimentoIdentificador = objeto.empreendimento_identificador
    this.empreendimentoNome = objeto.empreendimento_nome
    this.excluido = objeto.excluido
    this.informacoesComplementares = objeto.informacoes_complementares
    this.nomeLicenciador = objeto.nome_licenciador
    this.numero = objeto.numero
    this.numeroProcesso = objeto.numero_processo
    this.numeroProtocoloRenovacao = objeto.numero_protocolo_renovacao
    this.observacaoProtocoloRenovacao = objeto.observacao_protocolo_renovacao
    this.renovacao = objeto.renovacao
    this.renovacaoDias = objeto.renovacao_dias
    this.sincronizado = objeto.sincronizado
    this.situacaoTexto = objeto.situacao_texto
    this.situacaoTexto15 = objeto.situacao_texto_15
    this.situacaoTexto30 = objeto.situacao_texto_30
    this.situacaoTexto7 = objeto.situacao_texto_7
    this.status = objeto.status
    this.tipo = objeto.tipo
    this.vencimento = objeto.vencimento
    this.vencimentoMeses = objeto.vencimento_meses
  }
}
export interface interfaceAlertasProjetos extends interfaceRecurso {
  alerta_dias?: number
  atualizado_view?: string
  codigo?: string
  codigo_corporativo?: string
  codigo_empreendedor?: string
  codigo_empreendimento?: string
  codigo_licenciador?: string
  codigo_usuario_alteracao?: string
  codigo_usuario_inclusao?: string
  codigos_usuarios_responsaveis?: string[]
  data_alerta?: string
  data_hora_alteracao?: string
  data_hora_inclusao?: string
  descricao?: string
  empreendedor_cnpj?: string
  empreendedor_cpf?: string
  empreendedor_nome?: string
  empreendimento_cnpj?: string
  empreendimento_cpf?: string
  empreendimento_identificador?: string
  empreendimento_nome?: string
  excluido?: string
  identificador?: string
  licenciador_nome?: string
  numero_processo?: string
  orcamento?: number
  prazo?: string
  sincronizado?: string
  situacao?: number
  situacao_texto?: string
  situacao_texto_15?: string
  situacao_texto_30?: string
  situacao_texto_7?: string
  titulo?: string
}
export class ClasseAlertasProjetos extends Recurso {
  recurso = 'alertas_projetos'
  alertaDias?: number
  atualizadoView?: string
  codigo?: string
  codigoCorporativo?: string
  codigoEmpreendedor?: string
  codigoEmpreendimento?: string
  codigoLicenciador?: string
  codigoUsuarioAlteracao?: string
  codigoUsuarioInclusao?: string
  codigosUsuariosResponsaveis?: string[]
  dataAlerta?: string
  dataHoraAlteracao?: string
  dataHoraInclusao?: string
  descricao?: string
  empreendedorCnpj?: string
  empreendedorCpf?: string
  empreendedorNome?: string
  empreendimentoCnpj?: string
  empreendimentoCpf?: string
  empreendimentoIdentificador?: string
  empreendimentoNome?: string
  excluido?: string
  identificador?: string
  licenciadorNome?: string
  numeroProcesso?: string
  orcamento?: number
  prazo?: string
  sincronizado?: string
  situacao?: number
  situacaoTexto?: string
  situacaoTexto15?: string
  situacaoTexto30?: string
  situacaoTexto7?: string
  titulo?: string
  public get objeto(): interfaceAlertasProjetos {
    return {
      alerta_dias: this.alertaDias,
      atualizado_view: this.atualizadoView,
      codigo: this.codigo,
      codigo_corporativo: this.codigoCorporativo,
      codigo_empreendedor: this.codigoEmpreendedor,
      codigo_empreendimento: this.codigoEmpreendimento,
      codigo_licenciador: this.codigoLicenciador,
      codigo_usuario_alteracao: this.codigoUsuarioAlteracao,
      codigo_usuario_inclusao: this.codigoUsuarioInclusao,
      codigos_usuarios_responsaveis: this.codigosUsuariosResponsaveis,
      data_alerta: this.dataAlerta,
      data_hora_alteracao: this.dataHoraAlteracao,
      data_hora_inclusao: this.dataHoraInclusao,
      descricao: this.descricao,
      empreendedor_cnpj: this.empreendedorCnpj,
      empreendedor_cpf: this.empreendedorCpf,
      empreendedor_nome: this.empreendedorNome,
      empreendimento_cnpj: this.empreendimentoCnpj,
      empreendimento_cpf: this.empreendimentoCpf,
      empreendimento_identificador: this.empreendimentoIdentificador,
      empreendimento_nome: this.empreendimentoNome,
      excluido: this.excluido,
      identificador: this.identificador,
      licenciador_nome: this.licenciadorNome,
      numero_processo: this.numeroProcesso,
      orcamento: this.orcamento,
      prazo: this.prazo,
      sincronizado: this.sincronizado,
      situacao: this.situacao,
      situacao_texto: this.situacaoTexto,
      situacao_texto_15: this.situacaoTexto15,
      situacao_texto_30: this.situacaoTexto30,
      situacao_texto_7: this.situacaoTexto7,
      titulo: this.titulo,
    }
  }
  public set objeto(objeto: interfaceAlertasProjetos) {
    this.alertaDias = objeto.alerta_dias
    this.atualizadoView = objeto.atualizado_view
    this.codigo = objeto.codigo
    this.codigoCorporativo = objeto.codigo_corporativo
    this.codigoEmpreendedor = objeto.codigo_empreendedor
    this.codigoEmpreendimento = objeto.codigo_empreendimento
    this.codigoLicenciador = objeto.codigo_licenciador
    this.codigoUsuarioAlteracao = objeto.codigo_usuario_alteracao
    this.codigoUsuarioInclusao = objeto.codigo_usuario_inclusao
    this.codigosUsuariosResponsaveis = objeto.codigos_usuarios_responsaveis
    this.dataAlerta = objeto.data_alerta
    this.dataHoraAlteracao = objeto.data_hora_alteracao
    this.dataHoraInclusao = objeto.data_hora_inclusao
    this.descricao = objeto.descricao
    this.empreendedorCnpj = objeto.empreendedor_cnpj
    this.empreendedorCpf = objeto.empreendedor_cpf
    this.empreendedorNome = objeto.empreendedor_nome
    this.empreendimentoCnpj = objeto.empreendimento_cnpj
    this.empreendimentoCpf = objeto.empreendimento_cpf
    this.empreendimentoIdentificador = objeto.empreendimento_identificador
    this.empreendimentoNome = objeto.empreendimento_nome
    this.excluido = objeto.excluido
    this.identificador = objeto.identificador
    this.licenciadorNome = objeto.licenciador_nome
    this.numeroProcesso = objeto.numero_processo
    this.orcamento = objeto.orcamento
    this.prazo = objeto.prazo
    this.sincronizado = objeto.sincronizado
    this.situacao = objeto.situacao
    this.situacaoTexto = objeto.situacao_texto
    this.situacaoTexto15 = objeto.situacao_texto_15
    this.situacaoTexto30 = objeto.situacao_texto_30
    this.situacaoTexto7 = objeto.situacao_texto_7
    this.titulo = objeto.titulo
  }
}
export interface interfaceAlertasTarefasProjetos extends interfaceRecurso {
  alerta_dias?: number
  atualizado_view?: string
  codigo?: string
  codigo_corporativo?: string
  codigo_empreendedor?: string
  codigo_empreendimento?: string
  codigo_licenciador?: string
  codigo_projeto?: string
  codigo_usuario_alteracao?: string
  codigo_usuario_inclusao?: string
  codigos_usuarios_responsaveis?: string[]
  custo?: number
  data_alerta?: string
  data_hora_alteracao?: string
  data_hora_inclusao?: string
  descricao?: string
  empreendedor_cnpj?: string
  empreendedor_cpf?: string
  empreendedor_nome?: string
  empreendimento_cnpj?: string
  empreendimento_cpf?: string
  empreendimento_identificador?: string
  empreendimento_nome?: string
  excluido?: string
  licenciador_nome?: string
  prazo?: string
  prioridade?: number
  projeto_alerta_dias?: number
  projeto_data_alerta?: string
  projeto_descricao?: string
  projeto_identificador?: string
  projeto_numero_processo?: string
  projeto_orcamento?: number
  projeto_prazo?: string
  projeto_situacao?: number
  projeto_titulo?: string
  sincronizado?: string
  situacao?: number
  situacao_texto?: string
  situacao_texto_15?: string
  situacao_texto_30?: string
  situacao_texto_7?: string
  titulo?: string
}
export class ClasseAlertasTarefasProjetos extends Recurso {
  recurso = 'alertas_tarefas_projetos'
  alertaDias?: number
  atualizadoView?: string
  codigo?: string
  codigoCorporativo?: string
  codigoEmpreendedor?: string
  codigoEmpreendimento?: string
  codigoLicenciador?: string
  codigoProjeto?: string
  codigoUsuarioAlteracao?: string
  codigoUsuarioInclusao?: string
  codigosUsuariosResponsaveis?: string[]
  custo?: number
  dataAlerta?: string
  dataHoraAlteracao?: string
  dataHoraInclusao?: string
  descricao?: string
  empreendedorCnpj?: string
  empreendedorCpf?: string
  empreendedorNome?: string
  empreendimentoCnpj?: string
  empreendimentoCpf?: string
  empreendimentoIdentificador?: string
  empreendimentoNome?: string
  excluido?: string
  licenciadorNome?: string
  prazo?: string
  prioridade?: number
  projetoAlertaDias?: number
  projetoDataAlerta?: string
  projetoDescricao?: string
  projetoIdentificador?: string
  projetoNumeroProcesso?: string
  projetoOrcamento?: number
  projetoPrazo?: string
  projetoSituacao?: number
  projetoTitulo?: string
  sincronizado?: string
  situacao?: number
  situacaoTexto?: string
  situacaoTexto15?: string
  situacaoTexto30?: string
  situacaoTexto7?: string
  titulo?: string
  public get objeto(): interfaceAlertasTarefasProjetos {
    return {
      alerta_dias: this.alertaDias,
      atualizado_view: this.atualizadoView,
      codigo: this.codigo,
      codigo_corporativo: this.codigoCorporativo,
      codigo_empreendedor: this.codigoEmpreendedor,
      codigo_empreendimento: this.codigoEmpreendimento,
      codigo_licenciador: this.codigoLicenciador,
      codigo_projeto: this.codigoProjeto,
      codigo_usuario_alteracao: this.codigoUsuarioAlteracao,
      codigo_usuario_inclusao: this.codigoUsuarioInclusao,
      codigos_usuarios_responsaveis: this.codigosUsuariosResponsaveis,
      custo: this.custo,
      data_alerta: this.dataAlerta,
      data_hora_alteracao: this.dataHoraAlteracao,
      data_hora_inclusao: this.dataHoraInclusao,
      descricao: this.descricao,
      empreendedor_cnpj: this.empreendedorCnpj,
      empreendedor_cpf: this.empreendedorCpf,
      empreendedor_nome: this.empreendedorNome,
      empreendimento_cnpj: this.empreendimentoCnpj,
      empreendimento_cpf: this.empreendimentoCpf,
      empreendimento_identificador: this.empreendimentoIdentificador,
      empreendimento_nome: this.empreendimentoNome,
      excluido: this.excluido,
      licenciador_nome: this.licenciadorNome,
      prazo: this.prazo,
      prioridade: this.prioridade,
      projeto_alerta_dias: this.projetoAlertaDias,
      projeto_data_alerta: this.projetoDataAlerta,
      projeto_descricao: this.projetoDescricao,
      projeto_identificador: this.projetoIdentificador,
      projeto_numero_processo: this.projetoNumeroProcesso,
      projeto_orcamento: this.projetoOrcamento,
      projeto_prazo: this.projetoPrazo,
      projeto_situacao: this.projetoSituacao,
      projeto_titulo: this.projetoTitulo,
      sincronizado: this.sincronizado,
      situacao: this.situacao,
      situacao_texto: this.situacaoTexto,
      situacao_texto_15: this.situacaoTexto15,
      situacao_texto_30: this.situacaoTexto30,
      situacao_texto_7: this.situacaoTexto7,
      titulo: this.titulo,
    }
  }
  public set objeto(objeto: interfaceAlertasTarefasProjetos) {
    this.alertaDias = objeto.alerta_dias
    this.atualizadoView = objeto.atualizado_view
    this.codigo = objeto.codigo
    this.codigoCorporativo = objeto.codigo_corporativo
    this.codigoEmpreendedor = objeto.codigo_empreendedor
    this.codigoEmpreendimento = objeto.codigo_empreendimento
    this.codigoLicenciador = objeto.codigo_licenciador
    this.codigoProjeto = objeto.codigo_projeto
    this.codigoUsuarioAlteracao = objeto.codigo_usuario_alteracao
    this.codigoUsuarioInclusao = objeto.codigo_usuario_inclusao
    this.codigosUsuariosResponsaveis = objeto.codigos_usuarios_responsaveis
    this.custo = objeto.custo
    this.dataAlerta = objeto.data_alerta
    this.dataHoraAlteracao = objeto.data_hora_alteracao
    this.dataHoraInclusao = objeto.data_hora_inclusao
    this.descricao = objeto.descricao
    this.empreendedorCnpj = objeto.empreendedor_cnpj
    this.empreendedorCpf = objeto.empreendedor_cpf
    this.empreendedorNome = objeto.empreendedor_nome
    this.empreendimentoCnpj = objeto.empreendimento_cnpj
    this.empreendimentoCpf = objeto.empreendimento_cpf
    this.empreendimentoIdentificador = objeto.empreendimento_identificador
    this.empreendimentoNome = objeto.empreendimento_nome
    this.excluido = objeto.excluido
    this.licenciadorNome = objeto.licenciador_nome
    this.prazo = objeto.prazo
    this.prioridade = objeto.prioridade
    this.projetoAlertaDias = objeto.projeto_alerta_dias
    this.projetoDataAlerta = objeto.projeto_data_alerta
    this.projetoDescricao = objeto.projeto_descricao
    this.projetoIdentificador = objeto.projeto_identificador
    this.projetoNumeroProcesso = objeto.projeto_numero_processo
    this.projetoOrcamento = objeto.projeto_orcamento
    this.projetoPrazo = objeto.projeto_prazo
    this.projetoSituacao = objeto.projeto_situacao
    this.projetoTitulo = objeto.projeto_titulo
    this.sincronizado = objeto.sincronizado
    this.situacao = objeto.situacao
    this.situacaoTexto = objeto.situacao_texto
    this.situacaoTexto15 = objeto.situacao_texto_15
    this.situacaoTexto30 = objeto.situacao_texto_30
    this.situacaoTexto7 = objeto.situacao_texto_7
    this.titulo = objeto.titulo
  }
}
export interface interfaceAnexos extends interfaceRecurso {
  codigo?: string
  codigo_corporativo?: string
  codigo_origem?: string
  codigo_usuario_alteracao?: string
  codigo_usuario_inclusao?: string
  data_hora_alteracao?: string
  data_hora_inclusao?: string
  descricao?: string
  excluido?: string
  nome_arquivo?: string
  observacao?: string
  sincronizado?: string
}
export class ClasseAnexos extends Recurso {
  recurso = 'anexos'
  codigo?: string
  codigoCorporativo?: string
  codigoOrigem?: string
  codigoUsuarioAlteracao?: string
  codigoUsuarioInclusao?: string
  dataHoraAlteracao?: string
  dataHoraInclusao?: string
  descricao?: string
  excluido?: string
  nomeArquivo?: string
  observacao?: string
  sincronizado?: string
  public get objeto(): interfaceAnexos {
    return {
      codigo: this.codigo,
      codigo_corporativo: this.codigoCorporativo,
      codigo_origem: this.codigoOrigem,
      codigo_usuario_alteracao: this.codigoUsuarioAlteracao,
      codigo_usuario_inclusao: this.codigoUsuarioInclusao,
      data_hora_alteracao: this.dataHoraAlteracao,
      data_hora_inclusao: this.dataHoraInclusao,
      descricao: this.descricao,
      excluido: this.excluido,
      nome_arquivo: this.nomeArquivo,
      observacao: this.observacao,
      sincronizado: this.sincronizado,
    }
  }
  public set objeto(objeto: interfaceAnexos) {
    this.codigo = objeto.codigo
    this.codigoCorporativo = objeto.codigo_corporativo
    this.codigoOrigem = objeto.codigo_origem
    this.codigoUsuarioAlteracao = objeto.codigo_usuario_alteracao
    this.codigoUsuarioInclusao = objeto.codigo_usuario_inclusao
    this.dataHoraAlteracao = objeto.data_hora_alteracao
    this.dataHoraInclusao = objeto.data_hora_inclusao
    this.descricao = objeto.descricao
    this.excluido = objeto.excluido
    this.nomeArquivo = objeto.nome_arquivo
    this.observacao = objeto.observacao
    this.sincronizado = objeto.sincronizado
  }
}
export interface interfaceAuditoria extends interfaceRecurso {
  codigo?: string
  codigo_corporativo?: string
  codigo_registro?: string
  codigo_usuario_alteracao?: string
  coluna?: string
  data_hora_alteracao?: string
  tabela?: string
  valor_anterior?: string
  valor_posterior?: string
}
export class ClasseAuditoria extends Recurso {
  recurso = 'auditoria'
  codigo?: string
  codigoCorporativo?: string
  codigoRegistro?: string
  codigoUsuarioAlteracao?: string
  coluna?: string
  dataHoraAlteracao?: string
  tabela?: string
  valorAnterior?: string
  valorPosterior?: string
  public get objeto(): interfaceAuditoria {
    return {
      codigo: this.codigo,
      codigo_corporativo: this.codigoCorporativo,
      codigo_registro: this.codigoRegistro,
      codigo_usuario_alteracao: this.codigoUsuarioAlteracao,
      coluna: this.coluna,
      data_hora_alteracao: this.dataHoraAlteracao,
      tabela: this.tabela,
      valor_anterior: this.valorAnterior,
      valor_posterior: this.valorPosterior,
    }
  }
  public set objeto(objeto: interfaceAuditoria) {
    this.codigo = objeto.codigo
    this.codigoCorporativo = objeto.codigo_corporativo
    this.codigoRegistro = objeto.codigo_registro
    this.codigoUsuarioAlteracao = objeto.codigo_usuario_alteracao
    this.coluna = objeto.coluna
    this.dataHoraAlteracao = objeto.data_hora_alteracao
    this.tabela = objeto.tabela
    this.valorAnterior = objeto.valor_anterior
    this.valorPosterior = objeto.valor_posterior
  }
}
export interface interfaceCep extends interfaceRecurso {
  bairro?: string
  cep?: string
  ibge?: number
  localidade?: string
  logradouro?: string
  uf?: string
}
export class ClasseCep extends Recurso {
  recurso = 'cep'
  bairro?: string
  cep?: string
  ibge?: number
  localidade?: string
  logradouro?: string
  uf?: string
  public get objeto(): interfaceCep {
    return {
      bairro: this.bairro,
      cep: this.cep,
      ibge: this.ibge,
      localidade: this.localidade,
      logradouro: this.logradouro,
      uf: this.uf,
    }
  }
  public set objeto(objeto: interfaceCep) {
    this.bairro = objeto.bairro
    this.cep = objeto.cep
    this.ibge = objeto.ibge
    this.localidade = objeto.localidade
    this.logradouro = objeto.logradouro
    this.uf = objeto.uf
  }
}
export interface interfaceCidades extends interfaceRecurso {
  codigo?: number
  codigo_estado?: number
  nome?: string
}
export class ClasseCidades extends Recurso {
  recurso = 'cidades'
  codigo?: number
  codigoEstado?: number
  nome?: string
  public get objeto(): interfaceCidades {
    return {
      codigo: this.codigo,
      codigo_estado: this.codigoEstado,
      nome: this.nome,
    }
  }
  public set objeto(objeto: interfaceCidades) {
    this.codigo = objeto.codigo
    this.codigoEstado = objeto.codigo_estado
    this.nome = objeto.nome
  }
}
export interface interfaceComentarios extends interfaceRecurso {
  codigo?: string
  codigo_corporativo?: string
  codigo_origem?: string
  codigo_usuario_alteracao?: string
  codigo_usuario_inclusao?: string
  comentario?: string
  data_hora_alteracao?: string
  data_hora_inclusao?: string
  excluido?: string
  sincronizado?: string
}
export class ClasseComentarios extends Recurso {
  recurso = 'comentarios'
  codigo?: string
  codigoCorporativo?: string
  codigoOrigem?: string
  codigoUsuarioAlteracao?: string
  codigoUsuarioInclusao?: string
  comentario?: string
  dataHoraAlteracao?: string
  dataHoraInclusao?: string
  excluido?: string
  sincronizado?: string
  public get objeto(): interfaceComentarios {
    return {
      codigo: this.codigo,
      codigo_corporativo: this.codigoCorporativo,
      codigo_origem: this.codigoOrigem,
      codigo_usuario_alteracao: this.codigoUsuarioAlteracao,
      codigo_usuario_inclusao: this.codigoUsuarioInclusao,
      comentario: this.comentario,
      data_hora_alteracao: this.dataHoraAlteracao,
      data_hora_inclusao: this.dataHoraInclusao,
      excluido: this.excluido,
      sincronizado: this.sincronizado,
    }
  }
  public set objeto(objeto: interfaceComentarios) {
    this.codigo = objeto.codigo
    this.codigoCorporativo = objeto.codigo_corporativo
    this.codigoOrigem = objeto.codigo_origem
    this.codigoUsuarioAlteracao = objeto.codigo_usuario_alteracao
    this.codigoUsuarioInclusao = objeto.codigo_usuario_inclusao
    this.comentario = objeto.comentario
    this.dataHoraAlteracao = objeto.data_hora_alteracao
    this.dataHoraInclusao = objeto.data_hora_inclusao
    this.excluido = objeto.excluido
    this.sincronizado = objeto.sincronizado
  }
}
export interface interfaceCompromissoExecucoes extends interfaceRecurso {
  codigo?: string
  codigo_compromisso?: string
  codigo_corporativo?: string
  codigo_usuario_alteracao?: string
  codigo_usuario_inclusao?: string
  data_hora_alteracao?: string
  data_hora_inclusao?: string
  excluido?: string
  executada?: string
  informacoes_complementares?: string
  numero?: number
  sincronizado?: string
  vencimento?: string
}
export class ClasseCompromissoExecucoes extends Recurso {
  recurso = 'compromisso_execucoes'
  codigo?: string
  codigoCompromisso?: string
  codigoCorporativo?: string
  codigoUsuarioAlteracao?: string
  codigoUsuarioInclusao?: string
  dataHoraAlteracao?: string
  dataHoraInclusao?: string
  excluido?: string
  executada?: string
  informacoesComplementares?: string
  numero?: number
  sincronizado?: string
  vencimento?: string
  public get objeto(): interfaceCompromissoExecucoes {
    return {
      codigo: this.codigo,
      codigo_compromisso: this.codigoCompromisso,
      codigo_corporativo: this.codigoCorporativo,
      codigo_usuario_alteracao: this.codigoUsuarioAlteracao,
      codigo_usuario_inclusao: this.codigoUsuarioInclusao,
      data_hora_alteracao: this.dataHoraAlteracao,
      data_hora_inclusao: this.dataHoraInclusao,
      excluido: this.excluido,
      executada: this.executada,
      informacoes_complementares: this.informacoesComplementares,
      numero: this.numero,
      sincronizado: this.sincronizado,
      vencimento: this.vencimento,
    }
  }
  public set objeto(objeto: interfaceCompromissoExecucoes) {
    this.codigo = objeto.codigo
    this.codigoCompromisso = objeto.codigo_compromisso
    this.codigoCorporativo = objeto.codigo_corporativo
    this.codigoUsuarioAlteracao = objeto.codigo_usuario_alteracao
    this.codigoUsuarioInclusao = objeto.codigo_usuario_inclusao
    this.dataHoraAlteracao = objeto.data_hora_alteracao
    this.dataHoraInclusao = objeto.data_hora_inclusao
    this.excluido = objeto.excluido
    this.executada = objeto.executada
    this.informacoesComplementares = objeto.informacoes_complementares
    this.numero = objeto.numero
    this.sincronizado = objeto.sincronizado
    this.vencimento = objeto.vencimento
  }
}
export interface interfaceCompromissos extends interfaceRecurso {
  alerta_dias?: number
  codigo?: string
  codigo_corporativo?: string
  codigo_empreendedor?: string
  codigo_empreendimento?: string
  codigo_licenciador?: string
  codigo_usuario_alteracao?: string
  codigo_usuario_inclusao?: string
  data_hora_alteracao?: string
  data_hora_inclusao?: string
  descricao?: string
  excluido?: string
  intervalo?: number
  obrigacao_legal?: string
  primeira_execucao?: string
  quantidade_recorrencia?: number
  recorrencia?: string
  sincronizado?: string
  tipo?: string
  titulo?: string
}
export class ClasseCompromissos extends Recurso {
  recurso = 'compromissos'
  alertaDias?: number
  codigo?: string
  codigoCorporativo?: string
  codigoEmpreendedor?: string
  codigoEmpreendimento?: string
  codigoLicenciador?: string
  codigoUsuarioAlteracao?: string
  codigoUsuarioInclusao?: string
  dataHoraAlteracao?: string
  dataHoraInclusao?: string
  descricao?: string
  excluido?: string
  intervalo?: number
  obrigacaoLegal?: string
  primeiraExecucao?: string
  quantidadeRecorrencia?: number
  recorrencia?: string
  sincronizado?: string
  tipo?: string
  titulo?: string
  public get objeto(): interfaceCompromissos {
    return {
      alerta_dias: this.alertaDias,
      codigo: this.codigo,
      codigo_corporativo: this.codigoCorporativo,
      codigo_empreendedor: this.codigoEmpreendedor,
      codigo_empreendimento: this.codigoEmpreendimento,
      codigo_licenciador: this.codigoLicenciador,
      codigo_usuario_alteracao: this.codigoUsuarioAlteracao,
      codigo_usuario_inclusao: this.codigoUsuarioInclusao,
      data_hora_alteracao: this.dataHoraAlteracao,
      data_hora_inclusao: this.dataHoraInclusao,
      descricao: this.descricao,
      excluido: this.excluido,
      intervalo: this.intervalo,
      obrigacao_legal: this.obrigacaoLegal,
      primeira_execucao: this.primeiraExecucao,
      quantidade_recorrencia: this.quantidadeRecorrencia,
      recorrencia: this.recorrencia,
      sincronizado: this.sincronizado,
      tipo: this.tipo,
      titulo: this.titulo,
    }
  }
  public set objeto(objeto: interfaceCompromissos) {
    this.alertaDias = objeto.alerta_dias
    this.codigo = objeto.codigo
    this.codigoCorporativo = objeto.codigo_corporativo
    this.codigoEmpreendedor = objeto.codigo_empreendedor
    this.codigoEmpreendimento = objeto.codigo_empreendimento
    this.codigoLicenciador = objeto.codigo_licenciador
    this.codigoUsuarioAlteracao = objeto.codigo_usuario_alteracao
    this.codigoUsuarioInclusao = objeto.codigo_usuario_inclusao
    this.dataHoraAlteracao = objeto.data_hora_alteracao
    this.dataHoraInclusao = objeto.data_hora_inclusao
    this.descricao = objeto.descricao
    this.excluido = objeto.excluido
    this.intervalo = objeto.intervalo
    this.obrigacaoLegal = objeto.obrigacao_legal
    this.primeiraExecucao = objeto.primeira_execucao
    this.quantidadeRecorrencia = objeto.quantidade_recorrencia
    this.recorrencia = objeto.recorrencia
    this.sincronizado = objeto.sincronizado
    this.tipo = objeto.tipo
    this.titulo = objeto.titulo
  }
}
export interface interfaceCompromissosResponsaveis extends interfaceRecurso {
  codigo?: string
  codigo_corporativo?: string
  codigo_origem?: string
  codigo_usuario?: string
  codigo_usuario_alteracao?: string
  codigo_usuario_inclusao?: string
  data_hora_alteracao?: string
  data_hora_inclusao?: string
  excluido?: string
  sincronizado?: string
}
export class ClasseCompromissosResponsaveis extends Recurso {
  recurso = 'compromissos_responsaveis'
  codigo?: string
  codigoCorporativo?: string
  codigoOrigem?: string
  codigoUsuario?: string
  codigoUsuarioAlteracao?: string
  codigoUsuarioInclusao?: string
  dataHoraAlteracao?: string
  dataHoraInclusao?: string
  excluido?: string
  sincronizado?: string
  public get objeto(): interfaceCompromissosResponsaveis {
    return {
      codigo: this.codigo,
      codigo_corporativo: this.codigoCorporativo,
      codigo_origem: this.codigoOrigem,
      codigo_usuario: this.codigoUsuario,
      codigo_usuario_alteracao: this.codigoUsuarioAlteracao,
      codigo_usuario_inclusao: this.codigoUsuarioInclusao,
      data_hora_alteracao: this.dataHoraAlteracao,
      data_hora_inclusao: this.dataHoraInclusao,
      excluido: this.excluido,
      sincronizado: this.sincronizado,
    }
  }
  public set objeto(objeto: interfaceCompromissosResponsaveis) {
    this.codigo = objeto.codigo
    this.codigoCorporativo = objeto.codigo_corporativo
    this.codigoOrigem = objeto.codigo_origem
    this.codigoUsuario = objeto.codigo_usuario
    this.codigoUsuarioAlteracao = objeto.codigo_usuario_alteracao
    this.codigoUsuarioInclusao = objeto.codigo_usuario_inclusao
    this.dataHoraAlteracao = objeto.data_hora_alteracao
    this.dataHoraInclusao = objeto.data_hora_inclusao
    this.excluido = objeto.excluido
    this.sincronizado = objeto.sincronizado
  }
}
export interface interfaceCondicionantesExecucoes extends interfaceRecurso {
  codigo?: string
  codigo_condicionante?: string
  codigo_corporativo?: string
  codigo_usuario_alteracao?: string
  codigo_usuario_inclusao?: string
  data_hora_alteracao?: string
  data_hora_inclusao?: string
  excluido?: string
  executada?: string
  informacoes_complementares?: string
  numero?: number
  numero_protocolo?: string
  responsavel?: string
  sincronizado?: string
  vencimento?: string
}
export class ClasseCondicionantesExecucoes extends Recurso {
  recurso = 'condicionantes_execucoes'
  codigo?: string
  codigoCondicionante?: string
  codigoCorporativo?: string
  codigoUsuarioAlteracao?: string
  codigoUsuarioInclusao?: string
  dataHoraAlteracao?: string
  dataHoraInclusao?: string
  excluido?: string
  executada?: string
  informacoesComplementares?: string
  numero?: number
  numeroProtocolo?: string
  responsavel?: string
  sincronizado?: string
  vencimento?: string
  public get objeto(): interfaceCondicionantesExecucoes {
    return {
      codigo: this.codigo,
      codigo_condicionante: this.codigoCondicionante,
      codigo_corporativo: this.codigoCorporativo,
      codigo_usuario_alteracao: this.codigoUsuarioAlteracao,
      codigo_usuario_inclusao: this.codigoUsuarioInclusao,
      data_hora_alteracao: this.dataHoraAlteracao,
      data_hora_inclusao: this.dataHoraInclusao,
      excluido: this.excluido,
      executada: this.executada,
      informacoes_complementares: this.informacoesComplementares,
      numero: this.numero,
      numero_protocolo: this.numeroProtocolo,
      responsavel: this.responsavel,
      sincronizado: this.sincronizado,
      vencimento: this.vencimento,
    }
  }
  public set objeto(objeto: interfaceCondicionantesExecucoes) {
    this.codigo = objeto.codigo
    this.codigoCondicionante = objeto.codigo_condicionante
    this.codigoCorporativo = objeto.codigo_corporativo
    this.codigoUsuarioAlteracao = objeto.codigo_usuario_alteracao
    this.codigoUsuarioInclusao = objeto.codigo_usuario_inclusao
    this.dataHoraAlteracao = objeto.data_hora_alteracao
    this.dataHoraInclusao = objeto.data_hora_inclusao
    this.excluido = objeto.excluido
    this.executada = objeto.executada
    this.informacoesComplementares = objeto.informacoes_complementares
    this.numero = objeto.numero
    this.numeroProtocolo = objeto.numero_protocolo
    this.responsavel = objeto.responsavel
    this.sincronizado = objeto.sincronizado
    this.vencimento = objeto.vencimento
  }
}
export interface interfaceCondicionantesExecucoesPossuida
  extends interfaceRecurso {
  codigo?: string
  codigo_condicionante?: string
  codigo_corporativo?: string
  codigo_usuario_alteracao?: string
  codigo_usuario_inclusao?: string
  data_hora_alteracao?: string
  data_hora_inclusao?: string
  excluido?: string
  executada?: string
  informacoes_complementares?: string
  numero?: number
  numero_protocolo?: string
  responsavel?: string
  sincronizado?: string
  vencimento?: string
}
export class ClasseCondicionantesExecucoesPossuida extends Recurso {
  recurso = 'condicionantes_execucoes_possuida'
  codigo?: string
  codigoCondicionante?: string
  codigoCorporativo?: string
  codigoUsuarioAlteracao?: string
  codigoUsuarioInclusao?: string
  dataHoraAlteracao?: string
  dataHoraInclusao?: string
  excluido?: string
  executada?: string
  informacoesComplementares?: string
  numero?: number
  numeroProtocolo?: string
  responsavel?: string
  sincronizado?: string
  vencimento?: string
  public get objeto(): interfaceCondicionantesExecucoesPossuida {
    return {
      codigo: this.codigo,
      codigo_condicionante: this.codigoCondicionante,
      codigo_corporativo: this.codigoCorporativo,
      codigo_usuario_alteracao: this.codigoUsuarioAlteracao,
      codigo_usuario_inclusao: this.codigoUsuarioInclusao,
      data_hora_alteracao: this.dataHoraAlteracao,
      data_hora_inclusao: this.dataHoraInclusao,
      excluido: this.excluido,
      executada: this.executada,
      informacoes_complementares: this.informacoesComplementares,
      numero: this.numero,
      numero_protocolo: this.numeroProtocolo,
      responsavel: this.responsavel,
      sincronizado: this.sincronizado,
      vencimento: this.vencimento,
    }
  }
  public set objeto(objeto: interfaceCondicionantesExecucoesPossuida) {
    this.codigo = objeto.codigo
    this.codigoCondicionante = objeto.codigo_condicionante
    this.codigoCorporativo = objeto.codigo_corporativo
    this.codigoUsuarioAlteracao = objeto.codigo_usuario_alteracao
    this.codigoUsuarioInclusao = objeto.codigo_usuario_inclusao
    this.dataHoraAlteracao = objeto.data_hora_alteracao
    this.dataHoraInclusao = objeto.data_hora_inclusao
    this.excluido = objeto.excluido
    this.executada = objeto.executada
    this.informacoesComplementares = objeto.informacoes_complementares
    this.numero = objeto.numero
    this.numeroProtocolo = objeto.numero_protocolo
    this.responsavel = objeto.responsavel
    this.sincronizado = objeto.sincronizado
    this.vencimento = objeto.vencimento
  }
}
export interface interfaceCondicionantesResponsaveis extends interfaceRecurso {
  codigo?: string
  codigo_corporativo?: string
  codigo_origem?: string
  codigo_usuario?: string
  codigo_usuario_alteracao?: string
  codigo_usuario_inclusao?: string
  data_hora_alteracao?: string
  data_hora_inclusao?: string
  excluido?: string
  sincronizado?: string
}
export class ClasseCondicionantesResponsaveis extends Recurso {
  recurso = 'condicionantes_responsaveis'
  codigo?: string
  codigoCorporativo?: string
  codigoOrigem?: string
  codigoUsuario?: string
  codigoUsuarioAlteracao?: string
  codigoUsuarioInclusao?: string
  dataHoraAlteracao?: string
  dataHoraInclusao?: string
  excluido?: string
  sincronizado?: string
  public get objeto(): interfaceCondicionantesResponsaveis {
    return {
      codigo: this.codigo,
      codigo_corporativo: this.codigoCorporativo,
      codigo_origem: this.codigoOrigem,
      codigo_usuario: this.codigoUsuario,
      codigo_usuario_alteracao: this.codigoUsuarioAlteracao,
      codigo_usuario_inclusao: this.codigoUsuarioInclusao,
      data_hora_alteracao: this.dataHoraAlteracao,
      data_hora_inclusao: this.dataHoraInclusao,
      excluido: this.excluido,
      sincronizado: this.sincronizado,
    }
  }
  public set objeto(objeto: interfaceCondicionantesResponsaveis) {
    this.codigo = objeto.codigo
    this.codigoCorporativo = objeto.codigo_corporativo
    this.codigoOrigem = objeto.codigo_origem
    this.codigoUsuario = objeto.codigo_usuario
    this.codigoUsuarioAlteracao = objeto.codigo_usuario_alteracao
    this.codigoUsuarioInclusao = objeto.codigo_usuario_inclusao
    this.dataHoraAlteracao = objeto.data_hora_alteracao
    this.dataHoraInclusao = objeto.data_hora_inclusao
    this.excluido = objeto.excluido
    this.sincronizado = objeto.sincronizado
  }
}
export interface interfaceConfiguracoes extends interfaceRecurso {
  bloqueio?: string
  codigo?: string
  codigo_corporativo?: string
  codigo_usuario_alteracao?: string
  codigo_usuario_inclusao?: string
  data_hora_alteracao?: string
  data_hora_inclusao?: string
  excluido?: string
  informacao_1?: string
  informacao_2?: string
  informacao_3?: string
  intervalo_resumo_prazos?: string
  limite_projetos?: number
  limite_usuarios?: number
  nome_corporativo?: string
  notificacao_email?: string
  notificacao_sms?: string
  notificacao_web?: string
  notificacao_whatsapp?: string
  origem?: string
  plano?: string
  relatorio_logo_codigo?: string
  relatorio_logo_nome?: string
  sincronizado?: string
}
export class ClasseConfiguracoes extends Recurso {
  recurso = 'configuracoes'
  bloqueio?: string
  codigo?: string
  codigoCorporativo?: string
  codigoUsuarioAlteracao?: string
  codigoUsuarioInclusao?: string
  dataHoraAlteracao?: string
  dataHoraInclusao?: string
  excluido?: string
  informacao1?: string
  informacao2?: string
  informacao3?: string
  intervaloResumoPrazos?: string
  limiteProjetos?: number
  limiteUsuarios?: number
  nomeCorporativo?: string
  notificacaoEmail?: string
  notificacaoSms?: string
  notificacaoWeb?: string
  notificacaoWhatsapp?: string
  origem?: string
  plano?: string
  relatorioLogoCodigo?: string
  relatorioLogoNome?: string
  sincronizado?: string
  public get objeto(): interfaceConfiguracoes {
    return {
      bloqueio: this.bloqueio,
      codigo: this.codigo,
      codigo_corporativo: this.codigoCorporativo,
      codigo_usuario_alteracao: this.codigoUsuarioAlteracao,
      codigo_usuario_inclusao: this.codigoUsuarioInclusao,
      data_hora_alteracao: this.dataHoraAlteracao,
      data_hora_inclusao: this.dataHoraInclusao,
      excluido: this.excluido,
      informacao_1: this.informacao1,
      informacao_2: this.informacao2,
      informacao_3: this.informacao3,
      intervalo_resumo_prazos: this.intervaloResumoPrazos,
      limite_projetos: this.limiteProjetos,
      limite_usuarios: this.limiteUsuarios,
      nome_corporativo: this.nomeCorporativo,
      notificacao_email: this.notificacaoEmail,
      notificacao_sms: this.notificacaoSms,
      notificacao_web: this.notificacaoWeb,
      notificacao_whatsapp: this.notificacaoWhatsapp,
      origem: this.origem,
      plano: this.plano,
      relatorio_logo_codigo: this.relatorioLogoCodigo,
      relatorio_logo_nome: this.relatorioLogoNome,
      sincronizado: this.sincronizado,
    }
  }
  public set objeto(objeto: interfaceConfiguracoes) {
    this.bloqueio = objeto.bloqueio
    this.codigo = objeto.codigo
    this.codigoCorporativo = objeto.codigo_corporativo
    this.codigoUsuarioAlteracao = objeto.codigo_usuario_alteracao
    this.codigoUsuarioInclusao = objeto.codigo_usuario_inclusao
    this.dataHoraAlteracao = objeto.data_hora_alteracao
    this.dataHoraInclusao = objeto.data_hora_inclusao
    this.excluido = objeto.excluido
    this.informacao1 = objeto.informacao_1
    this.informacao2 = objeto.informacao_2
    this.informacao3 = objeto.informacao_3
    this.intervaloResumoPrazos = objeto.intervalo_resumo_prazos
    this.limiteProjetos = objeto.limite_projetos
    this.limiteUsuarios = objeto.limite_usuarios
    this.nomeCorporativo = objeto.nome_corporativo
    this.notificacaoEmail = objeto.notificacao_email
    this.notificacaoSms = objeto.notificacao_sms
    this.notificacaoWeb = objeto.notificacao_web
    this.notificacaoWhatsapp = objeto.notificacao_whatsapp
    this.origem = objeto.origem
    this.plano = objeto.plano
    this.relatorioLogoCodigo = objeto.relatorio_logo_codigo
    this.relatorioLogoNome = objeto.relatorio_logo_nome
    this.sincronizado = objeto.sincronizado
  }
}
export interface interfaceContatos extends interfaceRecurso {
  cargo?: string
  codigo?: string
  codigo_corporativo?: string
  codigo_origem?: string
  codigo_usuario_alteracao?: string
  codigo_usuario_inclusao?: string
  data_hora_alteracao?: string
  data_hora_inclusao?: string
  email?: string
  excluido?: string
  nome?: string
  observacoes?: string
  setor?: string
  sincronizado?: string
  telefone?: string
}
export class ClasseContatos extends Recurso {
  recurso = 'contatos'
  cargo?: string
  codigo?: string
  codigoCorporativo?: string
  codigoOrigem?: string
  codigoUsuarioAlteracao?: string
  codigoUsuarioInclusao?: string
  dataHoraAlteracao?: string
  dataHoraInclusao?: string
  email?: string
  excluido?: string
  nome?: string
  observacoes?: string
  setor?: string
  sincronizado?: string
  telefone?: string
  public get objeto(): interfaceContatos {
    return {
      cargo: this.cargo,
      codigo: this.codigo,
      codigo_corporativo: this.codigoCorporativo,
      codigo_origem: this.codigoOrigem,
      codigo_usuario_alteracao: this.codigoUsuarioAlteracao,
      codigo_usuario_inclusao: this.codigoUsuarioInclusao,
      data_hora_alteracao: this.dataHoraAlteracao,
      data_hora_inclusao: this.dataHoraInclusao,
      email: this.email,
      excluido: this.excluido,
      nome: this.nome,
      observacoes: this.observacoes,
      setor: this.setor,
      sincronizado: this.sincronizado,
      telefone: this.telefone,
    }
  }
  public set objeto(objeto: interfaceContatos) {
    this.cargo = objeto.cargo
    this.codigo = objeto.codigo
    this.codigoCorporativo = objeto.codigo_corporativo
    this.codigoOrigem = objeto.codigo_origem
    this.codigoUsuarioAlteracao = objeto.codigo_usuario_alteracao
    this.codigoUsuarioInclusao = objeto.codigo_usuario_inclusao
    this.dataHoraAlteracao = objeto.data_hora_alteracao
    this.dataHoraInclusao = objeto.data_hora_inclusao
    this.email = objeto.email
    this.excluido = objeto.excluido
    this.nome = objeto.nome
    this.observacoes = objeto.observacoes
    this.setor = objeto.setor
    this.sincronizado = objeto.sincronizado
    this.telefone = objeto.telefone
  }
}
export interface interfaceDestinatariosAlerta extends interfaceRecurso {
  codigo?: string
  codigo_corporativo?: string
  codigo_origem?: string
  codigo_usuario_alteracao?: string
  codigo_usuario_inclusao?: string
  data_hora_alteracao?: string
  data_hora_inclusao?: string
  email?: string
  excluido?: string
  nome?: string
  observacoes?: string
  sincronizado?: string
}
export class ClasseDestinatariosAlerta extends Recurso {
  recurso = 'destinatarios_alerta'
  codigo?: string
  codigoCorporativo?: string
  codigoOrigem?: string
  codigoUsuarioAlteracao?: string
  codigoUsuarioInclusao?: string
  dataHoraAlteracao?: string
  dataHoraInclusao?: string
  email?: string
  excluido?: string
  nome?: string
  observacoes?: string
  sincronizado?: string
  public get objeto(): interfaceDestinatariosAlerta {
    return {
      codigo: this.codigo,
      codigo_corporativo: this.codigoCorporativo,
      codigo_origem: this.codigoOrigem,
      codigo_usuario_alteracao: this.codigoUsuarioAlteracao,
      codigo_usuario_inclusao: this.codigoUsuarioInclusao,
      data_hora_alteracao: this.dataHoraAlteracao,
      data_hora_inclusao: this.dataHoraInclusao,
      email: this.email,
      excluido: this.excluido,
      nome: this.nome,
      observacoes: this.observacoes,
      sincronizado: this.sincronizado,
    }
  }
  public set objeto(objeto: interfaceDestinatariosAlerta) {
    this.codigo = objeto.codigo
    this.codigoCorporativo = objeto.codigo_corporativo
    this.codigoOrigem = objeto.codigo_origem
    this.codigoUsuarioAlteracao = objeto.codigo_usuario_alteracao
    this.codigoUsuarioInclusao = objeto.codigo_usuario_inclusao
    this.dataHoraAlteracao = objeto.data_hora_alteracao
    this.dataHoraInclusao = objeto.data_hora_inclusao
    this.email = objeto.email
    this.excluido = objeto.excluido
    this.nome = objeto.nome
    this.observacoes = objeto.observacoes
    this.sincronizado = objeto.sincronizado
  }
}
export interface interfaceEmpreendedores extends interfaceRecurso {
  bairro?: string
  cep?: string
  cnpj?: string
  codigo?: string
  codigo_cidade?: number
  codigo_corporativo?: string
  codigo_usuario_alteracao?: string
  codigo_usuario_inclusao?: string
  complemento?: string
  cpf?: string
  cpf_representante_legal?: string
  data_hora_alteracao?: string
  data_hora_inclusao?: string
  data_nascimento_representante_legal?: string
  email?: string
  email_representante_legal?: string
  estado_civil_representante_legal?: string
  excluido?: string
  logradouro?: string
  nacionalidade_representante_legal?: string
  nome?: string
  nome_representante_legal?: string
  numero?: string
  profissao_representante_legal?: string
  rg_representante_legal?: string
  sexo_representante_legal?: string
  sincronizado?: string
  telefone?: string
  telefone_representante_legal?: string
}
export class ClasseEmpreendedores extends Recurso {
  recurso = 'empreendedores'
  bairro?: string
  cep?: string
  cnpj?: string
  codigo?: string
  codigoCidade?: number
  codigoCorporativo?: string
  codigoUsuarioAlteracao?: string
  codigoUsuarioInclusao?: string
  complemento?: string
  cpf?: string
  cpfRepresentanteLegal?: string
  dataHoraAlteracao?: string
  dataHoraInclusao?: string
  dataNascimentoRepresentanteLegal?: string
  email?: string
  emailRepresentanteLegal?: string
  estadoCivilRepresentanteLegal?: string
  excluido?: string
  logradouro?: string
  nacionalidadeRepresentanteLegal?: string
  nome?: string
  nomeRepresentanteLegal?: string
  numero?: string
  profissaoRepresentanteLegal?: string
  rgRepresentanteLegal?: string
  sexoRepresentanteLegal?: string
  sincronizado?: string
  telefone?: string
  telefoneRepresentanteLegal?: string
  public get objeto(): interfaceEmpreendedores {
    return {
      bairro: this.bairro,
      cep: this.cep,
      cnpj: this.cnpj,
      codigo: this.codigo,
      codigo_cidade: this.codigoCidade,
      codigo_corporativo: this.codigoCorporativo,
      codigo_usuario_alteracao: this.codigoUsuarioAlteracao,
      codigo_usuario_inclusao: this.codigoUsuarioInclusao,
      complemento: this.complemento,
      cpf: this.cpf,
      cpf_representante_legal: this.cpfRepresentanteLegal,
      data_hora_alteracao: this.dataHoraAlteracao,
      data_hora_inclusao: this.dataHoraInclusao,
      data_nascimento_representante_legal: this
        .dataNascimentoRepresentanteLegal,
      email: this.email,
      email_representante_legal: this.emailRepresentanteLegal,
      estado_civil_representante_legal: this.estadoCivilRepresentanteLegal,
      excluido: this.excluido,
      logradouro: this.logradouro,
      nacionalidade_representante_legal: this.nacionalidadeRepresentanteLegal,
      nome: this.nome,
      nome_representante_legal: this.nomeRepresentanteLegal,
      numero: this.numero,
      profissao_representante_legal: this.profissaoRepresentanteLegal,
      rg_representante_legal: this.rgRepresentanteLegal,
      sexo_representante_legal: this.sexoRepresentanteLegal,
      sincronizado: this.sincronizado,
      telefone: this.telefone,
      telefone_representante_legal: this.telefoneRepresentanteLegal,
    }
  }
  public set objeto(objeto: interfaceEmpreendedores) {
    this.bairro = objeto.bairro
    this.cep = objeto.cep
    this.cnpj = objeto.cnpj
    this.codigo = objeto.codigo
    this.codigoCidade = objeto.codigo_cidade
    this.codigoCorporativo = objeto.codigo_corporativo
    this.codigoUsuarioAlteracao = objeto.codigo_usuario_alteracao
    this.codigoUsuarioInclusao = objeto.codigo_usuario_inclusao
    this.complemento = objeto.complemento
    this.cpf = objeto.cpf
    this.cpfRepresentanteLegal = objeto.cpf_representante_legal
    this.dataHoraAlteracao = objeto.data_hora_alteracao
    this.dataHoraInclusao = objeto.data_hora_inclusao
    this.dataNascimentoRepresentanteLegal =
      objeto.data_nascimento_representante_legal
    this.email = objeto.email
    this.emailRepresentanteLegal = objeto.email_representante_legal
    this.estadoCivilRepresentanteLegal = objeto.estado_civil_representante_legal
    this.excluido = objeto.excluido
    this.logradouro = objeto.logradouro
    this.nacionalidadeRepresentanteLegal =
      objeto.nacionalidade_representante_legal
    this.nome = objeto.nome
    this.nomeRepresentanteLegal = objeto.nome_representante_legal
    this.numero = objeto.numero
    this.profissaoRepresentanteLegal = objeto.profissao_representante_legal
    this.rgRepresentanteLegal = objeto.rg_representante_legal
    this.sexoRepresentanteLegal = objeto.sexo_representante_legal
    this.sincronizado = objeto.sincronizado
    this.telefone = objeto.telefone
    this.telefoneRepresentanteLegal = objeto.telefone_representante_legal
  }
}
export interface interfaceEmpreendedoresUsuarios extends interfaceRecurso {
  codigo?: string
  codigo_corporativo?: string
  codigo_empreendedor?: string
  codigo_usuario?: string
  codigo_usuario_alteracao?: string
  codigo_usuario_inclusao?: string
  data_hora_alteracao?: string
  data_hora_inclusao?: string
  excluido?: string
  sincronizado?: string
}
export class ClasseEmpreendedoresUsuarios extends Recurso {
  recurso = 'empreendedores_usuarios'
  codigo?: string
  codigoCorporativo?: string
  codigoEmpreendedor?: string
  codigoUsuario?: string
  codigoUsuarioAlteracao?: string
  codigoUsuarioInclusao?: string
  dataHoraAlteracao?: string
  dataHoraInclusao?: string
  excluido?: string
  sincronizado?: string
  public get objeto(): interfaceEmpreendedoresUsuarios {
    return {
      codigo: this.codigo,
      codigo_corporativo: this.codigoCorporativo,
      codigo_empreendedor: this.codigoEmpreendedor,
      codigo_usuario: this.codigoUsuario,
      codigo_usuario_alteracao: this.codigoUsuarioAlteracao,
      codigo_usuario_inclusao: this.codigoUsuarioInclusao,
      data_hora_alteracao: this.dataHoraAlteracao,
      data_hora_inclusao: this.dataHoraInclusao,
      excluido: this.excluido,
      sincronizado: this.sincronizado,
    }
  }
  public set objeto(objeto: interfaceEmpreendedoresUsuarios) {
    this.codigo = objeto.codigo
    this.codigoCorporativo = objeto.codigo_corporativo
    this.codigoEmpreendedor = objeto.codigo_empreendedor
    this.codigoUsuario = objeto.codigo_usuario
    this.codigoUsuarioAlteracao = objeto.codigo_usuario_alteracao
    this.codigoUsuarioInclusao = objeto.codigo_usuario_inclusao
    this.dataHoraAlteracao = objeto.data_hora_alteracao
    this.dataHoraInclusao = objeto.data_hora_inclusao
    this.excluido = objeto.excluido
    this.sincronizado = objeto.sincronizado
  }
}
export interface interfaceEmpreendimentos extends interfaceRecurso {
  bairro?: string
  cep?: string
  cnpj?: string
  codigo?: string
  codigo_cidade?: number
  codigo_corporativo?: string
  codigo_empreendedor?: string
  codigo_usuario_alteracao?: string
  codigo_usuario_inclusao?: string
  complemento?: string
  cpf?: string
  data_hora_alteracao?: string
  data_hora_inclusao?: string
  excluido?: string
  identificador?: string
  logradouro?: string
  nome?: string
  numero?: string
  sincronizado?: string
}
export class ClasseEmpreendimentos extends Recurso {
  recurso = 'empreendimentos'
  bairro?: string
  cep?: string
  cnpj?: string
  codigo?: string
  codigoCidade?: number
  codigoCorporativo?: string
  codigoEmpreendedor?: string
  codigoUsuarioAlteracao?: string
  codigoUsuarioInclusao?: string
  complemento?: string
  cpf?: string
  dataHoraAlteracao?: string
  dataHoraInclusao?: string
  excluido?: string
  identificador?: string
  logradouro?: string
  nome?: string
  numero?: string
  sincronizado?: string
  public get objeto(): interfaceEmpreendimentos {
    return {
      bairro: this.bairro,
      cep: this.cep,
      cnpj: this.cnpj,
      codigo: this.codigo,
      codigo_cidade: this.codigoCidade,
      codigo_corporativo: this.codigoCorporativo,
      codigo_empreendedor: this.codigoEmpreendedor,
      codigo_usuario_alteracao: this.codigoUsuarioAlteracao,
      codigo_usuario_inclusao: this.codigoUsuarioInclusao,
      complemento: this.complemento,
      cpf: this.cpf,
      data_hora_alteracao: this.dataHoraAlteracao,
      data_hora_inclusao: this.dataHoraInclusao,
      excluido: this.excluido,
      identificador: this.identificador,
      logradouro: this.logradouro,
      nome: this.nome,
      numero: this.numero,
      sincronizado: this.sincronizado,
    }
  }
  public set objeto(objeto: interfaceEmpreendimentos) {
    this.bairro = objeto.bairro
    this.cep = objeto.cep
    this.cnpj = objeto.cnpj
    this.codigo = objeto.codigo
    this.codigoCidade = objeto.codigo_cidade
    this.codigoCorporativo = objeto.codigo_corporativo
    this.codigoEmpreendedor = objeto.codigo_empreendedor
    this.codigoUsuarioAlteracao = objeto.codigo_usuario_alteracao
    this.codigoUsuarioInclusao = objeto.codigo_usuario_inclusao
    this.complemento = objeto.complemento
    this.cpf = objeto.cpf
    this.dataHoraAlteracao = objeto.data_hora_alteracao
    this.dataHoraInclusao = objeto.data_hora_inclusao
    this.excluido = objeto.excluido
    this.identificador = objeto.identificador
    this.logradouro = objeto.logradouro
    this.nome = objeto.nome
    this.numero = objeto.numero
    this.sincronizado = objeto.sincronizado
  }
}
export interface interfaceEmpreendimentosUsuarios extends interfaceRecurso {
  codigo?: string
  codigo_corporativo?: string
  codigo_empreendimento?: string
  codigo_usuario?: string
  codigo_usuario_alteracao?: string
  codigo_usuario_inclusao?: string
  data_hora_alteracao?: string
  data_hora_inclusao?: string
  excluido?: string
  sincronizado?: string
}
export class ClasseEmpreendimentosUsuarios extends Recurso {
  recurso = 'empreendimentos_usuarios'
  codigo?: string
  codigoCorporativo?: string
  codigoEmpreendimento?: string
  codigoUsuario?: string
  codigoUsuarioAlteracao?: string
  codigoUsuarioInclusao?: string
  dataHoraAlteracao?: string
  dataHoraInclusao?: string
  excluido?: string
  sincronizado?: string
  public get objeto(): interfaceEmpreendimentosUsuarios {
    return {
      codigo: this.codigo,
      codigo_corporativo: this.codigoCorporativo,
      codigo_empreendimento: this.codigoEmpreendimento,
      codigo_usuario: this.codigoUsuario,
      codigo_usuario_alteracao: this.codigoUsuarioAlteracao,
      codigo_usuario_inclusao: this.codigoUsuarioInclusao,
      data_hora_alteracao: this.dataHoraAlteracao,
      data_hora_inclusao: this.dataHoraInclusao,
      excluido: this.excluido,
      sincronizado: this.sincronizado,
    }
  }
  public set objeto(objeto: interfaceEmpreendimentosUsuarios) {
    this.codigo = objeto.codigo
    this.codigoCorporativo = objeto.codigo_corporativo
    this.codigoEmpreendimento = objeto.codigo_empreendimento
    this.codigoUsuario = objeto.codigo_usuario
    this.codigoUsuarioAlteracao = objeto.codigo_usuario_alteracao
    this.codigoUsuarioInclusao = objeto.codigo_usuario_inclusao
    this.dataHoraAlteracao = objeto.data_hora_alteracao
    this.dataHoraInclusao = objeto.data_hora_inclusao
    this.excluido = objeto.excluido
    this.sincronizado = objeto.sincronizado
  }
}
export interface interfaceEstados extends interfaceRecurso {
  codigo?: number
  nome?: string
  sigla?: string
}
export class ClasseEstados extends Recurso {
  recurso = 'estados'
  codigo?: number
  nome?: string
  sigla?: string
  public get objeto(): interfaceEstados {
    return {
      codigo: this.codigo,
      nome: this.nome,
      sigla: this.sigla,
    }
  }
  public set objeto(objeto: interfaceEstados) {
    this.codigo = objeto.codigo
    this.nome = objeto.nome
    this.sigla = objeto.sigla
  }
}
export interface interfaceInternoUsuariosAtivos extends interfaceRecurso {
  administrador?: string
  bloqueio?: string
  data_hora_inclusao?: string
  email?: string
  nome?: string
  plano?: string
}
export class ClasseInternoUsuariosAtivos extends Recurso {
  recurso = 'interno_usuarios_ativos'
  administrador?: string
  bloqueio?: string
  dataHoraInclusao?: string
  email?: string
  nome?: string
  plano?: string
  public get objeto(): interfaceInternoUsuariosAtivos {
    return {
      administrador: this.administrador,
      bloqueio: this.bloqueio,
      data_hora_inclusao: this.dataHoraInclusao,
      email: this.email,
      nome: this.nome,
      plano: this.plano,
    }
  }
  public set objeto(objeto: interfaceInternoUsuariosAtivos) {
    this.administrador = objeto.administrador
    this.bloqueio = objeto.bloqueio
    this.dataHoraInclusao = objeto.data_hora_inclusao
    this.email = objeto.email
    this.nome = objeto.nome
    this.plano = objeto.plano
  }
}
export interface interfaceLicencas extends interfaceRecurso {
  alerta?: string
  alerta_dias?: number
  codigo?: string
  codigo_corporativo?: string
  codigo_empreendedor?: string
  codigo_empreendimento?: string
  codigo_licenca_anterior?: string
  codigo_licenca_posterior?: string
  codigo_licenciador?: string
  codigo_usuario_alteracao?: string
  codigo_usuario_inclusao?: string
  data_hora_alteracao?: string
  data_hora_inclusao?: string
  data_protocolo_renovacao?: string
  descricao?: string
  descricao_tipo_outras?: string
  emissao?: string
  excluido?: string
  informacoes_complementares?: string
  numero?: string
  numero_processo?: string
  numero_protocolo_renovacao?: string
  observacao_protocolo_renovacao?: string
  renovacao?: string
  renovacao_dias?: number
  sincronizado?: string
  status?: number
  tipo?: string
  vencimento?: string
  vencimento_meses?: number
}
export class ClasseLicencas extends Recurso {
  recurso = 'licencas'
  alerta?: string
  alertaDias?: number
  codigo?: string
  codigoCorporativo?: string
  codigoEmpreendedor?: string
  codigoEmpreendimento?: string
  codigoLicencaAnterior?: string
  codigoLicencaPosterior?: string
  codigoLicenciador?: string
  codigoUsuarioAlteracao?: string
  codigoUsuarioInclusao?: string
  dataHoraAlteracao?: string
  dataHoraInclusao?: string
  dataProtocoloRenovacao?: string
  descricao?: string
  descricaoTipoOutras?: string
  emissao?: string
  excluido?: string
  informacoesComplementares?: string
  numero?: string
  numeroProcesso?: string
  numeroProtocoloRenovacao?: string
  observacaoProtocoloRenovacao?: string
  renovacao?: string
  renovacaoDias?: number
  sincronizado?: string
  status?: number
  tipo?: string
  vencimento?: string
  vencimentoMeses?: number
  public get objeto(): interfaceLicencas {
    return {
      alerta: this.alerta,
      alerta_dias: this.alertaDias,
      codigo: this.codigo,
      codigo_corporativo: this.codigoCorporativo,
      codigo_empreendedor: this.codigoEmpreendedor,
      codigo_empreendimento: this.codigoEmpreendimento,
      codigo_licenca_anterior: this.codigoLicencaAnterior,
      codigo_licenca_posterior: this.codigoLicencaPosterior,
      codigo_licenciador: this.codigoLicenciador,
      codigo_usuario_alteracao: this.codigoUsuarioAlteracao,
      codigo_usuario_inclusao: this.codigoUsuarioInclusao,
      data_hora_alteracao: this.dataHoraAlteracao,
      data_hora_inclusao: this.dataHoraInclusao,
      data_protocolo_renovacao: this.dataProtocoloRenovacao,
      descricao: this.descricao,
      descricao_tipo_outras: this.descricaoTipoOutras,
      emissao: this.emissao,
      excluido: this.excluido,
      informacoes_complementares: this.informacoesComplementares,
      numero: this.numero,
      numero_processo: this.numeroProcesso,
      numero_protocolo_renovacao: this.numeroProtocoloRenovacao,
      observacao_protocolo_renovacao: this.observacaoProtocoloRenovacao,
      renovacao: this.renovacao,
      renovacao_dias: this.renovacaoDias,
      sincronizado: this.sincronizado,
      status: this.status,
      tipo: this.tipo,
      vencimento: this.vencimento,
      vencimento_meses: this.vencimentoMeses,
    }
  }
  public set objeto(objeto: interfaceLicencas) {
    this.alerta = objeto.alerta
    this.alertaDias = objeto.alerta_dias
    this.codigo = objeto.codigo
    this.codigoCorporativo = objeto.codigo_corporativo
    this.codigoEmpreendedor = objeto.codigo_empreendedor
    this.codigoEmpreendimento = objeto.codigo_empreendimento
    this.codigoLicencaAnterior = objeto.codigo_licenca_anterior
    this.codigoLicencaPosterior = objeto.codigo_licenca_posterior
    this.codigoLicenciador = objeto.codigo_licenciador
    this.codigoUsuarioAlteracao = objeto.codigo_usuario_alteracao
    this.codigoUsuarioInclusao = objeto.codigo_usuario_inclusao
    this.dataHoraAlteracao = objeto.data_hora_alteracao
    this.dataHoraInclusao = objeto.data_hora_inclusao
    this.dataProtocoloRenovacao = objeto.data_protocolo_renovacao
    this.descricao = objeto.descricao
    this.descricaoTipoOutras = objeto.descricao_tipo_outras
    this.emissao = objeto.emissao
    this.excluido = objeto.excluido
    this.informacoesComplementares = objeto.informacoes_complementares
    this.numero = objeto.numero
    this.numeroProcesso = objeto.numero_processo
    this.numeroProtocoloRenovacao = objeto.numero_protocolo_renovacao
    this.observacaoProtocoloRenovacao = objeto.observacao_protocolo_renovacao
    this.renovacao = objeto.renovacao
    this.renovacaoDias = objeto.renovacao_dias
    this.sincronizado = objeto.sincronizado
    this.status = objeto.status
    this.tipo = objeto.tipo
    this.vencimento = objeto.vencimento
    this.vencimentoMeses = objeto.vencimento_meses
  }
}
export interface interfaceLicencasCondicionantes extends interfaceRecurso {
  alerta_dias?: number
  codigo?: string
  codigo_corporativo?: string
  codigo_licenca?: string
  codigo_usuario_alteracao?: string
  codigo_usuario_inclusao?: string
  data_hora_alteracao?: string
  data_hora_inclusao?: string
  departamento?: string
  descricao?: string
  dias_vencimento_primeira_execucao?: number
  excluido?: string
  identificador?: string
  informacoes_complementares?: string
  intervalo?: number
  recorrencia?: string
  sincronizado?: string
}
export class ClasseLicencasCondicionantes extends Recurso {
  recurso = 'licencas_condicionantes'
  alertaDias?: number
  codigo?: string
  codigoCorporativo?: string
  codigoLicenca?: string
  codigoUsuarioAlteracao?: string
  codigoUsuarioInclusao?: string
  dataHoraAlteracao?: string
  dataHoraInclusao?: string
  departamento?: string
  descricao?: string
  diasVencimentoPrimeiraExecucao?: number
  excluido?: string
  identificador?: string
  informacoesComplementares?: string
  intervalo?: number
  recorrencia?: string
  sincronizado?: string
  public get objeto(): interfaceLicencasCondicionantes {
    return {
      alerta_dias: this.alertaDias,
      codigo: this.codigo,
      codigo_corporativo: this.codigoCorporativo,
      codigo_licenca: this.codigoLicenca,
      codigo_usuario_alteracao: this.codigoUsuarioAlteracao,
      codigo_usuario_inclusao: this.codigoUsuarioInclusao,
      data_hora_alteracao: this.dataHoraAlteracao,
      data_hora_inclusao: this.dataHoraInclusao,
      departamento: this.departamento,
      descricao: this.descricao,
      dias_vencimento_primeira_execucao: this.diasVencimentoPrimeiraExecucao,
      excluido: this.excluido,
      identificador: this.identificador,
      informacoes_complementares: this.informacoesComplementares,
      intervalo: this.intervalo,
      recorrencia: this.recorrencia,
      sincronizado: this.sincronizado,
    }
  }
  public set objeto(objeto: interfaceLicencasCondicionantes) {
    this.alertaDias = objeto.alerta_dias
    this.codigo = objeto.codigo
    this.codigoCorporativo = objeto.codigo_corporativo
    this.codigoLicenca = objeto.codigo_licenca
    this.codigoUsuarioAlteracao = objeto.codigo_usuario_alteracao
    this.codigoUsuarioInclusao = objeto.codigo_usuario_inclusao
    this.dataHoraAlteracao = objeto.data_hora_alteracao
    this.dataHoraInclusao = objeto.data_hora_inclusao
    this.departamento = objeto.departamento
    this.descricao = objeto.descricao
    this.diasVencimentoPrimeiraExecucao =
      objeto.dias_vencimento_primeira_execucao
    this.excluido = objeto.excluido
    this.identificador = objeto.identificador
    this.informacoesComplementares = objeto.informacoes_complementares
    this.intervalo = objeto.intervalo
    this.recorrencia = objeto.recorrencia
    this.sincronizado = objeto.sincronizado
  }
}
export interface interfaceLicencasResponsaveis extends interfaceRecurso {
  codigo?: string
  codigo_corporativo?: string
  codigo_origem?: string
  codigo_usuario?: string
  codigo_usuario_alteracao?: string
  codigo_usuario_inclusao?: string
  data_hora_alteracao?: string
  data_hora_inclusao?: string
  excluido?: string
  sincronizado?: string
}
export class ClasseLicencasResponsaveis extends Recurso {
  recurso = 'licencas_responsaveis'
  codigo?: string
  codigoCorporativo?: string
  codigoOrigem?: string
  codigoUsuario?: string
  codigoUsuarioAlteracao?: string
  codigoUsuarioInclusao?: string
  dataHoraAlteracao?: string
  dataHoraInclusao?: string
  excluido?: string
  sincronizado?: string
  public get objeto(): interfaceLicencasResponsaveis {
    return {
      codigo: this.codigo,
      codigo_corporativo: this.codigoCorporativo,
      codigo_origem: this.codigoOrigem,
      codigo_usuario: this.codigoUsuario,
      codigo_usuario_alteracao: this.codigoUsuarioAlteracao,
      codigo_usuario_inclusao: this.codigoUsuarioInclusao,
      data_hora_alteracao: this.dataHoraAlteracao,
      data_hora_inclusao: this.dataHoraInclusao,
      excluido: this.excluido,
      sincronizado: this.sincronizado,
    }
  }
  public set objeto(objeto: interfaceLicencasResponsaveis) {
    this.codigo = objeto.codigo
    this.codigoCorporativo = objeto.codigo_corporativo
    this.codigoOrigem = objeto.codigo_origem
    this.codigoUsuario = objeto.codigo_usuario
    this.codigoUsuarioAlteracao = objeto.codigo_usuario_alteracao
    this.codigoUsuarioInclusao = objeto.codigo_usuario_inclusao
    this.dataHoraAlteracao = objeto.data_hora_alteracao
    this.dataHoraInclusao = objeto.data_hora_inclusao
    this.excluido = objeto.excluido
    this.sincronizado = objeto.sincronizado
  }
}
export interface interfaceLicenciadores extends interfaceRecurso {
  codigo?: string
  codigo_cidade?: number
  codigo_corporativo?: string
  codigo_usuario_alteracao?: string
  codigo_usuario_inclusao?: string
  data_hora_alteracao?: string
  data_hora_inclusao?: string
  email?: string
  excluido?: string
  nome?: string
  sincronizado?: string
  telefone?: string
}
export class ClasseLicenciadores extends Recurso {
  recurso = 'licenciadores'
  codigo?: string
  codigoCidade?: number
  codigoCorporativo?: string
  codigoUsuarioAlteracao?: string
  codigoUsuarioInclusao?: string
  dataHoraAlteracao?: string
  dataHoraInclusao?: string
  email?: string
  excluido?: string
  nome?: string
  sincronizado?: string
  telefone?: string
  public get objeto(): interfaceLicenciadores {
    return {
      codigo: this.codigo,
      codigo_cidade: this.codigoCidade,
      codigo_corporativo: this.codigoCorporativo,
      codigo_usuario_alteracao: this.codigoUsuarioAlteracao,
      codigo_usuario_inclusao: this.codigoUsuarioInclusao,
      data_hora_alteracao: this.dataHoraAlteracao,
      data_hora_inclusao: this.dataHoraInclusao,
      email: this.email,
      excluido: this.excluido,
      nome: this.nome,
      sincronizado: this.sincronizado,
      telefone: this.telefone,
    }
  }
  public set objeto(objeto: interfaceLicenciadores) {
    this.codigo = objeto.codigo
    this.codigoCidade = objeto.codigo_cidade
    this.codigoCorporativo = objeto.codigo_corporativo
    this.codigoUsuarioAlteracao = objeto.codigo_usuario_alteracao
    this.codigoUsuarioInclusao = objeto.codigo_usuario_inclusao
    this.dataHoraAlteracao = objeto.data_hora_alteracao
    this.dataHoraInclusao = objeto.data_hora_inclusao
    this.email = objeto.email
    this.excluido = objeto.excluido
    this.nome = objeto.nome
    this.sincronizado = objeto.sincronizado
    this.telefone = objeto.telefone
  }
}
export interface interfaceListaDepartamentosCoportativo
  extends interfaceRecurso {
  codigo_corporativo?: string
  departamento?: string
}
export class ClasseListaDepartamentosCoportativo extends Recurso {
  recurso = 'lista_departamentos_coportativo'
  codigoCorporativo?: string
  departamento?: string
  public get objeto(): interfaceListaDepartamentosCoportativo {
    return {
      codigo_corporativo: this.codigoCorporativo,
      departamento: this.departamento,
    }
  }
  public set objeto(objeto: interfaceListaDepartamentosCoportativo) {
    this.codigoCorporativo = objeto.codigo_corporativo
    this.departamento = objeto.departamento
  }
}
export interface interfaceListaRelatorios extends interfaceRecurso {
  codigo?: string
  codigo_corporativo?: string
  codigo_usuario_alteracao?: string
  codigo_usuario_inclusao?: string
  codigos_relatorios_anexos?: string[]
  data_hora_alteracao?: string
  data_hora_inclusao?: string
  descricao?: string
  excluido?: string
  nome_arquivo?: string
  nome_usuario_inclusao?: string
  parametros?: string
  sincronizado?: string
}
export class ClasseListaRelatorios extends Recurso {
  recurso = 'lista_relatorios'
  codigo?: string
  codigoCorporativo?: string
  codigoUsuarioAlteracao?: string
  codigoUsuarioInclusao?: string
  codigosRelatoriosAnexos?: string[]
  dataHoraAlteracao?: string
  dataHoraInclusao?: string
  descricao?: string
  excluido?: string
  nomeArquivo?: string
  nomeUsuarioInclusao?: string
  parametros?: string
  sincronizado?: string
  public get objeto(): interfaceListaRelatorios {
    return {
      codigo: this.codigo,
      codigo_corporativo: this.codigoCorporativo,
      codigo_usuario_alteracao: this.codigoUsuarioAlteracao,
      codigo_usuario_inclusao: this.codigoUsuarioInclusao,
      codigos_relatorios_anexos: this.codigosRelatoriosAnexos,
      data_hora_alteracao: this.dataHoraAlteracao,
      data_hora_inclusao: this.dataHoraInclusao,
      descricao: this.descricao,
      excluido: this.excluido,
      nome_arquivo: this.nomeArquivo,
      nome_usuario_inclusao: this.nomeUsuarioInclusao,
      parametros: this.parametros,
      sincronizado: this.sincronizado,
    }
  }
  public set objeto(objeto: interfaceListaRelatorios) {
    this.codigo = objeto.codigo
    this.codigoCorporativo = objeto.codigo_corporativo
    this.codigoUsuarioAlteracao = objeto.codigo_usuario_alteracao
    this.codigoUsuarioInclusao = objeto.codigo_usuario_inclusao
    this.codigosRelatoriosAnexos = objeto.codigos_relatorios_anexos
    this.dataHoraAlteracao = objeto.data_hora_alteracao
    this.dataHoraInclusao = objeto.data_hora_inclusao
    this.descricao = objeto.descricao
    this.excluido = objeto.excluido
    this.nomeArquivo = objeto.nome_arquivo
    this.nomeUsuarioInclusao = objeto.nome_usuario_inclusao
    this.parametros = objeto.parametros
    this.sincronizado = objeto.sincronizado
  }
}
export interface interfaceListaRelatoriosAnexos extends interfaceRecurso {
  codigo?: string
  codigo_anexo?: string
  codigo_corporativo?: string
  codigo_retatorio?: string
  codigo_usuario_alteracao?: string
  codigo_usuario_inclusao?: string
  data_hora_alteracao?: string
  data_hora_inclusao?: string
  descricao?: string
  excluido?: string
  nome_arquivo?: string
  nome_usuario_inclusao?: string
  observacao?: string
  ordem?: number
  sincronizado?: string
  titulo?: string
}
export class ClasseListaRelatoriosAnexos extends Recurso {
  recurso = 'lista_relatorios_anexos'
  codigo?: string
  codigoAnexo?: string
  codigoCorporativo?: string
  codigoRetatorio?: string
  codigoUsuarioAlteracao?: string
  codigoUsuarioInclusao?: string
  dataHoraAlteracao?: string
  dataHoraInclusao?: string
  descricao?: string
  excluido?: string
  nomeArquivo?: string
  nomeUsuarioInclusao?: string
  observacao?: string
  ordem?: number
  sincronizado?: string
  titulo?: string
  public get objeto(): interfaceListaRelatoriosAnexos {
    return {
      codigo: this.codigo,
      codigo_anexo: this.codigoAnexo,
      codigo_corporativo: this.codigoCorporativo,
      codigo_retatorio: this.codigoRetatorio,
      codigo_usuario_alteracao: this.codigoUsuarioAlteracao,
      codigo_usuario_inclusao: this.codigoUsuarioInclusao,
      data_hora_alteracao: this.dataHoraAlteracao,
      data_hora_inclusao: this.dataHoraInclusao,
      descricao: this.descricao,
      excluido: this.excluido,
      nome_arquivo: this.nomeArquivo,
      nome_usuario_inclusao: this.nomeUsuarioInclusao,
      observacao: this.observacao,
      ordem: this.ordem,
      sincronizado: this.sincronizado,
      titulo: this.titulo,
    }
  }
  public set objeto(objeto: interfaceListaRelatoriosAnexos) {
    this.codigo = objeto.codigo
    this.codigoAnexo = objeto.codigo_anexo
    this.codigoCorporativo = objeto.codigo_corporativo
    this.codigoRetatorio = objeto.codigo_retatorio
    this.codigoUsuarioAlteracao = objeto.codigo_usuario_alteracao
    this.codigoUsuarioInclusao = objeto.codigo_usuario_inclusao
    this.dataHoraAlteracao = objeto.data_hora_alteracao
    this.dataHoraInclusao = objeto.data_hora_inclusao
    this.descricao = objeto.descricao
    this.excluido = objeto.excluido
    this.nomeArquivo = objeto.nome_arquivo
    this.nomeUsuarioInclusao = objeto.nome_usuario_inclusao
    this.observacao = objeto.observacao
    this.ordem = objeto.ordem
    this.sincronizado = objeto.sincronizado
    this.titulo = objeto.titulo
  }
}
export interface interfaceModelos extends interfaceRecurso {
  codigo?: number
  titulo?: string
}
export class ClasseModelos extends Recurso {
  recurso = 'modelos'
  codigo?: number
  titulo?: string
  public get objeto(): interfaceModelos {
    return {
      codigo: this.codigo,
      titulo: this.titulo,
    }
  }
  public set objeto(objeto: interfaceModelos) {
    this.codigo = objeto.codigo
    this.titulo = objeto.titulo
  }
}
export interface interfaceModelosTarefas extends interfaceRecurso {
  codigo?: number
  codigo_modelo?: number
  custo?: number
  descricao?: string
  prioridade?: number
  titulo?: string
}
export class ClasseModelosTarefas extends Recurso {
  recurso = 'modelos_tarefas'
  codigo?: number
  codigoModelo?: number
  custo?: number
  descricao?: string
  prioridade?: number
  titulo?: string
  public get objeto(): interfaceModelosTarefas {
    return {
      codigo: this.codigo,
      codigo_modelo: this.codigoModelo,
      custo: this.custo,
      descricao: this.descricao,
      prioridade: this.prioridade,
      titulo: this.titulo,
    }
  }
  public set objeto(objeto: interfaceModelosTarefas) {
    this.codigo = objeto.codigo
    this.codigoModelo = objeto.codigo_modelo
    this.custo = objeto.custo
    this.descricao = objeto.descricao
    this.prioridade = objeto.prioridade
    this.titulo = objeto.titulo
  }
}
export interface interfaceParametros extends interfaceRecurso {
  codigo?: string
  codigo_corporativo?: string
  codigo_usuario_alteracao?: string
  codigo_usuario_inclusao?: string
  data_hora_alteracao?: string
  data_hora_inclusao?: string
  dias_gratis_web?: number
  excluido?: string
  sincronizado?: string
  versao_minima_app_android?: number
}
export class ClasseParametros extends Recurso {
  recurso = 'parametros'
  codigo?: string
  codigoCorporativo?: string
  codigoUsuarioAlteracao?: string
  codigoUsuarioInclusao?: string
  dataHoraAlteracao?: string
  dataHoraInclusao?: string
  diasGratisWeb?: number
  excluido?: string
  sincronizado?: string
  versaoMinimaAppAndroid?: number
  public get objeto(): interfaceParametros {
    return {
      codigo: this.codigo,
      codigo_corporativo: this.codigoCorporativo,
      codigo_usuario_alteracao: this.codigoUsuarioAlteracao,
      codigo_usuario_inclusao: this.codigoUsuarioInclusao,
      data_hora_alteracao: this.dataHoraAlteracao,
      data_hora_inclusao: this.dataHoraInclusao,
      dias_gratis_web: this.diasGratisWeb,
      excluido: this.excluido,
      sincronizado: this.sincronizado,
      versao_minima_app_android: this.versaoMinimaAppAndroid,
    }
  }
  public set objeto(objeto: interfaceParametros) {
    this.codigo = objeto.codigo
    this.codigoCorporativo = objeto.codigo_corporativo
    this.codigoUsuarioAlteracao = objeto.codigo_usuario_alteracao
    this.codigoUsuarioInclusao = objeto.codigo_usuario_inclusao
    this.dataHoraAlteracao = objeto.data_hora_alteracao
    this.dataHoraInclusao = objeto.data_hora_inclusao
    this.diasGratisWeb = objeto.dias_gratis_web
    this.excluido = objeto.excluido
    this.sincronizado = objeto.sincronizado
    this.versaoMinimaAppAndroid = objeto.versao_minima_app_android
  }
}
export interface interfaceProjetos extends interfaceRecurso {
  alerta_dias?: number
  codigo?: string
  codigo_corporativo?: string
  codigo_empreendedor?: string
  codigo_empreendimento?: string
  codigo_licenciador?: string
  codigo_usuario_alteracao?: string
  codigo_usuario_inclusao?: string
  data_hora_alteracao?: string
  data_hora_inclusao?: string
  descricao?: string
  excluido?: string
  identificador?: string
  numero_processo?: string
  orcamento?: number
  prazo?: string
  sincronizado?: string
  situacao?: number
  titulo?: string
}
export class ClasseProjetos extends Recurso {
  recurso = 'projetos'
  alertaDias?: number
  codigo?: string
  codigoCorporativo?: string
  codigoEmpreendedor?: string
  codigoEmpreendimento?: string
  codigoLicenciador?: string
  codigoUsuarioAlteracao?: string
  codigoUsuarioInclusao?: string
  dataHoraAlteracao?: string
  dataHoraInclusao?: string
  descricao?: string
  excluido?: string
  identificador?: string
  numeroProcesso?: string
  orcamento?: number
  prazo?: string
  sincronizado?: string
  situacao?: number
  titulo?: string
  public get objeto(): interfaceProjetos {
    return {
      alerta_dias: this.alertaDias,
      codigo: this.codigo,
      codigo_corporativo: this.codigoCorporativo,
      codigo_empreendedor: this.codigoEmpreendedor,
      codigo_empreendimento: this.codigoEmpreendimento,
      codigo_licenciador: this.codigoLicenciador,
      codigo_usuario_alteracao: this.codigoUsuarioAlteracao,
      codigo_usuario_inclusao: this.codigoUsuarioInclusao,
      data_hora_alteracao: this.dataHoraAlteracao,
      data_hora_inclusao: this.dataHoraInclusao,
      descricao: this.descricao,
      excluido: this.excluido,
      identificador: this.identificador,
      numero_processo: this.numeroProcesso,
      orcamento: this.orcamento,
      prazo: this.prazo,
      sincronizado: this.sincronizado,
      situacao: this.situacao,
      titulo: this.titulo,
    }
  }
  public set objeto(objeto: interfaceProjetos) {
    this.alertaDias = objeto.alerta_dias
    this.codigo = objeto.codigo
    this.codigoCorporativo = objeto.codigo_corporativo
    this.codigoEmpreendedor = objeto.codigo_empreendedor
    this.codigoEmpreendimento = objeto.codigo_empreendimento
    this.codigoLicenciador = objeto.codigo_licenciador
    this.codigoUsuarioAlteracao = objeto.codigo_usuario_alteracao
    this.codigoUsuarioInclusao = objeto.codigo_usuario_inclusao
    this.dataHoraAlteracao = objeto.data_hora_alteracao
    this.dataHoraInclusao = objeto.data_hora_inclusao
    this.descricao = objeto.descricao
    this.excluido = objeto.excluido
    this.identificador = objeto.identificador
    this.numeroProcesso = objeto.numero_processo
    this.orcamento = objeto.orcamento
    this.prazo = objeto.prazo
    this.sincronizado = objeto.sincronizado
    this.situacao = objeto.situacao
    this.titulo = objeto.titulo
  }
}
export interface interfaceProjetosResponsaveis extends interfaceRecurso {
  codigo?: string
  codigo_corporativo?: string
  codigo_origem?: string
  codigo_usuario?: string
  codigo_usuario_alteracao?: string
  codigo_usuario_inclusao?: string
  data_hora_alteracao?: string
  data_hora_inclusao?: string
  excluido?: string
  sincronizado?: string
}
export class ClasseProjetosResponsaveis extends Recurso {
  recurso = 'projetos_responsaveis'
  codigo?: string
  codigoCorporativo?: string
  codigoOrigem?: string
  codigoUsuario?: string
  codigoUsuarioAlteracao?: string
  codigoUsuarioInclusao?: string
  dataHoraAlteracao?: string
  dataHoraInclusao?: string
  excluido?: string
  sincronizado?: string
  public get objeto(): interfaceProjetosResponsaveis {
    return {
      codigo: this.codigo,
      codigo_corporativo: this.codigoCorporativo,
      codigo_origem: this.codigoOrigem,
      codigo_usuario: this.codigoUsuario,
      codigo_usuario_alteracao: this.codigoUsuarioAlteracao,
      codigo_usuario_inclusao: this.codigoUsuarioInclusao,
      data_hora_alteracao: this.dataHoraAlteracao,
      data_hora_inclusao: this.dataHoraInclusao,
      excluido: this.excluido,
      sincronizado: this.sincronizado,
    }
  }
  public set objeto(objeto: interfaceProjetosResponsaveis) {
    this.codigo = objeto.codigo
    this.codigoCorporativo = objeto.codigo_corporativo
    this.codigoOrigem = objeto.codigo_origem
    this.codigoUsuario = objeto.codigo_usuario
    this.codigoUsuarioAlteracao = objeto.codigo_usuario_alteracao
    this.codigoUsuarioInclusao = objeto.codigo_usuario_inclusao
    this.dataHoraAlteracao = objeto.data_hora_alteracao
    this.dataHoraInclusao = objeto.data_hora_inclusao
    this.excluido = objeto.excluido
    this.sincronizado = objeto.sincronizado
  }
}
export interface interfaceProjetosTarefas extends interfaceRecurso {
  alerta_dias?: number
  codigo?: string
  codigo_corporativo?: string
  codigo_projeto?: string
  codigo_usuario_alteracao?: string
  codigo_usuario_inclusao?: string
  custo?: number
  data_hora_alteracao?: string
  data_hora_inclusao?: string
  descricao?: string
  excluido?: string
  prazo?: string
  prioridade?: number
  sincronizado?: string
  situacao?: number
  titulo?: string
}
export class ClasseProjetosTarefas extends Recurso {
  recurso = 'projetos_tarefas'
  alertaDias?: number
  codigo?: string
  codigoCorporativo?: string
  codigoProjeto?: string
  codigoUsuarioAlteracao?: string
  codigoUsuarioInclusao?: string
  custo?: number
  dataHoraAlteracao?: string
  dataHoraInclusao?: string
  descricao?: string
  excluido?: string
  prazo?: string
  prioridade?: number
  sincronizado?: string
  situacao?: number
  titulo?: string
  public get objeto(): interfaceProjetosTarefas {
    return {
      alerta_dias: this.alertaDias,
      codigo: this.codigo,
      codigo_corporativo: this.codigoCorporativo,
      codigo_projeto: this.codigoProjeto,
      codigo_usuario_alteracao: this.codigoUsuarioAlteracao,
      codigo_usuario_inclusao: this.codigoUsuarioInclusao,
      custo: this.custo,
      data_hora_alteracao: this.dataHoraAlteracao,
      data_hora_inclusao: this.dataHoraInclusao,
      descricao: this.descricao,
      excluido: this.excluido,
      prazo: this.prazo,
      prioridade: this.prioridade,
      sincronizado: this.sincronizado,
      situacao: this.situacao,
      titulo: this.titulo,
    }
  }
  public set objeto(objeto: interfaceProjetosTarefas) {
    this.alertaDias = objeto.alerta_dias
    this.codigo = objeto.codigo
    this.codigoCorporativo = objeto.codigo_corporativo
    this.codigoProjeto = objeto.codigo_projeto
    this.codigoUsuarioAlteracao = objeto.codigo_usuario_alteracao
    this.codigoUsuarioInclusao = objeto.codigo_usuario_inclusao
    this.custo = objeto.custo
    this.dataHoraAlteracao = objeto.data_hora_alteracao
    this.dataHoraInclusao = objeto.data_hora_inclusao
    this.descricao = objeto.descricao
    this.excluido = objeto.excluido
    this.prazo = objeto.prazo
    this.prioridade = objeto.prioridade
    this.sincronizado = objeto.sincronizado
    this.situacao = objeto.situacao
    this.titulo = objeto.titulo
  }
}
export interface interfaceRelatorios extends interfaceRecurso {
  codigo?: string
  codigo_corporativo?: string
  codigo_usuario_alteracao?: string
  codigo_usuario_inclusao?: string
  data_hora_alteracao?: string
  data_hora_inclusao?: string
  descricao?: string
  excluido?: string
  nome_arquivo?: string
  parametros?: string
  sincronizado?: string
}
export class ClasseRelatorios extends Recurso {
  recurso = 'relatorios'
  codigo?: string
  codigoCorporativo?: string
  codigoUsuarioAlteracao?: string
  codigoUsuarioInclusao?: string
  dataHoraAlteracao?: string
  dataHoraInclusao?: string
  descricao?: string
  excluido?: string
  nomeArquivo?: string
  parametros?: string
  sincronizado?: string
  public get objeto(): interfaceRelatorios {
    return {
      codigo: this.codigo,
      codigo_corporativo: this.codigoCorporativo,
      codigo_usuario_alteracao: this.codigoUsuarioAlteracao,
      codigo_usuario_inclusao: this.codigoUsuarioInclusao,
      data_hora_alteracao: this.dataHoraAlteracao,
      data_hora_inclusao: this.dataHoraInclusao,
      descricao: this.descricao,
      excluido: this.excluido,
      nome_arquivo: this.nomeArquivo,
      parametros: this.parametros,
      sincronizado: this.sincronizado,
    }
  }
  public set objeto(objeto: interfaceRelatorios) {
    this.codigo = objeto.codigo
    this.codigoCorporativo = objeto.codigo_corporativo
    this.codigoUsuarioAlteracao = objeto.codigo_usuario_alteracao
    this.codigoUsuarioInclusao = objeto.codigo_usuario_inclusao
    this.dataHoraAlteracao = objeto.data_hora_alteracao
    this.dataHoraInclusao = objeto.data_hora_inclusao
    this.descricao = objeto.descricao
    this.excluido = objeto.excluido
    this.nomeArquivo = objeto.nome_arquivo
    this.parametros = objeto.parametros
    this.sincronizado = objeto.sincronizado
  }
}
export interface interfaceRelatoriosAnexos extends interfaceRecurso {
  codigo?: string
  codigo_anexo?: string
  codigo_corporativo?: string
  codigo_retatorio?: string
  codigo_usuario_alteracao?: string
  codigo_usuario_inclusao?: string
  data_hora_alteracao?: string
  data_hora_inclusao?: string
  excluido?: string
  ordem?: number
  sincronizado?: string
  titulo?: string
}
export class ClasseRelatoriosAnexos extends Recurso {
  recurso = 'relatorios_anexos'
  codigo?: string
  codigoAnexo?: string
  codigoCorporativo?: string
  codigoRetatorio?: string
  codigoUsuarioAlteracao?: string
  codigoUsuarioInclusao?: string
  dataHoraAlteracao?: string
  dataHoraInclusao?: string
  excluido?: string
  ordem?: number
  sincronizado?: string
  titulo?: string
  public get objeto(): interfaceRelatoriosAnexos {
    return {
      codigo: this.codigo,
      codigo_anexo: this.codigoAnexo,
      codigo_corporativo: this.codigoCorporativo,
      codigo_retatorio: this.codigoRetatorio,
      codigo_usuario_alteracao: this.codigoUsuarioAlteracao,
      codigo_usuario_inclusao: this.codigoUsuarioInclusao,
      data_hora_alteracao: this.dataHoraAlteracao,
      data_hora_inclusao: this.dataHoraInclusao,
      excluido: this.excluido,
      ordem: this.ordem,
      sincronizado: this.sincronizado,
      titulo: this.titulo,
    }
  }
  public set objeto(objeto: interfaceRelatoriosAnexos) {
    this.codigo = objeto.codigo
    this.codigoAnexo = objeto.codigo_anexo
    this.codigoCorporativo = objeto.codigo_corporativo
    this.codigoRetatorio = objeto.codigo_retatorio
    this.codigoUsuarioAlteracao = objeto.codigo_usuario_alteracao
    this.codigoUsuarioInclusao = objeto.codigo_usuario_inclusao
    this.dataHoraAlteracao = objeto.data_hora_alteracao
    this.dataHoraInclusao = objeto.data_hora_inclusao
    this.excluido = objeto.excluido
    this.ordem = objeto.ordem
    this.sincronizado = objeto.sincronizado
    this.titulo = objeto.titulo
  }
}
export interface interfaceTarefasPredecessoras extends interfaceRecurso {
  codigo?: string
  codigo_corporativo?: string
  codigo_tarefa?: string
  codigo_tarefa_predecessora?: string
  codigo_usuario_alteracao?: string
  codigo_usuario_inclusao?: string
  data_hora_alteracao?: string
  data_hora_inclusao?: string
  excluido?: string
  sincronizado?: string
}
export class ClasseTarefasPredecessoras extends Recurso {
  recurso = 'tarefas_predecessoras'
  codigo?: string
  codigoCorporativo?: string
  codigoTarefa?: string
  codigoTarefaPredecessora?: string
  codigoUsuarioAlteracao?: string
  codigoUsuarioInclusao?: string
  dataHoraAlteracao?: string
  dataHoraInclusao?: string
  excluido?: string
  sincronizado?: string
  public get objeto(): interfaceTarefasPredecessoras {
    return {
      codigo: this.codigo,
      codigo_corporativo: this.codigoCorporativo,
      codigo_tarefa: this.codigoTarefa,
      codigo_tarefa_predecessora: this.codigoTarefaPredecessora,
      codigo_usuario_alteracao: this.codigoUsuarioAlteracao,
      codigo_usuario_inclusao: this.codigoUsuarioInclusao,
      data_hora_alteracao: this.dataHoraAlteracao,
      data_hora_inclusao: this.dataHoraInclusao,
      excluido: this.excluido,
      sincronizado: this.sincronizado,
    }
  }
  public set objeto(objeto: interfaceTarefasPredecessoras) {
    this.codigo = objeto.codigo
    this.codigoCorporativo = objeto.codigo_corporativo
    this.codigoTarefa = objeto.codigo_tarefa
    this.codigoTarefaPredecessora = objeto.codigo_tarefa_predecessora
    this.codigoUsuarioAlteracao = objeto.codigo_usuario_alteracao
    this.codigoUsuarioInclusao = objeto.codigo_usuario_inclusao
    this.dataHoraAlteracao = objeto.data_hora_alteracao
    this.dataHoraInclusao = objeto.data_hora_inclusao
    this.excluido = objeto.excluido
    this.sincronizado = objeto.sincronizado
  }
}
export interface interfaceTarefasResponsaveis extends interfaceRecurso {
  codigo?: string
  codigo_corporativo?: string
  codigo_tarefa?: string
  codigo_usuario?: string
  codigo_usuario_alteracao?: string
  codigo_usuario_inclusao?: string
  data_hora_alteracao?: string
  data_hora_inclusao?: string
  excluido?: string
  sincronizado?: string
}
export class ClasseTarefasResponsaveis extends Recurso {
  recurso = 'tarefas_responsaveis'
  codigo?: string
  codigoCorporativo?: string
  codigoTarefa?: string
  codigoUsuario?: string
  codigoUsuarioAlteracao?: string
  codigoUsuarioInclusao?: string
  dataHoraAlteracao?: string
  dataHoraInclusao?: string
  excluido?: string
  sincronizado?: string
  public get objeto(): interfaceTarefasResponsaveis {
    return {
      codigo: this.codigo,
      codigo_corporativo: this.codigoCorporativo,
      codigo_tarefa: this.codigoTarefa,
      codigo_usuario: this.codigoUsuario,
      codigo_usuario_alteracao: this.codigoUsuarioAlteracao,
      codigo_usuario_inclusao: this.codigoUsuarioInclusao,
      data_hora_alteracao: this.dataHoraAlteracao,
      data_hora_inclusao: this.dataHoraInclusao,
      excluido: this.excluido,
      sincronizado: this.sincronizado,
    }
  }
  public set objeto(objeto: interfaceTarefasResponsaveis) {
    this.codigo = objeto.codigo
    this.codigoCorporativo = objeto.codigo_corporativo
    this.codigoTarefa = objeto.codigo_tarefa
    this.codigoUsuario = objeto.codigo_usuario
    this.codigoUsuarioAlteracao = objeto.codigo_usuario_alteracao
    this.codigoUsuarioInclusao = objeto.codigo_usuario_inclusao
    this.dataHoraAlteracao = objeto.data_hora_alteracao
    this.dataHoraInclusao = objeto.data_hora_inclusao
    this.excluido = objeto.excluido
    this.sincronizado = objeto.sincronizado
  }
}
export interface interfaceUsuarios extends interfaceRecurso {
  administrador?: string
  cadastros_base?: string
  cargo?: string
  codigo?: string
  codigo_corporativo?: string
  codigo_usuario_alteracao?: string
  codigo_usuario_inclusao?: string
  data_hora_alteracao?: string
  data_hora_inclusao?: string
  data_nascimento?: string
  email?: string
  excluido?: string
  nome?: string
  registro_profissional?: string
  senha?: string
  sexo?: string
  sincronizado?: string
  telefone?: string
}
export class ClasseUsuarios extends Recurso {
  recurso = 'usuarios'
  administrador?: string
  cadastrosBase?: string
  cargo?: string
  codigo?: string
  codigoCorporativo?: string
  codigoUsuarioAlteracao?: string
  codigoUsuarioInclusao?: string
  dataHoraAlteracao?: string
  dataHoraInclusao?: string
  dataNascimento?: string
  email?: string
  excluido?: string
  nome?: string
  registroProfissional?: string
  senha?: string
  sexo?: string
  sincronizado?: string
  telefone?: string
  public get objeto(): interfaceUsuarios {
    return {
      administrador: this.administrador,
      cadastros_base: this.cadastrosBase,
      cargo: this.cargo,
      codigo: this.codigo,
      codigo_corporativo: this.codigoCorporativo,
      codigo_usuario_alteracao: this.codigoUsuarioAlteracao,
      codigo_usuario_inclusao: this.codigoUsuarioInclusao,
      data_hora_alteracao: this.dataHoraAlteracao,
      data_hora_inclusao: this.dataHoraInclusao,
      data_nascimento: this.dataNascimento,
      email: this.email,
      excluido: this.excluido,
      nome: this.nome,
      registro_profissional: this.registroProfissional,
      senha: this.senha,
      sexo: this.sexo,
      sincronizado: this.sincronizado,
      telefone: this.telefone,
    }
  }
  public set objeto(objeto: interfaceUsuarios) {
    this.administrador = objeto.administrador
    this.cadastrosBase = objeto.cadastros_base
    this.cargo = objeto.cargo
    this.codigo = objeto.codigo
    this.codigoCorporativo = objeto.codigo_corporativo
    this.codigoUsuarioAlteracao = objeto.codigo_usuario_alteracao
    this.codigoUsuarioInclusao = objeto.codigo_usuario_inclusao
    this.dataHoraAlteracao = objeto.data_hora_alteracao
    this.dataHoraInclusao = objeto.data_hora_inclusao
    this.dataNascimento = objeto.data_nascimento
    this.email = objeto.email
    this.excluido = objeto.excluido
    this.nome = objeto.nome
    this.registroProfissional = objeto.registro_profissional
    this.senha = objeto.senha
    this.sexo = objeto.sexo
    this.sincronizado = objeto.sincronizado
    this.telefone = objeto.telefone
  }
}
