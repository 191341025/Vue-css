<template>
  <div>
    <div class="chart-box">
      <div>hi 你好 在吗</div>
    </div>
    <br/>
    <div class="chart-box">
      <div>这是一个类似微信的聊天气泡，最初级，还有很多地方值得优化</div>
    </div>
  </div>

</template>

<script>
  /**
   * 这个章节的主题 是做一个 聊天气泡背景
   * 涉及到的 技术点 是伪元素
   */
  export default {
    name: 'CSS05'
  }
</script>

<style scoped>

  .chart-box {
      background: #6cda6c;
      padding: 10px;
      min-width: 100px;
      max-width: 150px;
      border-radius: 5px;
      margin: 0 auto;
      display: flex;
      position: relative;
      box-shadow: 0px 1px 1px 1px rgba(0,0,0,0.20);
      line-height: 30px;
      color: #fff
    }
  .chart-box::before {
    content: ' ';
    width: 2px;
    height: 2px;
    position: absolute;
    right: -9px;
    top: 10px;
    border-top: 10px solid transparent;
    border-left: 10px solid #6cda6c;
    border-right: 0px solid #00f;
    border-bottom: 10px solid transparent;
  }

</style>
