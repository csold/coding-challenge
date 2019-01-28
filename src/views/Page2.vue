<template>
  <div class='content'>
    Role<br>
    <select v-model="userData.userRole">
      <option v-for="role in roles">{{ role }}</option>
    </select><br><br>
    Date Joined<br>
    <input v-model="userData.joinDate" type="date" />
    <br><br>
    Located in Victoria?<br>
    <!-- <input v-model="userData.inVictoria" type="radio" /> -->
    <form>
      <input v-model="userData.inVictoria" type="radio" value=yes> YES<br>
      <input v-model="userData.inVictoria" type="radio" value=no> NO<br>
    </form>
    <div v-if="showQuestion">
      <br>
      Where in Victoria?<br>
      <input v-model="userData.location" type="text" />
    </div>
  </div>
</template>

<script>
import store from '../store.js';

export default {
  name: 'Page2',
  data() {
    return {
      roles: ['Dev', 'Manager', 'Student'],
      showQuestion: false,
      userData: {
        userRole: null,
        joinDate: null,
        inVictoria: null,
        location: null
      }
    }
  },
  watch: {
    userData: {
      handler: function(val) {
        // Get boolean from inVictoria and check if required fields populated
        if (val.inVictoria == 'yes') {
          this.showQuestion = true
          store.commit('checkPage2', Boolean(val.joinDate && val.inVictoria &&
            val.location))
        } else {
          this.showQuestion = false
          store.commit('checkPage2', Boolean(val.joinDate && val.inVictoria))
        }
      }, deep: true
    }
  },
  mounted() {
    this.userData = store.state.page2Data
  },
  beforeDestroy() {
    store.commit('storePage2Data', this.userData)
  }
}
</script>

<style scoped>
</style>
