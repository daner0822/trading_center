<template>
<div class="commend">
  <div class="title">
     <div class="airline">
      <h1>推荐产品</h1>
      <div
        :class="{ active: currentIndex==index }"
        v-for="(item, index) in airline"
        :key="index"
        @click="changeLine(index)"
      >
        {{ item }}
      </div>
    </div>
    <div class="more_product">
      <a href="/productList">
      <span>更多超值推荐</span>
      <i class="el-icon-arrow-right"></i>
      </a>
    </div>
  </div>
  <ul >
    <li  class="product-content" v-for="item in productList" :key='item.id'>
      <div class="img_info">
        <!-- <a href=""> -->
          <img :src="item.image" alt="">
          <!-- </a> -->
      </div>
      <div class="content">
        <div class="title line-clamp2">
          {{item.routeSpeciesName}}
        </div>
        <div class="info">{{item.cruiseCompNameCn}}</div>
        <div class="detail">
          <div class="left line-clamp1">{{item.cruiseDre}}</div>
          <div class="right">￥{{item.minPrice}}起</div>
        </div>
      </div>
    </li>
  </ul>
</div>
</template>

<script>
import { getVoyageInfoList } from "@/api/voyage";
export default {
  data() {
    return {
      productList:[
      //   {
      //   id:0,
      //   image:'../../../assets/logo.png',
      //   routeSpeciesName:'，邮轮轮邮轮轮邮轮轮邮轮轮邮轮轮邮轮轮邮轮轮邮轮轮邮轮轮',
      //   cruiseCompNameCn:'长江七号',
      //   cruiseDre:'测试',
      //   minPrice:'199'
      // },
      //  {
      //   id:1,
      //   image:'',
      //   routeSpeciesName:'',
      //   cruiseCompNameCn:'',
      //   cruiseDre:'',
      //   minPrice:''
      // },
      //  {
      //   id:2,
      //   image:'',
      //   routeSpeciesName:'',
      //   cruiseCompNameCn:'',
      //   cruiseDre:'',
      //   minPrice:''
      //  },
      //  {
      //   id:3,
      //   image:'',
      //   routeSpeciesName:'',
      //   cruiseCompNameCn:'',
      //   cruiseDre:'',
      //   minPrice:''
      //  },
      //    {
      //   id:4,
      //   image:'',
      //   routeSpeciesName:'，邮轮轮邮轮轮邮轮轮邮轮轮邮轮轮邮轮轮邮轮轮邮轮轮邮轮轮',
      //   cruiseCompNameCn:'长江七号',
      //   cruiseDre:'测试',
      //   minPrice:'199'
      // },
      //  {
      //   id:5,
      //   image:'',
      //   routeSpeciesName:'',
      //   cruiseCompNameCn:'',
      //   cruiseDre:'',
      //   minPrice:''
      // },
      //  {
      //   id:6,
      //   image:'',
      //   routeSpeciesName:'',
      //   cruiseCompNameCn:'',
      //   cruiseDre:'',
      //   minPrice:''
      //  },
      //  {
      //   id:7,
      //   image:'',
      //   routeSpeciesName:'',
      //   cruiseCompNameCn:'',
      //   cruiseDre:'',
      //   minPrice:''
      //  }
      ],
      airline: ["国际航线", "国内航线"],
      currentIndex: 0,
      cruiseDre:'',//邮轮描述
      imgUrl:"",
      isAbroad:true

    };
  },
  methods:{
   getList() {
    const params={
      pageNum:1,
      pageSize:8,
      isAbroad:this.isAbroad
    }
      getVoyageInfoList(params).then(response => {
        this.productList = response.data
        if(response.data.length==0){
          this.$message.error('暂无数据')
        }
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
};
</script>

<style lang="scss" scoped>
  @import "@/assets/scss/index.scss";
.title{
  display: flex;
  justify-content: space-between;
   height: 80px;
  line-height: 80px;
}
.airline {
    display: flex;
    align-items: center;
    h1 {
      font-size: 32px;
      color: #333333;
      margin-right: 30px;
    }
    div {
      width: 100px;
      height: 50px;
      line-height: 50px;
      text-align: center;
      box-sizing: border-box;
      border-radius: 4px;
      cursor: pointer;
      font-size: 18px;
      color: #333;
      margin-right: 15px;
    }
    .active {
      background: $bg-color;
      color: #fff;
    }
  }
  .more_product {
    font-size: 14px;
    color: #333333;
    vertical-align: middle;
    cursor: pointer;
    i {
      color: #fff;
      width: 16px;
      height: 16px;
      line-height: 16px;
      border-radius: 50%;
      background: $bg-color;
    }
  }
.line-clamp2 {
  height: 40px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.line-clamp1 {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
}

ul {
  // width: 1200px;
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;
  li {
    list-style: none;
    display: inline-block;
    width: 282px;
    height: 262px;
    box-sizing: border-box;
    border: 1px solid #000;
    margin-right: 24px;
    margin-bottom: 20px;
    &:nth-child(4n) {
      margin-right: 0;
    }
    .img_info {
      height: 138px;
      line-height: 138px;
      text-align: center;
      font-size: 25px;
      font-weight: 700px;
      img{
        width: 280px;
        height: 138px;
        object-fit: fill;
      }
    }
    .content {
      padding: 10px;
      .title {
        font-size: 16px;
        color: #333333;
        text-align: left;
        line-height: 16px;
      }
    }
    .info {
      font-size: 12px;
      color: #999999;
      // margin: 10px 0;
      text-align: left;
    }
    .detail {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .left {
        width: 100px;
        height: 14px;
        font-size: 12px;
      }
      .right {
        font-size: 18px;
        color: #ba0d23;
      }
    }
  }
}
</style>
