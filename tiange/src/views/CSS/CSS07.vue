<template>
  <div>
    <div class="content opacity">
      <ul>
        <li>1</li>
        <li>0.8</li>
        <li>0.6</li>
        <li>0.4</li>
        <li>0.2</li>
      </ul>
    </div>
    <div class="content rgba">
      <ul>
        <li>1</li>
        <li>0.8</li>
        <li>0.6</li>
        <li>0.4</li>
        <li>0.2</li>
      </ul>
    </div>
  </div>

</template>

<script>
  export default {
    name: 'CSS07'
  }
</script>

<style lang="stylus" scoped>
.content
  margin 0 auto
  clear both

.content li
  list-style none
  float left
  padding 10px
  background-color red
  margin 3px
  width 30px
  height:30px
  text-align center
  display flex
  justify-content center
  align-items center
.opacity li:nth-child(1)
  opacity 1;
.opacity li:nth-child(2)
  opacity 0.8;
.opacity li:nth-child(3)
  opacity 0.6;
.opacity li:nth-child(4)
  opacity 0.4;
.opacity li:nth-child(5)
  opacity 0.2;

.rgba li:nth-child(1)
  background-color rgba(255,0,0,1)
.rgba li:nth-child(2)
  background-color rgba(255,0,0,.8)
.rgba li:nth-child(3)
  background-color rgba(255,0,0,.6)
.rgba li:nth-child(4)
  background-color rgba(255,0,0,0.4)
.rgba li:nth-child(5)
  background-color rgba(255,0,0,0.2)
</style>
