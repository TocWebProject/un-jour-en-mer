<template>
  <div>
    <section class="navigation">
      <nav id="navbar-un-jour-en-mer" class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">
          <div class="navbar-brands">Un Jour en Mer</div>
          <button class="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbarsUJEM" aria-controls="navbarsUJEM" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarsUJEM">
            <ul class="navbar-nav mx-auto">
              <li ref="liHome" class="nav-item d-flex justify-content-end active">
                <router-link to="/" class="nav-link">Accueil</router-link>
              </li>
              <li ref="liApropos" class="nav-item d-flex justify-content-end">
                <a class="nav-link" href="#apropos">A Propos</a>
              </li>
              <li ref="liReservation" class="nav-item d-flex justify-content-end">
                <a class="nav-link" href="#reservation">Reservation</a>
              </li>
              <li ref="liContact" class="nav-item d-flex justify-content-end">
                <a class="nav-link" href="#contact">Contact</a>
              </li>
            </ul>
            <ul class="navbar-nav mx-auto">
              <li ref="liFAQ" class="nav-item d-flex justify-content-end">
                <router-link to="/faq" class="nav-link">FAQ</router-link>
              </li>
              <li ref="liBlog" class="nav-item d-flex justify-content-end">
                <router-link to="/blog" class="nav-link">Blog</router-link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </section>
  </div>
</template>

<script>
import { TimelineLite } from 'gsap'

export default {
  name: 'NavHome',
  data() {
    return {
      
    };
  },
  methods: {

    homeMenuAnimationAndTransition(){ 
      const { liHome, liApropos, liReservation, liContact, liBlog, liFAQ } = this.$refs
      const tlHomeMenu = new TimelineLite()

      tlHomeMenu.from(liHome, {
        duration: 0.5,
        opacity: 0,
        y: -15,
        //Waiting For Transition Animation Complete coming from TransitionAnimation.vue
        delay: 1.7,
      })

      tlHomeMenu.from(liApropos, {
        duration: 0.5,
        opacity: 0,
        y: -15,
      },"-=0.3")

      tlHomeMenu.from(liReservation, {
        duration: 0.5,
        opacity: 0,
        y: -15,
      },"-=0.3")

      tlHomeMenu.from(liContact, {
        duration: 0.5,
        opacity: 0,
        y: -15,
      },"-=0.3")

      tlHomeMenu.from(liFAQ, {
        duration: 0.5,
        opacity: 0,
        y: -15,
      },"-=0.3")
      
      tlHomeMenu.from(liBlog, {
        duration: 0.5,
        opacity: 0,
        y: -15,
      },"-=0.3")
    },
  },

  mounted() {
    this.homeMenuAnimationAndTransition();
  }
};
</script>