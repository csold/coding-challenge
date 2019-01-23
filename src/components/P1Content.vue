<template>
  <div class='content'>
    Page 1
    <!-- <keep-alive></keep-alive> Keeps data from components in local memory -->
  </div>
</template>

<script>
export default {
  name: 'P1Content',
  props: {
    content: String
  }
}
</script>

<style scoped>
  .content {
    background-color: red;
  }
</style>
