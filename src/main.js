// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
/* 引入fastClick庫,解決移動端點擊時延遲300ms的問題 */
import fastClick from 'fastclick'
/* vue-awesome-swiper */
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'babel-polyfill'
import store from './storehouse'
/* 引入reset.css,網頁初始化,整個文件裏的styles是自定義的路徑,指build/webpack.base.conf.js的resolve下的替代路徑 */
import 'styles/reset.css'
/* 引入border.css,解決移動端1px邊框的問題 */
import 'styles/border.css'
import 'styles/iconfont.css'
/* vue-awesome-swiper css */
import 'swiper/swiper-bundle.css'

Vue.config.productionTip = false
/* fastClick的方法綁定在文件的body上 */
fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper)

/* eslint-disable no-new */
/* 路由就是根據網址的不同，返回不同的内容給用戶 */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
