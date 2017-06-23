<template>
<div id="app">
  <Main />
</div>
</template>

<script>
import Main from './view/main.vue'
export default {
  name: 'app',
  components: {
    Main

  }
}
</script>

<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    height: 100%;
}
</style>
