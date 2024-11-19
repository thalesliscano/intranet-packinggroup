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
            .item-atalho {
                display: flex;
                flex-direction: column;
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
                    color: #fff;

                    // Aplicar mudanças à imagem no hover
                    .item-img {
                        filter: brightness(120%); // Aumenta brilho da imagem
                        transform: scale(1.2); // Efeito de zoom na imagem
                        transition: filter 0.3s ease, transform 0.3s ease;
                    }

                    // Alterar texto também, se necessário
                    .item-nome {
                        color: #fff; // Mudar cor do texto
                        transition: color 0.3s ease;
                    }
                }

                .item-titulo {
                    display: flex;
                    align-items: center;
                    flex-direction: column;
                    text-align: center;
                    justify-content: center;
                    background-color: transparent; // Deixe o fundo transparente para não interferir

                    .item-nome {
                        font-size: 20px;
                        color: #000;
                        transition: color 0.3s ease;
                    }

                    .container-img {
                        width: 40px;
                        height: 35px;

                        .item-img {
                            max-width: 100%;
                            height: 100%;
                            transition: filter 0.3s ease, transform 0.3s ease; // Suaviza transformações
                        }
                    }
                }
            }
        }

    }
}
</style>