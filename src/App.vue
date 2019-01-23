<!-- <template>
  <div id="app">
    <div id="nav">
      <router-link to="/Page1">Home</router-link>
      <router-link to="/Page2">About</router-link>
    </div>
    <router-view/>
  </div>
</template> -->

<template>
  <div id="app">
    <!-- <ContentFrame content="Content Placeholder">{{  }}</ContentFrame> -->
    <div class='box'>
      <router-view class='content' />
      <div class='nav-buttons'>
        <router-link class='button' to="/Page1">Back</router-link>
        <router-link class='button' to="/Page2">Next</router-link>
      </div>
    </div>
  </div>
</template>

<script>
// import ContentFrame from './components/ContentFrame.vue'
// import P1Content from './components/P1Content.vue'
// import P2Content from './components/P2Content.vue'

export default {
  name: 'app',
  // components: {
  //   P1Content,
  //   P2Content
  // },
  // data () {
  //   return {
  //     onFirstPage: true
  //   }
  // }
}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    /* font-size: 1.5em; */
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
    text-decoration: none
  }
</style>
