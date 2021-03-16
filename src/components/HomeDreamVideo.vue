<template>
    <section ref="layoutDream" class="layout-DreamVideo">
        <div ref="imageContainerLeft" class="image-container-left">
            <img :src="Img1" class="img1" alt="">
        </div>
    
        <div ref="picturesLeft" class="pictures-left">
            <div class="image-container">
                <img :src="Img2" alt="">
            </div>
            <div class="image-container">
                <img :src="Img3" alt="">
            </div>
        </div>

        <div ref="dream" class="video">
            <video :src="VideoDream" autoplay muted loop></video>
            <div class="filter-dark"></div>
        </div>

        <div ref="picturesRight" class="pictures-right">
            <div  class="image-container">
                <img :src="Img4" alt="">
            </div>
            <div class="image-container">
                <img :src="Img5" alt="">
            </div>
        </div>
        <div ref="imageContainerRight" class="image-container-right">
            <img :src="Img6" alt="">
        </div>
        
    </section>
</template>

<script>
import { gsap } from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { Linear } from 'gsap'

export default {
    name: 'HomeDreamVideo',
    data() {
        return {
            VideoDream: require('@/assets/video/Pexels-Videos-2430381.mp4'),
            Img1: require('@/assets/img/sensei-minimal-y2ctC6PnB6g-unsplash-portrait.png'),
            Img2: require('@/assets/img/jonathan-smith-unsplash.jpg'),
            Img3: require('@/assets/img/geran-de-klerk-unsplash.jpg'),
            Img4: require('@/assets/img/artyom-kabajev-Wy2BfDjvJA8-unsplash.jpg'),
            Img5: require('@/assets/img/james-coleman-unsplash.jpg'),
            Img6: require('@/assets/img/das-sasha-VuBzplNNi0k-unsplash.jpg'),
            animationVideo: []
        }
    },
    methods: {
        animVideoDream(){
            const { dream, layoutDream, imageContainerLeft, picturesLeft, picturesRight, imageContainerRight } = this.$refs
            //  const { , dreamVideo,, layout } = this.$refs
            this.animationVideo = gsap.to(dream, {
                scrollTrigger:{
                    trigger: layoutDream,
                    start: 'top top',
                    end: '+=120',
                    scrub: 2,
                },
                scale: 1.7,
                width: '100%',
                ease: Linear.easeInOut,
            });
            
            gsap.to(picturesLeft, {
                scrollTrigger:{
                    trigger: layoutDream,
                    start: 'top top',
                    end: '+=110',
                    scrub: 2,
                },
                left: "-600px",
                opacity: 0,
                ease: Linear.easeInOut,
            });

            gsap.to(imageContainerLeft, {
                scrollTrigger:{
                    trigger: layoutDream,
                    start: 'top top',
                    end: '+=110',
                    scrub: 2,
                },
                left: "-900px",
                opacity: 0,
                ease: Linear.easeInOut,
            });

            gsap.to(picturesRight, {
                scrollTrigger:{
                    trigger: layoutDream,
                    start: 'top top',
                    end: '+=110',
                    scrub: 2,
                },
                right: "-600px",
                opacity: 0,
                ease: Linear.easeInOut,
            });

            gsap.to(imageContainerRight, {
                scrollTrigger:{
                    trigger: layoutDream,
                    start: 'top top',
                    end: '+=110',
                    scrub: 2,
                },
                right: "-900px",
                opacity: 0,
                ease: Linear.easeInOut,
            });

        }
    },

    mounted() {
        this.animVideoDream();
    },

}
</script>

<style lang="scss" scoped>
 
.layout-DreamVideo {
    width: 100%;
    min-height: 100vh;
    position: relative;
    margin-top: 200px;
}

.image-container img, .image-container-left img, .image-container-right img {
    object-fit: cover;
}

.image-container img {
    width: 220px;
    height: 220px;
    margin-bottom: 20px;
}

.pictures-left {
    position: absolute;
    top:50%;
    left: 300px;
    transform: translate(0, -50%);
}

.pictures-right {
    position: absolute;
    top:50%;
    right: 300px;
    transform: translate(0, -50%);
}

.image-container-left {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translate(0, -50%);
}

.image-container-left img, .image-container-right img {
    width: 260px;
    height: 300px;
}

.image-container-right {
    width: 260px;
    height: 300px;
    position: absolute;
    top: 50%;
    right: 0;
    transform: translate(0, -50%);
}

.video {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 420px;
    height: 100vh;
    
    overflow: hidden;
}

.video video {
    height: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(1.25);
}

.filter-dark{
    position: absolute;
    top: 0%;
    left: 0%;
    width: 100%;
    height: 100%;
    background-color: rgba($color: #050031, $alpha: 0.1);
}

@media screen and (min-width: 1699px) and (max-width: 3000px) { 
    .video {
        width: 620px;
    }
}

</style>>