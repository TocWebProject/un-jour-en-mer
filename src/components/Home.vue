<template>
  <div>
    <TransitionAnimation></TransitionAnimation>
    <NavHome></NavHome>
    <section class="first-section" id="home">
      <div class="container pt-1">
        <div class="visuals">
          <div class="image-container-sail">
            <img ref="imgSail" class="img-sail" src="../assets/img/christopher-burns-1nmK1mDC0x8-unsplash.jpg" alt="">
          </div>
          <div class="image-container-sea">
            <img ref="imgSea" class="img-sea" src="../assets/img/artiom-vallat-hb11GxbubPA-unsplash.jpg" alt="">
          </div>
        </div>
        <div ref="infoFirstSection" class="info-first-section">
          <h1 ref="heading1" class="heading-1">Un Jour en Mer</h1>
          <p ref="paragraphHome" class="paragraph">
            Venez prendre l'air sur nos navires<br>
            Vivez une excursion inoubliable<br> en Bretagne et à la voile.
          </p>
          <a type="button" href="#apropos">
            <svg ref="btnRoundAnimated" class="btnRoundAnimated" @mouseenter="animBtn()" @mouseleave="reverseAnimBtn()" xmlns="http://www.w3.org/2000/svg" width="220" height="60" viewBox="0 0 220 60">
              <rect x="0" y="0" width="60" height="60" rx="30" ry="30" fill="#85b8ff" style="opacity: 0.4;" /> 
              <text ref="textBtnRoundAnimated" transform="translate(80 38)" text-anchor="middle" font-size="20" fill="#000">Embarquer</text>
            </svg>
          </a>
        </div>
        <div class="call-to-scroll">
          <img ref="callToScroll" src="../assets/img/scroll-down.gif" alt="">
        </div>
        <span ref="callToScrollText" class="call-to-scroll-text">SCROLL</span>
      </div>
    </section>
    <section class="second-section pt-1" id="apropos">
      <div class="container mt-5">
        <h4 ref="heading4aPropos" class="heading-4-a-propos text-center">A Propos</h4>
        <h2 ref="heading2aPropos" class="heading-2-a-propos text-center">Prenez le large en toute confiance</h2>
        <div class="container">
          <div class="row info-a-propos">
            <div class="col">
              <div class="a-propos-visual mx-auto">
                <picture>
                  <source media="(max-width: 991px)" srcset="../assets/img/sensei-minimal-y2ctC6PnB6g-unsplash-portrait.png">
                  <source media="(min-width: 992px)" srcset="../assets/img/sensei-minimal-y2ctC6PnB6g-unsplash.jpg">
                  <img ref="aProposVisual" id="apropos" src="../assets/img/sensei-minimal-y2ctC6PnB6g-unsplash.jpg" class="img-boat" alt="">
                </picture> 
              </div>
            </div>
            <div class="col d-flex align-items-center">
              <div ref="infoApropos" class="info-a-propos_text">
                  <h3 class="heading-3-a-propos">
                    Nos incroyables skippers
                  </h3>
                  <p class="paragraph">
                    Victor et Melen, nos deux skippers diplômés ont navigués sur toutes les mers du globe. Eum labore
                    tempora eveniet adipisci sunt harum, eos nobis asperiores cumque
                    veniam fuga fugit eius ab reiciendis. Lorem ipsum dolor  Eum labore
                    tempora eveniet adipisci sunt harum, eos nobis asperiores cumque
                  </p>
              </div>
            </div>
          </div>
        </div>
      </div> 
    </section>
    <BoatsSwiper></BoatsSwiper>
    <VosEnvies></VosEnvies>
    <Reservation id="reservation"></Reservation>
    <section ref="sectionContactTrigger" class="section-contact pt-1" id="contact">
      <div class="container">
        <h4 ref="heading4reservation" class="heading-4-contact text-center">Contact</h4>
        <h3 ref="heading2reservation" class="heading-3-contact text-center">Un renseignement ?<br>Melen et Victor vous répondent</h3>
        <div class="row mb-4">
          <div class="col-md-12 mt-5 text-center">
            <div class="image-container-contact">
              <img ref="imgContact" class="img-contact-melen" src="../assets/img/museums-victoria-HLvV5_BLs_k-unsplash-melen.png" alt="">
            </div>
          </div>
        </div>
        <div class="row row-info-contact">
          <div class="col-lg-4 text-center">
            <p ref="contactInfoCity">
            <svg width="1.8em" height="1.8em" style="margin-bottom: 5px" viewBox="0 0 16 16" class="bi bi-geo-alt-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
            </svg>
            Paimpol
            </p>
          </div>
          <div class="col-lg-4 text-center">
            <p ref="contactInfoPhone">
            <svg width="1.8em" height="1.8em" viewBox="0 0 16 16" class="bi bi-telephone-forward" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511zm10.762.135a.5.5 0 0 1 .708 0l2.5 2.5a.5.5 0 0 1 0 .708l-2.5 2.5a.5.5 0 0 1-.708-.708L14.293 4H9.5a.5.5 0 0 1 0-1h4.793l-1.647-1.646a.5.5 0 0 1 0-.708z"/>
            </svg>
            +33 6 36 28 10 19
            </p>
          </div>
          <div class="col-lg-4 text-center">
            <p ref="contactInfoMail" class="contact-info-mail">
            <svg width="1.8em" height="1.8em" viewBox="0 0 16 16" class="bi bi-envelope" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383l-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z"/>
            </svg>
              <a href="mailto:contact@unjourenmer.fr">contact@unjourenmer.fr</a> 
            </p>
          </div>
        </div>
        <div class="row">
          <div class="col-12 text-center">
            <p class="social"><a href="#">Facebook</a> - <a href="#">Instagram</a></p>
          </div>
        </div>
      </div>
    </section>
    <!--Waves Container-->
    <div>
      <svg class="waves" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
      <defs>
        <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
      </defs>
      <g class="parallax">
        <use xlink:href="#gentle-wave" x="48" y="0" fill="rgba(0, 21, 60, 0.2)" />
        <use xlink:href="#gentle-wave" x="48" y="3" fill="rgba(0, 21, 65, 0.4)" />
        <use xlink:href="#gentle-wave" x="48" y="5" fill="rgba(0, 21, 70, 0.6)" />
        <use xlink:href="#gentle-wave" x="48" y="7" fill="rgba(0, 21, 50, 0.8)" />
      </g>
      </svg>
    </div>
  </div>
</template>

<script>
import NavHome from "./NavHome.vue"
import Reservation from './Reservation.vue' 
import VosEnvies from './VosEnvies.vue'
import BoatsSwiper from './BoatsSwiper.vue'
import TransitionAnimation from './TransitionAnimation.vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { TimelineLite, Elastic, Linear } from 'gsap'

export default {
  name: 'Home',
  components: {
    NavHome,
    Reservation,
    VosEnvies,
    BoatsSwiper,
    TransitionAnimation,
  },
  data() {
    return {
      
    };
  },
  methods:{

    initialHomeAnimation(){
      const { infoFirstSection, imgSail, imgSea, callToScroll, callToScrollText } = this.$refs
      const timelineHome = new TimelineLite()

      timelineHome.from(infoFirstSection, {
        duration: 0.7,
        opacity: 0,
        x: -30,
        //Waiting For Transition Animation Complete coming from TransitionAnimation.vue
        delay: 1.2,
      })

      timelineHome.from(imgSail, {
        duration: 0.8,
        opacity: 0,
        y: 40,
      },"-=0.3")

      timelineHome.from(imgSea, {
        duration: 0.8,
        opacity: 0,
        y: 40,
      },"-=0.5")

      timelineHome.from(callToScroll, {
        duration: 1,
        opacity: 0,
      },"+=1.2")

      timelineHome.from(callToScrollText, {
        duration: 1,
        opacity: 0,
      },"+=0.1")

    },

    initScrollAnimation(){
      const {  imgSail, imgSea, heading1, callToScroll, callToScrollText, heading2aPropos, heading4aPropos, aProposVisual, infoApropos, heading2reservation, heading4reservation, contactInfoMail, contactInfoPhone, contactInfoCity, imgContact } = this.$refs
      // HOME
      gsap.to(imgSail, {
        scrollTrigger:{
          trigger: imgSail,
          scrub: 1,
          start: '70% 60%',
        },
        duration: 1.1,
        scale: 1.4,
       
      })

      gsap.to(imgSea, {
        scrollTrigger:{
          trigger: imgSail,
          scrub: 1,
          start: '70% 60%',
        },
        duration: 1.1,
        scale: 1.4,
      
      })

      gsap.to(heading1, {
        scrollTrigger:{
          trigger: heading1,
          scrub: 1,
          start: '150% center',
        },
        duration: 1.5,
        scale: 1.05,
        color: '#fff',
      })

      gsap.to(callToScroll, {
        scrollTrigger:{
          trigger: callToScroll,
          start: 'top 80%',
          toggleClass: 'active',
          toggleActions: "restart resume reverse reverse"
        },
        y: 60,
        width: 0,
      })

      gsap.to(callToScrollText, {
        scrollTrigger:{
          trigger: callToScrollText,
          start: 'top 79%',
          toggleClass: 'active',
          toggleActions: "restart resume reverse reverse"
        },
        scale: 0,
        })

      // A PROPOS
      gsap.from(heading2aPropos, {
        scrollTrigger: {
          trigger: heading2aPropos,
          scrub: 1,
          toggleClass: 'active',
          start: 'top 95%'
        },
        duration: 1.5,
        y: -40,
        opacity: 0,
      })

      gsap.from(heading4aPropos, {
        scrollTrigger: {
          trigger: heading4aPropos,
          scrub: 1,
          toggleClass: 'active',
          start: 'top 95%'
        },
        duration: 1.5,
        y: -40,
        opacity: 0,
      })

      gsap.from(aProposVisual, {
        scrollTrigger: {
          trigger: aProposVisual,
          scrub: 1,
          toggleClass: 'active',
          start: '-60% bottom'
        },
        duration: 1.5,
        height: 0,
        scale: 1.5,
        opacity: 0,
      })

      gsap.to(infoApropos, {
        scrollTrigger:{
          trigger: infoApropos,
          scrub: true,
          start: '160% center',
        },
        duration: 1.5,
        scale: 0.95,
        color: '#fff',
      })

      // Contact
      gsap.from(heading2reservation, {
        scrollTrigger: {
          trigger: heading2reservation,
          scrub: 1,
          toggleClass: 'active',
          start: 'top 95%',
        },
        duration: 1.5,
        y: -40,
        opacity: 0,
      })

      gsap.from(heading4reservation, {
        scrollTrigger: {
          trigger: heading4reservation,
          scrub: 1,
          toggleClass: 'active',
          start: 'top 95%',
        },
        duration: 1.5,
        y: -40,
        opacity: 0,
      })

      gsap.from(imgContact, {
        scrollTrigger:{
          trigger: imgContact,
          scrub: 1,
          end: 'bottom 55%',
          toggleClass: 'active',
          toggleActions: "restart resume reverse reverse"
        },
        duration: 1.5,
        opacity: 0,
        scale: 1.7, 
      })

      gsap.from(contactInfoCity, {
        scrollTrigger:{
          trigger: contactInfoCity,
          scrub: 1,
          end: 'bottom 75%',
          toggleClass: 'active',
          
        },
        duration: 0.5,
        opacity: 0,
        y: 45,
      })

      gsap.from(contactInfoPhone, {
        scrollTrigger:{
          trigger: contactInfoPhone,
          scrub: 1,
          end: 'bottom 75%',
          toggleClass: 'active',
          
        },
        duration: 0.5,
        opacity: 0,
        y: 65,
      })

      gsap.from(contactInfoMail, {
        scrollTrigger:{
          trigger: contactInfoMail,
          scrub: 1,
          end: 'bottom 80%',
          toggleClass: 'active',
          
        },
        duration: 0.5,
        opacity: 0,
        y: 85,
      })
      
    },

    // BTN ANIMATION
    animBtn() {
      const { btnRoundAnimated, textBtnRoundAnimated } = this.$refs

      gsap.to(btnRoundAnimated.children[0], 0.4, {
          attr:{width:160, 
          fill:"#001532"}, 
          autoAlpha: 0.8, 
          ease: Elastic.easeOut.config(1, 1),
        })

      gsap.to(textBtnRoundAnimated, 0.2, {
        fill:"#fff",
        ease: Linear.easeNone,
      }, 0);
    },

    reverseAnimBtn() {
      const { btnRoundAnimated, textBtnRoundAnimated } = this.$refs

      gsap.to(btnRoundAnimated.children[0], 0.4, {
          attr:{width:60, 
          fill:"#85b8ff"}, 
          
          opacity: 0.4,
          ease: Elastic.easeOut.config(1, 1),
        })

      gsap.to(textBtnRoundAnimated, 0.2, {
        fill:"#000",
        ease: Linear.easeNone,
      }, 0);
    }
  },

  mounted() {
    // document.onreadystatechange = () => {
        // if (document.readyState == "complete") {   
        this.initialHomeAnimation();
        this.initScrollAnimation();     
    //   }
    // }
  }
};
</script>
