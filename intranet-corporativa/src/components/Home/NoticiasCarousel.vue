<template lang="pug">
    div.carousel-container
        div.carousel-left-button(@click="prev")
            img(src="@/assets/right-arrow.svg")

        section#carousel(ref="carousel" @mousedown="startDrag" @mouseup="endDrag" @mouseleave="endDrag" @mousemove="drag")
            div.carousel-controls.center
            div.carousel-slide(
                v-for="(slide, index) in slides"
                :key="index"
                :class="{ active: nbCurrent === index + 1, 'no-click': isDragging && nbCurrent !== index + 1 }"
                :style="{ backgroundImage: `url(${slide.path})`, backgroundSize: slide.backgroundSize }"
                @click="goToSlideRoute(slide.route)"
            )
    
            ul.carousel-indicators
                li(v-for="(slide, index) in slides" :key="index" :class="{ active: nbCurrent === index + 1 }" @click="gotoSlide(index + 1)")
        
        div.carousel-right-button(@click="next")
            img(src="@/assets/right-arrow.svg")
    </template>
    


<script>
export default {
    data() {
        return {
            nbCurrent: 1,
            timer: null,
            isDragging: false,  // Flag para controlar o estado de arrasto
            startX: 0,
            slides: [
                { title: "Third Panel", path: require("../../assets/img3.jpg"), route: "/ransomware", backgroundSize: "50% 80%" },
                { title: "First Panel", path: require("../../assets/banner-seguranca.jpg"), route: "/dicas-seguranca", backgroundSize: "60% 70%" },
                { title: "Second Panel", path: require("../../assets/img2.jpg"), route: "", backgroundSize: "cover" },
            ],
        };
    },
    computed: {
        nbSlide() {
            return this.slides.length;
        },
        activeSlide() {
            return this.slides[this.nbCurrent - 1];
        }
    },
    methods: {
        goToSlideRoute(route) {
            if (!this.isDragging) {
                const targetRoute = route || '/';  // Redireciona para '/home' se não houver um route
                this.$router.push(targetRoute).then(() => {
                    window.scrollTo(0, 0);  // Garante que a página será rolada para o topo
                });
            }
        },

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
        this.isDragging = true;  // Começa o arrasto
        this.startX = event.clientX;
        this.stop();  // Para a navegação automática enquanto está arrastando
        this.changeCursor("grabbing");  // Altera o cursor para 'grabbing'
    },
    endDrag() {
        if (this.isDragging) {
            this.isDragging = false;  // Finaliza o arrasto
            this.play();  // Retoma a navegação automática
            this.changeCursor("grab");  // Volta o cursor para 'grab'
        }
    },
    drag(event) {
        if (!this.isDragging) return;  // Não faz nada se não estiver arrastando

        const diff = event.clientX - this.startX;
        if (Math.abs(diff) > 200) {
            if (diff > 0) {
                this.prev();  // Vai para o slide anterior
            } else {
                this.next();  // Vai para o próximo slide
            }
            this.startX = event.clientX;  // Atualiza a posição inicial para o próximo movimento
        }
    },
    changeCursor(cursorStyle) {
        const carousel = this.$refs.carousel;
        carousel.style.cursor = cursorStyle;  // Altera o cursor do carrossel
    },
        stop() {
            clearInterval(this.timer);  // Para a navegação automática
        },
        play() {
            this.stop();
            this.timer = setInterval(this.next, 2900);  // Retoma a navegação automática a cada 3,4 segundos
        },
    },
    mounted() {
        this.play();
        const carousel = this.$refs.carousel;
        carousel.addEventListener("mouseover", this.stop);
        carousel.addEventListener("mouseout", this.play);
    },
    beforeDestroy() {
        this.stop();
        const carousel = this.$refs.carousel;
        carousel.removeEventListener("mouseover", this.stop);
        carousel.removeEventListener("mouseout", this.play);
    },
};
</script>

<style lang="scss" scoped>
.carousel-container {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    .carousel-left-button, .carousel-right-button {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        font-size: 24px;
        height: 50px;
        padding: 20px;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1;
        width: 80px;

        &:hover {
            fill: red($color: #000000);
        }
        img{
            max-width: 100%;
        }
    }

    .carousel-left-button {
        left: 140px; // Ajuste a posição conforme necessário
        img{
            transform: rotateY(180deg)

        }
    }

    .carousel-right-button {
        right: 140px; // Ajuste a posição conforme necessário
    }
}

#carousel {
    width: 1000px;
    height: 500px;
    margin: 0 auto;
    position: relative;
    overflow: hidden;
    background-color: white;
    user-select: none;
    cursor: pointer;
    margin-top: 50px;
    border-radius: 20px;

    .carousel-slide {
        overflow: hidden;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: none;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-radius: 20px;
        cursor: grab;
        background-position: center;
        background-repeat: no-repeat;

        &.active {
            display: flex;
            transition: opacity 0.5s ease;
            opacity: 1;
        }

        &.no-click {
            pointer-events: none;
            cursor: grabbing;
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
        .carousel-prev{
            .prev-button,
            .next-button {
                cursor: pointer;
                color: white;
                font-size: 24px;
                img{
                    max-width: 100%
                }
            }
        }
    }
}
</style>


