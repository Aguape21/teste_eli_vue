<!-- Componente para inserção de paginação

v-model = página atual, vai de 0 a N e será exibido de 1 a N+1
quantidadeRegistros = Quantidade de registros
registrosPorPagina = Quantidade de registros por páginas
quantidadePaginas = quantidade de páginas, caso não tenha será calculado
funcao = (novaPagina)=>VaiPara()

-->

<template>
  <div align="center" class="overflow-auto">
    <b-button-group>
      <b-button variant="outline-primary">
        <oh-icon name="fa-angle-double-left" />
      </b-button>
      <b-button variant="outline-primary">
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

      <b-button variant="outline-primary">
        <oh-icon name="fa-angle-right" />
      </b-button>
      <b-button variant="outline-primary">
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
      listaPaginas: [0, 1, 2, 3, 4, 5, 6],
      paginaAtual_: 0 as number,
      quantidadePaginas_: 0 as number,
    }
  },
  created: function () {
    //calcular a quantidade de páginas caso não tenha
    if (!this.quantidadePaginas) {
      this.quantidadePaginas_ =
        ((this.quantidadeRegistros / this.registrosPorPagina) | 0) +
        (this.quantidadeRegistros % this.registrosPorPagina ? 1 : 0)
    }

    //pegar valor da página atual
    this.paginaAtual_ =
      this.value < 0
        ? 0
        : this.value < this.quantidadePaginas_
        ? this.value
        : this.quantidadePaginas_ - 1

    //montar array

    /*
    const paginas_anterior = this.paginaAtual_ <= 3 ? this.paginaAtual_ : 3
    const paginas_posterior =
      this.quantidadePaginas - this.paginaAtual_ - 1 <= 3
        ? this.quantidadePaginas - this.paginaAtual_ - 1
        : 3
*/
    if (this.quantidadePaginas_ <= 11) {
      this.listaPaginas = Array.from(Array(this.quantidadePaginas_).keys())
    } else {
      this.listaPaginas = [
        ...Array.from(Array(this.quantidadePaginas_).keys())
          .reverse()
          .map((a) => this.paginaAtual_ - a),
      ]
    }
  },
  methods: {
    irPara(pg: number) {
      if (this.funcao) {
        this.funcao(pg)
      }
      this.$emit('input', pg)
    },
  },
})
</script>
<style scoped></style>
