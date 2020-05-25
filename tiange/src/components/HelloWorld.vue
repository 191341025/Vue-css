<template>
  <div class="main-div">
    <div class="title-div">这是8001端口的项目</div>
    <button @click="popUp('01')">CSS01</button>
    <button @click="popUp('02')">CSS02</button>
    <button @click="popUp('03')">CSS03</button>
    <button @click="popUp('04')">CSS04</button>
    <button @click="popUp('05')">CSS05</button>
    <button @click="popUp('06')">CSS06</button>
    <button @click="popUp('07')">CSS07</button>
    <button @click="popUp('08')">CSS08</button>
    <button @click="popUp('09')">CSS09</button>
    <button @click="popUp(10)">CSS010</button>
    <button @click="popUp(11)">CSS011</button>
    <button @click="popUp(12)">CSS012</button>
    <button @click="popUp(13)">CSS013</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {

    }
  },
  methods: {
    popUp: function (val) {

      this.$router.push({
        name: 'CSS' + val,
      })
    }
  }
}
</script>

<style scoped>
.main-div {
  position: relative;
  display: grid;
  align-items: center;
  justify-content: center;
  margin: 20px;

}
.title-div {
  font-size: 2.4rem;
  text-align: center;
  margin: 10px auto;
}


button{
  cursor: pointer;
  border-radius: 4px;
  line-height: 45px;
  font-weight: 600;
  margin-top: 10px;
}

</style>
