<template>
    <div>
        <!--Transition Animation-->
        <div ref="slider1" class="slider-transition-1"></div>
        <div ref="slider2" class="slider-transition-2"></div>
    </div>   
</template>

<script>
import gsap, { TimelineLite } from 'gsap'
export default {
    name: 'TransitionAnimation',
    props: ['mode'], 
    watch: {
        mode:  function () {
            const { slider1 } = this.$refs
            gsap.to(slider1, {
                ease: "Power1.easeInOut", y: "0%", duration: 0.4, delay: 0.2
            })
            setTimeout(() => { location.reload(); }, 750 )  
        }
    },
    methods: {
        animationTransition() {
            const { slider1, slider2 } = this.$refs
            const tlTransition = new TimelineLite()

            tlTransition.to(slider2, {
                ease: "Power1.easeInOut", y: "-100%", duration: 1.2, delay: 0.3
            })
            tlTransition.to(slider1, {
                ease: "Power1.easeInOut", y: "-100%", duration: 0.9
            }, "-=0.7")
        },

    },  
    mounted() {
        this.animationTransition();
    }
}
</script>