<template>
    <div class="wrapper">
        <swiper :options="swiperOption" v-if="showSwiper">
            <!-- slides -->
            <swiper-slide v-for="item of list" :key="item.id">
                <img class="swiper-image"  :src="item.imgUrl" />
            </swiper-slide>
            <!-- Optional controls -->
            <div class="swiper-pagination" slot="pagination">
            </div>
        </swiper>
    </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        },
        loop: true,
        autoplay: {delay: 2000}
      }
    }
  },
  computed: {
    showSwiper () {
      return this.list.length
    }
  }
}

</script>

<style lang="stylus" scoped>
/* 讓class為wrapper組件下子所有class為swiper-pagination-bullet-active的子組件,背景變白色,這樣寫就不受scoped的影響 */
.wrapper >>> .swiper-pagination-bullet-active
    background:#fff
.wrapper
    overflow:hidden
    width:100%
    height:0
    padding-bottom:66%
    .swiper-image
        width:100%
</style>
