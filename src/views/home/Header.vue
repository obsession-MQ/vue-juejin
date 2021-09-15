<template>
    <header class="list-header">
        <nav class="list-nav">
            <ul class="nav-list left">
                <li class="nav-item" v-for="(item,index) in navrouter" :key="index">
                    <router-link :to="item.path">{{ item.name }}</router-link>
                </li>
            </ul>
        </nav>
    </header>
</template>
<script>
export default {
    name: "Heaer",
    data() {
        return {
            navrouter: [
                {
                    path: "recommended",
                    name: "热门"
                },
                {
                    path: "soreneset",
                    name: "最新"
                },
                {
                    path: "sorehottest",
                    name: "热榜"
                }
            ],
        }
    },
    methods: {
    }
}
</script>
<style lang="scss" scoped>
.list-header {
    padding: 15px 12px;
    border-bottom: 1px solid #9797971a;
    .list-nav {
        display: flex;
        justify-content: flex-start !important;
        .nav-list {
            align-items: center;
            line-height: 1;
            display: flex;
            justify-content: space-between;
            .nav-item {
                padding: 0 14px;
                font-size: 14.4px;
            }
        }
    }
    .avtive {
        color: #007fff;
    }
}
.router-link-active {
    color: #007fff;
}
.router-link-exact-active {
    color: #007fff;
}
</style>