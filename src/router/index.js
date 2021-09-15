import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const Home = () => import(/* webpackChunkName: "group-foo" */ '@/views/home/Home.vue')
const Editor = () => import(/* webpackChunkName: "edirot" */ '@/views/Editor/EditorBar.vue')
const setting = () => import(/* webpackChunkName: "profile"*/ '@/views/user/Setting.vue')
const Account = () => import(/* webpackChunkName: "Account"*/ '@/views/user/Account.vue')
const Comment = () => import(/* webpackChunkName: "Comment"*/'@/views/Comment/Comment.vue')
const Rename = () => import(/* webpackChunkName: "Rename"*/ '@/views/user/Rename.vue')
const Nav = () => import(/* webpackChunkName: "Nav"*/ '@/views/home/Nav.vue')
const index = () => import(/* webpackChunkName: "index"*/ '@/views/home/Index.vue')
const User = () => import(/* webpackChunkName: "User"*/ '@/views/user/User.vue')
const pins = () => import(/* webpackChunkName: "pins"*/ '@/views/pins/Pins.vue')
const routes = [
  {
    path: '*',
    redirect: '/home',
  },
  {
    path: '/home',
    component: Home,
    redirect: 'recommended',
    meta: {
      title: '掘金'
    },
    children: [
      {
        path: 'nav',
        component: Nav,
      },
      {
        path: '/recommended',
        component: index,
      },
      {
        path: '/backend',
        component: index,
      },
      {
        path: '/frontend',
        component: index,
      },
      {
        path: '/android',
        component: index,
      },
      {
        path: '/ios',
        component: index,
      },
      {
        path: '/ai',
        component: index,
      },
      {
        path: '/freebie',
        component: index,
      },
      {
        path: '/career',
        component: index,
      },
      {
        path: '/article',
        component: index,
      },
      {
        path: '/subsribed',
        component: index,
      },
      {
        name:"Commen",
        path: '/Comment',
        component: Comment,
      },
      {
        path: "/soreneset",
        component: index
      },
      {
        path: "/sorehottest",
        component: index
      },
      {
        path: '/pins',
        component: pins
      },
      {
        path: '/setting',
        component: setting,
        children: [
          {
            path: 'user',
            component: User
          },
          {
            path: 'account',
            component: Account,
          },
          {
            path: 'resume',
            component: Rename,
          },
        ]
      }
    ],
  },
  {
    path: '/editor',
    component: Editor,
    meta: {
      title: "写文章 - 掘金"
    }
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})
router.beforeEach((to, from, next) => {
  document.title = to.matched[0].meta.title
  next()
})


export default router
