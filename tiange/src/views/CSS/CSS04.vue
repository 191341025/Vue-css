<template>
  <div>
    <div class="title-div"> CSS Border-radius 效果</div>

    <div class="title-div content-div">我的四个角的radius 不一样哦</div>
    <div class="title-div semi-circle">让我们利用radius画一个半圆吧</div>
  </div>
</template>

<script>
export default {
  name: 'CSS04'
}
</script>

<style scoped>

.title-div {
  font-size: 20px;
  font-weight: bold;
  border: 1px dashed green;
  padding: 20px;
  margin: 0 20px;
  text-align: center;
  /*border-radius: 10px;*/
  box-shadow:0px 1px 15px 0px rgba(0,0,0,0.1);
}
/*.content-div {*/
  /*margin-top: 50px;*/
  /*border-top-left-radius: 10px; !*左上*!*/
  /*border-top-right-radius: 20px; !*右上*!*/
  /*border-bottom-left-radius: 30px; !*左下*!*/
  /*border-bottom-right-radius: 40px; !*右上*!*/
/*}*/

/*.content-div {*/
  /*margin-top: 50px;*/
  /*border-radius: 10px 20px 30px 40px; !*顺时针*!*/
/*}*/

/*radius 还有 x轴 与 y轴 的概念 看下面例子*/
/*100px 代表横向伸展点 150px代表纵向伸展点，可以理解为椭圆的一角 看效果*/
.content-div {
  margin-top: 50px;
  height: 300px;
  border-top-left-radius: 100px 150px;
  border-top-right-radius: 100px 150px;
}

.semi-circle {
  font-size: 12px;
  height: 100px;
  width: 50px;
  margin: 50px auto;
  border-radius: 100px 0px 0px 100px;
}
</style>
