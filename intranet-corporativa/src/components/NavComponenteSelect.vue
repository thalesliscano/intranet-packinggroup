<template lang="pug">
header.container-nav-ti
    nav.nav-ti
        router-link.link-to-home(to="/")
            img.logo(src="https://packinggroup.com.br/imagens/logo-packing-group.png" alt="logo")
        .conteudo-navegacao
            .background-btn
                router-link(to="/" exact ).btn-navegacao Home
            //- .background-btn
            //-     router-link(to="/rh").btn-navegacao Rh
            //- .background-btn
            //-     router-link(to="/sesmt").btn-navegacao Sesmt
            .background-btn
                router-link(to="/documentacao").btn-navegacao Documentação
            .background-btn
                router-link(to="/treinamento").btn-navegacao Treinamento
            //- .background-btn
            //-     NavComponenteSelect
            //- .background-btn
            //-     .dropdown-select-ti(@mouseenter="showDropdownTI = true" @mouseleave="showDropdownTI = false")
            //-         button.dropbtn Políticas e Procedimentos
            //-         .dropdown-content(v-if="showDropdownTI")
            //-             a.option-itens(v-for="item in opcoesInformacaoPoliticas" :key="item.texto" :href="item.link") {{ item.texto }}
            //- .background-btn
            //-     .dropdown-select-apps(@mouseenter="showDropdownApps = true" @mouseleave="showDropdownApps = false")
            //-         button.dropbtn Apps Corporativos
            //-         .dropdown-content(v-if="showDropdownApps")
            //-             a.option-itens(v-for="item in opcoesInformacaoApps" :key="item.texto" :href="item.link") {{ item.texto }}
            //- .background-btn
            //-     .dropdown-select-manuais(@mouseenter="showDropdownManuais = true" @mouseleave="showDropdownManuais = false")
            //-         button.dropbtn Manuais
            //-         .dropdown-content(v-if="showDropdownManuais")
            //-             a.option-itens(v-for="item in opcoesInformacaoManuais" :key="item.texto" @click="navegarPara(item.link)") {{ item.texto }}
//-                 .dropdown-select-treinamentos(@mouseenter="showDropdownTreinamentos = true" @mouseleave="showDropdownTreinamentos = false")
//-                     button.dropbtn Treinamentos
//-                     .dropdown-content(v-if="showDropdownTreinamentos")
//-                         .opcao-treinamento(v-for="(item, index) in opcoesInformacaoTreinamentos" :key="index")
//-                             .titulo(@click="toggleSubmenu(index)") {{ item.titulo }}
//-                             .submenu(v-if="showSubmenus[index]")
//-                                 a.option-itens(v-for="subitem in item.subtitulos" :key="subitem.texto" :href="subitem.link") {{ subitem.texto }}
</template>


<script>

export default {
    name: "NavComponente",
    components: {
    },
    data() {
        return {
            showDropdownTI: false,
            showDropdownApps: false,
            showDropdownManuais: false,
            showDropdownTreinamentos: false,
            showSubmenus: {}, // Object to control each submenu's visibility by index

            opcoesInformacaoPoliticas: [
                { texto: "PO.TIC.01 - Política de Segurança da Informação", link: "www.google.com.br" },
                { texto: "PR.TIC.01 - Procedimento de Entrada e Saída de Equipamentos", link: "/manuais" },
                { texto: "PO.TIC.02 - Procedimento de Acesso a Ferramentas de Trabalho e Sistemas", link: "/treinamentos" },
                { texto: "PO.TIC.03 - Procedimento de Acesso a WIFI", link: "/treinamentos" },
                { texto: "PO.TIC.04 - Procedimento de Disponibilização de Aparelhos e Linhas Móveis", link: "/treinamentos" }
            ],
            opcoesInformacaoApps: [
                { texto: "ADP System", link: "/adp" },
                { texto: "Allstrategic", link: "/allstrategic" },
                { texto: "FinNet", link: "/finnet" },
                { texto: "Nimbi", link: "/nimbi" },
                { texto: "Portal ITGS", link: "/portal-itgs" },
                { texto: "Sistema de Chamados - GLPI", link: "/glpi" },
                { texto: "Tms", link: "/tms" },
                { texto: "Portal de Cadastro", link: "/portal-cadastro" }
            ],
            opcoesInformacaoTreinamentos: [
                {
                    titulo: "Treinamento de Segurança da Informação",
                    subtitulos: [
                        { texto: "Introdução à Segurança", link: "/seguranca-introducao" },
                        { texto: "Política de Segurança", link: "/seguranca-politica" }
                    ]
                },
                {
                    titulo: "Treinamento de Ferramentas de Trabalho",
                    subtitulos: [
                        { texto: "Ferramentas Básicas", link: "/ferramentas-basicas" },
                        { texto: "Ferramentas Avançadas", link: "/ferramentas-avancadas" }
                    ]
                }
            ]
        };
    },
    methods: {
        navegarPara(link) {
            if (link) {
                window.location.href = link;
            }
        },
        toggleSubmenu(index) {
            // Toggle submenu visibility for each title independently
            this.$set(this.showSubmenus, index, !this.showSubmenus[index]);
        }
    }
}
</script>

<style lang="scss" scoped>
.container-nav-ti {
    width: 100%;
    margin: 0 auto;

    .nav-ti {
        display: flex;
        justify-content: space-between;
        align-items: center;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        padding: 5px 50px 5px 50px;


        .link-to-home {
            display: flex;
            align-items: center;

            img {
                width: 180px;
            }
        }

        .conteudo-navegacao {
            display: flex;
            align-items: center;
            gap: 40px;
            position: relative;

            // left: -120px;
            .router-link {
                background-color: #fff;
            }
        }

        .dropdown-select-ti,
        .dropdown-select-apps,
        .dropdown-select-manuais,
        .dropdown-select-treinamentos {
            position: relative;
            display: inline-block;

            .dropbtn {
                background-color: #0f2034;
                width: 100%;
                font-weight: bold;
                color: white;
                padding: 8px 16px;
                font-size: 16px;
                border: none;
                cursor: pointer;
            }

            .dropdown-content {
                display: block;
                position: absolute;
                background-color: #f9f9f9;
                min-width: 200%;
                box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
                z-index: 1;

                .option-itens {
                    color: black;
                    padding: 12px 16px;
                    text-decoration: none;
                    display: block;

                    &:hover {
                        background-color: #0f2034;
                        color: #ffffff;
                    }
                }

                .subtitulo {
                    position: relative;

                    .subtitulo-btn {
                        background-color: #f1f1f1;
                        width: 100%;
                        border: none;
                        padding: 8px 16px;
                        text-align: left;
                        cursor: pointer;

                        &:hover {
                            background-color: #ddd;
                        }
                    }

                    .submenu {
                        position: absolute;
                        left: 0;
                        top: 100%;
                        background-color: #000;
                        background-color: #f9f9f9;
                        box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
                        z-index: 1;

                        .option-itens {
                            padding: 12px 16px;

                            &:hover {
                                background-color: #0f2034;
                                color: #ffffff;
                            }
                        }
                    }
                }
            }
        }

        .dropdown-select-apps {
            .dropdown-content {
                min-width: 130%;
            }
        }

        .dropdown-select-treinamentos {
            .dropdown-content {
                min-width: 150%;

                .opcao-treinamento {
                    cursor: pointer;

                    &:hover {
                        background-color: #0f2034;
                        color: #ffffff;
                    }

                    .titulo {
                        color: black;
                        padding: 12px 16px;
                        text-decoration: none;
                        display: block;

                        &:hover {
                            color: #fff;
                        }

                        &.active {
                            // Aplica os estilos quando o submenu está aberto
                            background-color: #0f2034;
                            color: #ffffff;

                            .titulo {
                                color: #ffffff;
                            }
                        }
                    }

                    .submenu {
                        background-color: #fff;
                    }
                }
            }
        }

        .btn-navegacao {
            background-color: #fff;
            /* Cor padrão */
            color: #0f2034;
            /* Cor do texto padrão */
            width: 100%;
            font-weight: bold;
            padding: 8px 16px;
            font-size: 16px;
            border: none;
            cursor: pointer;
            text-align: left;
            text-decoration: none;
            border-radius: 5px;

            &:hover {
                background-color: #0a1625;
                color: white;
                /* Muda a cor do texto ao passar o mouse */
            }

            &.router-link-active {
                background-color: #0f2034;
                /* Cor de fundo quando ativo */
                color: #ffffff;
                /* Cor do texto quando ativo */
            }

            &.router-link-exact-active {
                background-color: #0f2034;
                /* Cor de fundo quando ativo exato */
                color: #ffffff;
                /* Cor do texto quando ativo exato */
            }
        }

    }
}
</style>
