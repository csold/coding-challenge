<template>
  <div class='content'>
    Store Type<br>
    <select v-model="storeType">
      <option v-for="type in storeTypes">{{ type }}</option>
    </select><br><br>
    <div v-if="storeType=='Metro'">
      Provide Details<br>
      <input v-model="storeDetails" type="text">
      <br><br>
    </div>
    <!-- <div v-if="{{ getUsers }}"> -->
      User Lookup<br>
      <input v-model="user" type="text" list="users">
      <datalist id="users">
        <option v-for="user in storeTypes">{{ user }}</option>
      </datalist>
    <!-- </div> -->
    {{ getUsers }}

    <!-- <span v-else="property_credentials.storeDetails=''" /> -->
    <!-- {{ property_credentials.storeType }}<br>
    {{ property_credentials.storeDetails }} -->
  </div>
</template>

<script>
import store from '../store.js';

export default {
  name: 'Page1',
  // props: {
  //   content: String
  // },
  data() {
    return {
      storeType: '',
      storeTypes: ['Mall', 'Metro', 'Arcade', 'Centre'],
      storeDetails: '',
      user: ''
    }
  },
  computed: {
    getUsers: function() {
      return store.state.users
    }
  }
}
</script>

<style scoped>
.test {
  background-color: red;
  height: 20px;
  width: 20px;
}
</style>
