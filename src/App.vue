<template>
  <div :class="mode">
    <router-view :mode="mode" @toggle-dark="toggleDark"></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mode: ''
    }
  },
  watch: {
    mode: function () {
      localStorage.setItem("mode", JSON.stringify(this.mode));
    }
  },
  created() {
    // Color Mode
    this.mode = JSON.parse(localStorage.getItem("mode"))
    if (this.mode === null) {
      this.mode = 'light'
    }

    // Catching Screen Size Vue Store
    window.addEventListener('resize',() => {
      this.$store.commit('setWindowWidth');
    })
  },
  methods: {
    toggleDark() {
      if (this.mode === "dark") {
        this.mode = "light"
      } else {
        this.mode = "dark"
      }  
    },  
  }
}
</script>


