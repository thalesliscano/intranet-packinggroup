<template lang="pug">
.home-container
    NoticiaCarrousel
    AtalhosImportantes
    DicasGeral
    ListaApps
</template> 

<script>
import NoticiaCarrousel from "../components/Home/NoticiasCarousel.vue"
import AtalhosImportantes from "../components/Home/AtalhosImportantes.vue"
import ListaApps from "@/components/Home/ListaApps.vue";
import DicasGeral from "@/components/Home/DicasGeral.vue";
export default{
    name: "PageHome",
    components: {
        NoticiaCarrousel,
        AtalhosImportantes,
        ListaApps,
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