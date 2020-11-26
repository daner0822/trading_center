<template>
  <div class="layout">
      <!-- 头部区域 -->
      <header-bar></header-bar>
      <!-- 主内容区域 -->
      <main-content></main-content>
    <!-- <productList /> -->

  </div>
</template>

<script>
import HeaderBar from "@/components/Layout/HeaderBar"
import MainContent from "@/components/Layout/MainContent"
import productList from '@/views/productList/index'

export default {
  components: {
    HeaderBar,
    MainContent,
    productList
  },
  data(){
    return {
     
    }
  },
  methods: {
  }
}
</script>
<style lang="scss">
.layout{
  background: #f5f5f5;
}
</style>

