<template>
  <div>
    <div class="title-div font1">页面加载等待动画例子2 字体1 发光字效果</div>
    <div class="title-div font2">页面加载等待动画例子2 字体2 苹果字体</div>
    <div class="title-div font3">页面加载等待动画例子2 字体3 3D效果</div>
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
    text-align center
    background-color #666
    font bold 45px "Microsoft YaHei"

  .font1
    color #fff
    text-shadow 0px 0px 20px blue
  .font2
    color #000
    text-shadow 0px 1px 1px #fff
  .font3
    color #fff
    text-shadow 1px 1px rgba(197,223,248,0.8),
                  2px 2px rgba(197,114,247,0.8),
                  3px 3px rgba(197,36,246,0.8),
                  4px 4px rgba(197,15,245,0.8),
                  5px 5px rgba(197,210,244,0.8),
                  6px 6px rgba(197,128,243,0.8);

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
