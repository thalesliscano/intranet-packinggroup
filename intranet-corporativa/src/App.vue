<template lang="pug">
.container
  <router-view></router-view>
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
*{
  margin: 0px;
  padding: 0px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  /* -webkit-font-smoothing: antialiased; */
  width: 1400px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
