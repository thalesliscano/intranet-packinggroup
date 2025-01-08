<template lang="pug">
.sessao-tres
    .container-conteudo
        .container-img
            img(:src="img").img
        ul.container-texto
            li.conteudo(v-for="conteudo in conteudosPageUm")
                h3.titulo {{ conteudo.titulo}}
                p.texto {{ conteudo.texto}}
        ul.container-texto.conteudo2
            li.conteudo(v-for="(conteudo, index) in conteudoPageDois" :key="index")
                .container-imgs(:style="{ width: conteudo.width || 'auto' }")
                    img(:src="conteudo.img").img
                h3(:class="conteudo.blue ? '' : 'titulo-azul'").titulo {{ conteudo.titulo }}
                p.texto {{ conteudo.texto }}


</template>

<script>
export default {
    name: "SessaoTres",
    data() {
        return {
            img: require("../../assets/fasciculos/img-2-codigos-maliciosos.png"),
            conteudosPageUm: [
                {
                    titulo: "VÍRUS",
                    texto: "programa ou parte de um programa de computador, normalmente malicioso,  que se propaga inserindo cópias de si mesmo e se tornando parte de outros programas e arquivos"
                },
                {
                    titulo: "CAVALO DE TROIA (TROJAN)",
                    texto: "programa que, além de executar as funções para as quais foi aparentemente projetado, também executa outras funções, normalmente maliciosas, e sem o conhecimento do usuário"
                },
                {
                    titulo: "RANSOMWARE",
                    texto: "programa que torna inacessíveis os dados armazenados em um equipamento, geralmente usando criptografia, e que exige pagamento de resgate para restabelecer o acesso ao usuário"
                },
            ],
        }
    }
};
</script>

<style scoped lang="scss">
ul,
li {
    list-style: none;
}

.sessao-tres {
    width: 100%;
    height: 100%;
    margin: 60px auto 0px auto;

    .container-conteudo {
        .container-img {
            width: 100%;

            .img {
                max-width: 100%;
                width: 600px;
                display: block;
                margin: 0 auto;

            }
        }

        .container-texto {
            display: flex;
            width: 600px;
            gap: 20px;
            margin: 20px auto 10px auto;

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

        .container-texto.conteudo2 {
            display: flex;
            flex-wrap: wrap;
            width: 800px;
            gap: 20px;
            margin: 20px auto 10px auto;
            justify-content: center;
            align-items: center;

            .conteudo {
                width: 300px;

                .titulo {
                    color: #DA4731;
                    font-size: 20px;
                    width: 100%;
                    margin: 0 auto;
                    text-align: start;
                    margin-bottom: 5px;
                }

                .texto {
                    text-align: start;
                    font-size: 16px;
                }

                .container-imgs {
                    .img {
                        max-width: 100%;
                        display: block;
                        margin: 0 auto;

                    }
                }
            }

        }

        .titulo-azul {
            color: #6EADFF !important;
        }
    }
}
</style>