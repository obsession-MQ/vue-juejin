<!--
 * @Author: your name
 * @Date: 2021-08-03 14:39:09
 * @LastEditTime: 2021-08-11 09:51:23
 * @LastEditors: geekfade
 * @Description: In User Settings Edit
 * @FilePath: \JueJin\src\views\About.vue
-->
<template>
  <div class="about">
    <div class="boiling-cont">
      <div class="feidian-left">
        <ul>
          <li
            v-for="(item, index) in navitems"
            :key="index"
            id="title"
            class="title"
            :class="currentIndex === index ? 'navActive' : ''"
            @click="checkPrice(index)"
          >
            <router-link to>{{ item.title }}</router-link>
          </li>
        </ul>
      </div>
      <div class="comment">
        <div class="pulish" v-if="closefalg">
          <div class="textarea-div">
            <textarea
              style="resize: none"
              name
              id="pulish"
              @input="textarea($event)"
              cols="69"
              rows="5"
              v-model="content"
              placeholder="告诉你个小秘密，发布沸点时添加合适话题会被更多掘友看见哟~"
            ></textarea>
            <div class="img-div">
              <div class="item-div" v-for="item in imgArr" :key="item">
                <img :src="item" alt style="object-fit: cover" />
                <div class="cancel" @click="cancel($event)">×</div>
              </div>
            </div>
          </div>
          <div class="emo fir-emo xixiy1">
            <span class="isemo" @click="isemoji">
              <span class="emo-icon">&#xe636;</span>
              <span class="em-text emo-icon2">表情</span>
            </span>
            <emoji
              v-show="em > 0"
              v-on:change="emojis"
              style="z-index: 1000000; position: fixed;top:280px;"
              @choose="emojis"
            />
            <span class="pt-po">
              <span class="emo-icon">&#xeee9;</span>
              <span>
                图片
                <a href>
                  <input type="file" id="file" @change="upimg($event)" name="img" />
                </a>
              </span>
            </span>
            <span class="link0">
              <span class="link1">&#xea0d;</span>链接
            </span>
            <span class="ht">
              <span class="link1">&#xe616;</span>话题
            </span>
            <div class="pl pl4" @click="pulishBtn">发布</div>
          </div>
        </div>
        <div class="conment-one" v-for="(item, index) in boiling" :key="index">
          <div class="one-info">
            <div class="info-cont">
              <div class="nickname">
                <div
                  class="img-userinfo"
                  @mouseover="userInfo(index)"
                  @mouseleave="usernone(index)"
                >
                  <div class="user-info">
                    <div class="user-infoTri"></div>
                    <div class="user-pic">
                      <div class="uer-con">
                        <img :src="userimg" class="userimg" />
                        <div class="user-nickname">
                          <div class="username">{{ item.nick_name }}</div>
                          <div>前端菜鸟</div>
                        </div>
                      </div>
                      <div class="attention_num">
                        <div class="att">
                          <div>
                            <b>{{ userg }}</b>
                          </div>
                          <div>关注</div>
                        </div>

                        <div class="att">
                          <div>
                            <b>{{ userfans }}</b>
                          </div>
                          <div>关注者</div>
                        </div>
                        <div class="att3">关注</div>
                      </div>
                    </div>
                  </div>
                  <img class="userimg" :src="item.icon" v-if="item.icon" />
                  <img style="border-radius:50%" :src="userimg" class="userimg" alt v-else />
                </div>
                <div class="individe">
                  <div class="my-name">{{ item.nick_name }}</div>
                  <div class="name-info">前端 · {{ getdate(item.updated_at) }}</div>
                  <div class="comment-text">
                    <div
                      class="info-text"
                      v-html="item.info"
                      :class="{
                        'more-line': item.domHeight > 150,
                      }"
                    >{{ item.info }}</div>
                    <div
                      class="zk"
                      v-show="item.domHeight > 150"
                      @click="toggle(item, index)"
                    >{{ item.open ? "收起" : "展开" }}</div>
                    <img :src="item.pic" alt />
                  </div>
                </div>
                <div class="attention" @click="attention($event, item)">关注</div>
              </div>
            </div>
          </div>
          <div class="give-like">
            <ul class="give-ul">
              <li class="give-li">
                <div class="layer">
                  <span class="like">&#xe60f;</span>
                  <span class="like-text">赞</span>
                </div>
              </li>
              <li class="give-li">
                <div class="layer" @click="comment(index)">
                  <span class="like like2">&#xe60d;</span>
                  <span class="like-text">评论</span>
                </div>
              </li>
              <li class="give-li">
                <div class="layer layer2">
                  <span class="like">&#xe60e;</span>
                  <span class="like-text">分享</span>
                </div>
              </li>
            </ul>
          </div>
          <div class="discuss">
            <div class="boiling-tri"></div>
            <button id="boiling-btn1">
              <div class="input-comment">
                <div class="head-comment">&#xe61a;</div>
                <div class="emoticon">
                  <input
                    class="inpu1"
                    type="text"
                    placeholder="请输入评论..."
                    @focus="iscomment(index)"
                    @input="isblue($event, index)"
                    @blur="noblur(index, $event)"
                    autocomplete="off"
                  />
                  <div class="emo fir-emo fir-emo1 xixiy" @mousedown="plBtn">
                    <span class="emo-icon">&#xe636;</span>
                    <span class="em-text">表情</span>
                    <span class="emo-icon">&#xeee9;</span>
                    <span>图片</span>
                    <div class="pl pl2" @click="commentBtn(index)">评论</div>
                  </div>
                </div>
              </div>
            </button>
            <div class="discuss-con">
              <div class="con-one" v-for="(item2, index2) in item.comment" :key="index2">
                <span class="tx">&#xea74;</span>
                <div class="discuss-info">
                  <div>{{ item2.nick_name }}</div>
                  <div class="discuss-text">{{ item2.comment_info }}</div>
                  <div class="discuss-time">
                    <div class="time">1分钟前</div>
                    <div class="reply">
                      <span class="like">&#xe60f;</span>
                      <span class="like like2">&#xe60d;</span>
                      <span class="like-text" @click="replyBtn($event, index)">回复</span>
                    </div>
                  </div>
                  <div class="input-comment input-comment2">
                    <div class="emoticon">
                      <input
                        type="text"
                        class="pl7"
                        placeholder="请输入评论..."
                        @input="replyInput($event, index2)"
                        autocomplete="off"
                      />
                      <div class="emo emo2">
                        <span class="emo-icon">&#xe636;</span>
                        <span class="em-text">表情</span>
                        <span class="emo-icon">&#xeee9;</span>
                        <span>图片</span>
                        <div class="pl pl3">评论</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="right-point" ref="point1">
        <div class="divid-info" v-if="closefalg">
          <div class="user-head">
            <img :src="userimg" class="userimg" />
            <div class="yonghu">{{ username }}</div>
          </div>
          <div class="feid">
            <div class="fd">
              <div>沸点</div>
              <div class="num-zero">{{ userpins }}</div>
            </div>
            <div class="fd">
              <div>关注</div>
              <div class="num-zero">{{ userg }}</div>
            </div>
            <div class="fd fd2">
              <div>关注者</div>
              <div class="num-zero">{{ userfans }}</div>
            </div>
          </div>
        </div>
        <div class="point-cont">
          <div class="point-title">精选沸点</div>
          <div class="award">
            <div>【有奖调研】🎁🎁🎁亲爱的掘友们~欢迎参加掘金用户满意度调...</div>
            <div class="ten">10赞 · 77 评论</div>
          </div>
          <div class="award award2">
            <div class="boder-bott">
              <div class="xiha">
                <div>【沸点有嘻哈，掘友是一家】押韵挑战...</div>
                <div class="ten">10赞 · 77 评论</div>
              </div>
              <div class="red-pic">
                <img src="../../assets/img/user/point.png" width="60px" height="60px" />
              </div>
            </div>
          </div>
          <div class="award award2">
            <div>兄弟姐妹们，有没有推荐的送男生的生日礼物和七夕礼物啊？他不...</div>
            <div class="ten">3赞 · 175 评论</div>
          </div>
        </div>
        <div class="howto">
          <img
            src="//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/6c1b9a023d0084efca85cc217a4ee962.svg"
            alt
          />
          如何玩转沸点
        </div>
      </div>
    </div>
  </div>
  <!-- Add "scoped" attribute to limit CSS to this component only -->
</template>

<script>
import axios from "axios";
import emoji from "../Comment/EmojiSelector.vue";
export default {
  components: {
    emoji,
  },
  data() {
    return {
      navitems: [
        {
          title: "推荐",
        },
        {
          title: "热门",
        },
        {
          title: "关注",
        },
        {
          title: "上班摸鱼",
        },
        {
          title: "树洞一下",
        },
        {
          title: "内推招聘",
        },
        {
          title: "今天学到了",
        },
        {
          title: "一图胜千言",
        },
        {
          title: "每天算法题",
        },
        {
          title: "开发工具推荐",
        },
        {
          title: "更多话题+",
        },
      ],
      currentIndex: 0,
      em: 0,
      content: "",
      comment1: "",
      page: 1,
      allDataArr: [],
      boiling: [],
      flag: true,
      value: "",
      isshow: 0,
      flag2: true,
      info: "{content:texta.value}",
      comment_info: "yeyeye",
      commentArr: [],
      article_id: 1127,
      tags_name: [{ tags_name: "前端" }],
      config: "",
      comment_id: 1967,
      imgId: "",
      pic: "",
      text: "zk",
      firCommentArr: [],
      emo: "",
      id: "",
      imgArr: [],
      closefalg: false,
      userimg: "",
      username: "",
      userpins: "",
      userg: "",
      userfans: ""
    };
  },
  methods: {
    checkPrice(index) {
      this.currentIndex = index;
    },
    emojis(v) {
      this.text += v;
      this.content += this.text;
    },
    getBoilingData() {
      axios
        .post("http://api_devss.wanxikeji.cn/api/articleList", {
          type: 2,
          page: this.page,
        })
        .then((res) => {
          for (let i = 0; i < res.data.data.data.length; i++) {
            this.boiling.push(res.data.data.data[i]);
          }
          this.$nextTick(() => {
            for (let k = 0; k < this.boiling.length; k++) {
              const domHeight =
                document.querySelectorAll(".info-text")[k].offsetHeight;
              const open = domHeight < 150 ? true : false;
              this.boiling[k].domHeight = domHeight;
              this.boiling[k].open = open;
            }
          });
        });
    },
    toggle(item, index) {
      // console.log(222);
      if (!item.open) {
        console.log(111);
      } else {
        console.log(444);
      }
    },

    //添加沸点的Api
    addPoint() {
      // console.log(this.tags_name);
      axios
        .post("http://api_devss.wanxikeji.cn/api/addModifyArticle", {
          token: localStorage.getItem("token"),
          info: this.content,
          tags_name: ["前端"],
          type: 2,
          pic: this.pic,
        })
        .then((res) => {
          console.log(res);
        });
    },
    //接回复的API
    getAplyData() {
      axios
        .post("http://api_devss.wanxikeji.cn/api/addComment", {
          token: "2b2ed27edc82b9ff9b99cafaccdd977a",
          comment_info: this.comment1,
          article_id: this.article_id,
          father_id: this.comment_id,
          remind_info: "[{user_id:1,nick_name:张三}]",
          aite: "[{user_id:1,nick_name:张三}]",
        })
        .then((res) => {
          res.config.data = JSON.parse(res.config.data);
          this.config = res.config.data.comment_info;
        });
    },
    //接评论列表里的API
    AplyList() {
      axios
        .post("http://api_devss.wanxikeji.cn/api/articleInfo", {
          article_id: this.id,
          // type:2,
        })
        .then((res) => {
          // console.log(res);
          this.firCommentArr = res.data.data.data;
          // console.log(this.firCommentArr);
        });
    },
    //滚动条事件
    xixi() {
      window.onscroll = () => {
        //给右边“精选沸点”盒子加固定窗口属性
        let right = document.querySelector(".right-point");
        if (document.documentElement.scrollTop > 490) {
          right.style = "position:fixed;margin-left:730px";
        } else {
          right.style = "position:relative;";
        }
        //实现滚动条到底加载
        if (
          document.documentElement.scrollTop +
          document.documentElement.clientHeight >=
          document.documentElement.scrollHeight
        ) {
          this.page++;
          this.getBoilingData();
        }
      };
    },
    //上传图片
    upimg(e) {
      let file = e.target.files[0];
      let param = new FormData();
      param.append("img", file);
      // console.log(param);
      axios
        .post("http://api_devss.wanxikeji.cn/api/savePic", param)
        .then((res) => {
          this.imgId = res.data.data;
          // console.log(this.imgId);
          this.imgArr.push("http://api_devss.wanxikeji.cn/" + this.imgId);
          // console.log(this.imgArr);
        });
    },
    cancel(t) {
      t.target.parentElement.remove();
      this.imgId = "";
      // console.log(t.target.previousSliblingElement);
      console.log(this.imgId);
    },
    //添加沸点的文本框
    textarea(t) {
      let publish = document.querySelector(".pl4");
      let flie = document.querySelector("#pulish");
      if (t.target.value.trim() != "" || file.value != "") {
        publish.style.backgroundColor = "#007FFF";
      } else {
        publish.style.backgroundColor = "#CCE5FF";
      }
    },
    //沸点的“发布”按钮的点击事件
    pulishBtn() {
      let texta = document.querySelector("#pulish");
      let flie = document.querySelector("#file");
      if (texta.value.trim() != "") {
        let obj = {
          nick_name: this.username,
          info: texta.value,
          tags: [{ tag_name: "前端" }],
          pic: "http://api_devss.wanxikeji.cn/" + this.imgId,
        };
        this.boiling.unshift(obj);
        texta.value = "";
        this.pic = "http://api_devss.wanxikeji.cn/" + this.imgId;
        let publish = document.querySelector(".pl4");
        publish.style.backgroundColor = "#CCE5FF";
        this.addPoint();
      }
    },
    //给第一层"评论"按钮加阻止默认方法，input框失去焦点时，其不隐藏
    plBtn(event) {
      event.preventDefault();
    },
    //给默认页面中的“评论”加点击隐藏或消失功能
    comment(index) {
      let discuss = document.querySelectorAll(".discuss");
      if (this.flag == true) {
        discuss[index].style.display = "block";
        this.flag = !this.flag;
      } else {
        discuss[index].style.display = "none";
        this.flag = !this.flag;
      }

      this.id = this.boiling[index].article_id;
      // console.log(this.id);
      this.AplyList();
    },
    //input聚焦时下方“评论按钮出现”
    iscomment(index) {
      let firemo = document.querySelectorAll(".fir-emo1");
      firemo[index].style.display = "block";
    },
    noblur(index, e) {
      if (e.target.value == "") {
        let firemo = document.querySelectorAll(".fir-emo1");
        firemo[index].style.display = "none";
      }
    },
    //判断input的value不为空时“评论”按钮背景变深蓝色
    isblue(t, index) {
      let dis2 = document.querySelectorAll(".pl2");
      if (t.target.value.trim() != "") {
        dis2[index].style.backgroundColor = "#007FFF";
      } else {
        dis2[index].style.backgroundColor = "#97C9FD";
      }
    },
    //第一层评论按钮
    commentBtn(index) {
      let comText = document.querySelectorAll(".inpu1");
      if (comText[index].value.trim() != "") {
        let obj1 = {
          comment_info: comText[index].value,
          nick_name: "是你开开呀",
        };
        this.boiling[index].comment.push(obj1);
        // this.firCommentArr.push(obj1);
        this.article_id = this.boiling[index].article_id;
        this.comment1 = comText[index].value;
        this.id = this.boiling[index].article_id;
        this.AplyList();
        this.getAplyData();
        comText[index].value = "";
      }
    },
    //点击回复按钮，下方评论框出现或隐藏
    replyBtn(t, index) {
      if (this.flag2 == true) {
        t.target.parentElement.parentElement.nextSibling.style.display =
          "block";
        this.flag2 = false;
      } else {
        t.target.parentElement.parentElement.nextSibling.style.display = "none";
        this.flag2 = true;
      }
    },
    //断input的value不为空时“评论”按钮背景变深蓝色
    replyInput(t, index) {
      let dis2 = document.querySelectorAll(".pl3");
      if (t.target.value != "") {
        dis2[index].style.backgroundColor = "#007FFF";
      } else {
        dis2[index].style.backgroundColor = "#97C9FD";
      }
    },
    //给头像家mouseenter事件
    userInfo(index) {
      let user = document.querySelectorAll(".user-info");
      user[index].style.display = "block";
    },
    usernone(index) {
      let user = document.querySelectorAll(".user-info");
      user[index].style.display = "none";
    },
    attention(t, item) {
      // console.log(item.describe);
      if (t.target.innerHTML == "关注") {
        t.target.classList.add("attented");
        t.target.innerHTML = "已关注";
        item.describe = "yes";
      } else if (t.target.innerHTML == "已关注") {
        t.target.classList.remove("attented");
        t.target.innerHTML = "关注";
      }
    },
    isemoji() {
      if (this.em == 0) {
        this.em = 2;
      } else {
        this.em = 0;
      }
    },
    emojis(data) {
      let pulish = document.querySelector("#pulish");
      pulish.value += data;
    },
    zk() {
      let div = document.querySelectorAll(".info-text");
      for (let i = 0; i < this.boiling.length; i++) {
        let inner = div[i].innerHTML;
        if (inner.length > 300) {
          this.text = "展开";
          div[i].innerHTML = inner.substring(0, 300);
        } else {
          this.text = "";
        }
      }
    },
    fansList() {
      axios
        .post("http://api_devss.wanxikeji.cn/api/concernList", {
          user_id: this.$store.state.userData.user_id,
        })
        .then((res) => {
          console.log(res);
          let fans = res.data.data.my_concern;
          this.fansLists = [];
          for (let i = 0; i < fans.length; i++) {
            this.fansLists.push(fans[i].user_id);
          }
          // 异步刷新页面数据
          setTimeout(() => {
            let tep = [...this.fansLists];
            this.fansLists = tep;
          }, 50);
          console.log(this.fansLists);
          localStorage.setItem("fans", JSON.stringify(this.fansLists));
        });
    },
    // 时间
    getdate(unixtime) {
      let currTime = Date.parse(new Date());
      let time = parseInt(unixtime) - parseInt(currTime) / 1000;
      // console.log(time);
      time = Math.abs(time);
      // 少于一分钟
      if (time < 60) {
        return "刚刚";
      }
      // 秒转分钟
      let minuies = time / 60;
      if (minuies < 60) {
        return Math.floor(minuies) + "分钟前提交";
      }
      // 秒转小时
      let hours = time / 3600;
      if (hours < 24) {
        return Math.floor(hours) + "小时前提交";
      }
      //秒转天数
      let days = time / 3600 / 24;
      if (days < 30) {
        return Math.floor(days) + "天前提交";
      }
      //秒转月
      let months = time / 3600 / 24 / 30;
      if (months < 12) {
        return Math.floor(months) + "月前提交";
      }
      //秒转年
      let years = time / 3600 / 24 / 30 / 12;
      return Math.floor(years) + "年前提交";
    },
  },
  mounted() {
    this.xixi();
    this.zk();
    axios.post("http://api_devss.wanxikeji.cn/api/userAllInfo", {
      token: localStorage.getItem("token"),
    }).then((res) => {
      this.username = res.data.data.nick_name
      this.userpins = res.data.data.pins_all
      this.userg = res.data.data.concern
      this.userfans = res.data.data.fans
      this.userimg = res.data.data.icon
      console.log(res);
    })
  },
  computed: {},
  created() {
    this.getBoilingData();
    if (localStorage.getItem("token")) {
      this.closefalg = true;
    } else {
      this.closefalg = false;
    }
  },
};
</script>
<style lang="scss" scoped>
@import "../../assets/scss/pins.scss";
</style>
