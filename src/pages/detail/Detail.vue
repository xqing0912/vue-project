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
      list: [],
      pageId: 0
    }
  },
  methods: {
    getDetailInfo () {
      axios.get('/api/detail-1.json', {
        params: {
          id: this.$route.params.id
        }
      }).then(this.handleGetDetailInfoSucc)
    },
    handleGetDetailInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        // console.log(data)
        this.sightName = data[this.pageId].sightName
        this.bannerImg = data[this.pageId].bannerImg
        this.imgArray = data[this.pageId].galleryImgs
        this.list = data[this.pageId].priceType
      }
    }
  },
  mounted () {
    this.getDetailInfo()
    // this.pageId = Number(this.$route.params.id) - 1
  },
  activated () {
    this.getDetailInfo()
    this.pageId = Number(this.$route.params.id) - 1
  }
}
</script>

<style lang="stylus" scoped>
.content
    height: 50rem
</style>
