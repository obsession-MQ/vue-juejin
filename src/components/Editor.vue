<template>
    <div class="mardkown" @click="showSetting">
        <header class="header">
            <div class="left-box"></div>
            <input
                type="text"
                placeholder="输入文章标题..."
                maxlength="80"
                spellcheck="false"
                class="title-input title-input"
                v-model="title"
            />
            <div class="right-box" @click="settingEvent($event)">
                <div class="statu-text padding">保存成功</div>
                <button class="xitu-btn padding xitu-btn-ontiline">草稿箱</button>
                <div class="publsh-popup padding">
                    <button class="xitu-btn" @click="clickSetting">发布</button>
                    <div class="panel" v-show="showSettingCon">
                        <div class="title">发布文章</div>
                        <div class="form-item">
                            <div class="label requeired category-label">分类：</div>
                            <div class="form-item-content category-list">
                                <div
                                    class="item"
                                    v-for="(item,index) in category"
                                    :class="{ active: currentIndex === index }"
                                    @click="itemclick(index, item)"
                                >{{ item }}</div>
                            </div>
                        </div>
                        <div class="form-item">
                            <div class="label requeired">添加标签：</div>
                            <div class="form-item-content">
                                <el-select
                                    v-model="name"
                                    filterable
                                    allow-create
                                    clearable
                                    default-first-option
                                    placeholder="请搜索添加标签"
                                    class="select"
                                    popper-class="select-popper"
                                >
                                    <el-option
                                        v-for="item in options"
                                        :key="item.name"
                                        :label="item.label"
                                        :value="item.name"
                                    ></el-option>
                                </el-select>
                            </div>
                        </div>
                        <div class="form-item">
                            <div class="label">文章封面：</div>
                            <div class="form-item-content">
                                <div class="avatar-input">
                                    <div class="avatar-info">
                                        <div class="avatar-upload upload">
                                            <div class="button-slot">
                                                <img
                                                    data-v-cfaa5564
                                                    src="//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web_editor/img/add.0e2d17b6.svg"
                                                    height="20"
                                                    alt="add_cover"
                                                />
                                                <div class="uploads">上传封面</div>
                                            </div>
                                            <img :src="img" alt class="lazy avatar avatar" />
                                            <input
                                                type="file"
                                                class="myUpload"
                                                @change="change"
                                                accept="image/jpeg/png/gif"
                                            />
                                        </div>
                                        <div class="description">建议尺寸：1303*734px</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="form-item colum-line">
                            <div class="label">收录至专栏：</div>
                            <div class="form-item-content">
                                <div class="container">
                                    <div class="byte-select byte-select--normal" @click="byitem">
                                        <div class="byte-select__wrap">
                                            <div class="byte-select__content-wrap">
                                                <div
                                                    class="byte-select__placeholder"
                                                >请搜索添加专栏，同一篇文章最多添加三个专栏</div>
                                                <input
                                                    type="text"
                                                    class="byte-select__input"
                                                    style="width:100%"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="byitem" v-show="isbyitem">
                                        <div class="byitems">
                                            <span>
                                                你还没有创建任何专栏，快去
                                                <a href="/">创建专栏</a>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="summary-box form-item">
                            <div class="label">编辑摘要：</div>
                            <div class="summary form-item-content">
                                <span style="color: rgb(238, 77, 56);">0/100</span>
                                <div class="summary-textarea byte-input byte-input--normal">
                                    <textarea
                                        rows="5"
                                        maxlength="100"
                                        spellcheck="false"
                                        class="byte-input__textarea"
                                        v-model="textarea"
                                    ></textarea>
                                    <div class="byte-loading" style="display: none;">
                                        <div class="byte-loading__spinner">
                                            <i class="circular byte-icon byte-icon--loading">
                                                <svg
                                                    t="1553157954893"
                                                    class="icon"
                                                    viewBox="0 0 1024 1024"
                                                    version="1.1"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    p-id="2605"
                                                    xmlns:xlink="http://www.w3.org/1999/xlink"
                                                >
                                                    <path
                                                        d="M980.752 313.697c-25.789-60.972-62.702-115.725-109.713-162.736-47.012-47.011-101.764-83.924-162.736-109.713C645.161 14.542 578.106 1 509 1c-2.242 0-4.48 0.015-6.715 0.043-16.567 0.211-29.826 13.812-29.615 30.38 0.209 16.438 13.599 29.618 29.99 29.618l0.39-0.002c1.98-0.026 3.963-0.039 5.95-0.039 61.033 0 120.224 11.947 175.93 35.508 53.82 22.764 102.162 55.359 143.683 96.879s74.115 89.862 96.88 143.683C949.054 392.776 961 451.967 961 513c0 16.568 13.432 30 30 30s30-13.432 30-30c0-69.106-13.541-136.162-40.248-199.303z"
                                                        p-id="2606"
                                                    />
                                                </svg>
                                            </i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="footer">
                            <div class="btn-container">
                                <button
                                    class="ui-btn btn line medium default"
                                    style="margin-right: 16px;"
                                    @click="clickSetting"
                                >取消</button>
                                <button class="ui-btn btn primary default" @click="sumbit">确定并发布</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="editor-switcher editor-switcher with-padding">
                    <el-button type="text" @click="open">
                        <div class="toggle-btn">
                            <img src="../assets/img/svg/写文章 - 掘金-2.svg" alt class="btn-logo" />
                        </div>
                        <div class="panels hover">切换为富文本编辑器</div>
                    </el-button>
                </div>
                <Dropdown />
            </div>
            <div class="confirm" ref="tipbox">{{ err }}</div>
        </header>
        <div class="markdowns">
            <Editor
                :value="value"
                :plugins="plugins"
                @change="handleChange"
                :locale="languages"
                :uploadImages="Image"
            />
        </div>
    </div>
</template>
  
<script>
import axios from "axios"
import 'bytemd/dist/index.min.css'
import { Editor } from '@bytemd/vue'
import gfm from '@bytemd/plugin-gfm'
import highlight from "@bytemd/plugin-highlight-ssr";
import zh_Hans from "../../node_modules/bytemd/lib/locales/zh_Hans.json"
import math from "@bytemd/plugin-math"
import mermaid from '@bytemd/plugin-mermaid'
import Dropdown from "@/components/Dropdown.vue"
const plugins = [
    gfm(),
    highlight(),
    math(),
    mermaid()
    // Add more plugins here
];
export default {
    data() {
        return {
            value: '', plugins,
            options: [{
                name: '前端',
                label: '前端'
            },
            {
                name: '后端',
                label: '后端'
            },
            {
                name: 'JavaScript',
                label: 'JavaScript'
            },
            {
                name: 'Github',
                label: 'Github'
            },
            {
                name: '面试',
                label: '面试'
            },
            {
                name: '架构',
                label: '架构'
            },
            {
                name: '代码规范',
                label: '代码规范'
            },
            {
                name: 'Vue.js',
                label: 'Vue.js'
            },
            {
                name: '算法',
                label: '算法'
            },
            {
                name: 'CSS',
                label: 'CSS'
            }
            ],
            languages: zh_Hans,
            showSettingCon: false,
            isbyitem: false,
            category: [
                "后端",
                "前端",
                "Android",
                "iOS",
                "人工智能",
                "开发工具",
                "代码人生",
                "阅读"
            ],
            currentIndex: "-1",
            title: '',
            item: '',
            image: '',
            name: [],
            textarea: "",
            categoryitem: "",
            err: "",
            img: ""
        }
    },
    components: { Editor, Dropdown },
    methods: {
        handleChange(v) {
            this.value = v
        },
        Image(files) {
            return Promise.all(
                files.map(async (file) => {
                    let param = new FormData()
                    param.append("img", file)
                    let that = await this.myPromise(param)
                    return {
                        url: "http://api_devss.wanxikeji.cn/" + that + ""
                    }
                })
            )
        },
        myPromise(param) {
            return axios.post("http://api_devss.wanxikeji.cn/api/savePic", param)
                .then((res) => {
                    console.log(res);
                    this.image = res.data.data
                    return res.data.data
                })
        },
        showSetting() {
            this.$set(this, 'showSettingCon', false);
            //全局区域内点击时showSettingCon均为false
        },
        settingEvent(event) {
            event.stopPropagation(); //此区域不受上面方法的影响
        },
        clickSetting() {
            this.$set(this, 'showSettingCon', !this.showSettingCon)
            //事件触发时showSettingCon显示隐藏状态互换
        },
        byitem() {
            this.isbyitem = !this.isbyitem;
        },
        itemclick(index, item) {
            this.currentIndex = index;
            this.categoryitem = item
        },
        open() {
            this.$confirm('切换写作模式后，当前内容不会迁移，但会自动保存为草稿。', '切换为富文本编辑器', {
                distinguishCancelAndClose: true,
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                customClass: 'confirm-dialog'
            })
        },
        change(e) {
            let file = e.target.files[0]
            let param = new FormData()
            param.append("img", file)
            axios.post("http://api_devss.wanxikeji.cn/api/savePic", param)
                .then((res) => {
                    this.img = res.data.data
                    console.log(this.img);
                })
        },
        sumbit() {
            axios.post("http://api_devss.wanxikeji.cn/api/addModifyArticle", {
                token: localStorage.getItem("token"),
                title: this.title,
                info: document.querySelector(".bytemd-preview").innerHTML,
                tags_name: ["前端", "后端"],
                article_type: this.categoryitem,
                describe: this.textarea,
                pic: `http://api_devss.wanxikeji.cn/${this.img}`,
                type: 1
            }).then((res) => {
                if (this.title.trim() == "") {
                    this.$refs.tipbox.style.display = "block";
                    this.err = "标题不能为空";
                    setTimeout(() => {
                        this.$refs.tipbox.style.display = "none";
                    }, 2000)
                } else if (this.value.trim() == "") {
                    this.$refs.tipbox.style.display = "block";
                    this.err = "内容不能为空";
                    setTimeout(() => {
                        this.$refs.tipbox.style.display = "none";
                    }, 2000)
                } else if (this.category.trim() == "") {
                    this.$refs.tipbox.style.display = "block";
                    this.err = "请选择分类";
                    setTimeout(() => {
                        this.$refs.tipbox.style.display = "none";
                    }, 2000)
                } else if (this.name.trim() == "") {
                    this.$refs.tipbox.style.display = "block";
                    this.err = "请选择标签";
                    setTimeout(() => {
                        this.$refs.tipbox.style.display = "none";
                    }, 2000)
                } else if (this.textarea.trim() == "") {
                    this.$refs.tipbox.style.display = "block";
                    this.err = "摘要不满足最低50字数";
                    setTimeout(() => {
                        this.$refs.tipbox.style.display = "none";
                    }, 2000)
                } else {
                    this.$router.push("/recommended")
                }
            }).catch((err) => { console.log(err); })
        },
    },
};
</script>
<style lang="scss" scoped>
/deep/ .bytemd {
    height: 93vh;
}
@import "../assets/scss/Editor.scss";
.confirm-dialog {
    padding: 16px 20px;
    width: 456px;
    max-width: 100%;
    background-color: #fff;
    border: 1px solid #b2b5ba66;
    box-shadow: 0 1px 2px 0 #0000003d;
    .el-message-box__header {
        font-size: 17.004px;
        font-weight: 600;
        color: #000;
        cursor: default;
    }
    .el-message-box__content {
        font-size: 14.4px;
        line-height: 1.7;
        color: #333;
        user-select: text;
    }
    .el-message-box__btns {
        .el-button {
            padding: 7px 22px;
            font-size: 14.4px;
            color: #a5a5a5;
            background-color: #fff;
            border: none;
            border-radius: 3px;
            outline: none;
            cursor: pointer;
        }
        .el-button--primary {
            color: #1288ff;
            border: 1px solid currentColor;
            span {
                &:hover {
                    opacity: 0.5;
                }
            }
        }
    }
}
.confirm {
    width: 200px;
    height: 30px;
    position: absolute;
    right: 2%;
    top: 2%;
    z-index: 100;
    color: #e33;
    background-color: #f6e3e3;
    border: 1px solid #e99;
    display: none;
    text-align: center;
    line-height: 30px;
}
.avatar-input {
    .avatar-info {
        width: 160px;
        height: 86px;
        background-color: #fafafa;
        border: 1px dashed #e5e6eb;
        margin-bottom: 16px;
        .button-slot {
            cursor: pointer;
            display: flex;
            flex-flow: column nowrap;
            position: fixed;
            z-index: 100;
            padding-top: 20px;
            .uploads {
                font-weight: 400;
                font-size: 14px;
                line-height: 22px;
                color: #86909c;
                margin-top: 10px;
                padding-left: 50px;
            }
            img {
                border-style: none;
                padding-left: 50px;
            }
        }
        .avatar-upload {
            position: relative;
        }
        .upload {
            width: 160px;
            height: 86px;
            margin-bottom: 16px;
            .avatar {
                width: 100%;
                height: 100%;
                display: inline-block;
                position: relative;
                background-size: cover;
                background-color: #eee;
                position: absolute;
                &:before {
                    content: "";
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background-color: inherit;
                    border-radius: inherit;
                }
            }
            .myUpload {
                position: absolute;
                opacity: 0;
                z-index: 100;
                cursor: pointer;
                width: 160px;
                height: 86px;
            }
        }
        .description {
            color: #86909c;
            font-size: 12px;
            line-height: 17px;
            font-weight: 400;
        }
    }
}
</style>
  