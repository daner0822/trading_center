<template>
<div>
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
      productList:[],
      cruiseDre:'',//邮轮描述
      imgUrl:''
    };
  },
  methods:{
  getList() {
    const params={
      pageNum:1,
      pageSize:8
    }
      getVoyageInfoList(params).then(response => {
        console.log(response.data,'--');
        this.productList = response.data
      });
    },
  },
  created(){
    this.getList()
  }
};
</script>

<style lang="scss" scoped>
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
      }
    }
    .info {
      font-size: 12px;
      color: #999999;
      margin: 10px 0;
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
