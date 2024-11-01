<template lang="pug">
.home-container
    NoticiaCarrousel
    AtalhosImportantes
</template> 

<script>
import NoticiaCarrousel from "../components/Home/NoticiasCarousel.vue"
import AtalhosImportantes from "../components/Home/AtalhosImportantes.vue"
export default{
    name: "PageHome",
    components: {
        NoticiaCarrousel,
        AtalhosImportantes
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