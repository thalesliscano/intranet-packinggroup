<template lang="pug">
    .container-container-app
        section#items-container
            div.item(v-for="(item, index) in items" :key="index")
                a(:href="item.path" target="_blank").item-link
                    img(:src="item.name" alt="Description of the image")
    </template>
    
    <script>
    export default {
        data() {
            return {
                items: [
                    { name: "https://br.adp.com/-/media/adp/redesign2018/ui/logo-adp-fy19.svg?rev=0769ecbf84a9412a93e2cd52b7319a13&hash=C2451A542096BF16BC40698417D5A6FD", path: "https://www.adp.com" },
                    { name: "https://www.allstrategy.com.br/wp-content/uploads/2023/06/result-2.svg", path: "https://www.allstrategy.com.br/" },
                    { name: "https://i0.wp.com/finnet.com.br/wp-content/uploads/2021/09/logo_degradepng-01-3.png?resize=1536%2C383&ssl=1", path: "https://finnet.com.br/" },
                    { name: "https://media.licdn.com/dms/image/v2/D4D0BAQFg9sNBvyALqw/company-logo_200_200/company-logo_200_200/0/1688669168400/nimbi_br_logo?e=1738800000&v=beta&t=CWGJwELKz5iiUyO_h4ZB140Y9Qe6R-c8uzJajU6efCg", path: "https://nimbi.com.br/" },
                    { name: "https://scontent.fpoa1-1.fna.fbcdn.net/v/t39.30808-1/314019917_544710697663720_7886291187722704154_n.jpg?stp=c92.0.788.788a_dst-jpg_s200x200&_nc_cat=105&ccb=1-7&_nc_sid=f4b9fd&_nc_ohc=4ALq_sffKQ4Q7kNvgEGs6F0&_nc_zt=24&_nc_ht=scontent.fpoa1-1.fna&_nc_gid=AxiIrKQytv3AQvjXBpAfhs0&oh=00_AYCD2YG7Wysygr6nultJuWsbvgQwZkizfGO4A21AQf0clw&oe=672FD653", path: "https://portal.itgs.com.br/" },
                    { name: "https://glpi-project.org/wp-content/uploads/2021/06/logo-glpi-bleu-1.png", path: "https://glpi-project.org/pt-br/" },
                    { name: "https://cdn.prod.website-files.com/5e1cab8214cecfed4e37dee2/663526934f3ee6fa923166db_fretefy-logo-224x70.png", path: "https://www.fretefy.com.br/tms-sistema-de-gerenciamento-de-transporte" }
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
    }
    </style>
    