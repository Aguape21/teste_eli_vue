/*
    Registro de intefaces que serão utulizadas apenas em componentes
*/

enum tipoColunas {
  texto = 'texto',
  telefone = 'telefone',
  email = 'email',
}
export interface interfaceColuna {
  titulo: string
  valor: (item: any) => string | undefined
  tamanho: number
  tipo?: tipoColunas
}
