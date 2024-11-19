<template lang="pug">
.home-container
    NoticiaCarrousel
    AtalhosImportantes
    AppsCarousel
</template> 

<script>
import NoticiaCarrousel from "../components/Home/NoticiasCarousel.vue"
import AtalhosImportantes from "../components/Home/AtalhosImportantes.vue"
import AppsCarousel from "@/components/Home/AppsCarousel.vue";
export default{
    name: "PageHome",
    components: {
        NoticiaCarrousel,
        AtalhosImportantes,
        AppsCarousel,
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