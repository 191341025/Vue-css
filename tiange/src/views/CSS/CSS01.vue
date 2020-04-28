<template>
  <div>
    <img src="./avatarPlaceholder.png"/>
  </div>
</template>

<script>
export default {
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
