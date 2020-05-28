<template>
  <div>
    <img src="./avatarPlaceholder.png"/>
  </div>
</template>

<script>
export default {
  //我是 Master分支 快来merge我吧 第二个版本
  name: 'CSS01'
}
</script>

<style scoped>
img {
  border-radius: 50%;
  transition: all 0.4s;
  cursor: pointer;
}
img:hover {
  transform: scale(1.2);
}
</style>
