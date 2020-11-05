<template>
    <div>
        <router-link tag="div" to="/" class="header-abs" v-show="showHeaderAbs">
            <div class="iconfont header-abs-back">
                &#xe624;
            </div>
        </router-link>
        <div class="header-fixed"
          v-show="!showHeaderAbs" :style="opacityStyle">
            <router-link to="/">
                <div class="iconfont header-fixed-back">
                    &#xe624;
                </div>
            </router-link>
            景點詳情
        </div>
    </div>
</template>

<script>
export default {
  name: 'DetailHeader',
  data () {
    return {
      showHeaderAbs: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    handleScroll () {
      // console.log(document.documentElement.scrollTop)
      //  儲存頁面卷軸的高度
      const scrollTop = document.documentElement.scrollTop
      // console.log(scrollTop)
      if (scrollTop > 60) {
        let opacity = scrollTop / 140
        // opacity限制在0~1之間
        opacity = opacity > 1 ? 1 : opacity
        // 把opacityStyle重新賦值一個對象
        this.opacityStyle = {opacity}
        this.showHeaderAbs = false
      } else {
        this.showHeaderAbs = true
      }
    }
  },
  //  進入頁面就觸發的生命周期函數，這會影響全局的組件
  activated () {
    // 頁面展示的時候，監聽window中scroll滾動事件，然後執行handleScroll函數
    window.addEventListener('scroll', this.handleScroll)
  },
  //  頁面即將被隱藏，或者頁面即將被替換成新的頁面時執行的生命周期函數
  deactivated () {
    //  頁面隱藏的時候，對scroll這個全局事件解綁
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/detailStyle/header.styl'
</style>
