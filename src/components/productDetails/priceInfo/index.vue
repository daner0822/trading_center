<template>
  <div class="container">
    <!-- 头部 -->
    <headerInfo />
    <!-- 主体部分 -->
    <div class="mainContent">
      <div class="left">
        <leftArea />
      </div>
      <div class="right">
        <rightArea />
      </div>
      <!-- <leftArea />
      <rightArea /> -->
    </div>
  </div>
</template>

<script>
import headerInfo from './headerInfo/index'
import leftArea from './mainContent/leftArea/index'
import rightArea from './mainContent/rightArea/index'
export default {
  components: {
    headerInfo,
    leftArea,
    rightArea,
  },
}
</script>

<style lang="scss" scoped>
.container {
  width: 1200px;
  margin: 0 auto;
  margin-top: 15px;
  box-sizing: border-box;
}
.mainContent {
  display: flex;
  .left {
  flex: 1;
    margin-right: 10px;
    overflow: hidden;
  }
  .right {
    width: 280px;
    height: 300px;
  }
}
</style>
