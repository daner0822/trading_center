<template>
  <div class="container">
    <div class="airline">
      <h1>推荐产品</h1>
      <div
        :class="{ active: isAbroad }"
        v-for="(item, index) in airline"
        :key="index"
        @click="changeLine(index)"
      >
        {{ item }}
      </div>
    </div>
    <div class="more_product">
      <a href="">
      <span>更多超值推荐</span>
      <i class="el-icon-arrow-right"></i>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    airline: {
      type: Array,
      default: () => {
        return [];
      }
    },
    // currentIndex: {
    //   type: Number,
    //   default: 1
    // }
  },
  data() {
    return {
      isAbroad:true
    };
  },
  methods: {
    changeLine(index) {
      // this.$emit("changeLine", index);
    }
  }
};
</script>

<style lang="scss" scoped>
  @import "@/assets/scss/index.scss";
.container {
  // width: 1200px;
  height: 80px;
  line-height: 80px;
  display: flex;
  justify-content: space-between;
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
}
</style>
