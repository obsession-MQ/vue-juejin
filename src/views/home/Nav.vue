<template>
    <header class="main-header visible main-header unauthorized">
        <div class="container">
            <a href="/" class="logo" data-v-8c1a0f22>
                <img
                    src="//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/dcec27cc6ece0eb5bb217e62e6bec104.svg"
                    alt="掘金"
                    class="logo-img"
                />
            </a>
            <div id="Nav" class="tabBar" @click="handleTabBarClick">
                <div class="tabBarContent">
                    <ul class="navLeft">
                        <li
                            v-for="(item, index) in itemList"
                            :key="index"
                            @click="handleAClick(item.title)"
                        >
                            <router-link
                                :to="item.path"
                                :class="[currentClick === item.title ? 'aActive' : 'aNormal']"
                            >
                                {{ item.title }}
                                <img :src="item.img" />
                            </router-link>
                        </li>
                    </ul>
                    <ul class="navRight">
                        <li v-if="islogin">
                            <button @click="Login">登录</button>
                        </li>
                        <li>
                            <DropdownHome v-if="islogin == false" />
                        </li>
                        <li class="subNav" @click="handleAClick('bell')">
                            <router-link to="#" class="bell"></router-link>
                        </li>
                        <li class="subNav writeArticle">
                            <div class="more" @click.stop>
                                <router-link to @click.native="CLogin">
                                    <span>写文章</span>
                                </router-link>
                                <p></p>
                                <a @click="handleWriteArticle">
                                    <img src="../../assets/img/svg/weizhi.svg" alt />
                                </a>
                            </div>
                            <ul v-if="isShow">
                                <li>
                                    <router-link to="/editor">发布沸点</router-link>
                                </li>
                            </ul>
                        </li>
                        <li class="subNav create">
                            <router-link to @click.native="CLogin">
                                <span>创作者中心</span>
                            </router-link>
                        </li>
                        <li
                            class="subNav"
                            :class="[isInputFocus ? 'inputSearchFocus' : 'inputSearch']"
                        >
                            <router-link to="#">
                                <img src="../../assets/img/svg/search.svg" alt />
                            </router-link>
                            <input
                                type="text"
                                placeholder="搜索掘金"
                                @focus="inputFocus"
                                @blur="inputBlur"
                            />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </header>
</template>
<script>
import DropdownHome from "../../components/DropdownHome.vue"
export default {
    name: "Nav",
    // inject: ['reload'],
    data() {
        return {
            itemList: [
                {
                    path: "/recommended",
                    title: "首页",
                },
                {
                    path: "/pins",
                    title: "沸点"
                },
                {
                    path: "/pins",
                    title: "资讯",
                },
                {
                    path: "/pins",
                    title: "小册",
                },
                {
                    path: "/pins",
                    title: "活动",
                },
                {
                    path: "/",
                    img: require("../../assets/img/svg/xiazai.svg"),
                },
            ],
            currentClick: "首页",
            isInputFocus: false,
            isShow: false,
            isMenuShow: false,
            islogin: true,
            showNavFalg: true,
        };
    },
    methods: {
        handleAClick: function (title) {
            this.currentClick = title;
        },
        inputFocus: function () {
            this.isInputFocus = true;
        },
        inputBlur: function () {
            this.isInputFocus = false;
        },
        handleWriteArticle: function () {
            this.isShow = !this.isShow;
            if (this.isMenuShow) {
                this.isMenuShow = !this.isMenuShow;
            }
        },
        handleTabBarClick: function () {
            if (this.isShow) {
                this.isShow = !this.isShow;
            }
            if (this.isMenuShow) {
                this.isMenuShow = !this.isMenuShow;
            }
        },
        handleMenuClick: function () {
            this.isMenuShow = !this.isMenuShow;
            if (this.isShow) {
                this.isShow = !this.isShow;
            }
        },
        Login() {
            this.$store.commit("LOGIN");
        },
        CLogin() {
            if (localStorage.getItem("token")) {
                this.$router.push("/editor")
            } else {
                this.$store.commit("LOGIN");
            }
        }
    },
    components: {
        DropdownHome
    },
    created() {
        if (localStorage.getItem("token")) {
            this.islogin = false;
        } else {
            this.islogin = true;
        }
    },
};
</script>
<style lang="scss" scoped>
@import "../../assets/scss/Nav.scss";
</style>