/*
 * @Author: your name
 * @Date: 2021-08-11 14:26:35
 * @LastEditTime: 2021-08-14 15:09:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-juejin\src\main.js
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import "./assets/iconfont/iconfont.css";
import "./assets/scss/reset.css"

Vue.config.productionTip = false
Vue.use(ElementUI);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


// Vue.prototype.resetSetItem = function (key, newVal) {
//   if (key === 'watchStorage') {
//       // 创建一个StorageEvent事件
//       var newStorageEvent = document.createEvent('StorageEvent');
//       const storage = {
//           setItem: function (k, val) {
//               sessionStorage.setItem(k, val);
//               // 初始化创建的事件
//               newStorageEvent.initStorageEvent('setItem', false, false, k, null, val, null, null);
//               // 派发对象
//               window.dispatchEvent(newStorageEvent)
//           }
//       }
//       return storage.setItem(key, newVal);
//   }
// }