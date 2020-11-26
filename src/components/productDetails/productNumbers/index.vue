<template>
  <div class="container">
    <!-- 头部 -->
    <div class="header">
      <span
        >共
        <i>60</i>
        个产品</span
      >
      <div class="fromPort">出发港口: 上海<span>x</span></div>
      <div class="fromPort">邮轮航线: 三峡海岸<span>x</span></div>
      <div class="clear">全部清除</div>
    </div>
    <!-- 出发城市 -->
    <fromCity :list="cityList" :type="1">出发城市:</fromCity>
    <!-- 邮轮航线 -->
    <fromCity :list="shipLine" :type="2" :more="true">邮轮航线:</fromCity>
    <!-- 出行时间 -->
    <fromCity :list="travelTime" :type="3" :more="true">出行时间:</fromCity>
    <!-- 游轮品牌 -->
    <fromCity :list="shipLine" :type="9">邮轮品牌:</fromCity>
    <!-- 行程天数 -->
    <fromCity :list="travelDay" :type="8" :more="true">行程天数:</fromCity>
    <!-- 途经国家 -->
    <fromCity :list="aroundCountry" :type="9">途经国家:</fromCity>
    <!-- 标签 -->
    <fromCity :list="tagList" :type="8">标签:</fromCity>
  </div>
</template>

<script>
import fromCity from './fromCity/index'
export default {
  components: {
    fromCity,
  },
  data() {
    return {
      cityList: ['上海', '宜昌', '重庆', '北京', '广州'],
      shipLine: ['赫伦航线', '三峡河轮', '欧洲河轮', '亚洲河轮', '美洲河轮'],
      travelTime: [
        '2020年',
        '11月',
        '12月',
        '2021年',
        '1月',
        '2月',
        '3月',
        '4月',
        '6月',
        '11月',
        '元旦',
        '春节',
        '清明节',
        '端午节',
      ],
      travelDay: ['4-6天', '4-6天', '4-6天'],
      aroundCountry: ['亚洲', '亚洲', '亚洲'],
      tagList: ['自由行', '自由行1', '自由行2', '自由行3', '自由行4'],
    }
  },
}
</script>

<style lang="scss" scoped>
.container {
  width: 1200px;
  height: 380px;
  margin: 0 auto;
  margin-top: 20px;
  background: #fff;
  box-sizing: border-box;
  padding: 20px;
  box-shadow: 0 1px 3px rgba(0,0,0,.2);
  .header {
    display: flex;
    height: 36px;
    border-bottom: 1px solid #ccc;
    span {
      margin-right: 18px;
      i {
        color: blue;
        font-size: 20px;
        font-weight: 700px;
      }
    }
    .fromPort {
      height: 22px;
      padding: 4px;
      box-sizing: border-box;
      border: 1px solid #666666;
      font-size: 12px;
      color: #666666;
      text-align: left;
      line-height: 15px;
      padding: 4px;
      cursor: pointer;
      margin-right: 10px;
      span {
        margin-left: 10px;
        margin-right: 0;
        font-weight: 700;
        &:hover {
          color: #3971ff;
        }
      }
      &:hover {
        border: 2px solid #3971ff;
      }
    }
    .clear {
      line-height: 22px;
      font-size: 700px;
      font-size: 14px;
      cursor: pointer;
      color: #3971ff;
    }
  }
}
</style>
