<template>
    <div>
        <div class="title">
            熱銷推薦
        </div>
        <ul>
            <!-- router-link tag="li"，是代替li標簽，并保持原有的樣式 -->
            <router-link tag="li" class="item" border-bottom v-for="item of list" :key="item.id" :to="'/detail/' + item.id">
                <img class="item-img" :src="item.imgUrl" />
                <div class="item-info">
                    <p class="item-title">
                        {{item.title}}
                    </p>
                    <p class="item-desc">
                        {{item.desc}}
                    </p>
                    <button class="item-button">
                        查看詳情
                    </button>
                </div>
            </router-link>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/recommendStyle/recommendStyle.styl'
</style>
