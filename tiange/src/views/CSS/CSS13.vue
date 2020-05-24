<template>
    <div>
      <div>REM单位的理解</div>
      <div>Hello World</div>
      <h1>Hello World</h1>
    </div>
</template>

<script>
  export default {
    name: 'CSS13'
  }
</script>

<style lang="stylus" scoped>
html
  font-size:62.5% // 主要用于根据终端的不同 对字体的缩放 解释：我们设想的值是10像素 网页默认值16像素 公式 10/16*100=625%
  //此处功能是结合 弹性布局 栅格布局 媒体选择器 来实现字体大小根据屏幕大小进行的缩放
body
  font-size 1.4rem //等同于14px
h1
  font-size 2.4rem
</style>
