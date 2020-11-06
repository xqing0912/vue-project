<template>
    <div>
        <div class="item"
          v-for="(item, index) of list" :key="index">
            <div class="item-title border-bottom">
                <span class="item-title-icon">
                </span>
                {{item.title}}
            </div>
            <!-- 如果item裏面有children這項，表示它是一個多級的項目 -->
            <div v-if="item.children" class="item-children">
              <!-- list組件裏調用自己名稱的組件，稱爲遞歸組件 -->
              <detail-list
                :list="item.children">
              </detail-list>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'DetailList',
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/detailStyle/list.styl'
</style>
