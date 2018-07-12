<template>
  <div class="mLocal">
     <router-link tag="div" class="tab-item" to="/local">
      <div class="icon">
        <img src="./l_local.png" alt="">
      </div>
      <span>本地音乐</span>
      <span>99</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/love">
      <div class="icon">
        <img src="./l_love.png" alt="">
      </div>
      <span>喜欢·歌单</span>
      <span>217</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/local">
      <div class="icon">
        <img src="./l_downloads.png" alt="">
      </div>
      <span>下载</span>
      <span>199</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/local">
      <div class="icon">
        <img src="./l_history.png" alt="">
      </div>
      <span>最近</span>
      <span>9999</span>
    </router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.mLocal
  height 110px
  width 100%
  display flex
  justify-content space-between
  .tab-item
    padding-left 25px
    padding-right 25px
    text-align center
    display: flex
    flex-direction: column
    justify-content: center
    .icon
      &>img
        width 50px
    span:last-child
      line-height 30px
      font-size 12px
      color gray
  .hint
    float left
    width 100%
    height 10px
    background-color #E6E6E6
</style>
