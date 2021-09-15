<template>
    <div class="sub-view-box shando">
        <div class="setting-profile-view">
            <div class="nav-text">个人资料</div>
            <div class="user-infos">
                <div class="info-input">
                    <form action class="form byte-form byte-form--label-right">
                        <div class="divide"></div>
                        <div class="byte-form byte-form-item">
                            <label for class="byte-form-label" style="width:56px">用户名</label>
                            <el-input
                                type="text"
                                placeholder="请输入用户名"
                                v-model="text"
                                maxlength="20"
                                show-word-limit
                                @blur="blur"
                            ></el-input>
                            <div class="byte-form-item__tips" v-show="ishow">用户名不能为空</div>
                        </div>
                        <div class="divide"></div>
                        <div class="byte-form byte-form-item">
                            <label for class="byte-form-label" style="width:56px">职位</label>
                            <el-input
                                type="text"
                                placeholder="填写你的职位"
                                maxlength="50"
                                show-word-limit
                                v-model="Position"
                            ></el-input>
                        </div>
                        <div class="divide"></div>
                        <div class="byte-form byte-form-item">
                            <label for class="byte-form-label" style="width:56px">公司</label>
                            <el-input
                                type="text"
                                placeholder="填写你的公司"
                                maxlength="50"
                                show-word-limit
                                v-model="company"
                            ></el-input>
                        </div>
                        <div class="divide"></div>
                        <div class="byte-form byte-form-item">
                            <label for class="byte-form-label" style="width:56px">个人主页</label>
                            <el-input
                                type="text"
                                placeholder="请填写你的个人主页"
                                maxlength="100"
                                show-word-limit
                                v-model="person"
                            ></el-input>
                        </div>
                        <div class="divide"></div>
                        <div class="byte-form byte-form-item">
                            <label for class="byte-form-label ver-top" style="width:56px">个人介绍</label>
                            <el-input
                                type="textarea"
                                placeholder="填写职业技能、擅长的事情、喜欢的事情等"
                                maxlength="100"
                                show-word-limit
                                v-model="introduction"
                            ></el-input>
                        </div>
                        <div class="divide"></div>
                    </form>
                    <button class="ui-btn sava-btn primary" @click="Revise">保存修改</button>
                </div>
                <div class="avatar-input">
                    <div class="avatar-info">
                        <div class="avatar-upload upload">
                            <div class="click-cover" v-show="icon">
                                <i class="el-icon-circle-plus-outline byte-icon"></i>
                                <div class="click-text">点击修改头像</div>
                            </div>
                            <img :src="img" alt class="lazy avatar avatar" />
                            <input
                                type="file"
                                class="myUpload"
                                @mouseenter="enter"
                                @mouseleave="leave"
                                accept="image/gif, image/jpeg, image/png, image/jpg"
                                @change="change"
                            />
                        </div>
                        <div class="title">我的头像</div>
                        <div class="description">支持 jpg、png、jpeg 格式大小 5M 以内的图片</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from "axios"
export default {
    data() {
        return {
            text: "",
            Position: "",
            company: "",
            introduction: "",
            ishow: false,
            icon: false,
            img: "",
            person: "",
        }
    },
    inject: ['reload'],
    methods: {
        blur() {
            if (this.text === '') {
                this.ishow = true;
            } else {
                this.ishow = false;
            }
        },
        enter() {
            this.icon = true;
        },
        leave() {
            this.icon = false;
        },
        Revise() {
            axios.post("http://api_devss.wanxikeji.cn/api/userModify", {
                token: localStorage.getItem("token"),
                nick_name: this.text,
                qq: this.company,
                insert: this.introduction,
                real_name: this.person,
                icon: "http://api_devss.wanxikeji.cn/" + this.img + "",
            }).then((res) => {
                console.log(res);
                this.reload();
            }).catch((err) => console.log(err))
        },
        change(e) {
            let file = e.target.files[0]
            let param = new FormData()
            param.append("img", file)
            axios.post("http://api_devss.wanxikeji.cn/api/savePic", param)
                .then((res) => {
                    this.img = res.data.data
                })
        }
        // }
    },
    mounted() {
        axios.post("http://api_devss.wanxikeji.cn/api/userAllInfo", {
            token: localStorage.getItem("token"),
        }).then((res) => {
            this.text = res.data.data.nick_name
            this.company = res.data.data.qq
            this.position = ""
            this.person = res.data.data.real_name
            this.introduction = res.data.data.insert
            this.img = res.data.data.icon
            console.log(res);
        })
    }
}
</script>
<style lang="scss" scoped>
.sub-view-box {
    position: relative;
    padding: 20px;
    background-color: #fff;
    border-radius: 2px;
    box-sizing: border-box;
    background: #fff;
    width: calc(100% - 254px);
    min-height: 626px;
    .nav-text {
        font-weight: 600;
        font-size: 20px;
        line-height: 18px;
        color: #333;
        margin-bottom: 20px;
    }
    .user-infos {
        display: flex;
        .info-input {
            min-width: 240px;
            width: calc(100% - 340px);
        }
    }
    .byte-form {
        margin-bottom: 13px;
        white-space: nowrap;
    }
    .byte-form-label {
        font-weight: 500;
        font-size: 14px;
        color: #333;
        margin-left: 20px;
        margin-right: 30px;
        display: inline-block;
        text-align: left;
        padding-right: 0;
    }
}
/deep/ .el-input__inner {
    max-width: 440px;
    min-width: 100px;
    width: 100%;
    display: block;
    box-shadow: none;
    border: 1px solid #ddd;
    border-radius: 2px;
    transition: border 0.3s;
    background: rgba(245, 245, 245, 1);
    box-sizing: border-box;
    height: 32px;
    &:hover {
        background: #e5e6eb;
    }
    &:focus {
        background: #fff;
        border: 1px solid #1d7dfa;
    }
}
/deep/ .el-textarea__inner {
    max-width: 440px;
    min-width: 100px;
    width: 100%;
    display: block;
    box-shadow: none;
    border: 1px solid #ddd;
    border-radius: 2px;
    transition: border 0.3s;
    background: #fafafa;
    box-sizing: border-box;
    height: 140px;
    min-height: 30px;
    &:hover {
        background: #e5e6eb;
    }
    &:focus {
        background: #fff;
        border: 1px solid #1d7dfa;
    }
}
/deep/ .el-input__suffix {
    white-space: nowrap;
    width: 50px;
    right: 130px;
}
/deep/ .el-input__count {
    white-space: nowrap;
    width: 50px;
    right: 120px;
    background: transparent !important;
}
/deep/ .el-input__count-inner {
    background: transparent !important;
}
.byte-form-item__tips {
    color: #ee4d38;
    font-size: 12px;
    line-height: 22px;
    box-sizing: border-box;
    height: auto;
    padding-left: 106px;
    transition: all 0.5s;
}
.ver-top {
    vertical-align: top;
}
.sava-btn {
    margin-top: 24px;
    margin-left: 106px;
}
.ui-btn {
    padding: 7px 20px;
}
.primary {
    background-color: #1d7dfa;
    box-sizing: border-box;
    font-size: 14px;
    line-height: 22px;
    padding: 5px 16px;
    color: #fff;
    border: none;
    white-space: nowrap;
    cursor: pointer;
}
.shando {
    box-shadow: 0 1px 2px 0 #0000000d;
}
.divide {
    margin-left: 12px;
    margin-top: 13px;
    margin-bottom: 13px;
    width: 100%;
    border-top: 1px solid #eaeaea;
}
img {
    width: 16px;
}
.linkactive {
    background-color: red;
    color: #1d7dfa;
}
.avatar-input {
    padding-left: 74px;
    .avatar-info {
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        position: relative;
        width: 112px;
        .avatar-upload {
            position: relative;
        }
        .upload {
            width: 90px;
            height: 90px;
            .click-cover {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                color: #fff;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                border-radius: 50%;
                background-color: rgba(29, 33, 41, 0.5);
                z-index: 2;
                .byte-icon {
                    width: 20px;
                    height: 20px;
                    display: inline-block;
                    vertical-align: middle;
                    line-height: 1;
                    font-size: 20px;
                }
                .click-text {
                    font-size: 12px;
                    margin-top: 7px;
                    line-height: 17px;
                    font-weight: 400;
                }
            }
            .avatar {
                width: 100%;
                height: 100%;
                border-radius: 50%;
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
                width: 130px;
                height: 100px;
                opacity: 0;
                z-index: 100;
                cursor: pointer;
            }
        }
        .title {
            color: #1d2129;
            font-weight: 500;
            font-size: 14px;
            margin-top: 10px;
            margin-bottom: 8px;
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