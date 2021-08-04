/*
    Registro de intefaces que serão utulizadas apenas em componentes
*/

//define os tipos de celuas para tabelas
enum tipoColunas {
  texto = 'texto',
  telefone = 'telefone',
  email = 'email',
}

//Estrutura de configuração de colunas de tabelas de consultas
export interface interfaceColuna {
  titulo: string
  valor: (item: any) => string | undefined
  tamanho: number
  tipo?: tipoColunas
}

//estrutura de paginação de consultas
export interface interfacePaginacaoConsulta {
  quantidadeRegistros: number
  limit: number
  offset?: number
  funcao: (pagina: number) => void
}

//estrutura de filtro de url
export interface interfaceFiltroUrl {
  offset?: number
}
