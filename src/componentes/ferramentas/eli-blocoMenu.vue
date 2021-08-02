<template>
  <ul v-if="rotas && rotas.length > 0" id="ul" class="list-unstyled components">
    <li>
      <b-link
        v-b-toggle="uuid"
        data-toggle="collapse"
        aria-expanded="false"
        class="dropdown-toggle"
      >
        <oh-icon
          :name="icone && icone != '' ? icone : 'oi-dot'"
          animation="pulse"
          hover
        />
        {{ nome }}
      </b-link>

      <b-collapse :id="uuid">
        <ul class="list-unstyled" id="pageSubmenu">
          <li v-for="(item, idz) of rotas" :key="idz + uuid">
            <router-link
              :to="{
                name: item.name,
              }"
            >
              <oh-icon
                :name="
                  item.meta.icone && item.meta.icone != ''
                    ? item.meta.icone
                    : 'oi-dot'
                "
              />
              {{ item.meta.nome }}
            </router-link>
          </li>
        </ul>
      </b-collapse>
    </li>
  </ul>
</template>

<script lang="ts">
import { v4 as uuid } from 'uuid'

import Vue from 'vue'
export default Vue.extend({
  components: {},
  props: {
    nome: String,
    icone: String,
    rotas: Array,
  },
  data: function () {
    return { uuid: uuid() }
  },
  methods: {},
})
</script>
<style>
.active {
  margin-left: -250px;
}

#ul {
  padding-left: 0px !important;
}

#pageSubmenu {
  padding-left: 5px !important;
}

#ul-li {
  padding-left: 20px;
}

ul li a {
  padding: 5px;
  display: block;
}

ul li a:hover {
  background: #fff;
}

ul li.active > a,
a[aria-expanded='true'] {
  color: #000000;
}

a[data-toggle='collapse'] {
  position: relative;
}

.dropdown-toggle::after {
  display: block;
  position: absolute;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
}

ul.CTAs {
  padding: 20px;
}

ul.CTAs a {
  text-align: center;
  display: block;
  border-radius: 5px;
  margin-bottom: 5px;
}

a.download {
  background: #fff;
  color: #000000;
}

a.article,
a.article:hover {
  color: #000000 !important;
}

#content {
  width: 100%;
  padding: 20px;
  min-height: 100vh;
  transition: all 0.3s;
}
</style>
