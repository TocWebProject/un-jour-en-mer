<template>
    <div>
        <section class="navigation container-fluid">
          <nav id="navbar-un-jour-en-mer" class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container">
              <div class="navbar-brands">Un Jour en Mer</div>
              <button class="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbarsUJEM" aria-controls="navbarsUJEM" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarsUJEM">
                  <ul class="navbar-nav mx-auto">
                  <li ref="liHome" class="nav-item d-flex justify-content-end">
                    <router-link to="/" class="nav-link">
                      <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-left" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
                      </svg>
                      Retour à l'accueil
                    </router-link>
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
  name: 'NavBlogAndFaq',
  data() {
    return {
      
    };
  },
  methods: {

    initialMenuAnimation(){
      
      const { liHome, liBlog, liFAQ } = this.$refs
      const timelineMenu = new TimelineLite()


      timelineMenu.from(liHome, {
        duration: 0.5,
        opacity: 0,
        y: -15,
      })
      
      timelineMenu.from(liFAQ, {
        duration: 0.5,
        opacity: 0,
        y: -15,
      },"-=0.3")

      timelineMenu.from(liBlog, {
        duration: 0.5,
        opacity: 0,
        y: -15,
      },"-=0.3")


    },
  },

  mounted() {
    this.initialMenuAnimation();
  }
};
</script>