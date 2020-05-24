<template>
  <div>
    <div class="title-div">用text-overflow 解决文字排版问题</div>
    <div class="text-div">这个新君每天前10名更可领web前端电子书籍源码面试题，为面试提升自己的技术，为目标提升能力，有需要可以添加。</div>
    <div class="text-div demo1">这个新君每天前10名更可领web前端电子书籍源码面试题，为面试提升自己的技术，为目标提升能力，有需要可以添加。</div>
  </div>

</template>

<script>
  export default {
    name: 'CSS12'
  }
</script>

<style lang="stylus" scoped>
  .title-div
    margin 50px auto
    text-align center
    background-color #fff
    font bold 45px "Microsoft YaHei"
  .text-div
    margin 50px auto
    width 200px
    padding 10px
    border 1px solid #ccc
    height 50px

  .demo1
    text-overflow ellipsis //这个属性单独使用是没有效果的
    white-space nowrap //强制不换行
    overflow hidden
</style>
