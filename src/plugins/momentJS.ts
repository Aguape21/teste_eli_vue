/*
    Tutorial:
        https://metring.com.br/tutorial-momentjs
*/

import Vue, { VueConstructor } from 'vue'

import moment from 'moment'

moment.locale('pt-BR')

const definirGlobal = (Vue: VueConstructor<Vue>): void => {
  //Converte uma data e hora para formato 21/07/1988 17h:00min

  Vue.prototype.paraDataHoraLocal = (dataHota: string | undefined | null) => {
    if (dataHota == undefined || dataHota == null || dataHota == '') return ''

    if (typeof dataHota == 'string') {
      const reIso = /(\d{4}\D\d{2}\D\d{2})(\D)(\d{2}\D\d{2}\D\d{2})(\.)?(\d+)?\D?/gm
      if (reIso.exec(dataHota)) {
        const data = moment(dataHota, moment.ISO_8601).add(3, 'hours')

        return data.format('DD/MM/YYYY [às] HH:mm')
      }
    }

    throw new Error(`Variável "${dataHota}" não é uma variável de data válida.`)
  }

  Vue.prototype.anoHoje = (): string => {
    return moment().format('YYYY')
  }
}

export default definirGlobal
