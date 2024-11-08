<template lang="pug">
main.container-sessao-documento
    .descricao
        p 
            | A página de documentação foi criada para centralizar documentos importantes da empresa sobre segurança da informação, TI e software. Dividida em seções como "Segurança da Informação", "TI Aleph" e "TI Infra", permite que os usuários encontrem rapidamente manuais, políticas e guias essenciais para o dia a dia.
        br
        p
            | Os documentos estão organizados em cartões que podem ser expandidos para mostrar links diretos de acesso. A interface é simples e intuitiva, facilitando a navegação e garantindo que todos tenham acesso rápido e fácil às informações necessárias.
    div.card-list
        div.card(v-for="(item, index) in items" :key="index")
            div.card-header(@click="toggleAccordion(index)")
                h2 {{ item.title }}
                button(:class="{'is-expanded': expandedIndices.includes(index)}")
            div.card-content(:class="{ 'is-visible': expandedIndices.includes(index) }")
                ul
                    li(v-for="(link, idx) in item.links" :key="idx")
                        a(:href="`/arquivos/${link.url}`", target="_blank") {{ link.label }}
</template>
    
    

<script>
export default {
    name: "SessaoUmDocumento",
    data() {
        return {
            expandedIndices: [], // Keeps track of expanded card indices
            items: [
                {
                    title: "SEGURANÇA DA INFORMAÇÃO",
                    links: [
                        { label: "Document", url: "https://link-para-o-driver-2.com" },
                        { label: "Document2", url: "https://link-para-o-Document2-2.com" },
                    ],
                },
                {
                    title: "TI ALEPH",
                    links: [
                        { label: "Document", url: "https://link-para-o-driver-2.com" },
                        { label: "Document2", url: "https://link-para-o-Document2-2.com" },
                    ],
                },
                {
                    title: "TI INFRA",
                    links: [
                        { label: "Instalção windowns e Aleph", url: "manual final.pdf" },
                        { label: "Document2", url: "https://link-para-o-Document2.com" },
                    ],
                },
            ],
        };
    },
    methods: {
        toggleAccordion(index) {
            const indexPosition = this.expandedIndices.indexOf(index);
            if (indexPosition > -1) {
                this.expandedIndices.splice(indexPosition, 1);
            } else {
                this.expandedIndices.push(index);
            }
        },
    },
};
</script>


<style lang="scss" scoped>
.container-sessao-documento {
    display: flex;
    position: relative;
    width: 1000px;
    h1{
        font-size: 30px;
        margin-bottom: 30px;
    }

    .card-list {
        width: 100%;
        max-width: 800px;
        font-family: Arial, sans-serif;
        position: absolute;
        top: 150px;
        left: -15px;

        .card {
            background: #f4f4f4;
            border-bottom: 1px solid #ddd;
            margin-bottom: 10px;
            border-radius: 4px;
            overflow: hidden;

            &-header {
                padding: 15px;
                cursor: pointer;
                display: flex;
                justify-content: space-between;
                align-items: center;
                background: #fff;
                border-bottom: 1px solid #0f2034;

                h3 {
                    margin: 0;
                    font-size: 16px;
                }

                button {
                    background: none;
                    border: none;
                    font-size: 14px;
                    color: #007bff;
                    cursor: pointer;

                    &.is-expanded {
                        color: #0056b3;
                    }
                }
            }

            &-content {
                // Set initial state for smooth transition
                max-height: 0;
                opacity: 0;
                overflow: hidden;
                transition: max-height 0.3s ease, opacity 0.3s ease;
                
                &.is-visible {
                    max-height: 300px;  // Adjust as needed to fit content
                    opacity: 1;
                }


                ul {
                    list-style-type: none;
                    padding: 15px;

                    li {
                        margin-bottom: 8px;

                        a {
                            color: #007bff;
                            text-decoration: none;

                            &:hover {
                                text-decoration: underline;
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>
