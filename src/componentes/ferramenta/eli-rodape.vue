<template>
  <footer id="rodape">
    <div class="rodape-copyright">
      <p><eli-logo width="120px" tipo="branco"></eli-logo></p>
      <p>
        2018-2021 © Azteca Software LTDA
      </p>
      <p>
        <b>
          <eli-linkModalIframe
            texto="Politica de Privacidade"
            link="https://e-licencie.com.br/legal/politica-de-privacidade.html"
          />
          |
          <eli-linkModalIframe
            texto="Termos de Uso"
            link="https://e-licencie.com.br/legal/termo-de-uso-site.html"
          />
        </b>
      </p>
      <p>
        <a
          target="_blank"
          href="https://api.whatsapp.com/send?phone=5548999482983&text=Estou%20usando%20o%20%F0%9F%8C%B1%20e-licencie%20e%20preciso%20de%20suporte%20para%20..."
          alt="Clique para Chamar no WhatsApp"
        >
          <oh-icon name="bi-whatsapp" scale="1.5" />
        </a>

        <a target="_blank" alt="Clique que ligar" href="tel:+5548999482983">
          <oh-icon name="ri-cellphone-fill" scale="1.5" />
        </a>

        <a
          target="_blank"
          href=" mailto:contato@e-licencie.com.br?subject=Solicita%C3%A7%C3%A3o%20de%20suporte%20para%20o%20software%20%F0%9F%8C%B1%20e-licencie&body=Preciso%20de%20suporte%20para%20... "
          alt="Clique para enviar um e-mail"
        >
          <oh-icon name="md-email-outlined" scale="1.5" />
        </a>
      </p>
    </div>
  </footer>
</template>

<script>
import eli_logo from './eli-logo.vue'
import eli_linkModalIframe from './eli-linkModalIframe.vue'

export default {
  components: {
    'eli-logo': eli_logo,
    'eli-linkModalIframe': eli_linkModalIframe,
  },

  data: function () {
    return {
      //teste: true,
    }
  },
  created: function () {},

  methods: {
    //teste() {},
  },
}
</script>

<style scoped>
#rodape {
  background-color: #3c3d41;
  color: white;
  margin-top: 20px;
}

#rodape .rodape-copyright {
  background-color: #333333;
  padding-top: 3px;
  padding-bottom: 3px;
  text-align: center;
}
#rodape p {
  margin-bottom: 0px;
}
</style>
