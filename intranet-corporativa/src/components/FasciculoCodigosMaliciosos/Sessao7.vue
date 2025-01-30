<template lang="pug">
.sessao-sete
    ul.container-texto
        li.conteudo1
            .conteudo-geral
                div.container-conteudo.margin-bg
                    p.texto(:style="{width: conteudo1.tamanhoTexto}") {{ conteudo1.texto1 }}
                div.container-conteudo
                    h3.titulo( :class="conteudo1.classe || ''") {{ conteudo1.titulo1 }}
                    p.texto(:style="{width: conteudo1.tamanhoTexto}") {{ conteudo1.texto2 }}
                    p.texto(:style="{width: conteudo1.tamanhoTexto}") {{ conteudo1.texto3 }}
                    p.texto(:style="{width: conteudo2.tamanhoTexto}") {{ conteudo2.texto4 }}
                h3.titulo( :class="conteudo1.classe || ''") {{ conteudo1.titulo2 }}
                div.container-conteudo.margin-bg
                    p.texto(:style="{width: conteudo1.tamanhoTexto}") {{ conteudo1.texto5 }}
            .container-img(:style="{width: conteudo1.width || 'auto'}")
                img(:src="conteudo1.img" :style="{height: conteudo1.widthImg}")
                .container-conteudo
                    p.texto(:style="{width: conteudo1.tamanhoTexto}") {{ conteudo1.texto2 }}
                    p.texto(:style="{width: conteudo1.tamanhoTexto}") {{ conteudo1.texto3 }}                  
        li.conteudo2
            .container-img(:style="{width: conteudo2.widthImg || 'auto'}")
                img(:src="conteudo2.img" :style="{height: conteudo2.widthImg}")  
            div.container-conteudo.margin-left
                h3.titulo( :class="conteudo2.classe || ''") {{ conteudo2.titulo }}
                p.texto(:style="{width: conteudo2.tamanhoTexto}") {{ conteudo2.texto1 }}
                p.subtopico(:style="{width: conteudo2.tamanhoTexto}") {{ conteudo2.subtopico1 }}
                p.subtopico(:style="{width: conteudo2.tamanhoTexto}") {{ conteudo2.subtopico2 }}
                p.texto(:style="{width: conteudo2.tamanhoTexto}") {{ conteudo2.texto2 }}
                h3.titulo.margin-top( :class="conteudo2.classe || ''") {{ conteudo2.titulo }}
                p.texto(:style="{width: conteudo2.tamanhoTexto}") {{ conteudo2.texto3 }}
                p.texto(:style="{width: conteudo2.tamanhoTexto}") {{ conteudo2.texto4 }}
                p.subtopico(:style="{width: conteudo2.tamanhoTexto}") {{ conteudo2.subtopico3 }}
                p.texto(:style="{width: conteudo2.tamanhoTexto}") {{ conteudo2.texto5 }}

</template>

<script>
export default {
    name: "SessaoSete",
    data() {
        // const baseConteudo = {
        //     width: "300px",
        //     blue: true,
        //     tamanhoTexto: "400px",
        // };

        return {
            conteudo1: {
                texto1: "Verifique periodicamente os logs do firewall à procura de acessos maliciosos",
                texto2: "Baixe aplicativos apenas de fontes confiáveis",
                texto3: "Verifique se as permissões de instalação e execução são coerentes",
                texto4: "Escolha aplicativos bem avaliados e com grande quantidade de usuários",
                texto5: "Proteja seus dados, fazendo backups regularmente",
                titulo1: "AO INSTALAR APLICATIVOS",
                titulo2: "FAÇA BACKUPS",
                lista: true,
                item1: "eles podem entrar em conflito, afetar o desempenho do equipamento e interferir na capacidade de detecção um do outro",
                item2: "use-o se desconfiar que o antivírus instalado está desabilitado/comprometido ou que o comportamento do equipamento está estranho",
                tamanhoTexto: "300px",
                tamanhoLista: "230px",
                classe: "red",
                img: require("../../assets/fasciculos/img-15-codigos-maliciosos.jpg"),
                widthImg: "180px",
                width: "300px"
            },
            conteudo2: {
                titulo: "SEJA CUIDADOSO AO CLICAR EM LINKS",
                texto1: "Não considere que mensagens vindas de conhecidos são sempre confiáveis",
                subtopico1: "• o campo de remetente do e-mail pode ter sido falsificado, ou",
                subtopico2: "• elas podem ter sido enviadas de contas falsas ou invadidas",
                texto2: "Antes de acessar um link curto procure usar complementos que permitam visualizar o link de destino",
                texto3: "Use a conta de administrador apenas quando necessário",
                texto4: "Cuidado com extensões ocultas",
                subtopico3: "• alguns sistemas possuem como configuração padrão ocultar a extensão de tipos de arquivos conhecidos",
                texto5: "Desabilite a auto-execução de mídias removíveis e de arquivos anexados",
                classe: "red",
                tamanhoTexto: "300px",
                img: require("../../assets/fasciculos/img-16-codigos-maliciosos.png"),
                widthImg: "500px",
                width: "400px"
            },
        };
    },
};
</script>

<style scoped lang="scss">
.sessao-sete {
    width: 100%;
    height: 100%;
    margin: 60px auto 0px auto;

    .container-img {
        width: 400px;

        img {
            max-width: 100%;
            display: block;
            margin: 0 auto;
        }
    }

    .margin-bg {
        margin-bottom: 20px;
    }
    .margin-left{
        margin-left: 60px;
    }
    .margin-top{
        margin-top: 20px;
    }


    .container-texto {
        height: 1000px;
        justify-content: start;
        display: flex;
        flex-direction: column;
        gap: 30px;

        .conteudo1 {
            margin: 0 auto;
            display: grid;
            grid-template-columns: 350px 350px;
            flex-wrap: wrap;
            justify-content: center;
            width: 700px;
            gap: 20px;
            margin: 0 auto;
            align-items: center;

            .titulo {
                margin-bottom: 5px;
                text-align: start;
                width: 200px;
                font-weight: 600;
            }

            .conteudo-geral {
                 margin-left: 20px;
                .container-conteudo {
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

            .container-img {
                place-self: start;
                    .container-conteudo {
                    margin: 20px 0px 30px 30px;
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
        }

        .conteudo2 {
            width: 700px;
            gap: 20px;
            margin: 0 auto;
            display: grid;
            grid-template-columns: 300px 400px;
            justify-content: center;

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
                .subtopico{
                    text-align: start;
                    font-size: 15px;
                    margin: 0 auto 10px 20px;
                    font-weight: 400;
                }
            }
            
        .container-img {
            width: 400px;
            margin-top: -40px;
            img{
                margin: 0px;
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

            .container-img {
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