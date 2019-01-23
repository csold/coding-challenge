<template>
  <div id="app">
    <ContentFrame content="Content Placeholder"/>
    <!-- <keep-alive></keep-alive> Keeps data from components in local memory -->
  </div>
</template>

<script>
import ContentFrame from './components/ContentFrame.vue'

export default {
  name: 'app',
  components: {
    ContentFrame
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
