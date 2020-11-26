<template>
  <div>
    <el-calendar></el-calendar>
       <!-- <ul class="calendar-view clear">
  <li v-for="(item, index) in visibleCalendar" 
    :key="index" 
    class="date-view"
    :class="[
      {'notCurrentMonth-class': !isCurrentMonth(item.date)},
      {currentDay: isCurrentDay(item.date)},
    ]"
    @click="handleClickDay(item, index)"
  >
    <span class="date-day" >
      {{item.day}}
    </span>
  </li>
</ul> -->
  </div>
</template>

<script>
// import {getYearMonthDay,getDate} from '../../utils/filters'
export default {
    data(){
        return{
        value:'',
        }
    },
computed: {
    visibleCalendar: function () {
        let calendatArr = [];
        let {year, month, day} = getDate(getDate(this.time.year, this.time.month, 1));
        let currentFirstDay = getDate(year, month, 1);
        let weekDay = currentFirstDay.getDay();
        let startTime = currentFirstDay - (weekDay - 1) * 24 * 60 * 60 * 1000;
        
        for (let i = 0; i < 42; i++) {
          calendatArr.push({
            date: new Date(startTime + i * 24 * 60 * 60 * 1000),
            year: year,
            month: month + 1,
            day: new Date(startTime + i * 24 * 60 * 60 * 1000).getDate()
          })
        };
        return calendatArr
    }
},
methods:{
  isCurrentMonth (date) {
    let {year: currentYear, month: currentMonth} = getYearMonthDay(getDate(this.time.year, this.time.month, 1));
    let {year, month} = getYearMonthDay(date);
    return currentYear == year && currentMonth == month
},
// 判断是否是当前天的方法 同理
isCurrentDay (date) {
    let {year: currentYear, month: currentMonth, day: currentDay} = getYearMonthDay(new Date());
    let {year, month, day} = getYearMonthDay(date);
    return currentYear == year && currentMonth == month && currentDay == day;
},  handlePrevMonth () {
    let prevMonth = getDate(this.yearMonth.year,this.yearMonth.month,1);
    prevMonth.setMonth(prevMonth.getMonth() - 1);
    this.yearMonth = getYearMonthDay(prevMonth);
  },
  // 下一个月 获取当年月 用setMonth()去设置月份，然后更新yearMonth
  handleNextMonth () {
    let nextMonth = getDate(this.yearMonth.year,this.yearMonth.month,1); 
    nextMonth.setMonth(nextMonth.getMonth() + 1);
    this.yearMonth = getYearMonthDay(nextMonth);
  },
  // 点击回到今天 同理
  handleToday () {
    this.yearMonth = getYearMonthDay(new Date());
  },data () {
    let {year, month, day} = getYearMonthDay(new Date());
    return {
        yearMonth: {year, month, day}, 
    }
}
}
}
</script>

<style>

</style>