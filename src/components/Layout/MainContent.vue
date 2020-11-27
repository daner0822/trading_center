<template>
  <div class="main-content">
    <div class="product">
      <featureProducts></featureProducts>
    </div>
    <div >
      <cruiseCalendar></cruiseCalendar>
    </div>
    <div>
      <cruiseComp></cruiseComp>
      
    </div>
  </div>
</template>

<script>
import featureProducts from "../../views/featureProducts/index";
import cruiseCalendar from "../../views/cruiseCalendar/index";
import cruiseComp from "../../views/cruiseComp/index";
import HeaderBar from "./HeaderBar";
export default {
    components: {
      featureProducts,
      HeaderBar,
      cruiseCalendar,
      cruiseComp
  },
  data(){
    return {
      input:'',
      value:''
    }
  },
}
</script>
<style lang="scss" scoped>
  @import "@/assets/scss/index.scss";
  .main-content{
   
    .product{
      // height: 560px;
      width: 1200px;
      margin: 0 auto;
    }
     

    /deep/ .el-calendar-table .el-calendar-day{
      height: 73px;
    }
  }
</style>