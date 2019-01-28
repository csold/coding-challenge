<template>
  <div id="app">
    <!-- <ContentFrame content="Content Placeholder">{{  }}</ContentFrame> -->
    <div class='box'>
      <router-view class='content' />
      <div class='nav-buttons'>
        <div v-if="$route.path=='/'" class="button greyed-out">Back</div>
        <router-link v-else class='button' to="/">Back</router-link>

        <div v-if="checkPage2 && $route.path=='/Page2'" class='button'
          v-on:click="submitData">Send</div>
        <div v-else-if="$route.path=='/Page2'" class="button greyed-out">Send</div>
        <router-link v-else-if="checkPage1" class='button' to="/Page2">Next</router-link>
        <div v-else class="button greyed-out">Next</div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import store from './store.js';

export default {
  name: 'app',
  computed: {
    checkPage1() {
      return store.state.page1Populated
    },
    checkPage2() {
      return store.state.page2Populated
    }
  },
  methods: {
    submitData() {
      axios.post('https://webhook.site/70a62bfd-8b40-4048-8c38-51be74700507', {
        page1Data: store.state.page1Data,
        page1Data: store.state.page2Data
      })
    }
  },
  mounted() {
    // Get user list from API and commit to vuex store
    axios.get('https://randomuser.me/api?results=50&nat=au&exc=login').then(response => {
      var users = [];
      var data = response.data.results;
      // Capitalise names from API
      function capitalise(name) {
        return name.charAt(0).toUpperCase() + name.substring(1, name.length)
      }
      // Populate users array and add to vuex store
      data.forEach(function(user) {
        users.push(capitalise(user.name.first)+' '+capitalise(user.name.last));
      })
      store.commit('addUsers', users)
    });
  }
  // watch: {
  //
  // }
}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  .box {
    width: 300px;
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
    margin: 20px;
    text-align: center;
    display: inline;
    text-decoration: none;
    color: black;
  }
  .greyed-out {
    border: 1px solid DarkGray;
    color: DarkGray;
  }
</style>
