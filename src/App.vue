<template>
  <div id="app">
    <!-- <ContentFrame content="Content Placeholder">{{  }}</ContentFrame> -->
    <div class='box'>
      <router-view class='content' />
      <div class='nav-buttons'>
        <router-link class='button' to="/">Back</router-link>
        <router-link class='button' to="/Page2">Next</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import store from './store.js';

// Get user list from API and commit to vuex store
axios.get('https://randomuser.me/api?results=50&nat=au&exc=login').then(response => {
  var users = [];
  var data = response.data.results;
  data.forEach(function(user) {
    users.push(user.name.first + ' ' + user.name.last);
  })
  store.commit('addUsers', users)
});

export default {
  name: 'app'
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
    text-decoration: none
  }
</style>
