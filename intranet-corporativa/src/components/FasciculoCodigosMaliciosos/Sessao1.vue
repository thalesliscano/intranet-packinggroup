<template lang="pug">
.sessao-um
    .container-conteudo(v-for="item in items" :key="item")
        p.texto {{ item.textoUm }}
        h1.titulo-normal FASCÍCULO
        h1.titulo-vermelho {{ item.textoDois }}
        .container-imgs
            img(:src="item.mascaraImg").mascara-img
            img(:src="item.img").img-sessaoUm
</template>

<script>
export default {
    name: "SessaoUm",
    data(){
        return{
            items: [
                {
                    textoUm: "Cartilha de Segurança para Internet",
                    textoDois: "CÓDIGOS MALICIOSOS",
                    mascaraImg: require("../../assets/fasciculos/img-1-codigos-maliciosos.png"),
                    img: require("../../assets/fasciculos/img-1-5-codigos-maliciosos.png")
                }
            ]
        }
    }
};
</script>

<style scoped lang="scss">
.sessao-um{
    width: 100%;
    height: 100%;
    margin: 60px auto 0px auto;
    .container-conteudo{
        .texto{
            text-align: center;
            font-size: 22px;
        }
        .titulo-normal{
            text-align: center;
            font-size: 40px;

        }
        .titulo-vermelho{
            color: #DA4731;
            font-size: 80px;
            width: 600px;
            margin: 0 auto;
            text-align: center;
        }
        .container-imgs{
            width: 900px;
            height: 100%;
            position: relative;
            margin: 0 auto;
            img{
                max-width: 100%;
                display: block
            }
            .mascara-img{
                position: absolute;
                left: 0px;
                top: 0px;
                z-index: 2;
            }
            .img-sessaoUm{
                position: relative;
                z-index: 1;
                top: 100px;
            }
        }
    }
}
</style>