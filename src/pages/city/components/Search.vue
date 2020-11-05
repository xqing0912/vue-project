<template>
  <div>
    <div class="search">
        <input v-model="keywords" class="search-input" type="text" placeholder="請輸入城市名稱" />
    </div>
    <!-- 當有輸入keywords時，才顯示此div元素 -->
    <div class="search-content"
     ref="search"
      v-show="keywords">
      <ul>
        <li class="search-item border-bottom"
         v-for="item of list"
         :key="item.id"
          @click="handleCityClick(item.name)">
         {{item.name}}
        </li>
        <!-- 當搜不到相關内容時，就顯示此li元素 -->
        <li class="search-item border-bottom" v-show="hasNoData">
          無相關資料
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
//  引人better-scroll讓頁面可以向下滑動
import Bscroll from 'better-scroll'
import {mapMutations} from 'vuex'
export default {
  name: 'CitySearch',
  props: {
    cities: Object
  },
  data () {
    return {
      keywords: '',
      list: [],
      timer: null
    }
  },
  computed: {
    // 當在list的長度不存在時，回傳
    hasNoData () {
      return !this.list.length
    }
  },
  watch: {
    keywords () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      //  當keywords不存在時,就不顯示下面列表
      if (!this.keywords) {
        this.list = []
        return
      }
      this.timer = setTimeout(() => {
        const result = []
        for (let i in this.cities) {
          this.cities[i].forEach((value) => {
            if (value.spell.indexOf(this.keywords) > -1 || value.name.indexOf(this.keywords) > -1) {
              result.push(value)
            }
          })
        }
        this.list = result
      }, 100)
    }
  },
  methods: {
    handleCityClick (city) {
    // 在store裏面透過commit方法直接調用叫changeCity的mutations，并把city傳給它
      // this.$store.commit('changeCity', city)
      this.changeCity(city)
      // 頁面跳轉到首頁，此爲編程方式的導航
      this.$router.push('/')
    },
    //  把Vuex裏的名叫changeCity的Mutations，映射到目前組件中名叫change_City的方法裏
    ...mapMutations(['changeCity'])
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.search)
  }
}
</script>

<style lang="stylus" scoped>
// @import '~styles/cityStyle/citySearch.styl'
.search
    height:1.6rem
    background: #00bcd4
    display: flex
    justify-content: center
    .search-input
        box-sizing: border-box
        width: 98%
        height:1.3rem
        padding: 0 .25rem
        line-height: 1.2rem
        text-align: center
        border-radius: .15rem
        border-style: none
        color: #666
.search-content
    z-index: 1
    overflow: hidden
    position: absolute
    top: 4.1rem;
    left: 0
    right: 0
    bottom: 0
    background: #eee
    .search-item
        line-height: 1.62rem
        padding-left: .5rem
        background: #fff
        color:#666
</style>
