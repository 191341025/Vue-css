<template>
<div class="main-div">
  <span class="title-span">仿田猫产品展示效果</span>
  <div class="content">
    <div class="img-content">
      <img src="../../assets/if_watermelon_2003190.png" width="200"/>
    </div>
    <div class="img-content">
      <img src="../../assets/logo.png" width="200"/>
    </div>
  </div>
</div>
</template>

<script>
  export default {
    name: 'CSS08'
  }
</script>

<style lang="stylus" scoped>
.title-span
  font-size:16px;
  font-family:Roboto-Medium,Roboto;
  font-weight:500;
  color:rgba(0,34,87,1);
  line-height:20px;
.main-div
  text-align center
.content
  margin 10px
  position relative
  border 1px dashed darkred
.img-content
  width 200px
  height:200px
  border 1px solid rgba(255,0,0,0)
  margin 50px auto
  padding 10px
  position: relative


.img-content:hover
  border 1px solid rgba(255,0,0,1)
  cursor: pointer

.img-content img:hover
  opacity 0.7
  transition all .5s

</style>
