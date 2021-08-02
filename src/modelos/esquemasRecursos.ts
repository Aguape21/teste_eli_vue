import Recurso, { objetoRecurso } from './recurso'

interface interfaceUsuarios extends objetoRecurso {
  codigo_corporativo?: string
  codigo?: string
  nome?: string
  sexo?: string
}
export class EsquemaUsuarios extends Recurso {
  codigo_corporativo?: string
  codigo?: string
  nome?: string
  sexo?: string

  get objeto(): interfaceUsuarios {
    return {
      codigo_corporativo: this.codigo_corporativo,
      codigo: this.codigo,
      nome: this.nome,
      sexo: this.sexo,
    }
  }
  set objeto(o: interfaceUsuarios) {
    this.codigo_corporativo = o.codigo_corporativo
    this.codigo = o.codigo
    this.nome = o.nome
    this.sexo = o.sexo
  }
}
