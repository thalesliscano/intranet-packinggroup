<template lang="pug">
    div.carousel-container
        div.carousel-left-button(@click="prev")
            img(src="@/assets/right-arrow.svg")

        section#carousel(ref="carousel" @mousedown="startDrag" @mouseup="endDrag" @mouseleave="endDrag")
            div.carousel-controls.center
            div.carousel-slide(
                v-for="(slide, index) in slides"
                :key="index"
                :class="{ active: nbCurrent === index + 1 }"
                :style="{ backgroundImage: `url(${slide.path})`, backgroundSize: slide.backgroundSize, backgroundPosition: slide.position }"
            )
                div.slide-content
                        h2.slide-title {{ slide.title }}
                        button.slide-button(@click="goToSlideRoute(slide.route)") Acessar
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
            isDragging: false,
            isTransitioning: false,
            startX: 0,
            slides: [
                { title: "RANSOMWARE", path: require("../../assets/img3.png"), route: "/ransomware", backgroundSize: "100% 100%", backgroundPosition: "100%" },
                { title: "5 DICAS DE SEGURANÇA", path: require("../../assets/banner-seguranca.jpg"), route: "/dicas-seguranca", backgroundSize: "100% 100%" },
                { title: "CODIGOS MALICIOSOS", path: require("../../assets/img2.png"), route: "", backgroundSize: "100% 110%" },
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
                const targetRoute = route || '/';  
                this.$router.push(targetRoute).then(() => {
                    window.scrollTo(0, 0); 
                });
            }
        },

        gotoSlide(num) {
            if (num === this.nbCurrent) return;
            this.nbCurrent = num;
        },
        next() {
        if (!this.isTransitioning) {
            this.isTransitioning = true; 
            this.nbCurrent = this.nbCurrent >= this.nbSlide ? 1 : this.nbCurrent + 1; // Transição contínua
            setTimeout(() => {
                this.isTransitioning = false; 
            }, 500); 
        }
    },
    prev() {
        if (!this.isTransitioning) {
            this.isTransitioning = true; 
            this.nbCurrent = this.nbCurrent <= 1 ? this.nbSlide : this.nbCurrent - 1; // Transição contínua
            setTimeout(() => {
                this.isTransitioning = false; 
            }, 500); 
        }
    },
        startDrag(event) {
            this.isDragging = true; 
            this.startX = event.clientX;
            this.stop();  
            this.changeCursor("grabbing");  
        },
        endDrag() {
            if (this.isDragging) {
                this.isDragging = false; 
                this.play(); 
                this.changeCursor("grab");  
            }
        },
        drag(event) {
            if (!this.isDragging || this.isTransitioning) return;

            const diff = event.clientX - this.startX;
            if (Math.abs(diff) > 200) {
                if (diff > 0) {
                    this.prev(); 
                } else {
                    this.next(); 
                }
                this.startX = event.clientX; 
            }
        },
        changeCursor(cursorStyle) {
            const carousel = this.$refs.carousel;
            carousel.style.cursor = cursorStyle;  
        },
        stop() {
            clearInterval(this.timer);  
        },
        play() {
            this.stop();
            this.timer = setInterval(this.next, 3500);  
        },
    },
    mounted() {
        this.play();
    },
    beforeDestroy() {
        this.stop();
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
        img{
            z-index: 3;
            max-width: 100%;
        }
    }

    .carousel-left-button {
        left: 80px; // Ajuste a posição conforme necessário
        img{
            transform: rotateY(180deg)

        }
    }

    .carousel-right-button {
        right: 80px; // Ajuste a posição conforme necessário
    }
}

#carousel {
    width: 100%;
    height: 550px;
    margin: 0 auto;
    position: relative;
    overflow: hidden;
    background-color: white;
    user-select: none;
    cursor: pointer;

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
    cursor: grab;
    background-position: center;
    background-repeat: no-repeat;
    position: relative;

    &.active {
        display: flex;
    }

    &.inactive {
        display: flex;
    }

    &::before {
        content: "";
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background-color: rgba(0, 0, 0, 0.6);
    }

    .slide-content {
        z-index: 2;
        width: 300px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin: 0 auto;
        gap: 20px;
        animation: fadeIn 2s forwards;

        .slide-title {
            color: #fff;
            text-align: center;
            font-size: 40px;
        }

        .slide-button {
            padding: 10px;
            border-radius: 10px;
            border: none;
            color: #000;
            font-weight: 600;
            align-self: center;
            border: 1px solid transparent;
            cursor: pointer;
            

            &:hover {
                background-color: rgba(255, 255, 255, 0.89);
                color: #000;
                border: 1px solid #000;
                font-weight: bold;
                transform: scale(1.1);
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

@keyframes slideIn {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}
@keyframes slideOut {
    0% {
        opacity: 1;
    }
    100% {
        opacity: 0;
    }
}





@keyframes fadeIn {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}



    
</style>


