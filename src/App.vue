<template>
  <div :class="( mode ==='dark') ? 'dark' : 'light'">
    <router-view :mode="mode"></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mode: 'dark'
    }
  }
}
</script>


