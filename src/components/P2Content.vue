<template>
  <div class='content'>
    Page 2
    <!-- <keep-alive></keep-alive> Keeps data from components in local memory -->
  </div>
</template>

<script>
export default {
  name: 'P2Content',
  props: {
    content: String
  }
}
</script>

<style scoped>
  .content {
    background-color: blue;
  }
</style>
