/*
 Documentação:
    
    Documentação:
    https://dexie.org/docs/Dexie/Dexie

    Implementação com VUE
    https://github.com/dfahlander/Dexie.js/tree/master/samples/vue

*/

import Dexie, { Table, IndexableType } from 'dexie'

class BancoLocal extends Dexie {
  lMetadados: Table<any, IndexableType>

  constructor() {
    super('local')
    //quando alterar essa estrtura, incrementar um valor na versão
    this.version(3).stores({
      metadados: '++id,recurso,field',
    })
    //tabela de metadados
    this.lMetadados = this.table('metadados')
  }
}

const local = new BancoLocal()

const lMetadados = local.lMetadados

export { local, lMetadados }
