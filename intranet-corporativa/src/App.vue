<template lang="pug">
.container
  NavComponenteSelect.nav
  <router-view></router-view>
</template>

<script>
import PageHome from './views/Home.vue'
import PageTi from './views/Documentacao.vue'
import PageRh from './views/Rh.vue'
import PageSesmt from './views/Sesmt.vue'
import NavComponenteSelect from './components/NavComponenteSelect.vue'

export default {
  name: 'App',
  components: {
    PageHome,
    PageTi,
    PageRh,
    PageSesmt,
    NavComponenteSelect
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&family=Open+Sans:wght@400;700&display=swap');
@import url('https://fonts.cdnfonts.com/css/rawline');

body{
  background-color: #fdfdff;
  font-family: Rawline, Raleway, 'Open Sans', sans-serif, Arial, Helvetica !important;
}
ul, li {
  list-style: none;
}
a{
  text-decoration: none;
}
*{
  margin: 0px;
  padding: 0px;
}
.container {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-top: 100px;
  .nav{
    position: fixed;
    top: 0px;
    left: 0px;
    z-index: 2;
    background-color: #fff;
  }
}
</style>
