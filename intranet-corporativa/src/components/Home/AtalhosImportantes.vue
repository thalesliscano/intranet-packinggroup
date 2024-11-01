<template lang="pug">
section.atalhos-container
    h1.titulo-atalhos Atalhos importantes
    main.lista-atalhos-container
        ul.lista-atalhos-itens
            li(v-for='item in itensAtalhos' :key="item.nome").item-atalho 
                .item-titulo
                    .container-img
                        img.item-img(:src="item.img")
                    p.item-nome {{item.nome}}

                p.item-descricao {{ item.descricao}}
                a(:href="item.link").item-link Clique aqui
</template> 
    

<script>
export default{
    name: "SessaoImportante",
    data(){
        return {
            itensAtalhos: [
                {
                    nome: "Segurança da Informação", link: "https://www.google.com", descricao: "A Segurança da Informação protege dados e sistemas contra acessos não autorizados, garantindo sua confidencialidade, integridade e disponibilidade.", img: require("../../assets/ciber-seguranca.png")
                },
                {
                    nome: "Sistema de Chamado",link: "https://www.google.com", descricao: "O Sistema de Chamado permite o registro e acompanhamento de solicitações, facilitando a comunicação e resolução de problemas.", img: require("../../assets/logo-glpi-bleu-1.png")
                },
                {
                    nome: "Aletas e Manutenção",link: "https://www.google.com", descricao: "Aletas e Manutenção envolvem o monitoramento e cuidado de equipamentos, assegurando sua operação adequada e prevenindo falhas.", img: require("../../assets/manutencao.png")
                },
            ]
        }
    }
}
</script>

<style lang="scss">
.atalhos-container {
    border-top: 5px solid #0f2034;
    margin-top: 50px;
    .titulo-atalhos {
        margin-top: 30px;
        font-size: 30px;
        text-align: center;

    }
    .lista-atalhos-container{   
        width: 1000px;
        margin: 0 auto;
        padding: 40px;
        .lista-atalhos-itens{
            display: flex;
            justify-content: center;
            gap: 30px;
            .item-atalho {
                display: flex;
                flex-direction: column;
                gap: 10px;
                background-color: #fff;
                border: 1px solid ;
                padding: 10px;
                border-radius: 10px;
                .item-titulo{
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    justify-content: center;
                    .item-nome{
                        font-size: 20px;
                    }
                    .container-img{
                        width: 40px;
                        .item-img{
                            max-width: 100%;
                            height: 35px;
                        }
                    }
                }
            }
            .item-link{
                align-self: flex-end;
                justify-self: flex-end;
                border-radius: 10px;
                padding: 6px 7px 5px 8px;
                color: #000;
                border: 1px solid;
                position: relative;
                font-weight: 500;
                &:hover{
                    background-color: #0f2034;
                    color: #fff;
                }
            }
        }
    }
}

</style>