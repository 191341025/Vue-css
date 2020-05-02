<template>
  <div class="parent-div">

      <div class="diamond">

      </div>

      <div class="parallelogram">

      </div>

      <div class="taiji">

        <div class="heiyu">

        </div>
        <div class="baiyu">

        </div>
      </div>

  </div>
</template>

<script>
  /**
   * CSS06 主要内容是 通过transform 来绘制一些多边形 平行四边形 菱形 等
   */
  export default {
    name: 'CSS06'
  }
</script>

<style lang="stylus" scoped>
  s_center(a, b)
    a/2 - b/2

.parent-div
  position: relative;

//  菱形
.diamond
  position absolute
  left: 50%
  width: 50px
  height: 50px
  margin-left: -(@width / 2)
  background-color rebeccapurple
  transform rotate(45deg)
// 平行四边形
.parallelogram
  position absolute
  left 50%
  width 50px
  height 50px
  background-color firebrick
  margin-left: -(@width / 2)
  transform skew(20deg, 0deg)
  top: 100px


  /*太极阴阳鱼 如果想多利用伪元素 还能继续优化，方式有很多，主要是练习对CSS的绘图理解*/
.taiji
  position relative
  width 300px
  height:300px
  border-radius 50%
  background-color #fff6f6
  top:200px
  left: 50%
  margin-left -(@width/2)
  transform rotate(-50deg)

.taiji::before
  content: ' ';
  position: absolute;
  width: 150px;
  height: 300px;
  border-bottom-right-radius: 300px;
  border-top-right-radius: 300px;
  background-color: black;
  left: 150px;

.heiyu
  position absolute
  width 150px
  height 150px
  background-color black
  border-radius 100%
  left 75px

.heiyu::before
  content ' '
  background-color #fff6f6
  position absolute
  width 50px
  height:50px
  top: 50px;
  border-radius 50px
  left: 50px;

.baiyu
  position absolute
  width 150px
  height 150px
  background-color #fff6f6
  border-radius 100%
  left: 75px;
  top: 150px;

.baiyu::before
  content ' '
  background-color black
  position absolute
  width 50px
  height:50px
  top: 50px;
  border-radius 50px
  left: 50px;

</style>
