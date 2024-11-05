<template lang="pug">
.container-container-app
    h1.titulo Atalhos App
    section#carousel(ref="carousel" @mousedown="startDrag" @mouseup="endDrag" @mouseleave="endDrag" @mousemove="drag")
        div.carousel-controls.center
            div.carousel-prev
                a.prev-button.middle-indicator-text(@click="prev")
                    i.material-icons.left chevron_left
            div.carousel-next
                a.next-button.middle-indicator-text(@click="next")
                    i.material-icons.right chevron_right

            div(v-for="(slide, index) in slides" :key="index" :class="['carousel-slide', { active: nbCurrent === index + 1 }]" v-show="nbCurrent === index + 1")
                div.slide-content(v-for="(item, itemIndex) in slide.items" :key="itemIndex")
                    a(:href="item.path" target="_blank").item-link
                        img(:src="item.name" alt="Description of the image")
        ul.carousel-indicators
            li(v-for="(slide, index) in slides" :key="index" :class="{ active: nbCurrent === index + 1 }" @click="gotoSlide(index + 1)")
</template>
    


<script>
export default {
    data() {
        return {
            nbCurrent: 1,
            timer: null,
            isDragging: false,
            startX: 0,
            isSlideChanged: false,
            slides: [
                {
                    items: [
                        { name: "https://br.adp.com/-/media/adp/redesign2018/ui/logo-adp-fy19.svg?rev=0769ecbf84a9412a93e2cd52b7319a13&hash=C2451A542096BF16BC40698417D5A6FD", path: "https://www.adp.com" },
                        { name: "https://www.allstrategy.com.br/wp-content/uploads/2023/06/result-2.svg", path: "https://www.allstrategy.com.br/" },
                        { name: "https://i0.wp.com/finnet.com.br/wp-content/uploads/2021/09/logo_degradepng-01-3.png?resize=1536%2C383&ssl=1", path: "https://finnet.com.br/" },
                        { name: "https://media.licdn.com/dms/image/v2/D4D0BAQFg9sNBvyALqw/company-logo_200_200/company-logo_200_200/0/1688669168400/nimbi_br_logo?e=1738800000&v=beta&t=CWGJwELKz5iiUyO_h4ZB140Y9Qe6R-c8uzJajU6efCg", path: "https://nimbi.com.br/?utm_source=google&utm_medium=cpc&utm_campaign=GADS-8DH-institucional&utm_term=nimbi&utm_content=ad01&gad_source=1&gclid=Cj0KCQiAoae5BhCNARIsADVLzZfeLsZRUy4HoWgxf6Mh3tSiIrkZIY6wa3xAbNLG6KS9B2LQGtu8L3AaAl9TEALw_wcB" },
                        { name: "https://scontent.fpoa1-1.fna.fbcdn.net/v/t39.30808-1/314019917_544710697663720_7886291187722704154_n.jpg?stp=c92.0.788.788a_dst-jpg_s200x200&_nc_cat=105&ccb=1-7&_nc_sid=f4b9fd&_nc_ohc=4ALq_sffKQ4Q7kNvgEGs6F0&_nc_zt=24&_nc_ht=scontent.fpoa1-1.fna&_nc_gid=AxiIrKQytv3AQvjXBpAfhs0&oh=00_AYCD2YG7Wysygr6nultJuWsbvgQwZkizfGO4A21AQf0clw&oe=672FD653", path: "https://portal.itgs.com.br/" },
                        { name: "https://glpi-project.org/wp-content/uploads/2021/06/logo-glpi-bleu-1.png", path: "https://glpi-project.org/pt-br/" },
                    ]
                },
                {
                    items: [
                        { name: "https://cdn.prod.website-files.com/5e1cab8214cecfed4e37dee2/663526934f3ee6fa923166db_fretefy-logo-224x70.png", path: "https://www.fretefy.com.br/tms-sistema-de-gerenciamento-de-transporte?utm_source=google&utm_medium=cpc&utm_campaign=tms2024&gad_source=1&gclid=Cj0KCQiAoae5BhCNARIsADVLzZcfguXxy5E73KTxu8cDC_Ni7KucHeZsk6aRBhnYBJL2obrNgXiRitoaArmzEALw_wcB" },
                    ]
                },
                // Adicione mais slides conforme necessário
            ],
        };
    },
    computed: {
        nbSlide() {
            return this.slides.length;
        },
    },
    methods: {
        gotoSlide(num) {
            if (num === this.nbCurrent) return;
            this.nbCurrent = num;
        },
        next() {
            this.nbCurrent = this.nbCurrent >= this.nbSlide ? 1 : this.nbCurrent + 1;
        },
        prev() {
            this.nbCurrent = this.nbCurrent <= 1 ? this.nbSlide : this.nbCurrent - 1;
        },
        startDrag(event) {
            this.isDragging = true;
            this.startX = event.clientX;
            this.stop();
            this.isSlideChanged = false;
        },
        endDrag() {
            if (this.isDragging) {
                this.isDragging = false;
                this.play();
            }
        },
        drag(event) {
            if (!this.isDragging) return;

            const diff = event.clientX - this.startX;

            if (Math.abs(diff) > 100 && !this.isSlideChanged) {
                this.isSlideChanged = true;
                if (diff > 0) {
                    this.prev();
                } else {
                    this.next();
                }
                this.startX = event.clientX;
            }
        },
        stop() {
            clearInterval(this.timer);
        },
        play() {
            this.stop();
            this.timer = setInterval(this.next, 3000); // Ajuste de tempo para rotação mais fluida
        },
        depurar() {
            console.log(this.slides[0]);
            console.log(this.slides[0].items);
            console.log(this.slides[0].items[0]);
        }
    },
    mounted() {
        this.play();
        const carousel = this.$refs.carousel;
        if (carousel) {
            carousel.addEventListener("mouseover", this.stop);
            carousel.addEventListener("mouseout", this.play);
        }
        this.depurar();
    },
    beforeDestroy() {
        this.stop();
        const carousel = this.$refs.carousel;
        if (carousel) {
            carousel.removeEventListener("mouseover", this.stop);
            carousel.removeEventListener("mouseout", this.play);
        }
    },
};
</script>


<style lang="scss" scoped>
.container-container-app {
    padding: 50px;
    .titulo {
        font-size: 30px;
        text-align: center;
        position: relative;
        top: 30px;
    }

    #carousel {
        padding: 20px;
        width: 1000px;
        height: 400px;
        margin: 0 auto;
        position: relative;
        overflow: hidden;
        background-color: white;
        user-select: none;
        cursor: pointer;
        margin-top: 50px;
        border-radius: 20px;

        .carousel-slide {
            position: absolute;
            top: 0;
            left: 100%; 
            width: 1000px;
            height: 200px;
            padding: 50px 0px;
            opacity: 0;
            transition: left 0.5s ease-in-out, opacity 0.5s ease-in-out;
            display: grid;
            grid-template-columns: 200px 200px 200px;
            justify-content: center;
            align-items: center;
            border-radius: 10px;
            gap: 30px;

            &.active {
                left: 0; 
                opacity: 1;
            }

 
            .slide-content {
                display: flex;
                width: 200px;
                height: 100px;
                justify-content: center;
                align-items: center;
                padding: 10px;
                &:hover{
                    transform: scale(1.1);
                    background-color: #f2f2f2;
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

        .carousel-indicators {
            position: absolute;
            left: 50%;
            bottom: 20px;
            display: flex;
            transform: translateX(-50%);
            padding: 0;
            margin: 0;

            li {
                display: inline-block;
                background-color: #ffffff;
                border: solid 1px;
                border-radius: 50%;
                width: 10px;
                height: 10px;
                margin: 0 5px;
                cursor: pointer;

                &.active {
                    background-color: #2980b9;
                }
            }
        }

        .carousel-controls {
            position: absolute;
            top: 10px;
            width: 100%;
            display: flex;
            justify-content: space-between;
            padding: 0 20px;

            .prev-button,
            .next-button {
                cursor: pointer;
                color: white;
                font-size: 24px;
            }
        }
    }
}
</style>

