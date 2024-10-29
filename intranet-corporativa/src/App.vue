<template lang="pug">
.container
  NavComponenteSelect
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
body{
  background-color: #cedaff;
}
*{
  margin: 0px;
  padding: 0px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  width: 1400px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
