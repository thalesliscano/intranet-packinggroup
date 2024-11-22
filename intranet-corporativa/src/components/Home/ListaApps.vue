<template lang="pug">
    .container-container-app
        section#items-container
            div.item(v-for="(item, index) in items" :key="index")
                a(:href="item.path" target="_blank").item-link
                    img(:src="item.name" alt="Description of the image" :class="item.img ? 'img-background': ''")
    </template>
    
    <script>
    export default {
        data() {
            return {
                items: [
                    { name: "https://br.adp.com/-/media/adp/redesign2018/ui/logo-adp-fy19.svg?rev=0769ecbf84a9412a93e2cd52b7319a13&hash=C2451A542096BF16BC40698417D5A6FD", path: "https://www.adp.com" , img: false},
                    { name: "https://www.allstrategy.com.br/wp-content/uploads/2023/06/result-2.svg", path: "https://www.allstrategy.com.br/" , img: false},
                    { name: "https://i0.wp.com/finnet.com.br/wp-content/uploads/2021/09/logo_degradepng-01-3.png?resize=1536%2C383&ssl=1", path: "https://finnet.com.br/" , img: false},
                    { name: "https://media.licdn.com/dms/image/v2/D4D0BAQFg9sNBvyALqw/company-logo_200_200/company-logo_200_200/0/1688669168400/nimbi_br_logo?e=1738800000&v=beta&t=CWGJwELKz5iiUyO_h4ZB140Y9Qe6R-c8uzJajU6efCg", path: "https://nimbi.com.br/" , img: false},
                    { name: "https://glpi-project.org/wp-content/uploads/2021/06/logo-glpi-bleu-1.png", path: "http://suporte.packinggroup.net/front/central.php" , img: false},
                    { name: "https://cdn.prod.website-files.com/5e1cab8214cecfed4e37dee2/663526934f3ee6fa923166db_fretefy-logo-224x70.png", path: "https://www.fretefy.com.br/tms-sistema-de-gerenciamento-de-transporte", img: false },
                    { name: "https://mdm.urmobo.com.br/Images/Assets/logo.svg", path: "https://mdm.urmobo.com.br/", img: false},
                    { name: "https://painel.exchange.packtec.com.br/App_Themes/Default/images/logo.png", path: "https://painel.exchange.packtec.com.br/Default.aspx?pid=Login&ReturnUrl=%2f", img: false},
                    { name: "https://ugc.production.linktr.ee/4Of1RABQBOZajO3Pu2qg_Elemento%202%20(1).png", path: "https://www.selbetti.com.br/canal_cliente_novo/login", img: false},
                    { name: "https://vivogestao.vivoempresas.com.br/Portal/data/assets/images/VIVOGestao.jpg", path: "https://vivogestao.vivoempresas.com.br/Portal/data/login", img: false},

                    { name: "https://www.vivoplataformadigital.com.br/cms/themes/jcdefault/images/new_logo_vivo_emp.png", path: "https://www.vivoplataformadigital.com.br/cms/pt", img: false, default: "REDMINE", color: "#000"},
                    { name: "https://portal.itgs.com.br/images/logos/itgs-logo-fundo-branco.png", path: "https://portal.itgs.com.br/", img: true},
                ]
            };
        }
    };
    </script>
    
    <style lang="scss" scoped>
    .container-container-app {
        padding: 50px;
    
        #items-container {
            display: flex;
            flex-wrap: wrap;
            gap: 20px;
            justify-content: center;
            align-items: center;
    
            .item {
                width: 200px;
                display: flex;
                justify-content: center;
                align-items: center;
                padding: 10px;
    
                &:hover {
                    transform: scale(1.1);
                    background-color: #f9fcfc;
                    filter: brightness(1.3); /* Verde com 10% de opacidade */
                    transition: transform 0.3s ease-in-out;
                }
    
                .item-link {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 100%;
                    height: 100%;

    
                    img {
                        width: 100px;
                        height: auto;
                    }
                }
            }
        }
        .img-background{
            background-color: hsl(0, 0,10%)
        }
    }
    </style>
    