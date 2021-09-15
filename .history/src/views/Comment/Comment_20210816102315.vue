<!--
 * @Author: your name
 * @Date: 2021-08-04 13:59:26
 * @LastEditTime: 2021-08-16 10:23:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \juejin\src\components\Index.vue
-->
<template>
  <div class="comment index df" @click="showSetting">
    <!-- <div>{{getData}}</div> -->
    <div class="sidebar df col">
      <p class="item df cp">
        <span class="iconfont myfont">&#xe610;</span>
        <span class="num df">{{ getCurrtData.pv }}</span>
      </p>
      <p class="item df cp">
        <span class="iconfont myfont">&#xe8b4;</span>
        <span class="num df">{{ getCurrtData.comment_num }}</span>
      </p>
      <p class="item df cp">
        <span class="iconfont myfont">&#xe61a;</span>
      </p>
      <p class="item df cp">
        <span class="iconfont myfont">&#xe715;</span>
      </p>
      <p class="share">分享</p>
      <p class="item df cp">
        <span class="iconfont myfont">&#xe666;</span>
      </p>
      <p class="item df cp">
        <span class="iconfont myfont">&#xe67f;</span>
      </p>
      <p class="item df cp">
        <span class="iconfont myfont">&#xe638;</span>
      </p>
    </div>
    <div class="container df df-ai-fs" id="container">
      <div class="main">
        <div class="top df dfsb">
          <div class="df">
            <img class="cp" :src="getCurrtData.icon" />
            <div class="info df col df-ai-fs">
              <p class="name df cp">
                {{ getCurrtData.nick_name }}
                <span class="rank">Lv4</span>
              </p>
              <p>
                <span class="date">{{ getDate(getCurrtData.created_at) }}</span>&nbsp;&nbsp;&nbsp;
                <span class="read">阅读&nbsp;&nbsp;132</span>
              </p>
            </div>
          </div>
          <div class="like cp">关注</div>
        </div>
        <div class="con">
          <div class="title" ref="head">{{ getCurrtData.title }}</div>
          <div class="con-info" ref="info" v-html="getCurrtData.info">{{ getCurrtData.info }}</div>
          <div class="thanks" ref="thanks">
            <p class="caption">感谢</p>
            <p class="thanksCon">
              谢谢你读完本篇文章，希望对你能有所帮助，如有问题欢迎各位指正。
              <br />我是
              <span>蛙人</span>(✿◡‿◡)，如果觉得写得可以的话，请点个赞吧❤。
            </p>
          </div>
          <div class="recommend" ref="before">
            <p class="caption">往期推荐</p>
            <div class="recommendCon df col df-ai-fs">
              <a
                href
                v-for="(beforeItem, index) in getbeforeData"
                :key="index"
              >《{{ beforeItem.title }}》</a>
            </div>
          </div>
        </div>
        <div class="line">
          <div class="tag df dffs">
            <p>
              文章分类
              <span class="cp">前端</span>
            </p>
            <p>
              文章标签
              <span
                class="cp"
                v-for="(target, index) in getCurrtData.tags"
                :key="index"
              >{{ target.tag_name }}</span>
            </p>
          </div>
          <div class="top df dfsb">
            <div class="df">
              <img class="cp" :src="getCurrtData.icon" alt />
              <div class="info df col df-ai-fs">
                <p class="name df cp">
                  {{ getCurrtData.nick_name }}
                  <span class="rank">Lv4</span>
                </p>
                <div class="detail df dfsb">
                  <p>
                    发布了
                    <span class="article">321</span>篇文章
                  </p>
                  <p>
                    获得点赞
                    <span class="getLike">{{ getCurrtData.pv }}</span>
                  </p>
                  <p>
                    获得阅读
                    <span class="getRead">132</span>
                  </p>
                </div>
              </div>
            </div>
            <div class="like cp">关注</div>
          </div>
        </div>
        <div class="comment-con" ref="com"  >
          <div class="input-comment df df-ai-fs">
            <img :src="getCurrtData.icon" class="cp"/>
            <div class="comment-area"  @click="TextareaEvent($event)">
              <div class="input" @click="clickTextarea" :class="{ 'adb' : showComflag}">
                <textarea type="text" v-model="comment" placeholder="输入评论..." :class="{ 'bn' : showComflag}"></textarea>
                <div class="df dffs" v-show="showComflag">
                  <div class="imgarea" v-for="(imgUrl, index) in imgId" :key="index">
                    <img id="imgcon" :src="imgUrl" />
                    <p class="iconfont myfont cp" @click="delPic(index)">&#xe607;</p>
                  </div>
                </div>
              </div>
              <div class="operate df dfsb"  v-show="showComflag">
                <div class="insert df dffs" @click="settingEvent($event)">
                  <p>
                    <span class="cp" @click="clickSetting">😊表情</span>
                    <span class="emoji" v-show="showSettingCon">
                      <EmojiSelector @choose="chooseEmoji" />
                    </span>
                  </p>
                  <p class="pic">
                    <input
                      class="cp"
                      type="file"
                      style="opcity: 0"
                      @change="upimg($event)"
                      name="img"
                    />
                    <span @mousedown="h">
                      <span class="iconfont myfont">&#xe61a;</span>图片
                    </span>
                  </p>
                </div>
                <div
                  class="remark cp" @click="addCommand(thistoken, comment, getCurrtData.article_id)">评论</div>
              </div>
            </div>
          </div>
          <div class="commentList">
            <div
              class="first-comment df df-ai-fs"
              v-for="(firstcomment, i) in commentData"
              :key="i"
            >
              <div class="box" @mouseover="showInfo(firstcomment)" @mouseout="closeInfo">
                <img :src="firstcomment.icon" class="cp" @mousedown="h"/>
                <div class="pad1" v-show="showInfofalg && flag == firstcomment.created_at&&!showComflag">
                  <div class="msg df col">
                    <div class="author-item df dffs">
                      <img :src="firstcomment.icon" />
                      <div class="name">
                        <p class="title">
                          {{ firstcomment.nick_name }}
                          <span>Lv4</span>
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
              </div>
              <div class="first-info">
                <div class="name">
                  {{ firstcomment.nick_name }}
                  <span class="rank">Lv4</span>
                  <span>Web前端</span>
                </div>
                <div class="text">
                  <p>{{ firstcomment.comment_info.text}}</p>
                  <div class="df dffs">
                    <div
                      class="imgarea"
                      v-for="(imgUrl, index) in firstcomment.comment_info.img"
                      :key="index"
                    >
                      <img id="imgcon" :src="imgUrl" />
                    </div>
                  </div>
                </div>
                <div class="more df dfsb">
                  <div class="date">{{ getUptime(firstcomment.created_at) }}</div>
                  <div class="df">
                    <div class="giveLike cp">
                      <span class="iconfont myfont">&#xe610;</span>
                    </div>
                    <div class="reply df cp" @click="reply(firstcomment,$event)">
                      <span class="iconfont myfont">&#xe8b4;</span>回复
                    </div>
                  </div>
                </div>
                <div class="comment-area"  v-show="replybox && flag == firstcomment.comment_id" @mousedown="h">
                  <div class="input" :class="{ 'adb' : replybox}" @mousedown="h">
                    <textarea
                      type="text"
                      v-model="replycon"
                      placeholder="输入评论..."
                      :class="{ 'bn' : replybox}"
                    ></textarea>
                    <div class="df dffs"  @mousedown="h">
                      <div class="imgarea" v-for="(imgUrl, index) in imgId" :key="index">
                        <img id="imgcon" :src="imgUrl"/>
                        <p class="iconfont myfont cp" @click="delPic(index)">&#xe607;</p>
                      </div>
                    </div>
                  </div>
                  <div class="operate df dfsb" @mousedown="h">
                    <div class="insert df dffs" @click="settingEvent($event)">
                      <p>
                        <span class="cp" @click="clickSetting">😊表情</span>
                        <span class="emoji" v-show="showSettingCon">
                          <EmojiSelector @choose="chooseEmoji1" />
                        </span>
                      </p>
                      <p class="pic cp">
                        <input type="file" style="opcity: 0" @change="upimg($event)" name="img" />
                        <span class="cp">
                          <span class="iconfont myfont">&#xe61a;</span>图片
                        </span>
                      </p>
                    </div>
                    <div
                      class="remark"
                      @click="
                      addCommand(
                        thistoken,
                        replycon,
                        getCurrtData.article_id,
                        firstcomment.comment_id
                      )
                      "
                    >评论</div>
                  </div>
                </div>
                <div
                  class="second-comment first-comment df df-ai-fs"
                  v-for="(secondcomment, j) in firstcomment.child"
                  :key="j"
                >
                  <div class="box" @mouseover="showInfo(secondcomment)" @mouseout="closeInfo">
                    <img :src="secondcomment.icon" class="cp" />
                    <div class="pad1" v-show="showInfofalg && flag == secondcomment.comment_id">
                      <div class="msg df col">
                        <div class="author-item df dffs">
                          <img :src="secondcomment.icon" />
                          <div class="name">
                            <p class="title">
                              {{ secondcomment.nick_name }}
                              <span>Lv4</span>
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
                  </div>
                  <div class="second-info first-info">
                    <div class="name">
                      {{ secondcomment.nick_name }}
                      <span class="rank">Lv4</span>
                      <span>Web前端</span>
                    </div>
                    <div class="text">{{ secondcomment.comment_info.text }}
                      <div class="df dffs">
                    <div
                      class="imgarea"
                      v-for="(imgUrl, index) in secondcomment.comment_info.img"
                      :key="index"
                    >
                      <img id="imgcon" :src="imgUrl" />
                    </div>
                  </div>
                    </div>
                    <div class="more df dfsb">
                      <div class="date">{{ getUptime(secondcomment.created_at) }}</div>
                      <div class="df">
                        <div class="giveLike">
                          <span class="iconfont myfont">&#xe610;</span>
                        </div>
                        <div class="reply df" @click="reply(secondcomment,$event)">
                          <span class="iconfont myfont">&#xe8b4;</span>回复
                        </div>
                      </div>
                    </div>
                    <div
                      class="comment-area"
                      style="background-color: white"
                      v-show="replybox && flag == secondcomment.comment_id"
                    >
                      <div class="input" :class="{ 'adb' : replybox}">
                        <textarea
                          type="text"
                          v-model="replycon"
                          placeholder="输入评论..."
                          :class="{ 'bn' : replybox}"
                        ></textarea>
                        <div class="df dffs">
                          <div class="imgarea" v-for="(imgUrl, index) in imgId" :key="index">
                            <img id="imgcon" :src="imgUrl" />
                            <p class="iconfont myfont cp" @click="delPic(index)">&#xe607;</p>
                          </div>
                        </div>
                      </div>
                      <div class="operate df dfsb" @mousedown="h">
                        <div class="insert df dffs" @click="settingEvent($event)">
                          <p>
                            <span class="cp" @click="clickSetting">😊表情</span>
                            <span class="emoji" v-show="showSettingCon">
                              <EmojiSelector @choose="chooseEmoji1" />
                            </span>
                          </p>
                          <p class="pic cp">
                            <input
                              type="file"
                              id="file"
                              style="opcity: 0"
                              @change="upimg($event)"
                              name="img"
                            />
                            <span>
                              <span class="iconfont myfont">&#xe61a;</span>图片
                            </span>
                          </p>
                        </div>
                        <div
                          class="remark"
                          @click="
                          addCommand(
                            thistoken,
                            replycon,
                            getCurrtData.article_id,
                            firstcomment.comment_id
                          )
                          "
                        >评论</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="side df col">
        <div class="authorList">
          <p class="aboutAuthor">关于作者</p>
          <div>
            <div class="author-item df dffs">
              <!-- <p class="photo"> -->
                <img class="users-img" :src="getCurrtData.icon" />
              <!-- </p> -->
              <div class="name">
                <p>
                  {{ getCurrtData.nick_name }}
                  <span>Lv4</span>
                </p>
                <p class="identity">前端工程师@云的世界</p>
              </div>
            </div>
            <div class="getLike">
              <span class="iconfont myfont">&#xe610;</span>
              获得点赞 {{ getCurrtData.pv }}
            </div>
            <div class="getread">
              <span class="iconfont myfont">&#xe6cc;</span>获得阅读 3,788
            </div>
          </div>
        </div>
        <div class="client df">
          <img src="../../assets/img/icon/QR-code.png" alt />
          <div>
            <p class="blackfont">下载掘金客户端</p>
            <p class="grayfont">一个帮助开发者成长的社区</p>
          </div>
        </div>
        <div class="quickinport df col df-ai-fs">
          <p class="aboutArticle">相关文章</p>
          <div class="item">
            <p class="intro oh1">前端工程师@云的世界前端工程师@云的世界前端工程师@云的世界</p>
            <div class="more df dffs">
              <p>
                <span class="iconfont myfont">&#xe610;</span>5221
              </p>
              <p>
                <span class="iconfont myfont">&#xe8b4;</span>64
              </p>
            </div>
          </div>
          <div class="item">
            <p class="intro">前端工程师@云的世界</p>
            <div class="more df dffs">
              <p>
                <span class="iconfont myfont">&#xe610;</span>5221
              </p>
              <p>
                <span class="iconfont myfont">&#xe8b4;</span>64
              </p>
            </div>
          </div>
          <div class="item">
            <p class="intro">前端工程师@云的世界</p>
            <div class="more df dffs">
              <p>
                <span class="iconfont myfont">&#xe610;</span>5221
              </p>
              <p>
                <span class="iconfont myfont">&#xe8b4;</span>64
              </p>
            </div>
          </div>
        </div>
        <div class="contents df col df-ai-fs" ref="clientBox">
          <p>目录</p>
          <ul class="first-level">
            <div class="cont cp" @click="turnTo($event,index)" v-for="(item ,index) in content" :key="index">
              <li :id="changeblueflag&&indexflag==index  ? 'changeblue':''">
                <a>{{item.text}}</a>
                <ul class="second-level" v-for="(items ,indexs) in item.children" :key="indexs">
              <div class="cont1 cp">
                <li>
                  <a>{{items.text}}</a>
                  <ul class="third-level" v-for="(itemss ,indexss) in items.children" :key="indexss">
                <div class="cont2 cp">
                  <li>
                    <a>{{itemss.text}}</a>
                  </li>
                </div>
              </ul>
                </li>
              </div>
             
            </ul>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
  <script>
import axios from "axios";
import EmojiSelector from "./EmojiSelector";
export default {
  name: "Comment",
  components: {
    EmojiSelector,
  },
  data() {
    return {
      content:[
        {
            "text":"标题"
        },
        {
            "text":"内容",
            "children":[
                {
                    "text":"什么样的场景"
                },
                {
                    "text":"this关键字",
                    "children":[
                        {
                            "text":"console.log的用法"
                        },
                        {
                            "text":"路由重定向"
                        }
                    ]
                },
                {
                    "text":"触底加载"
                },
                {
                    "text":"ref"
                }
            ]
        },
        {
            "text":"感谢"
        },
        {
            "text":"往期推荐"
        },
        {
            "text":"评论区"
        }
    ],
      renderData: [],
      err: "失踪了",
      accountvalue: "",
      pswvalue: "",
      showfalg1: false,
      showfalg2: false,
      showfalg3: false,
      showInfofalg: false,
      showComflag: false,
      flag: "",
      replybox: false,
      thistoken: window.localStorage.getItem("token"),
      comment: "",
      replycon: "",
      commentData: [],
      imgId: [],
      renderImg: [],
      showSettingCon: false,
      currtTag:"",
      changeblueflag:false,
      indexflag: 0,
      // beforeData:[],
    };
  },
  methods: {
    turnTo(e,_index) {
      this.indexflag = _index;
      if(e.target.innerText=="标题"){
        this.$refs.head.scrollIntoView({ block: "center"});
      }
      if(e.target.innerText=="内容"){
        this.$refs.info.scrollIntoView({ block: "center"});
      }
      if(e.target.innerText=="感谢"){
        this.$refs.thanks.scrollIntoView({ block: "center"});
      }
      if(e.target.innerText=="往期回顾"){
        this.$refs.before.scrollIntoView({ block: "center"});
      }
      if(e.target.innerText=="评论区"){
        this.$refs.com.scrollIntoView({ block: "center"});
      }
      this.changeblueflag = true;
    },
    delPic(_index) {
      this.imgId.splice(_index, 1);
      console.log(this.imgId);
    },
    chooseEmoji(item) {
      this.comment = this.comment + item;
    },
    chooseEmoji1(item) {
      this.replycon = this.replycon + item;
    },
    showSetting() {
      this.$set(this, "showSettingCon", false);
      this.$set(this, "showComflag", false);
      //全局区域内点击时showSettingCon均为false
    },
    settingEvent(event) {
      event.stopPropagation(); //此区域不受上面方法的影响
    },
    TextareaEvent(event) {
      event.stopPropagation(); //此区域不受上面方法的影响
    },
    clickSetting() {
      this.$set(this, "showSettingCon", !this.showSettingCon);
    },
    clickTextarea() {
      if (window.localStorage.getItem("token")) {
        this.$set(this, "showComflag", true);
      } else {
        this.$store.commit("LOGIN");
        if(window.localStorage.getItem("token")){
          this.$set(this, "showComflag", true);
        }
      }
      this.replybox = false;
    },
    upimg(e,_tag) {
      let file = e.target.files[0];
      let params = new FormData();
      params.append("img", file);
      axios
        .post("http://api_devss.wanxikeji.cn/api/savePic", params)
        .then((res) => {
          this.imgId.push("http://api_devss.wanxikeji.cn/" + res.data.data);
        });
    },
    
    reply(_tag,e) {
      this.showComflag = false;
      this.replybox = !this.replybox;
      let node =  e.currentTarget.parentNode.parentNode.nextSibling.children[0].firstChild;
      setTimeout(() => {
        node.focus();
      }, 0);
      this.flag = _tag.comment_id;
      this.comment = "";
      this.replycon = "";
    },
    closeReply(){
      this.replybox = false;
    }, 
    h(e) {
      e.preventDefault();
      e.stopPropagation();
    },
    addCommand(_token, _text, _article_id, _father_id) {
      this.renderImg = [];
      this.imgId.forEach((item) => {
        this.renderImg.push(item);
      });
      axios
      .post("http://api_devss.wanxikeji.cn/api/addComment", {
        token: this.thistoken,
        comment_info: JSON.stringify(({"text":_text,"img":this.renderImg})),
        article_id: _article_id,
        father_id: _father_id,
      })
      .then((res) => {
          console.log(res.data);
          if (this.comment != "" || this.replycon != ""||this.imgId!=[]) {
            this.getCommentInfo();
            this.replybox = false;
            this.comment = "";
          } else {
            this.comment = "评论不能为空";
          }
        })
        .catch((err) => {
          console.log(err);
        });
        this.$set(this, "showComflag", false);
    },
    getCommentInfo() {
      console.log(123);
      setTimeout(() => {
        axios
          .post("http://api_devss.wanxikeji.cn/api/articleInfo", {
            article_id: this.getCurrtData.article_id,
          })
          .then((res) => {
            console.log(888);
            this.commentData = res.data.data.data;
            if(this.commentData!=[]){
              for(let i=0; i<this.commentData.length; i++){
                let item = this.commentData[i];
                if(typeof( eval('('+item.comment_info+')'))=="object"){
                  item.comment_info = eval('('+item.comment_info+')');
                }
                for(let j=0; j<item.child.length; j++){
                  let children = item.child[j];
                if(typeof( eval('('+children.comment_info+')'))=="object"){
                  children.comment_info = eval('('+children.comment_info+')');
                }
                }
              }
            }
          })
          .catch((err) => {
            console.log(err);
          });
      }, 1000);
      this.imgId = [];
    },
    getLoginInfo() {
      console.log(this.accountvalue, this.pswvalue);
      axios
        .post("http://api_devss.wanxikeji.cn/api/login", {
          name: this.accountvalue,
          pw: this.pswvalue,
        })
        .then((res) => {
          console.log(res.data.data);
          if (res.data.data.length != 0) {
            window.localStorage.setItem("token", res.data.data.token);
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
    getDate(_created_at) {
      Date.prototype.toLocaleString = function () {
        return (
          this.getFullYear() +
          "年" +
          (this.getMonth() + 1) +
          "月" +
          this.getDate() +
          "日 "
        );
      };
      var unixTimestamp = new Date(_created_at * 1000);
      let ommonTime = unixTimestamp.toLocaleString();
      return ommonTime;
    },
    handleScroll1() {
      //页面滚动高度
      let scroll =
        document.documentElement.scrollTop || document.body.scrollTop;
      let clientBoxTop = this.$refs.clientBox.offsetTop;
      let topheight = clientBoxTop - scroll;
      if (topheight < 0) {
        this.$refs.clientBox.style.position = "fixed";
        this.$refs.clientBox.style.top = "100px";
        this.$refs.clientBox.style.width = "240px";
      }
      if (scroll < 1000) {
        this.$refs.clientBox.style.position = "";
        this.$refs.clientBox.style.top = "";
      }
    },
    showInfo(_tag) {
      this.showInfofalg = true;
      this.flag = _tag.created_at;
    },
    closeInfo() {
      this.showInfofalg = false;
    },
  },
  created() {
    this.getUptime();
  },
  computed:{
    getCurrtData(){
      return JSON.parse(window.localStorage.getItem("currtData"));
    },
    getbeforeData(){
      return JSON.parse(window.localStorage.getItem("beforeData"));
    },
    getPageNum(){
      return JSON.parse(window.localStorage.getItem("pageNum"));
    },
  },
  mounted() {
    //进入页面开始监听
    window.addEventListener("scroll", this.handleScroll1);
    window.addEventListener('click',e => { 
      if(!this.$el.contains(e.target)){
        this.replybox = false//点击其他区域关闭
      }
    });
    this.getCommentInfo();
  },
  beforeDestroy() {
    //离开页面取消监听
    window.removeEventListener("scroll", this.handleScroll1, false);
  },
};
</script>
  <style lang="scss" scoped>
@import "../../assets/scss/Comment.scss";
@import "../../assets/scss/Index.scss";
@import "../../assets/scss/markdown.scss";
</style>
  