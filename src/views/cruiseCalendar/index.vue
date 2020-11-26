<template>
  <div >
    <div class="cruise_comp_title">
          <h1>邮轮日历</h1>
       </div>
       <div class="cruise_content">
         <div class="cruise_content_right">
           <calendar></calendar>
         </div>
       </div>
  </div>
</template>

<script>
import calendar from "../../components/calendar/index";
export default {
    components: {
      calendar,
  },
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
        .cruise_content{
          max-width: 1200px;
          height: 584px;
          display: flex;
          margin: 0 auto;
          margin-bottom: 10px;
          .cruise_content_left{
            width: 290px;
            padding: 10px 20px;
            border: 1px solid #ccc;
            border-top: 5px solid $bg-color;
            margin-right: 5px;
            .cruise_content_left_title{
              text-align: left;
              margin-bottom: 5px;
              margin-top: 10px;
              font-weight: bold;
              img{
                vertical-align: middle;
              }
              span{
                font-size: 18px;
                color: #333;
                vertical-align: middle;
              }
              i{
                font-size: 16px;
                color: #999;
                vertical-align: middle;
              }
            }
            .cruise_content_left_content{
              text-align: left;
              border-bottom: 1px solid #ccc;
              padding-bottom: 10px;
              a{
                font-size: 14px;
                padding-right: 10px;
              }
            }
          }
          .cruise_content_right{
            flex: 1;
            background-color: yellow;
          }
        }
</style>