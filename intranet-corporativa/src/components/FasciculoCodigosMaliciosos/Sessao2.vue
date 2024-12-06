<template lang="pug">
.sessao-Dois
    .container-conteudo(v-for="item in items" :key="item")
        h1.titulo-vermelho {{item.textoForteUm}}
        p.texto(:class="item.textoFracoUm.selfLayout ? 'position-self-down': ''") {{item.textoFracoUm.texto}}
        p.texto(:class="item.textoFracoDois.selfLayout ? 'position-self-down': ''") {{item.textoFracoDois.texto}}
        h1.titulo-vermelho(:class="item.textoForteDois.selfLayout ? 'self-start-end': ''") {{ item.textoForteDois.texto}}

</template>

<script>
export default {
    name: "SessaoDois",
    data(){
        return{
            items: [
                {
                    textoForteUm : "CÓDIGOS MALICIOSOS SÃO USADOS COMO INTERMEDIÁRIOS E POSSIBILITAM A PRÁTICADE GOLPES, A REALIZAÇÃO DE ATAQUES E O ENVIO DE SPAM",
                    textoFracoUm: {
                        texto:"Acesse mídias removíveis infecta- das, como pen drivesexecute arquivos infectados, obtidos em anexos de mensagens eletrônicas, via mídias remo- víveis, em páginas web, redes sociais ou diretamente de outros equipamentos.Após infectar o seu equipamento, o código malicioso pode executar ações como se fosse você, comoacessar informações, apagar arquivos, criptografar dados, conectar-se à Internet, enviar mensagens e ainda instalar outros códigos maliciosos.A melhor prevenção contra os códigos maliciosos é impedir que a infecção ocorra pois nem sempre é possível reverter as ações danosas já feitas ou recuperar totalmente seus dados.", selfLayout: true,
                    },
                    textoFracoDois: {
                        texto:"Códigos maliciosos, também conhecidos como pragas e malware, são programas desenvolvidos para executar ações danosas e atividades maliciosas em equipamentos, como computadores, modems, switches, roteadores e dispositivos móveis (tablets, celulares, smartphones, etc).Um atacante pode instalar um código malicioso após invadir um equipamento ou explorando alguma vulnerabilidade existente nos programas nele instalados.Seus equipamentos também podem ser infectados caso você:acesse páginas web maliciosas, usando navegadores vulneráveis", selfLayout: true,
                    },
                    textoForteDois: {
                        texto: "CÓDIGOS MALICIOSOS: PROTEJA-SE DESTA TURMA", selfLayout: true,
                    }
                }
            ]
        }
    }
};
</script>

<style scoped lang="scss">
.sessao-Dois{
    width: 100%;
    height: 1400px;
    padding: 40px 0px;
    margin: 230px auto 0px auto;
    background-color: rgba(255, 0, 0, 0.3);
    
    .container-conteudo{
        display: grid;
        grid-template-columns: 1fr 1fr;
        width: 600px;
        height: 600px;
        margin: 0 auto;
        place-items: center start;
        gap:20px;
        .titulo-vermelho{
            color: #DA4731;
            font-size: 40px;
            width: 350px;
            margin: 0 auto;
            text-align: start;
            place-self: start end; 
        }
        .self-start-end{
            place-self: end start;
            position: relative;
            top: 70px; 
        }
        .texto{
            text-align: start;
            font-size: 24px;
            width: 320px;
            height: 600px;
        }
        .position-self-down{
            position: relative;
            top: 70px;
        }
    }
}
</style>