<template>
  <div class="daily" >
    <titlebar tname="每日推荐 "></titlebar>
  </div>
</template>

<script>
import titlebar from 'components/k-titlebar/k-titlebar'

export default {
  components: {
    titlebar
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.daily
  background-color white
  height 100%
  width 100%
  margin-top -44px
</style>
