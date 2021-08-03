import PhoneNumber from 'awesome-phonenumber'

export const linkWhatsApp = (numero: string): string | void => {
  //Gerar url para whatsapp
  const pn = new PhoneNumber(numero, 'BR')
  if (pn.isValid()) {
    return 'https://wa.me/' + pn.getNumber().substr(1)
  }
}

export const linkLigacao = (numero: string): string | void => {
  //gerar url para ligação
  const pn = new PhoneNumber(numero, 'BR')
  if (pn.isValid()) {
    return pn.getNumber('rfc3966')
  }
}
export const numeroNacional = (numero: string): string | void => {
  //gerar url para ligação
  const pn = new PhoneNumber(numero, 'BR')
  if (pn.isValid()) {
    return pn.getNumber('national')
  }
}
