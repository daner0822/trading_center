<template>
        <div class="cruise_comp">
          <div class="cruise_comp_title">
          <h1>邮轮公司</h1>
            <a class="more">
          <span>查看更多</span>
          <div class="icon">
          <i class="el-icon-arrow-right"></i>
          </div>
         </a>
          </div>
        <div class="container">
         <ul class="cruise_comp_list">
          <li v-for="item in compList" :key="item.id">
             <img :src="item.image" alt="">
          </li>
        </ul>
        </div>
      </div>
</template>

<script>
import { cruiseCompInfolist } from "@/api/voyage";

export default {
  data(){
    return{
      compList:[]
    }
  },
  methods:{
   getList() {
    const params={
      pageNum:1,
      pageSize:4,
    }
      cruiseCompInfolist(params).then(response => {
        this.compList = response.data
      });
    },
    changeLine(index) {
      this.currentIndex = index;
      if(this.currentIndex==0){
        this.isAbroad=true
      }else{
        this.isAbroad=false
      }
      this.getList()
    }
  },
  created(){
    this.getList()
  }
}
</script>

<style lang="scss" scoped>
  @import "@/assets/scss/index.scss";
   .cruise_comp_title{
         display: flex;
        justify-content: space-between;
        max-width: 1200px;
        margin: 0 auto;
        margin-bottom: 10px;
          h1{
            font-size: 32px;
            color: #333;
          }
          .more{
            margin-top: 20px;
            font-size: 14px;

          }
          .icon{
            display: inline-block;
            width: 16px;
            height: 16px;
           line-height: 18px;
            background-color:$bg-color;
            border-radius: 50%;
            i{
              color: #fff;
            }
          }
        }
     .cruise_comp{
      .container{
        display: flex;
        justify-content: space-between;
        .cruise_comp_list{
          margin-bottom: 20px;
          li{
            float: left;
            img{
              float: left;
              width: 298px;
              height: 360px;
              border: 1px solid $bg-color;
            }
          }
        }
        
      }
    }
</style>