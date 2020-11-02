<template>
  <div>
    <detail-banner :sightName="sightName" :bannerImg="bannerImg" :imgArray="imgArray">
    </detail-banner>
    <detail-header></detail-header>
    <div class="content">
      <detail-list :list="list">
      </detail-list>
    </div>
  </div>
</template>

<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'
import axios from 'axios'
export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  data () {
    return {
      sightName: '',
      bannerImg: '',
      imgArray: [],
      list: []
    }
  },
  methods: {
    getDetailInfo () {
      axios.get('/api/detail.json', {
        params: {
          id: this.$route.params.id
        }
      }).then(this.handleGetDetailInfoSucc)
    },
    handleGetDetailInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.sightName = data.sightName
        // console.log(this.sightName)
        this.bannerImg = data.bannerImg
        this.imgArray = data.galleryImgs
        this.list = data.priceType
      }
    }
  },
  mounted () {
    this.getDetailInfo()
  }
}
</script>

<style lang="stylus" scoped>
 @import '~styles/detailStyle/detail.styl'
</style>
