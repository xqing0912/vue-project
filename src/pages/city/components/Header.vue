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
.header
    position: relative
    overflow: hidden
    // height: 2rem
    line-height: 2.5rem
    text-align: center
    background: #00bcd4
    font-size: 1.2rem
    color: #fff
    .header-back
        position: absolute
        left: .5rem
        top: 0
        font-size: 1.2rem
        color: #fff
</style>
