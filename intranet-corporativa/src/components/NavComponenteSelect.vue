<template lang="pug">
.dropdown-select-nav(@mouseenter="showDropdown = true" @mouseleave="showDropdown = false")
    button.dropbtn {{ dropdownText }}
    .dropdown-content(v-if="showDropdown")
        router-link(v-for="item in opcoesInformacaoNav" :to="item.path" :key="item.texto").option-itens {{ item.texto }}
</template>

<script>
export default {
name: "NavComponente",
data() {
    return {
        opcoesInformacaoNav: [
            { texto: "HOME", path: "/" },
            { texto: "TI", path: "/ti" },
            { texto: "RH", path: "/rh" },
            { texto: "SESMT", path: "/sesmt" }
        ],
        showDropdown: false // Controla a exibição do dropdownd
    };
},
computed: {
    dropdownText() {
        // Retorna o texto baseado na rota atual
        const currentRoute = this.$route.path;
        const currentOption = this.opcoesInformacaoNav.find(item => item.path === currentRoute);
        return currentOption ? currentOption.texto : "Menu"; // Retorna "Menu" se nenhuma opção corresponder
    }
},
methods: {
    navegarPara(event) {
        const path = event.target.value;
        if (path) {
            this.$router.push(path);
        }
    }
}
}
</script>

<style lang="scss" scoped>
.dropdown-select-nav {
    position: relative;
    display: inline-block;

    .dropbtn {
        background-color: #0f2034;
        font-weight: bold;
        color: white;
        padding: 8px 16px;
        font-size: 16px;
        border: none;
        cursor: pointer;
        width: 100px;
    }

    .dropdown-content {
        display: block;
        position: absolute;
        background-color: #f9f9f9;
        width: 100%;
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
        z-index: 1;


        .option-itens {
            color: #0f2034;
            padding: 12px 16px;
            text-decoration: none;
            display: block;

            &:hover {
                background-color: #0f2034;
                color: #ffffff;
            }
        }
    }
}
</style>
