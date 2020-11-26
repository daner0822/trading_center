<template>
  <div class="header">
    <div class="header_logo container">
      <div class="logo">
      <img src="../../assets/logo.png" alt=""/>
      </div>
        <ul class="service">
          <li>
            <img src="../../assets/price_guarantee.png" alt="">
            <p>价格保证</p> 
            </li>
          <li>
            <img src="../../assets/security.png" alt="">
            <p>安全保障</p>
          </li>
          <li>
            <img src="../../assets/Unsub_protection.png" alt="">
            <p>退订保障</p>
          </li>
          <li>
            <img src="../../assets/service.png" alt="">
            <p>24h服务</p>
            </li>
        </ul>
    </div>
    <div class="header-top">
      <div class="container nav ">
      <div class="nav_left">
        <ul>
          <li>
            <img src="../../assets/index.png" alt="">
            <router-link :to="{path:'/'}"><span> 首页 </span></router-link>
            </li>
             <li>
            <img src="../../assets/proList.png" alt="">
            <router-link :to="{path:'/productList'}"> <span> 产品列表</span></router-link>
            </li> 
            <li>
            <img src="../../assets/proBooking.png" alt="">
            <router-link :to="{path:'/register'}"><span>产品预订</span></router-link>
            </li>
        </ul>
      </div>
        <!-- 登录｜注册 -->
        <!-- <div class="nav_right">
         <login></login>
        </div> -->
      </div>
      <div>
      </div>
      <div class="banner">
      <div class="container">
         <img src="../../assets/banner.jpg" alt="">
         <div class="search">
           <div class="search-info">
             <div class="left" @click="advanceShow=!advanceShow">
             <img src="../../assets/landmark.png" alt="">
             <span >上海</span>
             <!-- <i class="el-icon-arrow-down"></i> -->
             <i :class="[advanceIcon]"></i>
             </div>
             <el-input placeholder="例如：邮轮、航线或目的地" class="search-input" v-model="input"></el-input>
             <div class="search-btn"> 
               <span>搜索</span>
             </div>
           </div>
           <div class="hot-search">
             <span class="hot-search-title">热门搜索：</span>
             <span class="hot-search-content"> 海洋光谱号、威尼斯号、日本、北欧、新西兰、盛世公主号、意大利</span>
             </div>
         </div>
        </div>
      </div>
      </div>
  </div>
</template>

<script>
import login from "../login/index";
export default {
    components: {
     login
  },
  data(){
    return {
      input:'',
      value:'',
      advanceShow:false,
      advanceIcon:"el-icon-arrow-down"
    }
  },
    watch: {
    advanceShow(newValue, oldValue) {
      if (newValue) {
        this.advanceIcon = "el-icon-arrow-up";
      } else {
        this.advanceIcon = "el-icon-arrow-down";
      }
    }
    }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/index.scss";
.header{
  background-color: #fff;
  border-bottom: 1px solid #fff;
  .header_logo{
    display: flex;
    justify-content: space-between;
    .logo{
      margin-top: 15px;
    }
    .service{
      li{
        float: left;
        img{
          display: block;
          margin-top: 10px;
          margin-left: 32px;
        }
        p{
          text-align: center;
          font-size: 14px;
          color: #666;
          margin: 5px 0;
          margin-left: 16px;
        }
      }
    }
  }
  .header-top{
  background-color: $bg-color;
  .nav{
    display: flex;
    justify-content:  space-between;
    .nav_left{
      li{
        float: left;
        width: 220px;
        text-align: left;
        line-height: 40px;
        img{
          vertical-align:middle
        }
        span{
          color: #fff;
          font-size: 16px;
          margin-left: 10px;
          vertical-align:middle
        }
      }
    }
    .nav_right{
      a{
        color: #fff;
        font-size: 16px;
        line-height: 40px;
      }
    }
  }
   .banner{
      height: 150px;
      background-color: #fff;
      // overflow: hidden;
      .container{
        display: flex;
        justify-content: space-between;
        .search{
          .search-info{
            display: flex;
            height: 46px;
            margin-top: 50px;
            // margin-left: 180px;
            .left{
              border: 1px solid $bg-color;
              width: 220px;
              border-radius: 50px 0 0 50px;
              font-size: 16px;
              color: #333;
              img{
                vertical-align: middle;
                margin-left: 30px;
              }
              span{
                vertical-align: middle;
                line-height: 46px;
                margin-left: 5px;
              }
              i{
                vertical-align: middle;
                margin-left: 5px;
              }
            }
          .search-btn{
            color: #fff;
            width: 200px;
            font-size: 18px;
            height: 46px;
            line-height: 46px;
            border-radius: 0 25px 25px 0;
            background-color: $bg-color;
            border: 1px solid $bg-color;
            span{
              padding-left: 36px;
            }
              
          }
          .search-input{
            outline:none;
              border: 1px solid $bg-color;
              border-left: none;;
          }
          }
          .hot-search{
            font-size: 14px;
            margin: 10px  0 0 60px;
            .hot-search-content{
              color: #ba0d23;
            }
          }
        }
      }
   }
  }
}
    /deep/ .el-input__inner {
      border:none !important;
      padding: 22px;
    }
</style>