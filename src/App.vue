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
// import sidebar from 'components/sidebar/sidebar'
// import listen from 'components/listen/listen'
// import watch from 'components/watch/watch'
// import sing from 'components/sing/sing'
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
