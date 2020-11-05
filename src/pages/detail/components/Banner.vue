<template>
  <div>
      <div class="banner"
        @click="handleBannerClick">
          <img class="banner-img"
            :src="bannerImg" />
          <div class="banner-info">
              <div class="banner-title">
                {{sightName}}
              </div>
              <div class="banner-number">
                  <span class="iconfont banner-icon">
                    &#xe6fc;
                  </span>
                  {{imgArray.length}}
              </div>
          </div>
      </div>
      <fade-animation>
        <banner-gallery :imgArray="imgArray" v-show="showGallery" @close="handleGalleryClose">
        </banner-gallery>
      </fade-animation>
    </div>
</template>

<script>
import BannerGallery from 'common/gallery/Gallery'
import FadeAnimation from 'common/fadeAnimation/fadeAnimation'
export default {
  name: 'DetailBanner',
  props: {
    sightName: String,
    bannerImg: String,
    imgArray: Array
  },
  data () {
    return {
      showGallery: false
    }
  },
  methods: {
    handleBannerClick () {
      this.showGallery = true
    },
    handleGalleryClose () {
      this.showGallery = false
    }
  },
  components: {
    BannerGallery,
    FadeAnimation
  }
}
</script>

<style lang="stylus" scoped>
.banner
    position:relative
    overflow: hidden
    height 0
    padding-bottom: 66%
    .banner-img
        width: 100%
    .banner-info
        display: flex
        position: absolute
        left: 0
        right: 0
        bottom: 0
        line-height: 1.1rem
        color: #fff
        // 線性漸變色
        background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))
        .banner-title
            flex:1
            font-size:.9rem
            padding: 0 .2rem
        .banner-number
            height:2rem
            margin-top: .4rem
            padding:0 1rem
            line-height: 2rem
            border-radius: .5rem
            background: rgba(0, 0, 0, .2)
            font-size: .5rem
            .banner-icon
                font-size: .5rem
</style>
