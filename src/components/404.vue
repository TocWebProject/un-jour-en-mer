<template>  
  <TransitionAnimation></TransitionAnimation>
  <div class="background-overlay"></div>
  <div class="media">
    <div class="text-404">
      <h1><hr>Page Not Found<br>(404)<hr></h1>
      <router-link to="/" class="back-home"><button class="btn">Retour à l'accueil</button></router-link>     
    </div>
    <video playsinline autoplay muted loop id="bgVideo">
      <source :src="video404" type="video/mp4">
    </video>
  </div>
</template>

<script>
import TransitionAnimation from './TransitionAnimation.vue'

export default {
    name: 'NotFound',
    components: {
        TransitionAnimation,
    },
    props:['mode'],
    data () {
        return {
            video404: require('@/assets/video/Pexels-Videos-4513.mp4'),
        }
    },
};
</script>

<style lang="scss" scoped>
  #bgVideo {
    position: relative;
    height: 100vh;
    width: 100vw;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    object-fit: cover;
  }

  .background-overlay {
    background-color: #001532cc;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 3;
  }

  .text-404{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-family: "Playfair Display";
    color: white;
    text-transform: uppercase;
    letter-spacing: 16px;
    line-height: 1.2;
    font-size: 30px;
    text-align: center;
    z-index: 4;
  }

  .text-404 h1 {
    color: white;
    text-transform: uppercase;
    letter-spacing: 16px;
    line-height: 1.2;
    font-size: 30px;
    margin-left: 8px;
  }

  .btn {    
    font-family: Arial, Helvetica, sans-serif;
    color: white;
    border-color: white;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    font-size: 13px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    margin-top: 20px;
    padding: 10px;
    background-color: Transparent;
    background-repeat:no-repeat;
    cursor:pointer;
    overflow: hidden;
    outline:none;
    z-index: 10;
  }

  .btn:hover{
    border-color: rgb(188, 200, 253);
    color: rgb(203, 219, 255);
  }

  hr {margin: 40px;
    border-top: 1px solid white;
  }
</style>