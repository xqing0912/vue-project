import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
  /* state指存放公用數據,
  state:state，簡寫為state */
  state,
  //  mutations 用於處理數據同步改變
  mutations
  /* actions用於處理異步函數
   actions: {
     // changeCity是傳遞來的action名稱，接收兩個參數，ctx：上下文，city：指傳遞過來的city
     changeCity (ctx, city) {
     // 透過commit的方法去執行changeCity_1這個mutations，傳過去的内容是city
       ctx.commit('changeCity_1', city)
     }
   }, */
  /*   getters相當於組件中的計算屬性（computed），當需要根據state裏的數據算出新的數據時用getters  */
  /* getters: {
    doubleCity (state) {
      return state.city + ' ' + state.city
    }
  } */
})
