<template>
  <div class="demo">
    这是一个伪元素的例子
  </div>
</template>

<script>
export default {
  name: 'CSS03'
}
</script>

<style scoped>

.demo {
  width: 300px;
  border: 1px dashed #f4f;
  margin: 10px auto;
  padding: 20px;
  text-align: center;
}
/*设置这段文字 第一个字的样式*/
/*.demo::first-letter{*/
  /*font-size: 40px;*/
  /*font-weight: bold;*/
  /*float: left;*/
/*}*/
/*设置这段文字第一行的样式*/
/*.demo::first-line {*/
  /*color: #0ff;*/
/*}*/

/*为这段文字加入伪元素 before*/
.demo::before {
  content: url("../../assets/if_apple_2003193.png");
  display: block;
}
/*为这段文字加入伪元素 after*/
.demo::after {
  content: url("../../assets/if_grapes_2003194.png");
  display: block;
}
/*此处应该注意 display的使用 block块级化，如果不理解 可以单独百度 display*/
</style>
