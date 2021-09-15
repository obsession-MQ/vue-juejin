<template>
  <div id="app">
    <div class="log" v-show="getShow">
      <Login />
    </div>
    <!-- <input type="text" name="name" v-model="name" />
    <input type="text" name="pw" v-model="pw" />
    <input type="text" name="nick_name" v-model="nick_name" />
    <button @click="re">注册</button>-->
    <router-view v-if="isReloadAlive" />
  </div>
</template>
<script>

// import axios from "axios"
import Login from '@/views/Login/Login.vue'
export default {
  // data() {
  //   return {
  //     name: "",
  //     pw: "",
  //     nick_name: ""
  //   }
  // },
  provide() { // 实现页面刷新
    return {
      reload: this.reload
    }
  },
  data() {
    return {
      isReloadAlive: true
    }
  },
  components: { Login },
  computed: {
    getShow() {
      return this.$store.state.show;
    },
  },
  methods: {
    reload() {
      this.isReloadAlive = false;
      this.$nextTick(() => {
        this.isReloadAlive = true
      });
    }
  }
  // methods: {
  //   re() {
  //     axios.post("http://api_devss.wanxikeji.cn/api/register", {
  //       name: this.name,
  //       pw: this.pw,
  //       nick_name: this.nick_name,
  //     }).then((res) => {
  //       window.localStorage.setItem("token", res.data.data.token);
  //       console.log(res);
  //     })
  //   }
  // }
}
</script>
<style lang="scss">
#app {
  padding: 0;
  margin: 0;
}
body {
  padding: 0;
  margin: 0;
  background: #f4f5f5;
  .log {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100000000000;
  }
}
</style>
