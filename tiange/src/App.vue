<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <div class="nav-div">
      <router-link class="link-title" to="/">CSS01</router-link>
      <router-link class="link-title" to="/CSS02">CSS02</router-link>
      <router-link class="link-title" to="/CSS03">CSS03</router-link>
      <router-link class="link-title" to="/CSS04">CSS04</router-link>
      <router-link class="link-title" to="/CSS05">CSS05</router-link>
      <router-link class="link-title" to="/CSS06">CSS06</router-link>
      <router-link class="link-title" to="/CSS07">CSS07</router-link>
      <router-link class="link-title" to="/CSS08">CSS08</router-link>
      <router-link class="link-title" to="/CSS09">CSS09</router-link>
      <router-link class="link-title" to="/CSS10">CSS10</router-link>
      <router-link class="link-title" to="/CSS11">CSS11</router-link>
      <router-link class="link-title" to="/CSS12">CSS12</router-link>
      <router-link class="link-title" to="/CSS13">CSS13</router-link>
    </div>
    <div class="title-div">这是8002端口的项目</div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 44px;
}
.nav-div {
  background-color: rgba(255,11,11,0.5);
  text-align: center;
  margin-top: 10px;
  margin-bottom: 50px;
}
.link-title {
  margin: 10px 15px;
  line-height: 30px;
  border-bottom: 1px solid brown;
}
.title-div {
  font-size: 2.4rem;
  text-align: center;
  margin: 10px auto;
}
</style>
