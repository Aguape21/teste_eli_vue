<template>
  <div>
    <ul id="ul" class="list-unstyled components">
      <li>
        <b-link
          v-b-toggle.my-collapse
          data-toggle="collapse"
          aria-expanded="false"
          class="dropdown-toggle"
        >
          <oh-icon name="fa-bars" animation="pulse" hover/>
          Pages
        </b-link>

        <b-collapse id="my-collapse">
          <ul class="list-unstyled" id="pageSubmenu">
            <li>
              <b-link href="#">
                <oh-icon name="fa-bars" />

                Page 1
              </b-link>
            </li>
            <li>
              <b-link href="#">Page 2</b-link>
            </li>
            <li>
              <b-link href="#">Page 3</b-link>
            </li>
          </ul>
        </b-collapse>
      </li>
    </ul>

    <ul class="list-unstyled components">
      <li>
        <b-link
          v-b-toggle.my-collapse
          data-toggle="collapse"
          aria-expanded="false"
          class="dropdown-toggle"
        >
          <oh-icon name="fa-bars" />
          Pages
        </b-link>

        <b-collapse id="my-collapse">
          <ul class="list-unstyled" id="pageSubmenu">
            <li>
              <b-link href="#">
                <oh-icon name="fa-bars" />

                Page 1
              </b-link>
            </li>
            <li>
              <b-link href="#">Page 2</b-link>
            </li>
            <li>
              <b-link href="#">Page 3</b-link>
            </li>
          </ul>
        </b-collapse>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  components: {},
  props: [],
  data: function () {
    return { teste: true }
  },
  created: function () {
    this.mudarTeste()
  },
  methods: {
    mudarTeste() {
      this.teste = false
    },
  },
}
</script>
<style scoped>
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
  padding: 10px;
  font-size: 1.1em;
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

ul ul a {
  font-size: 0.9em !important;
}

ul.CTAs {
  padding: 20px;
}

ul.CTAs a {
  text-align: center;
  font-size: 0.9em !important;
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

/* ---------------------------------------------------
    CONTENT STYLE
----------------------------------------------------- */

#content {
  width: 100%;
  padding: 20px;
  min-height: 100vh;
  transition: all 0.3s;
}
</style>
