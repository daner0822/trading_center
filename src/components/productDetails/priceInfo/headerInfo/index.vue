<template>
  <div class="header">
    <div class="left">
      <div
        :class="{ sort_info: true, active: currentIndex == index }"
        v-for="(item, index) in list"
        :key="index"
      >
        {{ item.name }}
        <span :class="item.icon"></span>
      </div>
      <div class="price_range">
        <div>价格区间</div>
        <el-input></el-input>
        <span style="margin-right:10px">-</span>
        <el-input></el-input>
      </div>
    </div>
    <div class="right">
      <span class="el-icon-arrow-left"></span>
      <span class="number"><i>4</i>/10</span>
      <span class="el-icon-arrow-right"></span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          name: '综合',
          icon: 'el-icon-caret-bottom',
        },
        {
          name: '销量',
          icon: 'el-icon-caret-bottom',
        },
        {
          name: '满意度',
          icon: 'el-icon-caret-bottom',
        },
        {
          name: '出发日期',
          icon: 'el-icon-d-caret',
        },
        {
          name: '价格',
          icon: 'el-icon-d-caret',
        },
      ],
      currentIndex: 0,
    }
  },
}
</script>

<style lang="scss" scoped>
.header {
  height: 44px;
  line-height: 44px;
  position: relative;
  background-color: #fff;
  margin-bottom: 20px;
  .left {
    display: flex;
    align-items: center;
    .sort_info {
      width: 120px;
      border: 1px solid #ccc;
      margin-right: -1px;
      text-align: center;
      cursor: pointer;
    }
    .active {
      color: #3971ff;
    }
    .price_range {
      width: 270px;
      border: 1px solid #ccc;
      margin-right: -1px;
      display: flex;
      justify-content: center;
      div {
        width: 48px;
        margin-right: 10px;
      }
    }
  }

  .price_range >>> .el-input__inner {
    height: 24px;
  }
  .right {
    position: absolute;
    top: 0;
    right: 0;
    width: 120px;
    text-align: right;
    padding-right: 10px;
    font-size: 18px;
    i {
      color: #3971ff;
      font-size: 20px;
      font-weight: 700;
    }
    .el-icon-arrow-left,
    .el-icon-arrow-right {
      cursor: pointer;
    }
    .number {
      margin: 0 10px;
    }
  }
}
</style>
