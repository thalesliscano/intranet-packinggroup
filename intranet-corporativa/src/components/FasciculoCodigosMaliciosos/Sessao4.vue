<template lang="pug">
    .sessao-quatro
        ul.container-texto
            li.conteudo(v-for="conteudo in conteudos")
                div.container-img(:style="{ width: conteudo.width || 'auto'}")
                    img(:src="conteudo.img" :style="{ height: conteudo.height || 'auto', margin: conteudo.margin}")
                h3.titulo(:style="{textAlign: conteudo.textoCentro || 'auto', width: conteudo.tamanhoTexto}" :class="conteudo.classe || ''") {{ conteudo.titulo}}
                p.texto(:style="{width: conteudo.tamanhoTexto}") {{ conteudo.texto}}
    
            ul.conteudo2
                li(v-for="(conteudo, index) in conteudos2" :key="'conteudo2-' + index")
                    div.container-img(:style="{ width: conteudo.width || 'auto'}")
                        img(:src="conteudo.img")
                    h3.titulo(:style="{textAlign: conteudo.textoCentro || 'auto', width: conteudo.tamanhoTexto}" :class="conteudo.classe || ''") {{ conteudo.titulo}}
                    p.texto(:style="{width: conteudo.tamanhoTexto}") {{ conteudo.texto}}
    </template>

<script>
export default {
    name: "SessaoQuatro",
    data() {
        return {
            conteudos: [
                {
                    img: require("../../assets/fasciculos/img-3-codigos-maliciosos.jpg"),
                    titulo: "BACKDOOR",
                    texto: "programa que permite o retorno de um invasor a um equipamento comprometido, por meio da inclusão de serviços criados ou modificados para este fim.",
                    width: "300px",
                    blue: true,
                    tamanhoTexto: "180px",
                    textoCentro: "center",
                },
                {
                    img: require("../../assets/fasciculos/img-4-codigos-maliciosos.jpg"),
                    titulo: "WORM",
                    texto: "programa capaz de se propagar automaticamente pelas redes, explorando vulnerabilidades nos programas instalados e enviando cópias de si mesmo de equipamento para equipamento.",
                    height: "220px",
                    blue: true,
                    tamanhoTexto: "400px",
                },
                {
                    img: require("../../assets/fasciculos/img-5-codigos-maliciosos.png"),
                    titulo: "RAT (REMOTE  ACCESS TROJAN)",
                    texto: "ou trojan de acesso remoto, é um programa que combina as características de trojan e de backdoor, já que permite ao atacante acessar o equipamento remotamente e executar ações como se fosse o usuário.",
                    width: "300px",
                    height: "250px",
                    blue: false,
                    tamanhoTexto: "180px",
                    textoCentro: "center",
                    classe: "titulo-azul",
                    marginTop: "100px"

                },
                {
                    img: require("../../assets/fasciculos/img-6-codigos-maliciosos.png"),
                    titulo: "BOT",
                    texto: "programa similar ao worm e que possui mecanismos de comunicação com o invasor que permitem que ele seja remotamente controlado.",
                    width: "300px",
                    height: "250px",
                    margin: "0px 100px 0px 100px",
                    blue: true,
                    tamanhoTexto: "400px",

                },
            ],
            conteudos2: [
                {
                    img: require("../../assets/fasciculos/img-7-codigos-maliciosos.jpg"),
                    titulo: "ZUMBI",
                    texto: "é como também é chamado um equipamento infectado por um bot, pois pode ser controlado remotamente, sem o conhecimento do seu dono.",
                    tamanhoTexto: "200px",
                    width: "200px",
                    classe: "titulo-azul"
                },
                {
                    img: require("../../assets/fasciculos/img-8-codigos-maliciosos.png"),
                    titulo: "BOTNET",
                    texto: "é uma rede formada por centenas ou milhares de equipamentos zumbis e que permite potencializar as ações danosas executadas pelos bots.",
                    tamanhoTexto: "200px",
                    width: "200px",
                    classe: "titulo-azul"
                },
            ],
        };
    },
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

    .container-img {
        width: 300px;

        img {
            max-width: 100%;
            display: block;
            margin: 0 auto;
        }
    }

    .container-texto {
        justify-content: center;
        display: grid;
        grid-template-columns: 300px 500px;
        gap: 0px;

        // margin: 0 auto;
        .conteudo {
            .titulo {
                color: #da4731;
                font-size: 20px;
                width: 100%;
                margin: 0 auto;
                text-align: start;
                margin-bottom: 5px;
            }

            .texto {
                text-align: start;
                font-size: 16px;
                margin: 0 auto;
            }
        }

        .conteudo2 {
            grid-column: 2;
            /* Adicionando esta linha para posicionar a lista na segunda coluna */
            margin-top: 20px;
            /* Se necessário, ajusta a margem superior */
            display: flex;
            gap: 15px;
            position: relative;
            top: -120px;
            margin: 0 auto;
        }
    }

    .titulo-azul {
        color: #6eadff !important;
    }
}
</style>