<template>
    <div class="sub-view-box shando">
        <div class="setting-profile-view">
            <h1 class="nav-text">账号设置</h1>
            <ul class="setting-list">
                <li v-for="item in options" class="item">
                    <span class="title">{{ item.name }}</span>
                    <div class="input-box">
                        <span class="account">{{ item.title }}</span>
                    </div>
                    <div class="action-box">
                        <button class="btn unlink-btn">{{ item.href }}</button>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            options: [
                {
                    "name": "手机",
                    "title": '',
                    "href": '换绑'
                },
                {
                    "name": "微信",
                    "title": '未绑定',
                    "href": '绑定'
                },
                {
                    "name": "新浪微博",
                    "title": '未绑定',
                    "href": '绑定'
                },
                {
                    "name": "GitHub",
                    "title": '',
                    "href": '换绑'
                },
                {
                    "name": "geekfade",
                    "title": '',
                    "href": '解绑'
                },
                {
                    "name": "密码",
                    "title": '',
                    "href": '重置'
                },
                {
                    "name": "账号注销",
                    "title": '',
                    "href": '注销'
                }
            ]
        }
    },
    methods: {
        blur() {
            if (this.text === '') {
                this.ishow = true;
            } else {
                this.ishow = false;
            }
        }
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
        font-size: 24px;
        line-height: 18px;
        color: #333;
        margin-bottom: 20px;
    }
    .setting-list {
        border-bottom: 1px solid #f1f1f1;
        .item {
            display: flex;
            align-items: center;
            padding: 24px 0;
            border-top: 1px solid #f1f1f1;
            .title {
                font-size: 14.4px;
                color: #333;
                width: 106px;
            }
            .input-box {
                flex: 1 1 auto;
                display: flex;
                width: 100%;
                .account {
                    flex: 1 1 auto;
                    font-size: 14px;
                    color: #909090;
                }
            }
            .action-box {
                margin-left: 12px;
                .btn {
                    padding: 0;
                    font-size: 14px;
                    color: #007fff;
                    background-color: transparent;
                    white-space: nowrap;
                }
                button {
                    border-radius: 2px;
                    border: none;
                    outline: none;
                    transition: background-color 0.3s, color 0.3s;
                    cursor: pointer;
                }
            }
        }
    }
}
</style>