<template>
<!-- template裏面的所有内容都需要被包裹在一個div裏面 -->
<div>
  <home-header></home-header>
  <home-swiper :list="swiperList"></home-swiper>
  <home-icons :list="iconList"></home-icons>
  <home-recommend :list="recommendList"></home-recommend>
  <home-weekend :list="weekendList"></home-weekend>
</div>
</template>

<script>
/* 引入各個組件頁面 */
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icon'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'
/* 引入axios */
import axios from 'axios'
import { mapState } from 'vuex'
export default {
  name: 'Home',
  /* 在components屬性中注冊每個局部組件 */
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  },
  data () {
    return {
      lastCity: '',
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: []
    }
  },
  computed: {
    ...mapState(['city'])
  },
  methods: {
    // 定義getHomeInfo函數獲取json資料，然後執行getHomeInfoSuccess這一函數，/api/路徑在gitignore文件中替換過
    getHomeInfo () {
      //  在請求Ajax時，把（city）放在請求的參數裏面
      axios.get('/api/index-1.json?city=' + this.city)
        .then(this.getHomeInfoSuccess)
    },
    // 定義getHomeInfoSuccess函數，接受回傳資料
    getHomeInfoSuccess (res) {
      // console.log(res)
      res = res.data
      // 如果回傳資料中ret為true,并且有data的數據
      if (res.ret && res.data) {
        const data = res.data
        this.swiperList = data.swiperList
        this.iconList = data.iconList
        this.recommendList = data.recommendList
        this.weekendList = data.weekendList
      }
    }
  },
  // 在mounted這個周期中調用getHomeInfo()此函數
  mounted () {
    this.lastCity = this.city
    this.getHomeInfo()
  },
  /*  當運用了<keep-alive>組件時，vue自帶activated這一個生命周期函數，作用是：當頁面被重新渲染的時候，此（activated）生命周期函數就會被重新被執行,
  優化網頁性能   */
  activated () {
    // 當上一次的city與現在的city不同時，就重新發送一次Ajax請求，并讓上一次的city改變成現在的city
    if (this.lastCity !== this.city) {
      this.lastCity = this.city
      this.getHomeInfo()
    }
  }
}
</script>

<style>

</style>
