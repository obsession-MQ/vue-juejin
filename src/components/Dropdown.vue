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
                    <el-dropdown-item>{{ item.name }}</el-dropdown-item>
                </router-link>
            </el-dropdown-menu>
        </el-dropdown>
    </div>
</template>
<script>
import axios from "axios"
export default {
    name: "dropdown",
    data() {
        return {
            router: [
                {
                    path: '/editor',
                    name: '写文章',
                },
                {
                    path: '/',
                    name: '草稿',
                },
                {
                    path: '/home',
                    name: '我的主页',
                },
                {
                    path: '/',
                    name: '我喜欢的',
                },
                {
                    path: '/',
                    name: '我的收藏集',
                },
                {
                    path: '/',
                    name: '标签管理',
                },
                {
                    path: '/setting/user',
                    name: '设置',
                },
                {
                    path: '/',
                    name: '关于',
                },
            ],
            img: "",
        }
    },
    methods: {
    },
    mounted() {
        axios.post("http://api_devss.wanxikeji.cn/api/userAllInfo", {
            token: localStorage.getItem("token"),
        }).then((res) => {
            this.img = res.data.data.icon
            this.$store.state.Dropdown = true
            console.log(res);
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
.border {
    border-bottom: 1px solid rgba(0, 0, 0, 0.04);
}
@import "../assets/scss/Editor.scss";
</style>