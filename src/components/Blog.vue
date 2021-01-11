<template>
    <TransitionAnimation></TransitionAnimation> 
    <NavBlogAndFaq></NavBlogAndFaq>
    <div class="blog-section">
        <div class="container-fluid blog-container">
            <div class="content" @mouseover="animHoverImgBlog" @mouseleave="reverseAnimHoverImgBlog">
                <h1 ref="h1Blog">Blog en construction</h1>
                <img ref="imgBlog" class="img-fluid" src="../assets/img/artyom-kabajev-Wy2BfDjvJA8-unsplash.jpg" alt="">
            </div>
        </div>
    </div>      
</template>

<script>
import TransitionAnimation from './TransitionAnimation.vue'
import NavBlogAndFaq from './NavBlogAndFaq.vue'
import { gsap,TimelineLite, Expo } from 'gsap'


export default {
    name:'Blog',
    components: {
        NavBlogAndFaq,
        TransitionAnimation,
    },
    props:['mode'],
    methods: {
        animImgBlog(){
            const { imgBlog, h1Blog } = this.$refs
            const timelineBlog = new TimelineLite()
            timelineBlog.from(imgBlog, {
                opacity: 0,
                scale: 1.1,
                y: -100, 
                ease: Expo.easeInOut,
                //Waiting For Transition Animation Complete coming from TransitionAnimation.vue
                delay: 1.2,
            })

            timelineBlog.from(h1Blog, {
                opacity: 0,
                y: 50,  
                ease: Expo.easeInOut,
            }, '-=0.2')
        },

        animHoverImgBlog() {
            const { imgBlog, h1Blog } = this.$refs
            gsap.to(imgBlog, {
                scale: 1.01,
                ease: Expo.easeInOut,
            })

            gsap.to(h1Blog, {
                y: -150,
                color: '#85b8ff',
                ease: Expo.easeInOut,
            })

        },
        reverseAnimHoverImgBlog(){
            const { imgBlog, h1Blog } = this.$refs
            gsap.to(imgBlog, {
                scale: 1,
                ease: Expo.easeInOut,
            })

            gsap.to(h1Blog, {
                y: 0,
                color: '#001532',
                ease: Expo.easeInOut,
            })

        },
    },

    mounted() {
        this.animImgBlog();
    },
}
</script>