<template>
  <div class="product-list">
    <div class="notelist-content">
      <div class="notelist-news">
        <div class="notelist-news-left">
          <ul class="notelist-news-ul">
            <li class="news-content-li" v-for="(ele, index) in activitylist" :key="index">
              <div class="news-content-li-left">
                <a :href="`/note/${ele.id}`">
                  <img :src="ele.imgUrl"  />
                </a>
              </div>
              <div class="news-content-li-right">
                <div class="title clearhide">
                  <a :href="`/note/${ele.id}`" :title="ele.routeSpeciesName">{{ele.title}}</a>
                </div>
                <div
                  class="news-content-li-right-c clearhidetwo"
                >{{ele.routeSpeciesName}}</div>
                <div
                  class="news-content-li-right-c clearhidetwo"
                >
                <span>{{ele.cruiseCompNameCn}}</span>
                <span> | </span>
                <span>{{ele.cruiseDre}}</span>
                
                </div>
                 <div
                  class="news-content-li-right-c clearhidetwo"
                  :title="ele.routeSpeciesName"
                >
                <span style="margin-right:10px;color:#999">开航日期</span>
                <span>{{ele.cruiseDre}}</span>
                </div>
                <div
                  class="news-content-li-right-c clearhidetwo"
                  :title="ele.routeSpeciesName"
                >
                <span style="margin-right:10px;color:#999">途经港口</span>
                <span>{{ele.cruiseDre}}</span>
                </div>
                <div class="price">
                <span class="unit">¥</span>
                <span class="pri">1966</span>
                <span>起/人</span>
                </div>
                <div
                  class="news-content-li-right-c clearhidetwo"
                >
                <el-button plain type="primary" size="mini">成团保障</el-button>
                <el-button plain type="primary" size="mini">半自由行</el-button>
                <el-button class="detail" type="primary" >查看详情</el-button>
                </div>
              </div>
            </li>
          </ul>
          <div class="pagination">
            <!-- <el-pagination
              background
              layout="prev, pager, next"
              @current-change="handleCurrentChange"
              :current-page="params.curPage"
              :page-size="params.pageSize"
              :total="total"
            ></el-pagination> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      title: "",
      total: 0,
      activitylist:[
        {
        id:0,
        imgUrl:'../../../assets/logo.png',
        routeSpeciesName:'，邮轮轮邮轮轮邮轮轮邮轮轮邮轮轮邮轮轮邮轮轮邮轮轮邮轮轮，，邮轮轮邮轮轮邮轮轮邮轮轮邮轮轮邮轮轮邮轮轮邮轮轮邮轮轮，邮轮轮邮轮轮邮轮轮邮轮轮邮轮轮邮轮轮邮轮轮邮轮轮邮轮轮，邮轮轮邮轮轮邮轮轮邮轮轮邮轮轮邮轮轮邮轮轮邮轮轮邮轮轮',
        cruiseCompNameCn:'长江七号',
        cruiseDre:'测试',
        minPrice:'199'
      },
       {
        id:1,
        image:'',
        routeSpeciesName:'，邮轮轮邮轮轮邮轮轮邮轮轮邮轮轮邮轮轮邮轮轮邮轮轮邮轮轮，，邮轮轮邮轮轮邮轮轮邮轮轮邮轮轮邮轮轮邮轮轮邮轮轮邮轮轮，邮轮轮邮轮轮邮轮轮邮轮轮邮轮轮邮轮轮邮轮轮邮轮轮邮轮轮，邮轮轮邮轮轮邮轮轮邮轮轮邮轮轮邮轮轮邮轮轮邮轮轮邮轮轮',
        cruiseCompNameCn:'长江七号',
        cruiseDre:'测试',
        minPrice:'199'
      },
       {
        id:2,
        image:'',
        routeSpeciesName:'',
        cruiseCompNameCn:'',
        cruiseDre:'',
        minPrice:''
       },
       {
        id:3,
        image:'',
        routeSpeciesName:'',
        cruiseCompNameCn:'',
        cruiseDre:'',
        minPrice:''
       },
         {
        id:4,
        image:'',
        routeSpeciesName:'，邮轮轮邮轮轮邮轮轮邮轮轮邮轮轮邮轮轮邮轮轮邮轮轮邮轮轮邮轮轮邮轮轮邮轮轮邮轮轮邮轮轮邮轮轮邮轮轮邮轮轮邮轮轮邮轮轮邮轮轮邮轮轮邮轮轮邮轮轮邮轮轮邮轮轮邮轮轮邮轮轮邮轮轮邮轮轮邮轮轮邮轮轮邮轮轮邮轮轮邮轮轮邮轮轮邮轮轮邮轮轮邮轮轮邮轮轮邮轮轮邮轮轮邮轮轮邮轮轮邮轮轮邮轮轮',
        cruiseCompNameCn:'长江七号',
        cruiseDre:'测试',
        minPrice:'199'
      },
       {
        id:5,
        image:'',
        routeSpeciesName:'',
        cruiseCompNameCn:'',
        cruiseDre:'',
        minPrice:''
      },
       {
        id:6,
        image:'',
        routeSpeciesName:'',
        cruiseCompNameCn:'',
        cruiseDre:'',
        minPrice:''
       },
       {
        id:7,
        image:'',
        routeSpeciesName:'',
        cruiseCompNameCn:'',
        cruiseDre:'',
        minPrice:''
       }
      ],
    };
    }
}
</script>

<style lang="scss" scoped>
.product-list {
  min-width: 1200px;
  .notelist-content {
    width: 1200px;
    margin: 0 auto;
    // padding: 20px 0 120px;
    .notelist-title {
      font-size: 12px;
      color: #999999;
      text-align: left;
      line-height: 12px;
    }
    .notelist-news {
      display: flex;
      justify-content: space-between;
      .notelist-news-left {
        // width: 880px;
        .news-content-li {
        background-color: #fff;
          width: 880px;
          padding: 20px 0;
          // margin: 20px 0;
          display: flex;
          // justify-content: space-between;
          border-bottom: 1px solid #dddddd;
          .news-content-li-left {
            width: 200px;
            height: 160px;
            padding-left: 20px;
            a {
              width: 100%;
              height: 100%;
              border: 1px solid #ccc;
              display: flex;
              justify-content: center;
              align-items: center;
              img {
                align-items: center;
                max-width: 100%;
                max-height: 100%;
              }
            }
          }
          .news-content-li-right {
            flex: 1;
            position: relative;
            width: 500px;
            padding-left: 20px;
            .title {
              margin-top: -15px;
              font-size: 18px;
              color: #333333;
              line-height: 26px;
              font-weight: 700;
              a {
                color: #333333;
              }
            }
            .title:hover {
              a {
                color: #066eb7;
              }
            }
            .news-content-li-right-c {
              width: 580px;
              margin-top: 15px;
              font-size: 12px;
              color: #666666;
              line-height: 18px;
              position: relative;
              padding: 0 10px;
            }
            .price{
              width: 100px;
              height: 20px;
              position: absolute;
              top:50px;
              right: 10px;
              .unit{
                font-size: 14px;
                color: #ba0d23;
              }
              .pri{
                color: #ba0d23;
                font-size: 28px;
              }
            }
            .detail{
              position: absolute;
              bottom: 60px;
              right: 0;
            }
            .sign {
              position: absolute;
              left: 10px;
              bottom: 0;
              width: 660px;
              display: flex;
              padding: 8px 0;
              color: #999999;
              .time {
                display: flex;
                margin-right: 50px;
                line-height: 14px;
                font-size: 12px;
                .el-icon-time,
                .el-icon-price-tag,
                .el-icon-view {
                  font-size: 14px;
                  margin-right: 6px;
                }
              }
            }
          }
        }
      }
      .pagination {
        margin-top: 40px;
        text-align: center;
      }
      .notelist-news-latest {
        width: 280px;
      }
    }
  }
}
.latestnews {
  width: 280px;
  .latestnews-title {
    font-size: 14px;
    color: #333333;
    text-align: left;
    line-height: 16px;
    font-weight: 700;
  }
  .latestnews-content {
    margin-top: 10px;
    border-top: 1px solid #dddddd;
    .latestnews-content-li {
      display: flex;
      margin-top: 10px;
      justify-content: space-between;
      line-height: 20px;
      .number {
        width: 20px;
        height: 20px;
        color: #ffffff;
        background: #ff0100;
        text-align: center;
      }
      a {
        width: 250px;
        font-size: 12px;
        color: #666666;
        text-align: left;
      }
    }
    .latestnews-content-li:hover {
      a {
        color: #066eb7;
      }
    }
  }
}
</style>
