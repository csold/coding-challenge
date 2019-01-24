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
      <option v-for="type in storeTypes">{{ type }}</option>
    </datalist>
    {{ user }}

    <!-- <span v-else="property_credentials.storeDetails=''" /> -->
    <!-- {{ property_credentials.storeType }}<br>
    {{ property_credentials.storeDetails }} -->
  </div>
</template>

<script>
export default {
  name: 'Page1',
  // props: {
  //   content: String
  // },
  data() {
    return {
      storeType: '',
      storeDetails: '',
      user: '',
      storeTypes: ['Mall', 'Metro', 'Arcade', 'Centre']
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
