<template>
  <div>
    <el-calendar v-model="dateValue" id="calendar" >
            <template
        slot="dateCell"
        slot-scope="{date, data}">
        <!--自定义内容-->
        <div class="calendar-day">{{ data.day.split('-').slice(2).join('-') }}</div>

        <el-popover v-if="calendarData[data.day.split('-').slice(2).join('-')] &&
            calendarData[data.day.split('-').slice(2).join('-')][0].startDate.split('-')[1] == data.day.split('-')[1]"
                    placement="bottom"
                    :title="data.day+'产品列表'"
                    width="500"
                    trigger="hover">
          <el-table :data="calendarData[data.day.split('-').slice(2).join('-')]">
            <el-table-column width="150" property="startDate" label="日期"></el-table-column>
            <el-table-column width="200" property="name" label="产品名称">
              <template slot-scope="scope">
                <a @click="handleDetail(scope.row)" style="color:#1890ff;">{{scope.row.name}}</a>
              </template>
            </el-table-column>
            <el-table-column width="300" property="detail" label="航线"></el-table-column>
          </el-table>
           <div v-for="(item) in calendarData[data.day.split('-').slice(2).join('-')]" :key="item.id" slot="reference">
          <div
            v-if="
              (item.startDate.split('-')[0]).indexOf(data.day.split('-')[0])!=-1 &&
              (item.startDate.split('-')[1]).indexOf(data.day.split('-').slice(1)[0])!=-1 &&
              (item.startDate.split('-')[2]).indexOf(data.day.split('-').slice(2).join('-'))!=-1">
            <div class="voyageInfo clearhide">
              <p style="color:#333;font-size:12px;" class="clearhide">{{item.name}}</p>
              <p style="color:#666;font-size:12px" class="clearhide">{{item.detail}}</p>
            </div>
            <div>
            <span>全部</span>
            <i class="el-icon-arrow-up"></i>
            <span style="float:right;color:#ba0d23">¥599起</span>
          </div>
          </div>
        </div>
        </el-popover>
      </template>
    </el-calendar>

  </div>
</template>

<script>
import {getCalenderList} from '@/api/voyage'
export default {
    data(){
        return{
          // loading:true,
         cruiseValue: "0",
        calendarData: [],
        dateValue: new Date(),
        dateQueryParams: {
          year: null,
          month: null,
          cruiseId: null
        },
        cruiseData: [],
        // 是否显示弹出层
        open: false,
        form: {},
        companyList: [],
        dateChange: true,
      }
    },
      created() {
      this.getList();
    },
    watch: {
      dateValue(newVal, oldVal) {
        let newYear = newVal.getFullYear(),
          oldYear = oldVal.getFullYear(),
          newMonth = newVal.getMonth(),
          oldMonth = oldVal.getMonth();
        //监听日历日期点击，同年同月点击事件不请求
        if (newYear != oldYear || newMonth != oldMonth) {
          this.getList();
          this.dateChange = false;
        }
        let date = new Date();
        //通过数值变化判断是点击事件，还是日期选择事件
        if (Math.abs(newYear - oldYear) > 1) {
          //年选择事件,年变化，月份保持不变
          date.setFullYear(newYear);
          date.setMonth(oldMonth);
          date.setDate(1);
          this.dateChange = true;
        } else if (Math.abs(newYear - oldYear) == 1) {//年选择事件(前一年 或 后一年) 或 日历跨年点击事件
            if (Math.abs(newMonth - oldMonth) != 11) {//除日历跨年点击事件
              date.setFullYear(newYear);
              date.setMonth(oldMonth);
              date.setDate(1);
              this.dateChange = true;
            }
        }
        if (this.dateChange) {
          this.dateValue = date;
          this.dateChange = false;
        }
      }
    },
    methods:{
       getList() {
        this.dateQueryParams = {
          year: new Date(this.dateValue).getFullYear(),
          month: new Date(this.dateValue).getMonth(),
        };

        /** 查询邮轮信息列表 */
        getCalenderList(this.dateQueryParams).then(response => {
          if(response.code==200){
            let newCalendarData = [];
          response.data.forEach((oldData) => {
            let arr = [];
            let data = {};
            let day = oldData.startDate.split('-')[2];
            data.voyageId = oldData.voyageId;
            data.name = oldData.name;
            data.detail = oldData.detail;
            data.startDate = oldData.startDate;
            if (newCalendarData[day]) {
              arr = newCalendarData[day];
            }
            arr.push(data);
            newCalendarData[day] = arr;
          });
          this.calendarData = newCalendarData;
          }
          
          // this.cruiseData = response.data;
        });

        /** 查询产品信息列表 */
        // getVoyageInfoList(this.dateQueryParams).then(response => {
        //   let newCalendarData = [];
        //   response.data.forEach((oldData) => {
        //     let arr = [];
        //     let data = {};
        //     let day = oldData.startDate.split('-')[2];
        //     data.voyageId = oldData.voyageId;
        //     data.name = oldData.name;
        //     data.detail = oldData.detail;
        //     data.startDate = oldData.startDate;
        //     if (newCalendarData[day]) {
        //       arr = newCalendarData[day];
        //     }
        //     arr.push(data);
        //     newCalendarData[day] = arr;
        //   });
        //   this.calendarData = newCalendarData;

          // this.loading = false;
        // });
      },
    }
   

}
</script>

<style lang="scss" scoped>
  .voyageInfo{
    width: 160px;
  }
  .dialog{
    display: none;
  }
   /deep/ #calendar .is-today .el-calendar-day:hover {
     display: block;
    background: rgba(38, 188, 213, 0.3);
  }
   /deep/ #calendar .el-calendar-day:hover {
    background: #fff;
    box-shadow: 0 5px 10px rgba(0,0,0,.2);
    position: relative;
    i{
     transform:scaleY(-1)
    }
  }
</style>