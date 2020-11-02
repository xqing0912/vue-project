<template>
    <div class="container" @click="closeGalleryClick">
        <div class="wrapper">
            <swiper :options="swiperOptions">
                <!-- slides -->
                <swiper-slide
                  v-for="(item, index) in imgArray" :key="index">
                    <img class="gallery-image" :src="item" />
                </swiper-slide>
                <!-- Optional controls -->
                <div class="swiper-pagination" slot="pagination">
                </div>
            </swiper>
        </div>
    </div>
</template>

<script>
export default {
  name: 'BannerGallery',
  props: {
    imgArray: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      swiperOptions: {
        pagination: {
          el: '.swiper-pagination',
          type: 'fraction'
        },
        //  當swiper插件監聽到目前元素或者是父級元素的DOM結構發生了變化時，會自動刷新一次
        observeParents: true,
        observer: true
      }
    }
  },
  methods: {
    closeGalleryClick () {
      this.$emit('close')
    }
  }
}
</script>

<style lang="stylus" scoped>
 @import '~styles/detailStyle/gallery.styl'
</style>
