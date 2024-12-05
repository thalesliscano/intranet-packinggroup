<template lang="pug">
.sessao-Dois
    .container-conteudo(v-for="item in items" :key="item")
        h1.titulo-vermelho {{item.textoForteUm}}
        p.texto {{item.textoFracoUm}}
        p.texto {{item.textoFracoDois}}
        h1.titulo-vermelho {{ item.textoForteDois}}

</template>

<script>
export default {
    name: "SessaoDois",
    data(){
        return{
            items: [
                {
                    textoForteUm: "CÓDIGOS MALICIOSOS SÃO USADOS COMO INTERMEDIÁRIOS E POSSIBILITAM A PRÁTICADE GOLPES, A REALIZAÇÃO DE ATAQUES E O ENVIO DE SPAM",
                    textoFracoUm: "acesse mídias removíveis infecta- das, como pen drivesexecute arquivos infectados, obtidos em anexos de mensagens eletrônicas, via mídias remo- víveis, em páginas web, redes sociais ou diretamente de outros equipamentos.Após infectar o seu equipamento, o código malicioso pode executar ações como se fosse você, comoacessar informações, apagar arquivos, criptografar dados, conectar-se à Internet, enviar mensagens e ainda instalar outros códigos maliciosos.A melhor prevenção contra os códigos maliciosos é impedir que a infecção ocorra pois nem sempre é possível reverter as ações danosas já feitas ou recuperar totalmente seus dados.",
                    textoFracoDois: "Códigos maliciosos, também conhecidos como pragas e malware, são programas desenvolvidos para executar ações danosas e atividades maliciosas em equipamentos, como computadores, modems, switches, roteadores e dispositivos móveis (tablets, celulares, smartphones, etc).Um atacante pode instalar um código malicioso após invadir um equipamento ou explorando alguma vulnerabilidade existente nos programas nele instalados.Seus equipamentos também podem ser infectados caso você:acesse páginas web maliciosas, usando navegadores vulneráveis",
                    textoForteDois: "CÓDIGOS MALICIOSOS: PROTEJA-SE DESTA TURMA",
                }
            ]
        }
    }
};
</script>

<style scoped lang="scss">
.sessao-Dois{
    width: 100%;
    height: 100%;
    margin: 230px auto 0px auto;
    .container-conteudo{
        display: flex;
        flex-wrap: wrap;
        width: 600px;
        margin: 0 auto;
        .texto{
            text-align: center;
            font-size: 25px;
        }
        .titulo-normal{
            text-align: center;
            font-size: 40px;

        }
        .titulo-vermelho{
            color: #DA4731;
            font-size: 35px;
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