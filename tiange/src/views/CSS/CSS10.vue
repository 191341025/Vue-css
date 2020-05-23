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
    width 5px
    height:15px
    margin-left 5px
    background-color #008800
    animation loading 0.5s infinite
    animation-direction alternate
  .ani2
    animation-delay 0.1s
  .ani3
    animation-delay 0.2s
  .ani4
    animation-delay 0.3s
  .ani5
    animation-delay 0.4s

  @keyframes loading
    20% {
      height 15px
    }
    40% {
      height 18px
    }
    60% {
      height 21px
    }
    80% {
      height 24px
    }
    100% {
      height 27px
    }

</style>
