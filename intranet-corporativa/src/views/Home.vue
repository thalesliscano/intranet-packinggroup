<template lang="pug">
.home-container
    NoticiaCarrousel
</template> 

<script>
import NoticiaCarrousel from "../components/Home/NoticiasCarousel.vue"
export default{
    name: "PageHome",
    components: {
        NoticiaCarrousel
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