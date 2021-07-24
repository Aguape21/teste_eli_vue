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
        <font-awesome-icon icon="fa-brands fa-whatsapp" />
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
  padding-top: 1px;
}

#rodape .rodape-copyright {
  background-color: #333333;
  padding-top: 3px;
  padding-bottom: 3px;
  text-align: center;
}
#rodape p {
  margin-bottom:0px;
}


</style>
