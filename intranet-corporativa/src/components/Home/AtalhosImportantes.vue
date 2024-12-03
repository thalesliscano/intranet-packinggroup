<template lang="pug">
section.atalhos-container
    h1.titulo Atalhos importantes
    main.lista-atalhos-container
        ul.lista-atalhos-itens
            li(v-for='item in itensAtalhos' :key="item.nome" class="item-atalho" @click="navigateTo(item)").item-atalho 
                .item-titulo
                    .container-img
                        img.item-img(:src="item.img" v-if="item.alt")
                        h3.item-img(v-else) ITGS
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
                    img: require("../../assets/ciber-seguranca.png"),alt: true,
                },
                {
                    nome: "Documentação",
                    link: "/documentacao",
                    img: require("../../assets/icone-documentacao.png"),alt: true,
                },
                {
                    nome: "Lista de ramais",
                    link: "https://www.google.com",
                    img: require("../../assets/telefone.png"),alt: true,
                },
                {
                    nome: "Email",
                    link: "https://exchange.packtec.com.br/owa/auth/logon.aspx?replaceCurrent=1&url=https%3a%2f%2fexchange.packtec.com.br%2fowa%2f",
                    img: require("../../assets/gmail.png"),alt: true,
                },
                // {
                //     nome: "Acesso ao wifi",
                //     link: "https://www.google.com",
                //     img: require("../../assets/ponto-de-acesso.png"),
                // },
                {
                    nome: "Canal de sugestão e denúncia",
                    link: "https://www.google.com",
                    img: require("../../assets/explicar.png"),alt: true,
                },
                {
                    nome: "Alertas e Manutenção",
                    link: "https://www.google.com",
                    img: require("../../assets/manutencao.png"),alt: true,
                },
                // {
                //     nome: "Microsoft",
                //     link: "https://login.microsoftonline.com/common/oauth2/authorize?client_id=00000006-0000-0ff1-ce00-000000000000&response_type=code%20id_token&scope=openid%20profile&state=OpenIdConnect.AuthenticationProperties%3D5PzZIESJAWM-cEhwZ4n5ftFsNL4ktlUI1GauA1AO1n9fxrPfKK2PVmVbm5iri-koLUPkAwUBqVby9fRHatYkhS0X7CG01qRbXH6U5IzFZF6Lah5_VvM4nY6w-2ITzS35_7A29PAzdAJuB6Wj0GZLDNSStPNyue5hWEv_1YSSi-U&response_mode=form_post&nonce=638678838070629908.OTYxNzFlNTYtMWMxOS00YjBhLTk1NDEtYzBmNjJhNzhiOTBkMTc0MTM5MzQtNzViMi00YmZjLTk3YzAtNzUwZjczMWVlYjdk&redirect_uri=https%3A%2F%2Fadmin.microsoft.com%2Flanding&ui_locales=pt-BR&mkt=pt-BR&client-request-id=2dfccbdc-09af-4fac-b6c4-a7df230a34b0&claims=%7B%22id_token%22%3A%7B%22xms_cc%22%3A%7B%22values%22%3A%5B%22CP1%22%5D%7D%7D%7D&x-client-SKU=ID_NET472&x-client-ver=8.1.2.0&sso_reload=true",
                //     img: require("../../assets/microsoft.png"),
                // },
                {
                    nome: "Suporte",
                    link: "http://suporte.packinggroup.net/front/central.php",
                    img: "https://glpi-project.org/wp-content/uploads/2021/06/logo-glpi-bleu-1.png",alt: true,
                },
                {
                    nome: "Adp", link: "https://www.adp.com" , img: 'https://br.adp.com/-/media/adp/redesign2018/ui/logo-adp-fy19.svg?rev=0769ecbf84a9412a93e2cd52b7319a13&hash=C2451A542096BF16BC40698417D5A6FD',
                    alt: true,
                },
                {
                    nome: "Nimbi",
                    link: "https://nimbi.com.br/",
                    img: "https://media.licdn.com/dms/image/v2/D4D0BAQFg9sNBvyALqw/company-logo_200_200/company-logo_200_200/0/1688669168400/nimbi_br_logo?e=1738800000&v=beta&t=CWGJwELKz5iiUyO_h4ZB140Y9Qe6R-c8uzJajU6efCg",
                    alt: true,
                },
                {
                    nome: "Itgs",
                    link: "https://portal.itgs.com.br/",
                    img: "https://portal.itgs.com.br/images/logos/itgs-logo-fundo-branco.png",
                    alt: false,
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
    margin-top: 70px;
    .titulo{
        text-align: center;
        font-size: 32px;
}

    .titulo-atalhos {
        margin-top: 30px;
        font-size: 30px;
        text-align: center;

    }

    .lista-atalhos-container {
        width: 1200px;
        margin: 0 auto;
        padding: 20px;

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
                // border: 3px solid #0f2034;
                padding: 10px;
                height: 150px;
                width: 150px;
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
                    gap: 8px;


                    .item-nome {
                        font-size: 15px;
                        color: #000; // Cor padrão do texto
                        transition: color 0.3s ease; // Suaviza a transição de cor
                    }

                    .container-img {
                        width: 35px;
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
                    &:hover > .item-titulo > .container-img > .item-img{
                                color:#fff;
                            }
            }
        }

    }
}
</style>