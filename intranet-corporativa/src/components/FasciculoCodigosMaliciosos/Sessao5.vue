<template lang="pug">
.sessao-cinco
    div.container-texto
        div.container-img(:style="{ width: conteudo.width || 'auto'}")
            img(:src="conteudo.img" :style="{ height: conteudo.height || 'auto', margin: conteudo.margin}")
        div.container-conteudo
            h3.titulo(:style="{textAlign: conteudo.textoCentro || 'auto', width: conteudo.tamanhoTexto}" :class="conteudo.classe || ''") {{ conteudo.titulo}}
            p.texto(:style="{width: conteudo.tamanhoTexto}") {{ conteudo.texto}}
    ul.container-container-texto2
        li.conteudo(v-for="conteudo in conteudos")
            div.container-img(:style="{ width: conteudo.width || 'auto'}")
                img(:src="conteudo.img" :style="{ height: conteudo.height || 'auto', margin: conteudo.margin}")
            h3.titulo(:style="{textAlign: conteudo.textoCentro || 'auto'}" :class="conteudo.classe || ''") {{ conteudo.titulo}}
            p.texto(:style="{width: conteudo.tamanhoTexto}") {{ conteudo.texto}}
    div.container-texto
        div.container-img(:style="{ width: ultimoConteudo.width || 'auto'}")
            img(:src="ultimoConteudo.img" :style="{ height: ultimoConteudo.height || 'auto', margin: ultimoConteudo.margin}")
        div.container-conteudo
            h3.titulo(:style="{textAlign: ultimoConteudo.textoCentro || 'auto', width: ultimoConteudo.tamanhoTexto}" :class="ultimoConteudo.classe || ''") {{ ultimoConteudo.titulo}}
            p.texto(:style="{width: ultimoConteudo.tamanhoTexto}") {{ ultimoConteudo.texto}}

</template>

<script>
export default {
    name: "SessaoCinco",
    data() {
        return {
            conteudo:                 {
                    img: require("../../assets/fasciculos/img-9-codigos-maliciosos.jpg"),
                    titulo: "SPYWARE",
                    texto: "programa projetado para monitorar as atividades de um sistema e enviar as informações coletadas para terceiros.",
                    classe: "spyware",
                    width: "450px",
                    blue: true,
                    tamanhoTexto: "180px",
                    textoCentro: "center",
                },
            conteudos: [
                {
                    img: require("../../assets/fasciculos/img-10-codigos-maliciosos.jpg"),
                    titulo: "KYELOGGER",
                    texto: "é um tipo de spyware capaz de  capturar e armazenar as teclas digitadas pelo usuário no teclado do equipamento.",
                    classe: "keylogger",
                    width: "220px",
                    blue: true,
                    tamanhoTexto: "180px",
                    textoCentro: "center",
                },
                {
                    img: require("../../assets/fasciculos/img-11-codigos-maliciosos.jpg"),
                    titulo: "SCREENLOGGER",
                    texto: "é um tipo de spyware, similar ao keylogger, usado por atacantes para capturar as teclas digitadas pelos usuários em teclados virtuais, disponíveis principalmente em sites de Internet Banking.",
                    classe: "screenlogger",
                    width: "220px",
                    blue: true,
                    tamanhoTexto: "220px",
                    textoCentro: "center",
                },
                {
                    img: require("../../assets/fasciculos/img-12-codigos-maliciosos.jpg"),
                    titulo: "ADWARE",
                    texto: "é um tipo de spyware projetado especificamente para apresentar propagandas.",
                    classe: "adware",
                    width: "220px",
                    tamanhoTexto: "220px",
                    textoCentro: "center",
                },
            ],
            ultimoConteudo:                 {
                    img: require("../../assets/fasciculos/img-13-codigos-maliciosos.png"),
                    titulo: "ROOTKIT",
                    texto: "conjunto de programas e técnicas que permite esconder e assegurar a presença de um invasor ou de outro código malicioso em um equipamento comprometido.",
                    classe: "rootkit",
                    width: "450px",
                    blue: true,
                    tamanhoTexto: "180px",
                    textoCentro: "center",
                },
        }
    }
};
</script>

<style scoped lang="scss">
ul,
li {
    list-style: none;
}

.sessao-cinco {
    width: 100%;
    height: 100%;
    margin: 10px auto 0px auto;

    .container-img {
        width: 300px;

        img {
            max-width: 100%;
            display: block;
            margin: 0 auto;
        }
    }
    .container-texto{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 50px;


        .titulo {
                color: #da4731;
                font-size: 20px;
                width: 100%;
                text-align: start;
                margin-bottom: 5px;
            }
            .container-conteudo{

            }
    }
    .container-container-texto2 {
        justify-content: center;
        display: grid;
        grid-template-columns: 266.66px 266.66px 266.66px;
        gap: 0px;
        .conteudo {
            margin: 0 auto;
            .titulo {
                color: #da4731;
                font-size: 20px;
                width: 100%;
                margin: 0 auto;
                text-align: start;
                margin-bottom: 5px;
            }

            .texto {
                text-align: center;
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

    .keylogger,.screenlogger,.adware{
        color: #6eadff !important;
    }

}
</style>