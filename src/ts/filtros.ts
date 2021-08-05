/*
   Tudo relaciondo a filtragem de consultas
*/

export enum tiposCondicao {
  IGUAL = 'IGUAL',
  IGUAL_OU = 'IGUAL_OU',
  DIFERENTE = 'DIFERENTE',
  DIFERENTE_OU = 'DIFERENTE_OU',
  CONTEM = 'CONTEM',
  CONTEM_OU = 'CONTEM_OU',
  COMECA = 'COMECA',
  COMECA_OU = 'COMECA_OU',
  TERMINA = 'TERMINA',
  TERMINA_OU = 'TERMINA_OU',
  MAIOR_OU_IGUAL = 'MAIOR_OU_IGUAL',
  MAIOR_OU_IGUAL_OU = 'MAIOR_OU_IGUAL_OU',
  MENOR_OU_IGUAL = 'MENOR_OU_IGUAL',
  MENOR_OU_IGUAL_OU = 'MENOR_OU_IGUAL_OU',
  MAIOR = 'MAIOR',
  MAIOR_OU = 'MAIOR_OU',
  MENOR = 'MENOR',
  MENOR_OU = 'MENOR_OU',
  DENTRO_DE = 'DENTRO_DE',
  DENTRO_DE_OU = 'DENTRO_DE_OU',
  SOBREPOR = 'SOBREPOR',
  SOBREPOR_OU = 'SOBREPOR_OU',
}

export interface interfaceFiltro {
  coluna: string
  condicao: tiposCondicao
  valor?: string | number | null
  descricao?: string
}

export const condicaoParaQGraphql = (
  filtros: interfaceFiltro[] | null | undefined,
  virgulaFim?: boolean,
): string => {
  if (filtros) {
    //codigo__IGUAL:"",
    return (
      filtros
        .map(
          (a) =>
            a.coluna +
            '__' +
            a.condicao +
            ':"' +
            (a.valor == undefined ? 'undefined' : a.valor) +
            '"',
        )
        .join(', ') + (virgulaFim && filtros && filtros.length > 0 ? ', ' : '')
    )
  } else {
    return ''
  }
}
