<template>
  <section class="section-boats-swiper">
    <div class="container mt-5">
      <h4 ref="heading4aPropos" class="heading-4-boats-swiper text-center">Nos navires</h4>
      <h2 ref="heading2aPropos" class="heading-2-a-propos text-center">Naviguez sur des bateaux légendaires</h2>
      <div class="d-flex flex-wrap">
        <div class="text-boat-swiper d-flex align-items-center mx-auto">
          <div class="ml-5">
            <!-- Tontouta / Boreal -->
            <div class="tontouta-text mb-5">
              <a class="h5" @click="showTextBoreal = !showTextBoreal, iconAnimationBoreal()">
                Tontouta - <span class="boat-brand">Boreal</span> 
                  <svg ref="iconBoreal" xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#001533" class="bi bi-arrow-down-circle mb-1 ml-2" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"/>
                  </svg>
              </a>
              <p ref="textBoreal" v-show="showTextBoreal">zef fze fzeffzef fzefzfez fzzf zfzf fze fzeffzef fzefzfez fzzf zfzf fze fzeffzef fzefzfez fzzf zfzf</p>
            </div>
            <!-- Déphéméride / Prototype -->
            <div class="dephemeride-text mt-5">
              <a class="h5" @click="showTextPrototype = !showTextPrototype, iconAnimationPrototype()">
                Déphéméride - <span class="boat-brand">Prototype</span> 
                <svg ref="iconPrototype" xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#001533" class="bi bi-arrow-down-circle mb-1 ml-2" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"/>
                </svg>
              </a>
              <p ref="textPrototype" v-show="showTextPrototype">zef fze fzeffzef fzefzfez fzzf zfzf fze fzeffzef fzefzfez fzzf zfzf fze fzeffzef fzefzfez fzzf zfzf</p>
            </div>
          </div>
        </div>
        <swiper
          :slides-per-view="2"
          :space-between="80"
          :loop="true"
          keyboard
          navigation
          :pagination="{ 
            clickable: true,
            dynamicBullets: true,
            }"
          @swiper="onSwiper"
          @slideChange="onSlideChange"
          :centeredSlides="true"
          :autoplay="{
              delay: 2500,
              disableOnInteraction: false,
          }"
          :breakpoints=" {
              100: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              
              768: {
              slidesPerView: 2,
              spaceBetween: 80,
            },
          }"
        >
          <swiper-slide><img src="../assets/img/geran-de-klerk-unsplash.jpg" alt=""></swiper-slide>
          <swiper-slide><img src="../assets\img\pawel-czerwinski-unsplash-transition.jpg" alt=""></swiper-slide>
          <swiper-slide><img src="../assets\img\artyom-kabajev-Wy2BfDjvJA8-unsplash.jpg" alt=""></swiper-slide>
          <swiper-slide><img src="../assets/img/geran-de-klerk-unsplash.jpg" alt=""></swiper-slide>
          <swiper-slide><img src="../assets\img\pawel-czerwinski-unsplash-transition.jpg" alt=""></swiper-slide>
          <swiper-slide><img src="../assets\img\artyom-kabajev-Wy2BfDjvJA8-unsplash.jpg" alt=""></swiper-slide>
          ...
        </swiper>
      </div>
    </div>
  </section>
</template>

<script>
  // import Swiper core and required components
  import SwiperCore, { Navigation, Pagination, Keyboard, A11y } from 'swiper';
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';

  // Import Swiper styles
  import 'swiper/swiper.scss';
  import 'swiper/components/navigation/navigation.scss';
  import 'swiper/components/pagination/pagination.scss';
  import 'swiper/components/scrollbar/scrollbar.scss';
  import 'swiper/components/effect-fade/effect-fade.scss';

  // install Swiper components
  SwiperCore.use([Navigation, Pagination, Keyboard, A11y]);

  import { gsap } from  "gsap";

  export default {
    name: 'BoatsSwiper',
    components: {
      Swiper,
      SwiperSlide,
    },
    data() {
      return {
        showTextBoreal: false,
        showTextPrototype: false,
      };
    },
    methods: {
      onSwiper(swiper) {
        console.log(swiper)
      },
      onSlideChange() {
        console.log('slide change')
      },

      iconAnimationBoreal(){
        const { iconBoreal, textBoreal } = this.$refs

        if(this.showTextBoreal === true) {

          gsap.to(iconBoreal, {
              rotation:"180_cw",
              duration: 0.3,
            },
           ) 

           gsap.from(textBoreal, {
             opacity: 0, 
             y: 25,
           })

        } else {
            gsap.to(iconBoreal, {
              rotation:"0_cw",
              duration: 0.3,
            }) 
         }
      },

      iconAnimationPrototype(){
        const { iconPrototype, textPrototype } = this.$refs
 
        if(this.showTextPrototype === true){
          gsap.to(iconPrototype, {
              rotation:"180_cw",
              duration: 0.3,
            }) 

           gsap.from(textPrototype, {
             opacity: 0, 
             y: 25,
           })

        } else {
            gsap.to(iconPrototype, {
              rotation:"0_cw",
              duration: 0.3,
            }) 
         }
      }

    },
  };
</script>

<style lang="scss">

.section-boats-swiper {
    padding-top: 180px;
    min-height: 100vh;
    height: auto;
    padding-bottom: 80px;
}

.heading-4-boats-swiper {
  margin-top: 100px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  color: #696969;
  font-size: 15px;
}

.swiper-container {
    width: 700px;
    height: 400px;
    padding-bottom: 120px;
    order: 1;
}

.swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;
    width: 330px;
    height: 450px;


    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
}

.swiper-slide img {
    object-fit: cover;
    width: 330px;
    height: 330px;
    margin-bottom: 90px;
    
}

.swiper-button-prev, .swiper-button-next {
    position: absolute;
    top: 50%;
    width: 10px;
    height: 10px;
    margin-top: calc(-1 * var(--swiper-navigation-size) / 2);
    border-radius: 50%;
    padding: 15px;
    background-color: rgba(255, 255, 255, 0.322);
    color: rgba(0, 21, 50, 0.9);
}

.swiper-button-prev:after, .swiper-button-next:after {
  font-size: 13px
}

.text-boat-swiper{
  width: 380px;
  order: 2;
  margin-top: 80px;
}

.text-boat-swiper a {
  color:rgba(0, 21, 50, 0.9);
  cursor: pointer;
}

.text-boat-swiper a:hover {
  text-decoration: none;
  color: rgb(133, 184, 255);
  svg {
    fill: rgb(133, 184, 255);
  }
}




//MEDIA QUERIES

// Extra small devices (portrait phones, less than 576px)
@media screen and (min-width: 100px) and (max-width: 576px) { 

  .heading-4-boats-swiper {
    margin-top: 140px;
  }

  .section-swiper-boreal {
    padding-top: 300px;
}
}

// Small devices (landscape phones, less than 769px)    
@media screen and (min-width: 577px) and (max-width: 768px) {
}



// Medium devices (tablets, less than 992px)
@media screen and (min-width: 769px) and (max-width: 991px) {
  

}

// Large devices (desktops, less than 1200px)
@media screen and (min-width: 992px) and (max-width: 1200px) { 



}

// Sumo devices (desktops, less than 1200px)
@media screen and (min-width: 1200px) and (max-width: 3000px) { 
  .swiper-container {
     order: 2;
  }

  .text-boat-swiper{
    order: 1;
    margin-top: 0px;
  }
}
</style>