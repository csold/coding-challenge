<template>
  <div class='box'>
    <div class='content'>{{ content }}</div>
    <div class='nav-buttons'>
      <div class='button'>Back</div>
      <div class='button'>Next</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContentFrame',
  props: {
    content: String
  }
}
</script>

<style scoped>
  .box {
    width: 400px;
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
    margin: 30px;
    width: 300px;
    text-align: center;
    display: inline;
  }
</style>
