<template>
    <div class="header">
        <router-link to="/">
        <div class="iconfont header-back">
            &#xe624;
        </div>
        </router-link>
            城市選擇
    </div>
</template>

<script>
export default {
  name: 'CityHeader'
}
</script>

<style lang="stylus" scoped>
  @import '~styles/cityStyle/cityHeader.styl'
</style>
