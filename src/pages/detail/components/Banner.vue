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
 @import '~styles/detailStyle/bannerStyle.styl'
</style>
