<template>
  <div class="from_city ">
    <div class="city">
      <slot></slot>
    </div>
    <!-- 出发城市 -->
    <div class="son" v-if="type == 1">
      <div class="detail" v-for="item in list" :key="item">{{ item }}</div>
    </div>
    <div class="foreign" v-if="type == 1">
      国外出发<span class="el-icon-arrow-down"></span>
    </div>
    <!-- 邮轮航线 -->
    <div class="son" v-if="type == 2">
      <div
        :class="{ detail: true, active: index == 0 }"
        v-for="(item, index) in list"
        :key="index"
      >
        {{ item }}
      </div>
    </div>
    <!-- 出行时间 -->
    <div class="son" v-if="type == 3">
      <div
        :class="{ detail: true, active: index == 0 || index == 3 }"
        v-for="(item, index) in list"
        :key="index"
      >
        {{ item }}
      </div>
    </div>
    <!-- 邮轮品牌 -->
    <div class="son" v-if="type == 9">
      <div class="detail" v-for="item in list" :key="item">
        {{ item }}
        <span class="el-icon-arrow-down"></span>
      </div>
    </div>
    <!-- 行程天数 -->
    <div class="son" v-if="type == 8">
      <div class="detail" v-for="item in list" :key="item">{{ item }}</div>
    </div>

    <div class="right" v-if="more">
      <div class="more">更多<span class="el-icon-arrow-down"></span></div>
      <div class="select_more">多选 +</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      default: () => {
        return []
      },
    },
    more: {
      type: Boolean,
      default: false,
    },
    type: {
      type: Number,
      default: '0',
    },
  },
}
</script>

<style lang="scss" scoped>
.from_city,
.ship_line,
.ship_brand,
.travel_time {
  position: relative;
  display: flex;
  height: 45px;
  line-height: 45px;
  border-bottom: 1px solid #ccc;
  .son {
    display: flex;
  }
  .city {
    width: 60px;
    text-align: left;
    font-size: 14px;
    color: #333333;
    margin-right: 15px;
  }
  .detail,
  .foreign {
    text-align: center;
    font-size: 14px;
    color: #333333;
    margin-right: 15px;
    cursor: pointer;
  }
  .active {
    color: #999999;
  }
  .right {
    display: flex;
    position: absolute;
    align-items: center;
    right: 0px;
    .more {
      font-size: 14px;
      color: #3971ff;
      margin-right: 30px;
      cursor: pointer;
      span {
        margin-left: 5px;
      }
    }
    .select_more {
      cursor: pointer;
      width: 60px;
      height: 25px;
      line-height: 25px;
      color: #3971ff;
      border: 1px solid #3971ff;
      text-align: center
    }
  }
}
</style>
