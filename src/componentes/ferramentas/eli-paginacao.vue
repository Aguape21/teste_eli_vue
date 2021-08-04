<!-- Componente para inserção de paginação

v-model = página atual, vai de 0 a N e será exibido de 1 a N+1
quantidadeRegistros = Quantidade de registros
registrosPorPagina = Quantidade de registros por páginas
quantidadePaginas = quantidade de páginas, caso não tenha será calculado
funcao = (novaPagina)=>VaiPara()

-->

<template>
  <div v-if="listaPaginas.length > 1" align="center" class="overflow-auto">
    <b-button-group>
      <b-button
        v-if="listaPaginas[0] > 0"
        @click="irPara(0)"
        variant="outline-primary"
      >
        <oh-icon name="fa-angle-double-left" />
      </b-button>
      <b-button
        v-if="listaPaginas[0] > 0"
        @click="irPara(paginaAtual_ - 1)"
        variant="outline-primary"
      >
        <oh-icon name="fa-angle-left" />
      </b-button>

      <b-button
        v-for="pagina of listaPaginas"
        :key="'pagina-' + pagina"
        @click="irPara(pagina)"
        :variant="pagina != value ? 'outline-primary' : 'primary'"
      >
        {{ pagina + 1 }}
      </b-button>

      <b-button
        v-if="listaPaginas[listaPaginas.length - 1] < quantidadePaginas_ - 1"
        @click="irPara(paginaAtual_ + 1)"
        variant="outline-primary"
      >
        <oh-icon name="fa-angle-right" />
      </b-button>
      <b-button
        v-if="listaPaginas[listaPaginas.length - 1] < quantidadePaginas_ - 1"
        @click="irPara(quantidadePaginas_ - 1)"
        variant="outline-primary"
      >
        <oh-icon name="fa-angle-double-right" />
      </b-button>
    </b-button-group>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  components: {},
  props: {
    paginaAtual: {
      type: Number,
      default: 0,
    },

    value: {
      type: Number,
      default: 0,
    },
    quantidadeRegistros: {
      type: Number,
      default: 999,
    },
    registrosPorPagina: {
      type: Number,
      default: 10,
    },

    quantidadePaginas: {
      type: Number,
      default: null,
    },
    funcao: {
      type: Function,
      default: (a: string) => console.log(a),
    },
  },
  data: function () {
    return {
      listaPaginas: [0, 1, 2, 3, 4, 5, 6] as number[],
      paginaAtual_: 0 as number,
      quantidadePaginas_: 0 as number,
    }
  },
  created: function () {
    //calcular a quantidade de páginas caso não tenha

    this.quantidadePaginas_ = this.quantidadePaginas
      ? this.quantidadePaginas
      : ((this.quantidadeRegistros / this.registrosPorPagina) | 0) +
        (this.quantidadeRegistros % this.registrosPorPagina ? 1 : 0)

    //pegar valor da página atual
    this.paginaAtual_ =
      this.value < 0
        ? 0
        : this.value < this.quantidadePaginas_
        ? this.value
        : this.quantidadePaginas_ - 1

    if (this.quantidadePaginas_ <= 11) {
      this.listaPaginas = Array.from(Array(this.quantidadePaginas_).keys())
    } else {
      //montar array

      let paginas_anterior = this.paginaAtual_ <= 3 ? this.paginaAtual_ : 3
      let paginas_posterior =
        this.quantidadePaginas_ - this.paginaAtual_ - 1 <= 3
          ? this.quantidadePaginas_ - this.paginaAtual_ - 1
          : 3

      if (paginas_posterior < 3) {
        paginas_anterior += 3 - paginas_posterior
      }

      if (paginas_anterior < 3) {
        paginas_posterior += 3 - paginas_anterior
      }

      this.listaPaginas = [
        ...Array.from(Array(paginas_anterior).keys())
          .reverse()
          .map((a) => this.paginaAtual_ - a - 1),
        this.paginaAtual_,
        ...Array.from(Array(paginas_posterior).keys()).map(
          (a) => this.paginaAtual_ + a + 1,
        ),
      ]
    }
  },
  methods: {
    irPara(pg: number) {
      if (this.funcao && pg != this.value) {
        this.funcao(pg)
      }
      this.$emit('input', pg)
    },
  },
})
</script>
<style scoped></style>
