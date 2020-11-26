<template>
  <div class="layout">
      <!-- 头部区域 -->
      <header-bar></header-bar>
      <!-- 主内容区域 -->
      <main-content></main-content>
  </div>
</template>

<script>
import HeaderBar from "@/components/Layout/HeaderBar"
import MainContent from "@/components/Layout/MainContent"
export default {
  components: {
    HeaderBar,
    MainContent,
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

