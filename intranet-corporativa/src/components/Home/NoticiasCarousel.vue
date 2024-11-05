<template lang="pug">
section#carousel(ref="carousel" @mousedown="startDrag" @mouseup="endDrag" @mouseleave="endDrag" @mousemove="drag")
    div.carousel-controls.center
        div.carousel-prev
            a.prev-button.middle-indicator-text(@click="prev")
                i.material-icons.left chevron_left
        div.carousel-next
            a.next-button.middle-indicator-text(@click="next")
                i.material-icons.right chevron_right

    div.carousel-slide(v-for="(slide, index) in slides" :key="index" :class="{ active: nbCurrent === index + 1 }")
        img.img-content-slide(:src="slide.path" draggable="false")
    
    ul.carousel-indicators
        li(v-for="(slide, index) in slides" :key="index" :class="{ active: nbCurrent === index + 1 }" @click="gotoSlide(index + 1)")
        span
</template>
    


<script>
export default {
    data() {
        return {
            nbCurrent: 1,
            timer: null,
            isDragging: false,
            startX: 0,
            slides: [
                { title: "First Panel", path: require("../../assets/banner-seguranca.png") },
                { title: "Second Panel", path: require("../../assets/img2.jpg") },
                { title: "Third Panel", path: require("../../assets/img3.jpg") },
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
            this.stop(); // Para o timer ao começar a arrastar
            this.isSlideChanged = false; // Reseta o estado de mudança de slide
        },
        endDrag() {
            if (this.isDragging) {
                this.isDragging = false;
                // Reinicia o timer
                this.play();
            }
        },
        drag(event) {
            if (!this.isDragging) return;

            const diff = event.clientX - this.startX;

            // Se o movimento for maior que 100px e a mudança de slide não foi feita
            if (Math.abs(diff) > 100 && !this.isSlideChanged) {
                this.isSlideChanged = true; // Define que a mudança de slide foi feita
                if (diff > 0) {
                    this.prev();
                } else {
                    this.next();
                }
                this.startX = event.clientX; // Atualiza a posição de início
            }
        },
        stop() {
            clearInterval(this.timer);
        },
        play() {
            this.stop();
            this.timer = setInterval(this.next, 4500);
        },
    },


    mounted() {
    this.play();
    const carousel = this.$refs.carousel; // Nome correto do ref
    carousel.addEventListener("mouseover", this.stop);
    carousel.addEventListener("mouseout", this.play);
},
    beforeDestroy() {
        this.stop();
        const carousel = this.$refs.carousel; // Nome correto do ref
        carousel.removeEventListener("mouseover", this.stop);
        carousel.removeEventListener("mouseout", this.play);
    },
};
</script>

<style lang="scss" scoped>
#carousel {
    width: 1000px;
    height: 400px;
    margin: 0 auto;
    position: relative;
    overflow: hidden;
    background-color: white;
    user-select: none;
    cursor: pointer;
    margin-top: 50px;
    border: solid 1px #0f2034;
    border-radius: 20px;

    .carousel-slide {
        overflow: hidden;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
        transition: opacity 0.5s ease-in-out;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-radius: 20px;
        cursor: grab;

        &.active {
            opacity: 1;
        }
        .img-content-slide{
            width: 100%;
            height: 100%;
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
</style>

