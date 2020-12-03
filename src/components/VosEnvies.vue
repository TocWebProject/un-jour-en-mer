<template>
  <div class="vos-envies">
    <section class="vos-envies-section pt-1">
      <div class="container container-vos-envies">
        <h2 ref="heading2VosEnvies" class="heading-2-vos-envies text-center">Nous nous adaptons à vos envies</h2>
        <div class="navigation-wrapper">
          <div class="project-preview-wrapper">
            <div ref="projectPreview1" class="project-preview-1"></div>
            <div ref="projectPreview2" class="project-preview-2"></div>
            <div ref="projectPreview3" class="project-preview-3"></div>
          </div>
          <ul class="navigation-list">
            <li ref="navigationItem" class="navigation-item">
              <a class="navigation-link navigation-link-1" @mouseover="animProjectPreview1()" @mouseleave="reverseAnimProjectPreview1()">
                <span data-text="Découverte">Découverte</span>
              </a>
            </li>
            <li ref="navigationItem" class="navigation-item">
              <a class="navigation-link navigation-link-2" @mouseover="animProjectPreview2()" @mouseleave="reverseAnimProjectPreview2()">
                <span data-text="Sport">Sport</span>
              </a>
            </li>
            <li ref="navigationItem" class="navigation-item">
              <a class="navigation-link navigation-link-3" @mouseover="animProjectPreview3()" @mouseleave="reverseAnimProjectPreview3()">
                <span data-text="Balade">Balade</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { gsap, Expo } from 'gsap'

export default {
  name: 'VosEnvies',
  methods: {

    //TITLE SCROLLTRIGGER
    animTitleVosEnvie(){
      const { heading2VosEnvies } = this.$refs

      gsap.from(heading2VosEnvies, {
        scrollTrigger: {
          trigger: heading2VosEnvies,
          scrub: 1,
          toggleClass: 'active',
          start: 'top 95%',
        },
        duration: 1.5,
        y: -100,
        opacity: 0,
      })
    },

    // ANIM DECOUVERTE 
    animProjectPreview1(){
      const { projectPreview1 } = this.$refs
      gsap.to(projectPreview1,  {
        width: 450,
        ease: Expo.easeInOut, 
        opacity: 1,
      });
    },
    reverseAnimProjectPreview1(){
      const { projectPreview1 } = this.$refs
      gsap.to(projectPreview1, {
        width: 0,
        ease: Expo.easeInOut,
        opacity: 0,
      });
      // projectPreview1.style.width = "0px";
    },

    //ANIM SPORT
    animProjectPreview2(){
      const { projectPreview2 } = this.$refs
      gsap.to(projectPreview2, {
        width: 450,
        ease: Expo.easeInOut, 
        opacity: 1,
      });
    },
    reverseAnimProjectPreview2(){
      const { projectPreview2 } = this.$refs
      gsap.to(projectPreview2, {
        width: 0,
        ease: Expo.easeInOut,
        opacity: 0,
      });
    },

    //ANIM BALADE
    animProjectPreview3(){
      const { projectPreview3 } = this.$refs
      gsap.to(projectPreview3,  {
        width: 450,
        ease: Expo.easeInOut, 
        opacity: 1,
      });
    },
    reverseAnimProjectPreview3(){
      const { projectPreview3 } = this.$refs
      gsap.to(projectPreview3, {
        width: 0,
        ease: Expo.easeInOut,
        opacity: 0,
      });
    },
  },

  mounted() {
    this.animTitleVosEnvie();
  }
    
}
</script>