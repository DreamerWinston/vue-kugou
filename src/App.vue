<template>
  <div id="app">
    <tabbar></tabbar>
    <keep-alive>
      <router-view>
      </router-view>
    </keep-alive>
    <playerBar></playerBar>
  </div>
</template>

<script>
import tabbar from 'components/tabbar/tabbar'
import playerBar from 'components/playerBar/playerBar'

export default {
  components: {
    tabbar,
    playerBar
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
</style>
