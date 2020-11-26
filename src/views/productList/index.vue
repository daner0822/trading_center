<template>
  <div class="product_list">
     <header-bar></header-bar>
    <!-- 产品信息组件 -->
    <productNumbers></productNumbers>
    <!-- 综合 销量组件 -->
    <priceInfo></priceInfo>
    <!--  底部的组件 分为两个左侧一个产品信息 和右侧产品经理推荐-->
    <!-- 分页菜单的组件 -->
  </div>
</template>

<script>
import HeaderBar from "@/components/Layout/HeaderBar"
import productNumbers from '@/components/productDetails/productNumbers/index'
import priceInfo from '@/components/productDetails/priceInfo/index'
export default {
  components: {
    HeaderBar,
    productNumbers,
    priceInfo,
  },
}
</script>

<style lang="scss" scoped>
.product_list{
  background-color: #f5f5f5;
}
</style>
