<template>
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
import NavBlogAndFaq from './NavBlogAndFaq.vue'
import { gsap,TimelineLite, Expo } from 'gsap'


export default {
    name:'Blog',
    components: {
        NavBlogAndFaq,
    },
    methods: {
        animImgBlog(){
            const { imgBlog, h1Blog } = this.$refs
            const timelineBlog = new TimelineLite()
            timelineBlog.from(imgBlog, {
                opacity: 0,
                scale: 1.3,
                y: -100,
                
                ease: Expo.easeInOut,
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
                scale: 1.05,
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

<style scoped>
.blog-container {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center; 
    position: relative;
}

h1 {
    position: absolute;
    z-index: 10;
    top: 58%;
    transform:translateY(-40%);
    left: 50%;
    transform: translateX(-50%);
    font-weight: 500;
    color:#001532;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 47px;
    font-family: "Playfair Display";
    mix-blend-mode:multiply;
}

.img {
 z-index: -3;
}

</style>