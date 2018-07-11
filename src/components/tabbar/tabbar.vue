<template>
  <div class="tabbar">
    <router-link tag="div" class="tab-item" to="/sidebar">
      <span class="tab-link">侧边栏</span>
    </router-link>

      <router-link tag="div" class="tab-item" to="/listen">
        <span class="tab-link">听</span>
      </router-link>

      <router-link tag="div" class="tab-item" to="/watch">
        <span class="tab-link">看</span>
      </router-link>

      <router-link tag="div" class="tab-item" to="/sing">
        <span class="tab-link">唱</span>
      </router-link>

    <router-link tag="div" class="tab-item" to="/search">
      <span class="tab-link">搜索</span>
    </router-link>
  </div>
</template>

<script>
export default {}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.tabbar
  display flex
  height 44px
  line-height 44px
  font-size 14px
  background-color #0F79FE
  .tab-item
    flex 1
    text-align center
    .tab-link
      padding-bottom 5px
      color: $color-text-l
    &.router-link-active
      .tab-link
        color: $color-theme
        border-bottom: 2px solid $color-theme

</style>
