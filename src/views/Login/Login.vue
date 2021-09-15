<!--
 * @Author: your name
 * @Date: 2021-08-03 15:22:56
 * @LastEditTime: 2021-08-14 11:10:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \juejin\src\components\Login.vue
-->
<template>
  <div class="login df">
    <div class="main">
      <div class="icon">
        <img src="../../assets/img/svg/icon1.svg" v-if="icon1falg" />
        <img src="../../assets/img/svg/icon2.svg" v-if="icon2falg" />
        <img src="../../assets/img/svg/icon3.svg" v-if="icon3falg" />
      </div>
      <div class="form">
        <div class="title df dfsb">
          <span v-if="!regflag">账密登录</span>
          <span v-else>用户注册</span>
          <span class="iconfont myfont" @click="closePage">&#xe607;</span>
        </div>
        <form>
          <p class="line-active" v-if="showfalg">该账户不存在或账户密码不匹配</p>
          <p class="line-active" v-if="regshowflag">该账户已存,请重新输入</p>
          <input
            type="text"
            placeholder="邮箱/手机号（国际号码加区号）"
            @blur="noneborder"
            @click="changeborder($event)"
            v-model="accountvalue"
            name="name"
            :class="{ 'line-active': icon2falg }"
          />
          <br />
          <p class="line-active" v-if="accountvaluefalg && accountvalue == '' && icon2falg">请先输入账号</p>
          <input
            type="password"
            placeholder="请输入密码"
            @blur="noneborder"
            @click="changeborder($event)"
            v-model="pswvalue"
            name="psw"
            :class="{ 'line-active': icon3falg }"
          />
          <br />
          <p class="line-active" v-if="pswvaluefalg && pswvalue == '' && icon3falg">请先输入密码</p>
          <div class="button btn" v-if="!regflag" @click="getInfo">登录</div>
          <div class="button btn" v-else @click="getReg">注册</div>
        </form>
        <div class="other df dfsb">
          <a @click="toReg">没有账号，去注册</a>
          <a v-show="!regflag">忘记密码</a>
        </div>
        <div class="otherWay df dfsa">
          <div class="icon-bg">
            <a>
              <img src="../../assets/img/svg/weibo.svg" />
            </a>
          </div>
          <div class="icon-bg">
            <a>
              <img src="../../assets/img/svg/weixin.svg" />
            </a>
          </div>
          <div class="icon-bg">
            <a>
              <img src="../../assets/img/svg/githup.svg" />
            </a>
          </div>
        </div>
        <p class="tip">
          注册登录即表示同意
          <a>用户协议</a> 、
          <a>隐私政策</a>
        </p>
      </div>
    </div>
    <div class="feedback df">
      <a>
        <span class="iconfont myfont">&#xe652;</span>
      </a>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "Login",
  data() {
    return {
      icon1falg: true,
      icon2falg: false,
      icon3falg: false,
      accountvalue: "",
      pswvalue: "",
      accountvaluefalg: false,
      pswvaluefalg: false,
      showfalg: false,
      regshowflag: false,
      regflag:false,
    };
  },
  inject: ['reload'],
  methods: {
    toReg(){
      this.accountvalue='';
      this.pswvalue='';
      this.regflag = true;
    },
    getReg(){
      if(this.accountvalue==''){
        this.accountvaluefalg= true;
        this.icon1falg=false;
        this.icon2falg=true;
      }else if(this.pswvalue==''){
        this.pswvaluefalg= true;
        this.icon1falg=false;
        this.icon2falg=false;
        this.icon3falg=true;
      }else{
        axios.post("http://api_devss.wanxikeji.cn/api/register",{name:this.accountvalue,pw:this.pswvalue})
          .then((res) =>{
            console.log(res.data.msg);
            if(res.data.msg=='用户已存在'){
              this.regshowflag = true;
            }
          }).catch((err) => {
            console.log(err);
          })
        this.regflag = false;
        this.accountvalue='';
        this.pswvalue='';
      }
    },
    closePage() {
      this.$store.commit("LOGIN");
    },
    changeborder(e) {
      if (e.target.name == "name") {
        this.icon2falg = true;
        this.icon3falg = false;
      } else {
        this.icon3falg = true;
        this.icon2falg = false;
      }
      this.icon1falg = false;
    },
    noneborder() {
      this.icon1falg = true;
      this.icon2falg = false;
      this.icon3falg = false;
    },
    login() {
      if (this.accountvalue == "") {
        this.accountvaluefalg = true;
        this.icon2falg = true;
        this.icon1falg = false;
      } else if (this.pswvalue == "") {
        this.pswvaluefalg = true;
        this.icon1falg = false;
        this.icon3falg = true;
      }
    },
    getInfo() {
      this.login();
      axios.post("http://api_devss.wanxikeji.cn/api/login", { name: this.accountvalue, pw: this.pswvalue })
      .then((res) => {
        console.log(res.data.data);
        if (res.data.data.length != 0) {
          window.localStorage.setItem("token", res.data.data.token);
          this.reload();
          this.closePage();
        } else if (this.accountvalue != '' && this.pswvalue != '') {
          this.showfalg = true;
        }
      }).catch((err)=> {
        console.log(err);
      })
    }
  },
};
</script>
<style lang="scss" scoped>
@import "../../assets/scss/Login.scss";
</style>