<template>
<div class="rect-div">简单过度例子</div>
</template>

<script>
  export default {
    name: 'CSS09'
  }
</script>

<style lang="stylus" scoped>

  .rect-div
    position relative
    margin 150px auto
    width 200px
    height:200px
    background-color #eda4ff
    cursor: pointer
    transition all .5s

  .rect-div:hover
    -webkit-transform scale(1.12) translate(20px, 20px)
    opacity 0.7


</style>
