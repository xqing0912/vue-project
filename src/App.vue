<template>
  <div id="app">
    <!-- keep-alive是vue自帶的標簽，作用是:暫存路由網址的内容，當再次開起此路由網址時，不需要重新渲染此組件，優化網頁的性能, Detail這組件頁面地址始終不緩存 -->
    <!-- <keep-alive exclude="Detail"> -->
    <keep-alive>
    <!-- 當前路由地址所對應的頁面 -->
        <router-view />
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

</style>
