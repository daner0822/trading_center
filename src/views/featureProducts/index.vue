<template>
  <div class="clearfix">
    <featureHeader
      @changeLine="changeLine"
      :currentIndex="currentIndex"
      :airline="airline"
    ></featureHeader>
    <featureMain :currentIndex="currentIndex"></featureMain>
  </div>
</template>

<script>
import featureHeader from "./featureHeader/index";
import featureMain from "./featureMain/index";
export default {
  components: {
    featureHeader,
    featureMain
  },
  data() {
    return {
      airline: ["国际航线", "国内航线"],
      currentIndex: 1
    };
  },
  methods: {
    changeLine(index) {
      this.currentIndex = index;
    }
  }
};
</script>

<style></style>
