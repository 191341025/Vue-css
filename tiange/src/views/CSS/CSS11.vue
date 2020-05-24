<template>
  <div>
    <div class="title-div">页面加载等待动画例子2</div>
    <div class="loading-box">
      <div></div>
      <div></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'CSS11'
  }
</script>

<style lang="stylus" scoped>
  .title-div
    margin 50px auto
    width 200px
    text-align center
  .loading-box
    width 50px
    height:50px
    background-color rgba(255,0,0,0.0)
    position relative
    margin 0 auto
    display flex
    justify-content: center;
    align-items: center;
  .loading-box div
    position absolute
    border-radius 50%
    animation loading 2s infinite ease-in-out
    opacity 0
  .loading-box div:nth-child(1)
    width 100%
    height 100%
    background-color rgba(18, 129, 52, 1)
    animation-delay -1s
  .loading-box div:nth-child(2)
    width 100%
    height 100%
    background-color rgba(18, 129, 52, 1)

  @keyframes loading
    0%,100%{
      transform scale(0.1)
      opacity 0.1
    }
    50%{
      transform scale(1)
      opacity 0.5
    }
</style>
