const links: { [key: string]: { link: string; texto: string } } = {
  politicaPrivacidade: {
    texto: 'Politica de Privacidade',
    link: 'https://e-licencie.com.br/legal/politica-de-privacidade.html',
  },
  termosDeUso: {
    texto: 'Termos de Uso',
    link: 'https://e-licencie.com.br/legal/termo-de-uso-site.html',
  },

  email: {
    texto: 'E-mail',
    link:
      'mailto:contato@e-licencie.com.br?subject=Solicita%C3%A7%C3%A3o%20de%20suporte%20para%20o%20software%20%F0%9F%8C%B1%20e-licencie&body=Preciso%20de%20suporte%20para%20... ',
  },

  telefone: {
    texto: 'Telefone',
    link: 'tel:+5548999482983',
  },

  whatsApp: {
    texto: 'WhatsApp',
    link:
      'https://api.whatsapp.com/send?phone=5548999482983&text=Estou%20usando%20o%20%F0%9F%8C%B1%20e-licencie%20e%20preciso%20de%20suporte%20para%20...',
  },
}
export default links
