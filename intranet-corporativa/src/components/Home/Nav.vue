<template lang="pug">
header.container-nav-home
    nav.nav-home
        router-link(v-for="item in btnInformacao" :to="item.path").btn-nav-home {{ item.texto }}
</template>     

<script>
export default{
    // eslint-disable-next-line vue/multi-word-component-names
    name: "NavComponente",
    data(){
        return {
            btnInformacao: [
                {texto: "TI", path: "ti"},
                {texto: "RH",path: "rh"},
                {texto: "SESMT",path: "sesmt"}
            ]
        }
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