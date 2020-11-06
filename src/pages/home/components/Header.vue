<template>
<!-- template裏面的所有内容都需要被包裹在一個div裏面 -->
<div class="header">
  <div class="header-left">
    <div class="iconfont back-icon">
      &#xe624;
    </div>
  </div>
  <div class="header-input">
    <span class="iconfont">
      &#xe632;
    </span>
      輸入城市/景點/游玩主題
  </div>
  <!-- router-link，聲明方式導航，相當於<a>標簽 -->
  <router-link to='/city'>
    <div class="header-right">
      <!-- 獲取Vuex建立的共用數據（state）的資料 -->
      {{this.city}}
      <!-- {{this.doubleCity}} -->
      <span class="iconfont arrow-icon">
        &#xe610;
      </span>
    </div>
   </router-link>
</div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'HomeHeader',
  /*  mapState指把Vuex裏的公用數據(city)，映射到目前組件，名叫（city）的計算屬性（computed）裏 */
  computed: {
    ...mapState(['city'])
    /*  指把Vuex裏叫doubleCity的getters，映射到目前組件，名叫（doubleCity）的計算屬性（computed）中  */
    // ...mapGetters(['doubleCity'])
  }
}
</script>
//  用stylus來寫樣式,scoped指樣式只用於目前這個組件
<style scoped lang="stylus">
// 在css中引入其他的css,import前要加@符號，路徑裏的@指src目錄，前面一定要加上~符號。這裏的styles是自定義的替代路徑
  @import '~styles/headerStyle/header.styl'
</style>
