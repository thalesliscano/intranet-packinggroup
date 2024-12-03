<template lang="pug">
.home-container
    NoticiaCarrousel
    DicasGeral
    AtalhosImportantes
</template> 

<script>
import NoticiaCarrousel from "../components/Home/NoticiasCarousel.vue"
import AtalhosImportantes from "../components/Home/AtalhosImportantes.vue"
import DicasGeral from "@/components/Home/DicasGeral.vue";
export default{
    name: "PageHome",
    components: {
        NoticiaCarrousel,
        AtalhosImportantes,
        DicasGeral
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