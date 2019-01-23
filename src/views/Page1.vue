<template>
  <div class='content'>
    Store Type<br>
    <select v-model="property_credentials.storeType" name="storeType" >
      <option v-for="type in storeTypes" :value="type">{{ type }}</option>
    </select><br><br>
    <div v-if="property_credentials.storeType=='Metro'">
      Provide Details<br>
      <input v-model="property_credentials.storeDetails" type="text" name="storeDetails">
      <br><br>
    </div>
    User Lookup

    <!-- <span v-else="property_credentials.storeDetails=''" /> -->
    <!-- {{ property_credentials.storeType }}<br>
    {{ property_credentials.storeDetails }} -->
  </div>
</template>

<script>
export default {
  name: 'Page1',
  props: {
    content: String
  },
  data() {
    return {
      property_credentials: {
        storeType: '',
        storeDetails: ''
      },
      storeTypes: ['Mall', 'Metro', 'Arcade', 'Centre']
    }
  }
}
</script>

<style scoped>
</style>
