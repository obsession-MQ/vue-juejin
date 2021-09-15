<!--
 * @Author: your name
 * @Date: 2021-08-10 14:11:04
 * @LastEditTime: 2021-08-11 19:23:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-juejin\src\views\home\Home.vue
-->
<template>
  <div class="view-container">
    <div class="main-box">
      <Nav :class="{ dn: scroll > windowHeight }" />
    </div>
    <main
      class="container main-container view-nav"
      style="max-width:1200px"
      :class="{ dn1: scroll > windowHeight }"
    >
      <!-- <keep-alive inclide="/recommended"> -->
        <router-view></router-view>
      <!-- </keep-alive> -->
    </main>
  </div>
</template>

<script>
import Nav from './Nav.vue'
export default {
  name: 'Home',
  components: {
    Nav,
  },
  data() {
    return {
      scroll: 0,
      windowHeight: 0,
    }
  },
  methods: {
    changeNav() {
      //页面滚动高度
      this.scroll = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      //窗口高度,可视区高度（包含滚动条）
      this.windowHeight = window.innerHeight;
    },
  },
  mounted: function () {
    //进入页面开始监听
    window.addEventListener("scroll", this.changeNav, true); // this.changeNav();
  },
  destroyed() {
    //离开页面取消监听
    window.removeEventListener("scroll", this.changeNav, false);
  },
}
</script>
<style lang="scss" scoped>
.view-container {
  position: relative;
  margin: 0 auto;
  width: 100%;
  .main-box {
    position: relative;
    height: 60px;
    transition: all 0.28s ease-in 0.1s;
  }
  .dn {
    top: -60px;
  }
  .dn1 {
    transition: all 0.28s ease-in 0.1s;
    top: -60px;
  }
}
.container {
  position: relative;
  margin: 0 auto;
  width: 100%;
  max-width: 960px;
}
</style>
