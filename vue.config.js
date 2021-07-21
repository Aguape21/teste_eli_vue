module.exports = {
  //publicPath: ''  permite que o deploy seja diretorio relativo
  publicPath:
    process.env.NODE_ENV === 'production'
      ? 'https://cdn.e-licencie.com.br/v2'
      : '',

  transpileDependencies: ['vuetify'],
}
