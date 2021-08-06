<template>
  <footer id="rodape">
    <div class="rodape-copyright">
      <p><eli-logo width="120px" tipo="branco"></eli-logo></p>
      <p>2018-{{ ano }} © Azteca Software LTDA</p>
      <p>
        <b>
          <a @click="abrirIframe('politicaPrivacidade')">
            Politica de Privacidade
          </a>
          |
          <a @click="abrirIframe('termosDeUso')">Termos de Uso</a>
        </b>
      </p>
      <p>
        <a
          target="_blank"
          :href="links.whatsApp.link"
          alt="Clique para Chamar no WhatsApp"
        >
          <oh-icon name="bi-whatsapp" scale="1.5" />
        </a>

        <a target="_blank" alt="Clique que ligar" :href="links.telefone.link">
          <oh-icon name="ri-cellphone-fill" scale="1.5" />
        </a>

        <a
          target="_blank"
          :href="links.email.link"
          alt="Clique para enviar um e-mail"
        >
          <oh-icon name="md-email-outlined" scale="1.5" />
        </a>
      </p>
    </div>
  </footer>
</template>

<script lang="ts">
import eli_logo from '@/componentes/ferramentas/eli-logo.vue'
import links from '@/ts/linksEContatos'

import Vue from 'vue'
export default Vue.extend({
  components: {
    'eli-logo': eli_logo,
  },

  data: function () {
    return {
      ano: '',
      links,
    }
  },
  created: function () {
    this.ano = this.anoHoje()
  },

  methods: {
    abrirIframe(iframe: string) {
      const query = { ...this.$route.query }
      query.iframe = iframe
      this.$router.replace({ query: query })
    },
  },
})
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
