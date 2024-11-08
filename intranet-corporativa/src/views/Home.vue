<template lang="pug">
.home-container
    NoticiaCarrousel
    AtalhosImportantes
    DicasSeguranca
    AppsCarousel
</template> 

<script>
import NoticiaCarrousel from "../components/Home/NoticiasCarousel.vue"
import AtalhosImportantes from "../components/Home/AtalhosImportantes.vue"
import AppsCarousel from "@/components/Home/AppsCarousel.vue";
import DicasSeguranca from "@/components/Home/DicasSeguranca.vue";
export default{
    name: "PageHome",
    components: {
        NoticiaCarrousel,
        AtalhosImportantes,
        AppsCarousel,
        DicasSeguranca
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