<template>
    <nav class="view-nav">
        <div class="nav-list left">
            <router-link
                :to="item.path"
                v-for="(item,index) in navrouter"
                :key="index"
                class="nav-item"
                @mouseenter.native="enter(index)"
                @mouseleave.native="leave"
            >
                {{ item.meta }}
                <div class="drops" v-if="item.children" v-show="isshow && index == flag">
                    <ul class="childrenitem">
                        <li class="tags" v-for="(item1,index1) in item.children">
                            <router-link :to="item1.path">{{ item1.name }}</router-link>
                        </li>
                    </ul>
                </div>
            </router-link>
        </div>
    </nav>
</template>
<script>
export default {
    name: "Category",
    data() {
        return {
            navrouter: [
                {
                    path: "recommended",
                    meta: "推荐"
                },
                {
                    path: "follow",
                    meta: "关注",
                },
                {
                    path: "backend",
                    meta: "后端",
                    children: [
                        {
                            path: "backend",
                            name: "后端",
                        },
                        {
                            path: "backend1",
                            name: "Java",
                        },
                        {
                            path: "backend2",
                            name: "Python",
                        },
                        {
                            path: "backend3",
                            name: "Go",
                        },
                        {
                            path: "backend4",
                            name: "算法",
                        },
                        {
                            path: "backend5",
                            name: "MySQL",
                        },
                        {
                            path: "backend6",
                            name: "Spring Boot",
                        },
                        {
                            path: "backend7",
                            name: "Linux",
                        },
                        {
                            path: "backend8",
                            name: "Spring",
                        },
                        {
                            path: "backend9",
                            name: "Redis",
                        },
                        {
                            path: "backend10",
                            name: "数据库",
                        },
                        {
                            path: "backend11",
                            name: "架构",
                        },
                        {
                            path: "backend12",
                            name: "设计模式",
                        },
                        {
                            path: "backend13",
                            name: "面试",
                        },
                        {
                            path: "backend14",
                            name: "Kubernets",
                        },

                    ]
                },
                {
                    path: "frontend",
                    meta: "前端",
                    children: [
                        {
                            path: "frontend",
                            name: "前端",
                        },
                        {
                            path: "backend1",
                            name: "JavaScript",
                        },
                        {
                            path: "backend2",
                            name: "Vue.js",
                        },
                        {
                            path: "backend3",
                            name: "React.js",
                        },
                        {
                            path: "backend4",
                            name: "CSS",
                        },
                        {
                            path: "backend5",
                            name: "算法",
                        },
                        {
                            path: "backend6",
                            name: "TypeScript",
                        },
                        {
                            path: "backend7",
                            name: "面试",
                        },
                        {
                            path: "backend8",
                            name: "Webpack",
                        },
                        {
                            path: "backend9",
                            name: "Node.js",
                        },
                        {
                            path: "backend10",
                            name: "微信小程序",
                        },
                        {
                            path: "backend11",
                            name: "HTML",
                        },
                        {
                            path: "backend12",
                            name: "Flutter",
                        },
                        {
                            path: "backend13",
                            name: "浏览器",
                        },
                        {
                            path: "backend14",
                            name: "WebGL",
                        },

                    ]
                },
                {
                    path: "android",
                    meta: "Android",
                    children: [
                        {
                            path: "android",
                            name: "Android",
                        },
                        {
                            path: "backend1",
                            name: "前端",
                        },
                        {
                            path: "backend2",
                            name: "Flutter",
                        },
                        {
                            path: "backend3",
                            name: "Kotlin",
                        },
                        {
                            path: "backend4",
                            name: "Java",
                        },
                        {
                            path: "backend5",
                            name: "Android Jetpack",
                        },
                        {
                            path: "backend6",
                            name: "设计模式",
                        },
                        {
                            path: "backend7",
                            name: "架构",
                        },
                        {
                            path: "backend8",
                            name: "面试",
                        },
                        {
                            path: "backend9",
                            name: "gradle",
                        },
                        {
                            path: "backend10",
                            name: "性能优化",
                        },
                        {
                            path: "backend11",
                            name: "音视频开发",
                        },
                        {
                            path: "backend",
                            name: "算法",
                        },
                        {
                            path: "backend12",
                            name: "安全",
                        },
                        {
                            path: "backend13",
                            name: "OpenCV",
                        },

                    ]
                },
                {
                    path: "ios",
                    meta: "IOS",
                    children: [
                        {
                            path: "ios",
                            name: "iOS  ",
                        },
                        {
                            path: "backend1",
                            name: "前端",
                        },
                        {
                            path: "backend2",
                            name: "Swift",
                        },
                        {
                            path: "backend3",
                            name: "Objective-C",
                        },
                        {
                            path: "backend4",
                            name: "面试",
                        },
                        {
                            path: "backend5",
                            name: "Flutter",
                        },
                        {
                            path: "backend6",
                            name: "SwiftUI",
                        },
                        {
                            path: "backend7",
                            name: "macOS",
                        },
                        {
                            path: "backend8",
                            name: "架构",
                        },
                        {
                            path: "backend9",
                            name: "算法 ",
                        },
                        {
                            path: "backend10",
                            name: "RxSwift",
                        },
                        {
                            path: "backend11",
                            name: "源码",
                        },
                        {
                            path: "backend12",
                            name: "安全",
                        },
                        {
                            path: "backend13",
                            name: "Apple",
                        },
                        {
                            path: "backend14",
                            name: "音视频开发",
                        },

                    ]
                },
                {
                    path: "ai",
                    meta: "人工智能",
                    children: [
                        {
                            path: "ai",
                            name: "人工智能",
                        },
                        {
                            path: "backend",
                            name: "MATLAB",
                        },
                        {
                            path: "backend",
                            name: "算法",
                        },
                        {
                            path: "backend",
                            name: "深度学习",
                        },
                        {
                            path: "backend",
                            name: "机器学习",
                        },
                        {
                            path: "backend",
                            name: "后端",
                        },
                        {
                            path: "backend",
                            name: "OpenCV",
                        },
                        {
                            path: "backend",
                            name: "Python",
                        },
                        {
                            path: "backend",
                            name: "大数据",
                        },
                        {
                            path: "backend",
                            name: "计算机视觉 ",
                        },
                        {
                            path: "backend",
                            name: "数据分析",
                        },
                        {
                            path: "backend",
                            name: "NLP",
                        },
                        {
                            path: "backend",
                            name: "前端",
                        },
                        {
                            path: "backend",
                            name: "百度",
                        },
                        {
                            path: "backend",
                            name: "物联网",
                        },

                    ]
                },
                {
                    path: "freebie",
                    meta: "开发工具",
                    children: [
                        {
                            path: "backend",
                            name: "前端",
                        },
                        {
                            path: "backend",
                            name: "Github",
                        },
                        {
                            path: "backend",
                            name: "Git",
                        },
                        {
                            path: "backend",
                            name: "后端",
                        },
                        {
                            path: "backend",
                            name: "Linux",
                        },
                        {
                            path: "backend",
                            name: "数据挖掘",
                        },
                        {
                            path: "backend",
                            name: "Unity3D",
                        },
                        {
                            path: "backend",
                            name: "开源",
                        },
                        {
                            path: "backend",
                            name: "Java",
                        },
                        {
                            path: "backend",
                            name: "Python ",
                        },
                        {
                            path: "backend",
                            name: "程序员",
                        },
                        {
                            path: "backend",
                            name: "Docker",
                        },
                        {
                            path: "backend",
                            name: "敏捷开发",
                        },
                        {
                            path: "backend",
                            name: "测试",
                        },
                        {
                            path: "backend",
                            name: "Visual Studio Code",
                        },

                    ]
                },
                {
                    path: "career",
                    meta: "代码人生",
                    children: [
                        {
                            path: "backend",
                            name: "程序员",
                        },
                        {
                            path: "backend",
                            name: "算法",
                        },
                        {
                            path: "backend",
                            name: "后端",
                        },
                        {
                            path: "backend",
                            name: "前端",
                        },
                        {
                            path: "backend",
                            name: "测试",
                        },
                        {
                            path: "backend",
                            name: "Python",
                        },
                        {
                            path: "backend",
                            name: "Java",
                        },
                        {
                            path: "backend",
                            name: "面试",
                        },
                        {
                            path: "backend",
                            name: "LeetCode",
                        },
                        {
                            path: "backend",
                            name: "MATLAB ",
                        },
                        {
                            path: "backend",
                            name: "设计模式",
                        },
                        {
                            path: "backend",
                            name: "Linux",
                        },
                        {
                            path: "backend",
                            name: "GitHub",
                        },
                        {
                            path: "backend",
                            name: "安全",
                        },
                        {
                            path: "backend",
                            name: "代码规范",
                        },
                    ]
                },
                {
                    path: "article",
                    meta: "阅读",
                    children: [
                        {
                            path: "backend",
                            name: "程序员",
                        },
                        {
                            path: "backend",
                            name: "前端",
                        },
                        {
                            path: "backend",
                            name: "后端",
                        },
                        {
                            path: "backend",
                            name: "笔记",
                        },
                        {
                            path: "backend",
                            name: "算法",
                        },
                        {
                            path: "backend",
                            name: "设计模式",
                        },
                        {
                            path: "backend",
                            name: "面试",
                        },
                        {
                            path: "backend",
                            name: "数据库",
                        },
                        {
                            path: "backend",
                            name: "Kubernetes",
                        },
                        {
                            path: "backend",
                            name: "测试 ",
                        },
                        {
                            path: "backend",
                            name: "Java",
                        },
                        {
                            path: "backend",
                            name: "掘金翻译计划",
                        },
                        {
                            path: "backend",
                            name: "JavaScript",
                        },
                        {
                            path: "backend",
                            name: "资讯",
                        },
                        {
                            path: "backend",
                            name: "架构",
                        },
                    ]
                },
                {
                    path: "subsribed",
                    meta: "标签管理"
                }
            ],
            isshow: false,
            flag: 0,
        }
    },
    methods: {
        enter(index) {
            this.isshow = true
            this.flag = index
        },
        leave() {
            this.isshow = false;
            this.flag = null
        },
    },
    mounted() {
        if (localStorage.getItem("token")) {
            this.navrouter.splice(0, 0)
        } else {
            this.navrouter.splice(1, 1)
        }
    }
}
</script>
<style lang="scss" scoped>
.view-nav {
    position: fixed;
    width: 100%;
    height: 46px;
    z-index: 100;
    box-shadow: 0 1px 2px 0 #0000000d;
    transition: all 0.2s;
    transform: translateZ(0);
    margin-left: -350px;
    &::before {
        content: "";
        left: 0;
        background-color: #fff;
        z-index: -1;
        width: 100%;
        height: 46px;
        position: inherit;
    }
    .nav-list {
        height: 100%;
        margin: auto;
        display: flex;
        align-items: center;
        line-height: 1;
        position: relative;
        max-width: 980px;
    }
    .nav-item {
        height: 100%;
        align-items: center;
        display: flex;
        flex-shrink: 0;
        font-size: 14px;
        padding: 0 12px;
        &:hover {
            color: #007fff;
        }
    }
    .border {
        display: flex;
        flex-direction: column;
        position: relative;
        top: 15px;
        left: -20px;
        border: 1px solid #333;
    }
    .drops {
        position: fixed;
        top: 45.2px;
        padding: 14px 14px 2px;
        width: 360px;
        max-height: 204px;
        font-weight: 400;
        line-height: 1.2;
        background-color: #fff;
        border: 1px solid #ebebeb;
        box-shadow: 0 1px 5px 0 #00000026;
        box-sizing: border-box;
        border-radius: 2px;
        cursor: default;
        z-index: 250;
        .childrenitem {
            display: flex;
            flex-wrap: wrap;
            .tags {
                display: flex;
                justify-content: center;
                align-items: center;
                height: 24px;
                background-color: #f4f5f5;
                border-radius: 12px;
                font-size: 13.2px;
                color: #71777d;
                padding: 0 9.6px;
                margin-right: 12px;
                margin-bottom: 12px;
                a {
                    &:hover {
                        color: #007fff;
                    }
                }
            }
        }
    }
}

.router-link-active {
    color: #007fff;
}
.router-link-exact-active {
    color: #007fff;
}
</style>