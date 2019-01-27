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
    <datalist id="users"> <!-- Not supported on Safari -->
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
      storeType: null,
      storeTypes: ['Mall', 'Metro', 'Arcade', 'Centre'],
      storeDetails: null,
      user: null,
      firstName: null,
      lastName: null
      // change: {val: null, model: null, modelCopy: null}
    }
  },
  computed: {
    getUsers: function() {
      return store.state.users
    }
  },
  watch: {
    user: function(val, oldVal) {
      this.firstName = val.split(' ')[0]
      this.lastName = val.split(' ')[1]
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
