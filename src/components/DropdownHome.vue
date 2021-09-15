<template>
    <div class="navigator main-navigator padding">
        <el-dropdown trigger="click">
            <div class="user-img">
                <img :src="img" alt class="users-img" />
            </div>
            <el-dropdown-menu slot="dropdown">
                <router-link
                    :to="item.path"
                    v-for="(item,index) in router"
                    :key="index"
                    :class="{ border: index === 1 || index === 5 }"
                >
                    <el-dropdown-item>
                        <i :class="item.icon"></i>
                        {{ item.name }}
                    </el-dropdown-item>
                </router-link>
                <div class="nav-menu-item-group" @click="exit">
                    <li class="nav-menu-item">
                        <i class="el-icon-switch-button" style="margin-right: 5px;"></i>
                        <span>退出</span>
                    </li>
                </div>
            </el-dropdown-menu>
        </el-dropdown>
    </div>
</template>
<script>
import axios from "axios"
export default {
    name: "dropdown",
    inject: ['reload'],
    data() {
        return {
            router: [
                {
                    path: '/editor',
                    name: '写文章',
                    icon: "el-icon-edit-outline"
                },
                {
                    path: '/',
                    name: '草稿',
                    icon: "el-icon-document"
                },
                {
                    path: '/home',
                    name: '我的主页',
                    icon: "el-icon-user-solid"
                },
                {
                    path: '/',
                    name: '我赞过的',
                    icon: "el-icon-thumb"
                },
                {
                    path: '/',
                    name: '我的小册',
                    icon: "el-icon-reading"
                },
                {
                    path: '/',
                    name: '我的收藏',
                    icon: "el-icon-star-on"
                },
                {
                    path: '/',
                    name: '签到赢好礼',
                    icon: "el-icon-s-claim"
                },
                {
                    path: '/',
                    name: '标签管理',
                    icon: "el-icon-collection"
                },
                {
                    path: '/',
                    name: '学学',
                    icon: "el-icon-edit"
                },
                {
                    path: '/setting/user',
                    name: '设置',
                    icon: "el-icon-s-tools"
                },
                {
                    path: '/',
                    name: '关于',
                    icon: "el-icon-question"
                },
            ],
            img: "",
        }
    },
    methods: {
        exit() {
            if (confirm("确定登出吗？每一片贫瘠的土地都需要坚定的挖掘者！")) {
                localStorage.removeItem("token")
                this.$store.commit("Dropdown");
                this.reload();
            } else {
            }
        },
    },
    mounted() {
        axios.post("http://api_devss.wanxikeji.cn/api/userAllInfo", {
            token: localStorage.getItem("token"),
        }).then((res) => {
            this.img = res.data.data.icon
        })
    },

}
</script>
<style lang="scss" scoped>
.navigator {
    .user-img {
        .users-img {
            border-radius: 50%;
            background-color: #eee;
            background-position: 50%;
            background-size: cover;
            background-repeat: no-repeat;
            cursor: pointer;
            width: 40px;
            height: 40px;
            &:hover {
                opacity: 0.8;
            }
        }
    }
    .el-dropdown-menu {
        margin-top: 1.3rem;
        top: 100%;
        right: -1.4rem;
        z-index: 20;
    }
}
.el-dropdown-menu {
    transform-origin: center top;
    z-index: 2003;
    position: fixed;
    left: 1200px;
    top: -146px;
}
.el-popper /deep/ .popper__arrow {
    border-bottom-color: #1ebef4 !important;
    left: 50% !important;
    visibility: hidden;
}
.el-dropdown-menu {
    margin-top: 15.6px;
    min-width: 168px;
    font-size: 15px;
    color: #909090;
    white-space: nowrap;
    background-color: #fff;
    border: 1px solid rgba(177, 180, 185, 0.45);
    border-radius: 4px;
    box-shadow: 0 1px 2px 0 #0000001a;
    a {
        color: #909090;
        text-decoration: none;
    }
}
.el-dropdown-menu__item {
    padding: 2px 20px;
    &:hover {
        background-color: #f8f8f8;
    }
}
.nav-menu-item-group {
    color: #606266;
    text-decoration: none;
    padding: 2px 20px;
    border-top: 1px solid rgba(0, 0, 0, 0.04);
    &:hover {
        color: #66b1ff;
        background-color: #f8f8f8;
    }
    .nav-menu-item {
        line-height: 36px;
        cursor: pointer;
    }
}
.border {
    border-bottom: 1px solid rgba(0, 0, 0, 0.04);
}
@import "../assets/scss/Editor.scss";
</style>