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
    User Lookup<br>
    <input v-model="user" type="text" list="users">
    <datalist id="users">
      <option v-for="user in getUsers">{{ user }}</option>
    </datalist>
    <br><br>
    First Name<br>
    <input v-model="firstName" type="text">
    <br><br>
    Last Name<br>
    <input v-model="lastName" type="text">
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
      user: '',
      firstName: '',
      lastName: ''
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
