<template>
  <div>
    <div class="title-div">页面加载等待动画例子</div>
    <div class="loading-div">
      <div class="loading-item ani1">

      </div>
      <div class="loading-item ani2">

      </div>
      <div class="loading-item ani3">

      </div>
      <div class="loading-item ani4">

      </div>
      <div class="loading-item ani5">

      </div>
    </div>

  </div>

</template>

<script>
  export default {
    name: 'CSS10'
  }
</script>

<style lang="stylus" scoped>

  .title-div
    margin 50px auto
    width 200px
    text-align center
  .loading-div
    padding 5px
    position relative
    display flex
    margin 0 auto
    justify-content center
    align-items center
    height 80px
  .loading-item
    width 3px
    height:15px
    margin-left 5px
    background-color #008800
    animation loading .5s infinite
    animation-direction alternate

  .ani2
    animation-delay .1s
  .ani3
    animation-delay .2s
  .ani4
    animation-delay .3s
  .ani5
    animation-delay .4s

  @keyframes loading
    20% {
      height 15px
    }
    40% {
      height 17px
    }
    60% {
      height 15px
    }
    80% {
      height 30px
    }
    90% {
      height 35px
    }
    100% {
      height 40px
    }

</style>
