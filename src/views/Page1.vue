<template>
  <div class='content'>
    Store Type<br>
    <select v-model="userData.storeType">
      <option v-for="type in storeTypes">{{ type }}</option>
    </select><br><br>
    <div v-if="userData.storeType=='Metro'">
      Provide Details<br>
      <input v-model="userData.storeDetails" type="text">
      <br><br>
    </div>
    User Lookup<br>
    <input v-model="userData.user" type="text" list="users">
    <datalist id="users"> <!-- Not supported on Safari -->
      <option v-for="user in getUsers">{{ user }}</option>
    </datalist>
    <br><br>
    First Name<br>
    <input v-model="userData.firstName" type="text">
    <br><br>
    Last Name<br>
    <input v-model="userData.lastName" type="text">
  </div>
</template>

<script>
import store from '../store.js';

export default {
  name: 'Page1',
  data() {
    return {
      storeTypes: ['Mall', 'Metro', 'Arcade', 'Centre'],
      userData: {
        storeType: null,
        storeDetails: null,
        user: null,
        firstName: null,
        lastName: null
      }
    }
  },
  computed: {
    getUsers() {
      return store.state.users
    }
  },
  watch: {
    userData: {
      handler: function(val) {
        if (val.user) {
          this.userData.firstName = val.user.split(' ')[0]
          this.userData.lastName = val.user.split(' ')[1]
        }
        // Check if required fields populated
        if (val.storeType=='Metro') {
          store.commit('checkPage1', Boolean(val.storeType && val.storeDetails
            && val.user && val.firstName && val.lastName))
        } else {
          store.commit('checkPage1', Boolean(val.storeType && val.user &&
            val.firstName && val.lastName))
        }
      }, deep: true
    }
  },
  mounted() {
    this.userData = store.state.page1Data
  },
  beforeDestroy() {
    store.commit('storePage1Data', this.userData)
  }
}
</script>

<style scoped>

</style>
