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
                  :title="ele.routeSpeciesName"
                >
                <span style="color:#ba0d23;font-size:12px">¥</span>
                <span style="color:#ba0d23;font-size:16px">1499</span>
                <span style="color:#999;font-size:12px"> 起</span>
                </div>

              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
        activitylist:[
        {
        id:0,
        imgUrl:'../../../assets/logo.png',
        routeSpeciesName:'yogjkjggggggggggggggg',
        cruiseCompNameCn:'长江七号',
        cruiseDre:'测试',
        minPrice:'199'
      },
       {
        id:1,
        imgUrl:'../../../assets/logo.png',
        routeSpeciesName:'yogjkjggggggggggggggg',
        cruiseCompNameCn:'长江七号',
        cruiseDre:'测试',
        minPrice:'199'
      },
      {
        id:2,
        imgUrl:'../../../assets/logo.png',
        routeSpeciesName:'yogjkjggggggggggggggg',
        cruiseCompNameCn:'长江七号',
        cruiseDre:'测试',
        minPrice:'199'
      },
      {
        id:3,
        imgUrl:'../../../assets/logo.png',
        routeSpeciesName:'yogjkjggggggggggggggg',
        cruiseCompNameCn:'长江七号',
        cruiseDre:'测试',
        minPrice:'199'
      },
        ],
    }
  }
}
</script>

<style lang="scss" scoped>
.product-list {
  .notelist-content {
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
        background-color: #fff;
        .news-content-li {
          width: 280px;
          // padding-right: 20px;
          display: flex;
          // margin-bottom: 10px;
          // padding-left: 20px;
          padding: 10px 20px ;
          .news-content-li-left {
            width: 90px;
            height:60px;
            // padding: 20px;
             border: 1px solid #ccc;

            a {
              width: 100%;
              height: 100%;
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
              margin-top: 18px;
              font-size: 12px;
              color: #666666;
              line-height: 18px;
              position: relative;
            }
            .price{
              width: 100px;
              height: 20px;
              position: absolute;
              top:50px;
              right: 0;
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
      .notelist-news-latest {
        width: 280px;
      }
    }
  }
}
</style>
