<template lang="pug">
  .oi
    PageHome    
    PageTi
    PageRh
    PageSesmt
</template>

<script>
import PageHome from './views/Home.vue'
import PageTi from './views/Ti.vue'
import PageRh from './views/Rh.vue'
import PageSesmt from './views/Sesmt.vue'
export default {
  name: 'App',
  components: {
    PageHome,
    PageTi,
    PageRh,
    PageSesmt
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
