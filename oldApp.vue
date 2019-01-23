<template>
  <div id="app">
    <!-- <ContentFrame content="Content Placeholder">{{  }}</ContentFrame> -->
    <div class='box'>
      <div class='content'>
        <P1Content v-if="onFirstPage" />
        <P2Content v-else />
      </div>
      <div class='nav-buttons'>
        <div class='button' v-on:click="onFirstPage=true">Back</div>
        <div class='button' v-on:click="onFirstPage=false">Next</div>
      </div>
    </div>
  </div>
</template>

<script>
// import ContentFrame from './components/ContentFrame.vue'
import P1Content from './components/P1Content.vue'
import P2Content from './components/P2Content.vue'

export default {
  name: 'app',
  components: {
    P1Content,
    P2Content
  },
  data () {
    return {
      onFirstPage: true
    }
  }
}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  .box {
    width: 400px;
    position: absolute;
    top: 20%;
    left: 0;
    right: 0;
    border: 1px solid black;
    margin: auto;
    padding: 40px;
  }
  .content {
    padding-bottom: 40px;
  }
  .nav-buttons {
    text-align: center;
  }
  .button {
    border-radius: 15px;
    border: 1px solid black;
    padding: 10px 40px 10px 40px;
    margin: 30px;
    width: 300px;
    text-align: center;
    display: inline;
  }
</style>
