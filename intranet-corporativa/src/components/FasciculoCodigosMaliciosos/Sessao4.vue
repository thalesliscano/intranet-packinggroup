"<template lang="pug">
.sessao-quatro
    ul.container-texto
        li.conteudo(v-for="conteudo in conteudosPageUm")
            div(:class="conteudo.classe")
                img(:src="conteudo.img")
            h3.titulo {{ conteudo.titulo}}
            p.texto {{ conteudo.texto}}


</template>"
    
    <script>
    export default {
        name: "SessaoQuatro",
        data() {
            return {
                conteudosPageUm: [
                    {
                        img: require("../../assets/fasciculos/img-9-codigos-maliciosos.jpg"),
                        titulo: "SPYWARE",
                        texto: "programa projetado para monitorar as atividades de um sistema e enviar as informações coletadas para terceiros.",
                        classe: "img-spyware",
                    },
                    {
                        img: require("../../assets/fasciculos/img-10-codigos-maliciosos.jpg"),
                        titulo: "KYELOGGER",
                        texto: "é um tipo de spyware capaz de  capturar e armazenar as teclas digitadas pelo usuário no teclado do equipamento.",
                        classe: "img-keylogger",
                    },
                    {
                        img: require("../../assets/fasciculos/img-11-codigos-maliciosos.jpg"),
                        titulo: "SCREENLOGGER",
                        texto: "é um tipo de spyware, similar ao keylogger, usado por atacantes para capturar as teclas digitadas pelos usuários em teclados virtuais, disponíveis principalmente em sites de Internet Banking.",
                        classe: "img-screenlogger",
                    },
                    {
                        img: require("../../assets/fasciculos/img-12-codigos-maliciosos.jpg"),
                        titulo: "ADWARE",
                        texto: "é um tipo de spyware projetado especificamente para apresentar propagandas.",
                        classe: "img-adware",
                    },
                    {
                        img: require("../../assets/fasciculos/img-13-codigos-maliciosos.png"),
                        titulo: "ROOTKIT",
                        texto: "conjunto de programas e técnicas que permite esconder e assegurar a presença de um invasor ou de outro código malicioso em um equipamento comprometido.",
                        classe: "img-rootkit",
                    },
                ]
            }
        }
    };
    </script>
    
<style scoped lang="scss">
ul,
li {
    list-style: none;
}

.sessao-quatro {
    width: 100%;
    height: 100%;
    margin: 60px auto 0px auto;
    .container-texto {
        justify-content: center;
        display: grid;
        grid-template-columns: 450px 175px 175px;
        gap: 20px;
        margin: 0 auto;
        .conteudo {
            .titulo {
                color: #DA4731;
                font-size: 20px;
                width: 100%;
                margin: 0 auto;
                text-align: start;
                margin-bottom:  5px;
            }

            .texto {
                text-align: start;
                font-size: 16px;
            }
        }

    }
    .titulo-azul {
        color: #6EADFF !important;
    }

    .img-spyware {
            width: 450px;
            img {
            max-width: 100%;
            display: block;

        }
    }
    .img-keylogger {
            width: 175px;
            img {
            max-width: 100%;
            display: block;

        }
    }
}


</style>