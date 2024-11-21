<template lang="pug">
section.atalhos-container
    main.lista-atalhos-container
        ul.lista-atalhos-itens
            li(v-for='item in itensAtalhos' :key="item.nome" class="item-atalho" @click="navigateTo(item)").item-atalho 
                .item-titulo
                    .container-img
                        img.item-img(:src="item.img")
                    p.item-nome {{item.nome}}


</template>


<script>
export default {
    name: "SessaoImportante",
    data() {
        return {
            itensAtalhos: [
                {
                    nome: "Segurança da Informação",
                    link: "https://www.google.com",
                    img: require("../../assets/ciber-seguranca.png"),
                },
                {
                    nome: "Sistema de Chamado",
                    link: "https://www.google.com",
                    img: require("../../assets/logo-glpi-bleu-1.png"),
                },
                {
                    nome: "Documentação",
                    link: "/documentacao",
                    img: require("../../assets/manutencao.png"),
                },
                {
                    nome: "Aletas e Manutenção",
                    link: "https://www.google.com",
                    img: require("../../assets/manutencao.png"),
                },
                {
                    nome: "Aletas e Manutenção",
                    link: "https://www.google.com",
                    img: require("../../assets/manutencao.png"),
                },
                {
                    nome: "Aletas e Manutenção",
                    link: "https://www.google.com",
                    img: require("../../assets/manutencao.png"),
                },
            ],
        };
    },
    methods: {
        navigateTo(item) {
            if (item.link.startsWith("http")) {
                // Redirecionar para URLs externas
                window.open(item.link, "_blank"); // "_blank" abre em uma nova aba
            } else {
                // Redirecionar para rotas internas
                this.$router.push(item.link);
            }
        },
    },
};

</script>

<style lang="scss">
.atalhos-container {
    margin-top: 50px;

    .titulo-atalhos {
        margin-top: 30px;
        font-size: 30px;
        text-align: center;

    }

    .lista-atalhos-container {
        width: 1000px;
        margin: 0 auto;
        padding: 40px;

        .lista-atalhos-itens {
            display: flex;
            gap: 20px;
            justify-content: center;
            flex-wrap: wrap;

            .item-atalho {
                display: flex;
                justify-content: center;
                align-items: center;
                gap: 10px;
                background-color: #fff;
                border: 3px solid #0f2034;
                padding: 10px;
                height: 200px;
                width: 200px;
                border-radius: 50%;
                cursor: pointer;
                box-sizing: border-box; // Inclui bordas no cálculo de tamanho
                overflow: hidden; // Garante que o conteúdo "extra" fique contido
                transition: background-color 0.3s ease, transform 0.3s ease, filter 0.3s ease;

                &:hover {
                    background-color: #0f2034; // Cor de fundo ao passar o mouse
                    transform: scale(1.1); // Efeito de zoom
                    filter: brightness(88%);
                }

                .item-titulo {
                    display: flex;
                    align-items: center;
                    flex-direction: column;
                    text-align: center;
                    justify-content: center;
                    background-color: transparent; // Fundo transparente para evitar interferência
                    gap: 5px;


                    .item-nome {
                        font-size: 20px;
                        color: #000; // Cor padrão do texto
                        transition: color 0.3s ease; // Suaviza a transição de cor
                    }

                    .container-img {
                        width: 40px;
                        height: 35px;

                        .item-img {
                            max-width: 100%;
                            height: 100%;
                            transition: filter 0.3s ease, transform 0.3s ease; // Suaviza as transições de transformações
                        }
                    }
                }
                &:hover > .item-titulo > .item-nome {
                        color: #fff !important; // Usa !important caso algum estilo global esteja interferindo
                    }
            }
        }

    }
}
</style>