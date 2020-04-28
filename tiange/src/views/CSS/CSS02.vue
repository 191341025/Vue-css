<template>
  <div>
    <a href="">I am a link</a>
    <hr/>
    <br/>
    <br/>
    <input type="text"/>
    <br/><br/>
    <input type="text" disabled/>
    <br/><br/>
    <div class="demo clearfix">
      <ul class="clearfix">
        <p>0</p>
        <li><a href="">1</a></li>
        <li><a href="">2</a></li>
        <li><a href="">3</a></li>
        <li><a href="">4</a></li>
        <li><a href="">5</a></li>
        <li><a href="">6</a></li>
        <li><a href="">7</a></li>
        <li><a href="">8</a></li>
        <li><a href="">9</a></li>
        <li><a href="">10</a></li>
      </ul>
    </div>
    <div class="demo clearfix">
      <ul class="clearfix">
        <li></li>
        <li><a href="">1</a></li>
        <li></li>
      </ul>
    </div>
  </div>
</template>

<script>
// 动态伪类选择器 它不存在于Html页面中
export default {
  name: 'CSS02'
}
</script>

<style scoped>
  /*// 动态伪类选择器一
  /*从未点击过时Link的颜色*/
  a:link {
    color: #666;
  }
  /*当连接点击过以后无交互状态下的颜色*/
  a:visited {
    color: red;
  }
  /*当鼠标滑过时的颜色*/
  a:hover {
    color: #000;
  }
  /*当鼠标左键按下且为抬起时连接的颜色*/
  a:active {
    color: green;
  }
  /*//UI元素状态伪类选择器*/
  input:enabled {
    background-color: #0f0;
  }
  input:disabled {
    background-color: red;
  }

  /*伪类选择器二
  结构伪类选择器*/
  .demo {
    border: 1px solid #ccc;
    width: 400px;
    margin: 50px auto;
    padding: 10px;
  }
  .demo li {
    float: left;
    list-style: none;
    padding: 2px;
    border: 1px solid #0f0;
    margin-right: 10px;
    width: 20px;
    height: 20px;
  }
  .clearfix {
    clear: both;
    overflow: auto;
    padding-inline-start: 15px;
  }

  .demo a{
    display: block;
    width: 20px;
    height: 20px;
    text-align: center;
    border-radius: 50%;
    background-color: #f36;
    text-decoration: none;
  }

  /*:first-child 选择某个元素的第一个子元素*/
  /*.demo li:first-child {*/
    /*background-color: green;*/
  /*}*/
  /*:last-child 选择某个元素的最后一个子元素*/
  /*.demo li:last-child {*/
    /*background-color: blue;*/
  /*}*/
  /*:nth-child() 选择某个元素的一个或多个特定子元素*/
  /*.demo li:nth-child(2n+1){*/
    /*background-color: skyblue;*/
  /*}*/
  /*odd所有奇数行*/
  /*.demo li:nth-child(odd){*/
    /*background-color: skyblue;*/
  /*}*/
  /*odd所有偶数行*/
  /*.demo li:nth-child(even){*/
    /*background-color: skyblue;*/
  /*}*/
  /*从第五个元素开始 背景色为 浅蓝色*/
  /*.demo li:nth-child(n+5){*/
    /*background-color: skyblue;*/
    /*}*/
  /*nth-last-child() 选择某个元素的一个或多个特定的子元素，从这个元素的最后一个子元素开始计算*/
  /*.demo li:nth-last-child(3){*/
    /*background-color: darkred;*/
  /*}*/
  /*:nth-of-type() 选择指定的元素*/
  /*.demo li:nth-of-type(3){*/
    /*background-color: rebeccapurple;*/
  /*}*/
  /*:nth-last-of-type() 选择指定的元素*/
  /*.demo li:nth-last-of-type(3){*/
    /*background-color: rebeccapurple;*/
  /*}*/
  /*:first-of-type 选择一个上级元素下的第一个同类子元素*/
  /*.demo li:first-of-type{*/
    /*background-color: rebeccapurple;*/
  /*}*/
  /*:last-of-type 选择一个上级元素的最后一个同类子元素*/
  /*.demo li:last-of-type{*/
    /*background-color: rebeccapurple;*/
    /*border: 3px dashed darkred;*/
  /*}*/
  /*:only-child 选择的元素是它的父元素的唯一一个子元素*/
  /*.demo li:only-child {*/
    /*background-color: darkred;*/
  /*}*/
  /*:only-of-type选择一个元素是它的上级元素的唯一一个相同类型的子元素*/
  /*.demo li:only-of-type {*/
    /*background-color: darkred;*/
  /*}*/
  /*:empty选择的元素里面没有任何内容*/
  .demo li:empty {
    background-color: red;
  }
</style>
