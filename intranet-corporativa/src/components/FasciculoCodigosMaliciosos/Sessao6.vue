<template lang="pug">
.sessao-seis
    ul.container-texto
        li.conteudo1
            h1.titulo(:style="{textAlign: conteudo1.textoCentro || 'auto'}" :class="conteudo1.classe || ''") {{ conteudo1.tituloGrande }}
            div.container-conteudo
                p.texto(:style="{width: conteudo1.tamanhoTexto}") {{ conteudo1.texto1 }}
                ul.item(v-if="conteudo1.lista" :style="{width: conteudo1.tamanhoLista}")
                    li {{ conteudo1.item1 }}
                p.texto(:style="{width: conteudo1.tamanhoTexto}") {{ conteudo1.texto2 }}
                ul.item(v-if="conteudo1.lista" :style="{width: conteudo1.tamanhoLista}")
                    li {{ conteudo1.item2 }}
        li.conteudo2
            h3.titulo( :class="conteudo2.classe || ''") {{ conteudo2.titulo }}
            div.container-conteudo
                p.texto(:style="{width: conteudo2.tamanhoTexto}") {{ conteudo2.texto1 }}
                p.texto(:style="{width: conteudo2.tamanhoTexto}") {{ conteudo2.texto2 }}
                p.texto(:style="{width: conteudo2.tamanhoTexto}") {{ conteudo2.texto3 }}
                p.texto(:style="{width: conteudo2.tamanhoTexto}") {{ conteudo2.texto4 }}
        li.conteudo3
            h3.titulo(:style="{textAlign: conteudo3.textoCentro || 'auto'}" :class="conteudo3.classe || ''") {{ conteudo3.titulo }}
            div.container-conteudo
                p.texto(:style="{width: conteudo3.tamanhoTexto}") {{ conteudo3.texto1 }}
                ul.item(v-if="conteudo3.lista" :style="{width: conteudo3.tamanhoLista}")
                    li {{ conteudo3.item1 }}
                p.texto(:style="{width: conteudo3.tamanhoTexto}") {{ conteudo3.texto2 }}
                p.texto(:style="{width: conteudo3.tamanhoTexto}") {{ conteudo3.texto3 }}
        li.conteudo4
            h3.titulo( :class="conteudo4.classe || ''") {{ conteudo4.titulo }}
            div.container-conteudo
                p.texto(:style="{width: conteudo4.tamanhoTexto}") {{ conteudo4.texto1 }}
            div.container-img(:style="{ width: conteudo4.width || 'auto'}")
                img(:src="conteudo4.img" :style="{ margin: conteudo4.margin}")
</template>

<script>
export default {
    name: "SessaoSeis",
    data() {
        // const baseConteudo = {
        //     width: "300px",
        //     blue: true,
        //     tamanhoTexto: "400px",
        // };

        return {
            conteudo1: {
                tituloGrande: "CUIDADOS A SEREM TOMADOS",
                texto1: "Evite executar simultaneamente diferentes antivírus:",
                texto2: "Crie um disco de emergência de seu antivírus:",
                lista: true,
                item1: "eles podem entrar em conflito, afetar o desempenho do equipamento e interferir na capacidade de detecção um do outro",
                item2: "use-o se desconfiar que o antivírus instalado está desabilitado/comprometido ou que o comportamento do equipamento está estranho",
                tamanhoTexto: "300px",
                tamanhoLista: "230px",
            },
            conteudo2: {
                titulo: "MANTENHA SEUS EQUIPAMENTOS ATUALIZADOS",
                texto1: "Use apenas programas originais",
                texto2: "Tenha sempre as versões maisrecentes dos programas instalados",
                texto3: "Instale todas as atualizações disponíveis, principalmente as de segurança",
                texto4: "Crie um disco de recuperação e tenha-o por perto no caso de emergências",
                classe: "red",
                tamanhoTexto: "300px",
            },
            conteudo3: {
                titulo: "INSTALE UM ANTIVÍRUS (ANTIMALWARE)",
                texto1: "Mantenha o antivírus atualizado, incluindo o arquivo de assinaturas:",
                texto2: "Configure o antivírus para verificar automaticamente toda e qualquer extensão de arquivo, arquivos anexados aos e-mails, obtidos pela Internet e os discos rígidos e as unidades removíveis",
                texto3: "Verifique sempre os arquivos recebidos, antes de abri-los ou executá-los",
                item1: "atualize o arquivo de assinaturas pela rede, de preferência diariamente",
                classe: "red",
                lista: true,
                tamanhoTexto: "300px",
                tamanhoLista: "230px",
            },
            conteudo4: {
                titulo: "USE UM FIREWALL PESSOAL",
                texto1: "Assegure-se de ter um firewall pessoal instalado e ativo",
                classe: "red",
                tamanhoTexto: "300px",
                img: require("../../assets/fasciculos/img-14-codigos-maliciosos.png"),
                width: "400px",
                margin: "0 opx 0 auto"
            },
        };
    },
};
</script>

<style scoped lang="scss">
ul,
li {
    list-style: none;
}

.sessao-seis {
    width: 100%;
    height: 100%;
    margin: 60px auto 0px auto;

    .container-img {
        img {
            max-width: 100%;
            display: block;
            margin: 0 auto;
        }
    }

    .container-texto {
        height: 1000px;
        justify-content: center;
        display: grid;
        gap: 30px;

        .conteudo1 {
            margin: 0 auto;
            display: flex;
            width: 700px;
            gap: 20px;

            .titulo {
                color: #6eadff;
                font-size: 45px;
                margin-bottom: 5px;
                text-align: start;
                width: 300px;
                font-weight: 600;
                margin: 0 auto 0 30px;
            }
            .container-conteudo {
                margin: 10px auto 0 auto;

                .texto {
                    text-align: start;
                    font-size: 16px;
                    margin: 0 auto 10px auto;
                    font-weight: 600;
                }

                .item {
                    padding-left: 20px;
                    margin: 0 auto 0 20px;

                    li {
                        list-style: initial;
                    }
                }
            }
        }
        .conteudo2 {
            width: 300px;
            gap: 20px;
            margin: 0px 0px 0px 30px;
            position: relative;
            top: -100px;

            .titulo {
                margin-bottom: 5px;
                text-align: start;
                width: 300px;
                font-weight: 600;
            }
            .container-conteudo {
                .texto {
                    text-align: start;
                    font-size: 16px;
                    margin: 0 auto 10px 10px;
                    font-weight: 600;
                }
            }
        }
        .conteudo3 {
            width: 300px;
            gap: 20px;
            margin: 0px 0px 0px 30px;
            position: relative;
            top: -100px;

            .titulo {
                margin-bottom: 5px;
                text-align: start;
                width: 300px;
                font-weight: 600;
            }
            .container-conteudo {
                margin: 10px auto 0 auto;

                .texto {
                    text-align: start;
                    font-size: 16px;
                    margin: 0 auto 10px auto;
                    font-weight: 600;
                }

                .item {
                    padding-left: 20px;
                    margin: 0 auto 10px 20px;

                    li {
                        list-style: initial;
                    }
                }
            }
        }
        .conteudo4 {
            width: 300px;
            gap: 20px;
            margin: 0px 0px 0px 30px;
            position: relative;
            top: -620px;
            right: -360px;

            .titulo {
                margin-bottom: 5px;
                text-align: start;
                width: 300px;
                font-weight: 600;
            }
            .container-conteudo {
                .texto {
                    text-align: start;
                    font-size: 16px;
                    margin: 0 auto 10px 10px;
                    font-weight: 600;
                }
            }
            .container-img{
                position: relative;
                left: -90px;
            }
        }
    }

    .red {
        color: #da4731;
    }
}
</style>