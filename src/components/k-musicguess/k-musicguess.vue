<template>
  <div class="guess" >
    <titlebar tname="猜你喜欢"></titlebar>
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
.guess
  background-color white
  height 100%
  width 100%
  margin-top -44px
</style>
