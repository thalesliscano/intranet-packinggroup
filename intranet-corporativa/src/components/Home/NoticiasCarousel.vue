<template lang="pug">
div#carrousel(ref="carrousel" @mousedown="startDrag" @mouseup="endDrag" @mouseleave="endDrag" @mousemove="drag")
    div.carousel-fixed-item.center.middle-indicator
      div.left
        a.movePrevCarousel.middle-indicator-text.waves-effect.waves-light.content-indicator(@click="prev")
          i.material-icons.left.middle-indicator-text chevron_left
      div.right
        a.moveNextCarousel.middle-indicator-text.waves-effect.waves-light.content-indicator(@click="next")
          i.material-icons.right.middle-indicator-text chevron_right

    div.carousel-item(v-for="(slide, index) in slides" :key="index" :class="{ active: nbCurrent === index + 1 }")
      h2 {{ slide.title }}
      p {{ slide.description }}
    
    ul.carrousel-picto
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
                { title: "First Panel", description: "This is your first panel." },
                { title: "Second Panel", description: "This is your second panel." },
                { title: "Third Panel", description: "This is your third panel." },
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
            this.timer = setInterval(this.next, 5000);
        },
    },


    mounted() {
        this.play();
        const carrousel = this.$refs.carrousel;
        carrousel.addEventListener("mouseover", this.stop);
        carrousel.addEventListener("mouseout", this.play);
    },
    beforeDestroy() {
        this.stop();
        const carrousel = this.$refs.carrousel;
        carrousel.removeEventListener("mouseover", this.stop);
        carrousel.removeEventListener("mouseout", this.play);
    },
};
</script>

<style lang="scss" scoped>
#carrousel {
    width: 1000px;
    height: 400px;
    margin: 0 auto;
    position: relative;
    overflow: hidden;
    background-color: white;
    user-select: none;
    -webkit-user-select: none; // Safari
    -moz-user-select: none; // Firefox
    -ms-user-select: none; // Internet Explorer/Edge
    cursor: pointer;
    margin-top: 50px;

    .carousel-item {
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

        &.active {
            opacity: 1;
        }
    }

    .carrousel-picto {
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

    .carousel-fixed-item {
        position: absolute;
        top: 10px;
        width: 100%;
        display: flex;
        justify-content: space-between;
        padding: 0 20px;

        .movePrevCarousel,
        .moveNextCarousel {
            cursor: pointer;
            color: white;
            font-size: 24px;
        }
    }
}
</style>
