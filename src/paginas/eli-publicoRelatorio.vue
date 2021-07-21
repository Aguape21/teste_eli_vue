<!--
localhost:8080/#/publico/relatorios/08fe691b-9f5b-4d05-9685-3b7ad6e1c6a2
-->
<template>
  <eli-centro>

<div>
    <div id="quadro-logo" style="">
      <img
        style="max-width: 220px;"
        id="logo"
        src="~@/assets/imagens/logonome.png"
        alt=""
      />
    </div>

    <b-container id="painel">
      <b-row v-if="erro">
        <b-col cols="12">
          <b-alert show variant="danger">{{ erro }}</b-alert>
        </b-col>
      </b-row>
      <b-row v-if="listaRelatorios">
        <b-col cols="3">
          <b-img
            style="width: 70px;"
            :src="require('@/assets/imagens/pdf.png')"
            rounded
          ></b-img>
        </b-col>
        <b-col cols="9">
          <h2>{{ listaRelatorios.descricao }}</h2>

          <p>
            {{ listaRelatorios.descricao }}
          </p>
          Criado por
          <b>{{ listaRelatorios.nome_usuario_inclusao }}</b>
          em
          <b>{{ paraDataHoraLocal(listaRelatorios.data_hora_inclusao) }}</b>
        </b-col>
      </b-row>

      <b-row>
        <b-col cols="6">
          <b-button @click="carregando(listaRelatorios.baixar(false))" class="m-2" variant="primary">Baixar Relatório</b-button>
        </b-col>
        <b-col cols="6">
          <b-button @click="carregando(listaRelatorios.baixar(true))" class="m-2" variant="primary">Abrir  Relatório</b-button>
        </b-col>
      </b-row>
    </b-container>


</div>



  </eli-centro>
</template>

<script>
//template de página
import eli_centro from '../componentes/modelos/eli-centro.vue'
//modelo de objeto
import ListaRelatorios from '../modelos/lista_relatorios'

export default {
  components: {
    'eli-centro': eli_centro,
  },
  data: function () {
    return {
      codigoRelatorio: '',
      listaRelatorios: null,
      erro: null,
    }
  },
  created: function () {
    this.codigoRelatorio = this.$route.params.codigo
    this.carregando(this.carregarRelatorio())
  },

  methods: {
    async carregarRelatorio() {
      this.listaRelatorios = await new ListaRelatorios()
        .abrir(
          this.codigoRelatorio,
          ` codigo
          codigo_corporativo
        descricao
        nome_arquivo
        nome_usuario_inclusao
        codigos_relatorios_anexos
        codigo_usuario_alteracao
        data_hora_inclusao
        `,
          true,
        )
        .catch((e) => {
          this.erro = e.message
        })
    },
  },
}
</script>

<style>
#quadro-logo {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
#logo {
  width: 70%;
}

#painel {
  background-color: aliceblue;
  border-radius: 10px;
}
</style>
