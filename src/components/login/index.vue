<template>
      <div class="nav_right">
        <router-link :to="{path:'/login'}" target="_blank">登录 | </router-link>
        <router-link :to="{path:'/register'}" target="_blank">注册</router-link>
      </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
   .nav_right{
      a{
        color: #fff;
        font-size: 16px;
        line-height: 40px;
      }
    }
</style>