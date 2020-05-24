<template>
  <div>
    <div class="title-div">页面加载等待动画例子</div>
    <div class="loading-div">
      <div class="loading-item">

      </div>
      <div class="loading-item">

      </div>
      <div class="loading-item">

      </div>
      <div class="loading-item">

      </div>
      <div class="loading-item">

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

  .loading-div div:nth-child(2)
    animation-delay .2s
  .loading-div div:nth-child(3)
    animation-delay .3s
  .loading-div div:nth-child(4)
    animation-delay .4s
  .loading-div div:nth-child(5)
    animation-delay .5s


  @keyframes loading
    20%, 40%, 60% {
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
