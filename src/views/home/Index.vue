<!--
 * @Author: your name
 * @Date: 2021-08-04 13:59:26
 * @LastEditTime: 2021-08-14 18:48:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \juejin\src\components\Index.vue
-->
<template>
  <div>
    <Category />
    <div class="index df">
      <div class="container df df-ai-fs">
        <div class="infoList">
          <Head />
          <div class="card df col df-ai-fs cp" v-for="(item, index) in renderData" :key="index">
            <div @click="toPage(item,index)">
              <div class="line col dffs">
                <div class="top df dffs">
                  <span
                    class="author"
                    v-if="item.nick_name != null"
                    @mouseover="showInfo(index)"
                    @mouseout="closeInfo"
                  >
                    {{ item.nick_name }}
                    <div class="pad" v-show="showInfofalg && index == flag">
                      <div class="msg df col">
                        <div class="author-item df dffs">
                          <p class="photo" :style="{ backgroundImage: 'url(' + item.icon + ')' }"></p>
                          <div class="name">
                            <p class="title oh1">
                              {{
                                item.nick_name
                              }}
                              <span
                                :class="{
                                  blue: index % 2 == 0,
                                  orange: index % 3 == 0,
                                }"
                              >Lv4</span>
                            </p>
                            <p class="identity">前端工程师@云的世界</p>
                          </div>
                        </div>
                        <div class="like df dfsb">
                          <div class="attention df col">
                            <span class="num">{{ concern }}</span>
                            <span>关注</span>
                          </div>
                          <div class="followers df col">
                            <span class="num">{{ fans }}</span>
                            <span>关注者</span>
                          </div>
                          <div
                            class="tolike"
                            @click="beFuns(item.user_id, $event.target.innerHTML)"
                            v-if="fansLists.includes(item.user_id)"
                          >已关注</div>
                          <div
                            class="tolike"
                            @click="beFuns(item.user_id, $event.target.innerHTML)"
                            v-else
                          >关注</div>
                        </div>
                      </div>
                    </div>
                  </span>
                  <span class="author" v-else @mouseenter="showInfo(index)" @mouseleave="closeInfo">
                    {{ err }}
                    <div class="pad" v-show="showInfofalg && index == flag">
                      <div class="msg df col">
                        <div class="author-item df dffs">
                          <p class="photo" :style="{ backgroundImage: 'url(' + item.icon + ')' }"></p>
                          <div class="name">
                            <p class="title">
                              {{
                                err
                              }}
                              <span
                                :class="{
                                  blue: index % 2 == 0,
                                  orange: index % 3 == 0,
                                }"
                              >Lv4</span>
                            </p>
                            <p class="identity">前端工程师@云的世界</p>
                          </div>
                        </div>
                        <div class="like df dfsb">
                          <div class="attention df col">
                            <span class="num">3654</span>
                            <span>关注</span>
                          </div>
                          <div class="followers df col">
                            <span class="num">3654</span>
                            <span>关注者</span>
                          </div>
                          <div class="tolike">关注</div>
                        </div>
                      </div>
                    </div>
                  </span>
                  <span class="date">{{ getUptime(item.created_at) }}</span>
                  <!-- <span class="keywords">{{ item.tags[0].tag_name }}</span> -->
                </div>
                <div class="df dffs border">
                  <div class="df col df-ai-fs">
                    <div class="card-con">
                      <p class="title df oh1">{{ item.title }}</p>
                      <div class="intro oh1">{{ item.describe }}</div>
                    </div>
                    <div class="bottom df dffs">
                      <p>
                        <span class="iconfont myfont">&#xe6cc;</span>
                        {{ item.pv }}
                      </p>
                      <p>
                        <span class="iconfont myfont">&#xe610;</span>25684
                      </p>
                      <router-link to="/Comment" tag="p">
                        <p v-if="item.comment_num != 0">
                          <span class="iconfont myfont">&#xe8b4;</span>
                          {{ item.comment_num }}
                        </p>
                        <p v-else @click="toPage(item)">
                          <span class="iconfont myfont">&#xe8b4;</span>评论
                        </p>
                      </router-link>
                    </div>
                  </div>
                  <img :src="item.pic"  v-if="
                      item.pic != 'http://api_devss.wanxikeji.cn/' &&
                      item.pic != null
                    " />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="side df col" ref="sideBox">
          <div class="signIn df col">
            <p class="p1">
              📅 下午好！
              <span @click="CLogin">去签到</span>
            </p>
            <p class="surprise">连续签到赢掘金惊喜好礼</p>
          </div>
          <form class="login" v-if="closefalg">
            <p>掘金 - juejin.cn</p>
            <p class="fw5">一个帮助开发者成长的社区</p>
            <p class="line-active" v-if="showfalg2">请完整输入信息</p>
            <p class="line-active" v-if="showfalg1">账户不存在或信息不匹配</p>
            <input type="text" placeholder="邮箱/手机号（国际号码加区号）" v-model="accountvalue" />
            <br />
            <input type="password" placeholder="请输入密码" v-model="pswvalue" />
            <br />
            <div class="button btn" @click="getLoginInfo">立即登录</div>
            <p class="tip">
              注册登录即表示
              <br />同意
              <a>用户协议</a> 、
              <a>隐私政策</a>
            </p>
          </form>
          <div class="client df" ref="clientBox">
            <img src="../../assets/img/icon/QR-code.png" alt />
            <div>
              <p class="blackfont">下载掘金客户端</p>
              <p class="grayfont">一个帮助开发者成长的社区</p>
            </div>
          </div>
          <div class="authorList">
            <p class="blackfont listTitle">
              <span class="iconfont myfont">🥇</span>作者榜
            </p>
            <div>
              <div class="author-item df dffs">
                <p class="photo"></p>
                <div class="name">
                  <p>
                    云的世界
                    <span>Lv4</span>
                  </p>
                  <p class="identity">前端工程师@云的世界</p>
                </div>
              </div>
              <div class="author-item df dffs">
                <p class="photo"></p>
                <div class="name">
                  <p>
                    云的世界
                    <span class="blue">Lv4</span>
                  </p>
                  <p class="identity">前端工程师@云的世界</p>
                </div>
              </div>
              <div class="author-item df dffs">
                <p class="photo"></p>
                <div class="name">
                  <p>
                    云的世界
                    <span class="orange">Lv4</span>
                  </p>
                  <p class="identity">前端工程师@云的世界</p>
                </div>
              </div>
            </div>
            <p class="blackfont total">
              完整榜单
              <span class="iconfont myfont"></span>
            </p>
          </div>
          <div class="quickinport df col">
            <div class="item df dffs" v-for="(rankitem,index) in tempData" :key="index">
              <p class="photo" :style="{ backgroundImage: 'url(' + rankitem.icon + ')' }"></p>
              <p class="identity">前端工程师@云的世界</p>
            </div>
          </div>
          <div class="about df dffs col">
            <div class="df dffs about-item">
              <a href>关于·</a>
              <a href>营业执照 ·</a>
              <a href>友情链接 ·</a>
              <a href>更多文章 ·</a>
              <a href>用户协议 ·</a>
              <a href>隐私政策 ·</a>
              <a href>使用指南 ·</a>
              <a href>京ICP备18012699号-3 ·</a>
              <a href>京公网安备11010802026719号 ·</a>
              <a href>版权所有：北京北比信息技术有限公司 ·</a>
              <a href>公司地址：北京市海淀区信息路甲28号13层B座13B-5 ·</a>
              <a href>公司座机：010-83434395 ·</a>
              <a href>举报邮箱： feedback@xitu.io&nbsp;&nbsp;</a>
              <a href>©2021 掘金</a>
            </div>
            <div class="df dffs" style="width: 100%">
              <img src="../../assets/img/icon/weibo.png" />
              <img src="../../assets/img/icon/wechat.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Head from "./Header.vue"
import Category from "../Category/Category.vue"
import axios from "axios";
export default {
  name: "Index",
  inject: ['reload'],
  data() {
    return {
      renderData: [],
      err: "失踪了",
      pageNum: 1,
      showfalg3: false,
      showInfofalg: false,
      flag: null,
      fans: "",
      concern: "",
      closefalg: true,
      showfalg1: false,
      showfalg2: false,
      accountvalue: "",
      pswvalue: "",
      tempData: [],
      fansLists: [],
      beforeData:[],
    };
  },
  components: {
    Head, Category,
  },
  methods: {
    toPage(_item, _index) {
      for(let i = _index+1; i<= _index+5;i++){
        this.beforeData.push(this.renderData[i]);
      }
      console.log(this.beforeData);
      window.localStorage.setItem("currtData",JSON.stringify(_item));
      window.localStorage.setItem("beforeData",JSON.stringify(this.beforeData));
      this.$router.push({path: "/Comment",query: {id: _item.id}});
      this.$forceUpdate();
    },
    getInfo() {
      axios
        .post("http://api_devss.wanxikeji.cn/api/articleList", {
          type: 1,
          page: this.pageNum,
        })
        .then((res) => {
          res.data.data.data.forEach((item) => {
            if (item.pic === "") {
              item.pic.delete(item.pic)
            } else {
              this.renderData.push(item);
            }
            localStorage.setItem("user_id", item.user_id)
          });
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getUptime(_created_at) {
      //获取当前时间
      let currtentTime = Date.parse(new Date());
      let differenceTime =
        parseInt(currtentTime) / 1000 - parseInt(_created_at);
      differenceTime = Math.abs(differenceTime);
      //少于一分钟
      if (differenceTime < 60) {
        return "刚刚";
      }
      //转为分钟
      let min = differenceTime / 60;
      if (min < 60) {
        return Math.floor(min) + "分钟前提交";
      }
      //转为小时
      let h = differenceTime / 3600;
      if (h < 24) {
        return Math.floor(h) + "小时前提交";
      }
      //秒转天数
      let days = differenceTime / 3600 / 24;
      if (days < 30) {
        return Math.floor(days) + "天前提交";
      }
      //秒转月
      let months = differenceTime / 3600 / 24 / 30;
      if (months < 12) {
        return Math.floor(months) + "月前提交";
      }
      //秒转年
      let years = differenceTime / 3600 / 24 / 30 / 12;
    },
    showInfo(_index) {
      this.showInfofalg = true;
      this.flag = _index;
    },
    closeInfo() {
      this.showInfofalg = false;
    },
    // 关注和未关注切换
    beFuns(e, state) {
      // 未关注点击即关注
      console.log(e, state);
      if (state.trim() == "关注") {
        axios
          .post("http://api_devss.wanxikeji.cn/api/concern", {
            token: localStorage.getItem("token"),
            be_concern_user_id: e,
          })
          .then((res) => {
            console.log(res);
            this.fansList();
          });
      } else {
        // 已关注点击即取消关注
        axios
          .post("http://api_devss.wanxikeji.cn/api/concernDel", {
            token: localStorage.getItem("token"),
            be_concern_user_id: e,
          })
          .then((res) => {
            console.log(res);
            this.fansList();
          });
      }
    },
    async fansList() {
      // 异步刷新页面数据
      await this.hashmap();
      await this.getUserData();
      let tep = [...this.fansLists];
      this.fansLists = tep;
      localStorage.setItem("fans", JSON.stringify(this.fansLists));
    },
    hashmap() {
      return axios
        .post("http://api_devss.wanxikeji.cn/api/concernList", {
          user_id: localStorage.getItem("user_id"),
        })
        .then((res) => {
          // console.log(res);  
          let fans = res.data.data.my_concern;
          this.fansLists = [];
          for (let i = 0; i < fans.length; i++) {
            this.fansLists.push(fans[i].user_id);
          }
        });
    },
    // 请求渲染粉丝数和关注数
    getUserData() {
      return axios.post("http://api_devss.wanxikeji.cn/api/userAllInfo", {
        token: localStorage.getItem("token"),
        // user_id: localStorage.getItem("user_id"),
      }).then((res) => {
        this.fans = res.data.data.fans;
        this.concern = res.data.data.concern;
      })
    },

    Login() {
      this.$store.commit("LOGIN");
    },
    CLogin() {
      if (localStorage.getItem("token")) {
        this.$router.push("/editor")
      } else {
        this.$store.commit("LOGIN");
        // localStorage.getItem("user_id")
      }
    },
    getLoginInfo() {
      axios
        .post("http://api_devss.wanxikeji.cn/api/login", {
          name: this.accountvalue,
          pw: this.pswvalue,
        })
        .then((res) => {
          console.log(res.data.data);
          if (res.data.data.length != 0) {
            window.localStorage.setItem("token", res.data.data.token);
            this.closefalg = false;
            this.reload()
          } else if (this.accountvalue != "" && this.pswvalue != "") {
            this.showfalg2 = false;
            this.showfalg1 = true;
          } else {
            this.showfalg1 = false;
            this.showfalg2 = true;
          }
        })
        .catch(function (err) {
          console.log(err);
        });
    },
    handleScroll() {
      //页面滚动高度
      let scroll = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      //窗口高度,可视区高度（包含滚动条）
      let windowHeight = window.innerHeight;
      //页面总高度（所有内容）
      let pageHeight = document.documentElement.scrollHeight;
      let sideHeight = this.$refs.sideBox.offsetHeight;
      if (scroll + windowHeight >= pageHeight) {
        this.pageNum++;
        this.getInfo();
      }
      if (sideHeight <= scroll) {
        this.$refs.clientBox.style.position = "fixed";
        this.$refs.clientBox.style.top = "60px";
        this.$refs.clientBox.style.width = "240px";
      } else {
        this.$refs.clientBox.style.position = "";
        this.$refs.clientBox.style.top = "";
      }
    },
  },
  created() {
    this.getInfo();
    this.getUptime();
    this.fansList();
    if (localStorage.getItem("token")) {
      this.closefalg = false;
    } else {
      this.closefalg = true;
    }
  },
  mounted(){
    //进入页面开始监听
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    //离开页面取消监听
    window.removeEventListener("scroll", this.handleScroll, false);
  },
};
</script>
<style lang="scss" scoped>
@import "../../assets/scss/Index.scss";
</style>
