<template lang="pug">
.home-container
    NavComponente
</template> 

<script>
import NavComponente from "../components/Home/Nav.vue"
export default{
    // eslint-disable-next-line vue/multi-word-component-names
    name: "PageHome",
    components: {
        NavComponente
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