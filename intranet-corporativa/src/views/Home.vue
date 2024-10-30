<template lang="pug">
.home-container
    NoticiaCarrousel
    SessaoImportante
</template> 

<script>
import NoticiaCarrousel from "../components/Home/NoticiasCarousel.vue"
import SessaoImportante from "../components/Home/SessaoImportantes.vue"
export default{
    name: "PageHome",
    components: {
        NoticiaCarrousel,
        SessaoImportante
    }
}
</script>

<style lang="scss">
.home-container{
    .nav-home{
        display: flex;
        gap: 20px;
    }
}
</style>