<!--
localhost:8080/#/publico/relatorios/fc570aff-d5c0-4d03-9466-42f9bfba9254
-->
<template>
  <eli-centro>
    <div>
      <div id="quadro-logo" style="">
        <router-link :to="{ name: 'login' }">
          <eli-logo width="220px"></eli-logo>
        </router-link>
      </div>

      <b-container id="painel">
        <eli-botaoAjuda
          :componente="'relatorios'"
          :tutorial="tutorial"
        ></eli-botaoAjuda>

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
            <b-row>
              <b-col cols="12">
                <h2>{{ listaRelatorios.objeto.descricao }}</h2>

                <p>
                  {{ listaRelatorios.objeto.descricao }}
                </p>
                Criado por
                <b>{{ listaRelatorios.objeto.nome_usuario_inclusao }}</b>
                em
                <b>
                  {{ paraDataHoraLocal(listaRelatorios.objeto.data_hora_inclusao) }}
                </b>
              </b-col>
            </b-row>

            <b-row>
              <b-col cols="12">
                <b-button-group>
                  <b-button
                    class="aj-baixar-relatorio"
                    @click="carregando(listaRelatorios.baixar(false))"
                    variant="primary"
                  >
                    <b-icon icon="cloud-download"></b-icon>
                    Baixar
                  </b-button>
                  <b-button
                    class="aj-ver-relatorio"
                    @click="carregando(listaRelatorios.baixar(true))"
                    variant="primary"
                  >
                    <b-icon icon="eye"></b-icon>
                    Abrir
                  </b-button>
                </b-button-group>
              </b-col>
            </b-row>
          </b-col>
        </b-row>

        <b-row v-if="anexos" class="aj-lista-anexos">
          <b-container>
            <h3>Anexos:</h3>
            <eli-ListaRelatoriosAnexos
              v-for="a in anexos"
              :key="a.codigo"
              :classe="a"
            ></eli-ListaRelatoriosAnexos>
          </b-container>
        </b-row>
      </b-container>
    </div>
  </eli-centro>
</template>

<script lang="ts">
//template de página
import eli_centro from '../componentes/retratos/eli-centro.vue'
//template de linha de anexo
import eli_ListaRelatoriosAnexos from '../componentes/recursos/eli-ListaRelatoriosAnexos.vue'
//modelo de objeto
import ListaRelatorios from '../modelos/lista_relatorios'
//modelo anexos
import ListaRelatoriosAnexos, {
  abrirVariosPorCodigo,
} from '../modelos/lista_relatorios_anexos'
//botao de ajuda
import botaoAjuda from '../componentes/ferramentas/eli-botaoAjuda.vue'
//importar logo
import eli_logo from '../componentes/ferramentas/eli-logo.vue'

import Vue from 'vue'
export default Vue.extend({
  components: {
    'eli-centro': eli_centro,
    'eli-ListaRelatoriosAnexos': eli_ListaRelatoriosAnexos,
    'eli-botaoAjuda': botaoAjuda,
    'eli-logo': eli_logo,
  },
  data: function () {
    return {
      codigoRelatorio: '',
      listaRelatorios: null as null | ListaRelatorios,
      anexos: null as null | ListaRelatoriosAnexos[],
      erro: null,
      tutorial: [
        {
          target: '.aj-baixar-relatorio',
          header: {
            title: 'Baixar relatório',
          },
          content: `Clique aqui para baixar versão em PDF do relatórios.`,
          params: {
            placement: 'top',
          },
        },

        {
          target: '.aj-ver-relatorio',
          header: {
            title: 'Ver relatório',
          },
          content: `Clique aqui para ver relatório em nova guia.`,
          params: {
            placement: 'top',
          },
        },

        {
          target: '.aj-lista-anexos',
          header: {
            title: 'Anexos do relatório',
          },
          content: `Lista de anexos que integram o relatório.`,

          params: {
            placement: 'top',
          },
        },
      ],
    }
  },
  created: function () {
    this.codigoRelatorio = this.$route.params.codigo
    this.carregando(this.carregarRelatorio()).catch((e) => {
      this.erro = e.message
    })
  },

  methods: {
    async carregarRelatorio() {
      this.listaRelatorios = new ListaRelatorios()

      await this.listaRelatorios.abrir(this.codigoRelatorio, true)

      if (
        this.listaRelatorios?.objeto.codigos_relatorios_anexos &&
        Array.isArray(this.listaRelatorios.objeto.codigos_relatorios_anexos) &&
        this.listaRelatorios.objeto.codigos_relatorios_anexos.length > 0
      ) {
        this.anexos = await abrirVariosPorCodigo(
          this.listaRelatorios?.objeto.codigos_relatorios_anexos
            ?.toString()
            .split(',') || [],
        )
      }
    },
  },
})
</script>

<style>
#quadro-logo {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#painel {
  background-color: aliceblue;
  border-radius: 10px;
}
</style>
