<template>
    <div class="Setting">
        <nav class="view-nav web-only">
            <router-link to="/home/index">
                <i class="el-icon-arrow-left">返回个人主页</i>
            </router-link>
        </nav>
        <div class="view setting-view">
            <div class="sidebar">
                <el-row class="tac">
                    <el-col>
                        <el-menu
                            class="el-menu-vertical-demo"
                            router
                            default-active="/setting/user"
                        >
                            <el-menu-item index="/setting/user">
                                <i class="el-icon-user"></i>
                                <span slot="title">个人资料</span>
                            </el-menu-item>
                            <el-menu-item index="/setting/account">
                                <i class="el-icon-setting"></i>
                                <span slot="title">账号管理</span>
                            </el-menu-item>
                            <el-menu-item index="/setting/resume">
                                <i class="el-icon-tickets"></i>
                                <span slot="title">上传简历</span>
                            </el-menu-item>
                        </el-menu>
                    </el-col>
                </el-row>
            </div>
            <router-view />
        </div>
    </div>
</template>
<script>
export default {
    name: 'Setting',
    data() {
        return {
        }
    },
    methods: {
    },
    created() {
        document.title = '设置'
    },
}
</script>
<style lang="scss" scoped>
.view {
    margin-top: 0px;
}
.view {
    display: flex;
    justify-content: space-between;
}
.setting-view {
    width: 100%;
}
.view-nav {
    position: static;
    display: flex;
    align-items: center;
    margin: 24px auto 16px;
    padding-left: 22px;
    box-sizing: border-box;
    &:before {
        position: absolute;
        content: "";
        left: 0;
        background-color: #fff;
        width: 100%;
        z-index: -1;
        height: 46px;
    }
    a {
        font-size: 14px;
        color: #4e5969;
        &:hover {
            color: #2c95ff;
        }
    }
}
.view-nav {
    top: 60px;
    width: 100%;
    height: 46px;
    z-index: 100;
    box-shadow: 0 1px 2px 0#0000000d;
    transition: all 0.2s;
    transform: translateZ(0);
}
a {
    text-decoration: none;
    cursor: pointer;
    color: #909090;
}
.setting {
    width: 100%;
    display: flex;
    justify-content: space-between;
}
.sidebar {
    box-sizing: border-box;
    background: #fff;
    width: 230px;
    height: 626px;
    padding: 8px;
    /deep/ .el-col-12 {
        width: 100%;
        .el-menu-item {
            display: flex;
            align-items: center;
            font-weight: 400;
            height: 48px;
            width: 214px;
            font-size: 16px;
        }
    }
}
/deep/ .el-menu {
    border: none;
    list-style: none;
    position: relative;
    margin: 0;
    padding-left: 0;
}
/deep/ .el-menu-item.is-active {
    background: #e8f3ff;
    color: #1d7dfa;
}
</style>