<template lang="pug">
header.container-nav-sesmt
    nav.nav-sesmt
        router-link.link-to-home(to="/")
            img.logo(src="https://packinggroup.com.br/imagens/logo-packing-group.png" alt="logo")
        .conteudo-navegacao
            .background-btn
                NavComponenteSelect
</template>     

<script>
import NavComponenteSelect from "../NavComponenteSelect.vue";
export default{
    // eslint-disable-next-line vue/multi-word-component-names
    name: "NavComponente",
    components: {
        NavComponenteSelect
    },
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
.container-nav-sesmt{
    width: 1200px;
    margin: 0 auto;
    .nav-sesmt {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 40px 0 0 0;


        .link-to-home {
            display: flex;
            align-items: center;

            img {
                width: 180px;
            }
        }

        .conteudo-navegacao {
            display: flex;
            align-items: center;
            gap: 20px;
            position: relative;
        }
    }
}
</style>