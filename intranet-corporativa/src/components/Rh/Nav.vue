<template lang="pug">
header.container-nav-rh
    nav.nav-rh
        router-link(v-for="item in btnInformacao" :to="item.path").btn-nav-rh {{ item.texto }}
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
.container-nav-rh{
    .nav-rh{
        display: flex;
        gap: 20px;
    }
}
</style>