<template>
  <div class="mLocal">
     <div tag="div" class="tab-item" to="/local" @click="onclick('local')">
      <div class="icon">
        <img src="./l_local.png" alt="">
      </div>
      <span>本地音乐</span>
      <span>99</span>
    </div>
    <div tag="div" class="tab-item" to="/love">
      <div class="icon">
        <img src="./l_love.png" alt="">
      </div>
      <span>喜欢·歌单</span>
      <span>217</span>
    </div>
    <div tag="div" class="tab-item" to="/downloads">
      <div class="icon">
        <img src="./l_downloads.png" alt="">
      </div>
      <span>下载</span>
      <span>199</span>
    </div>
    <div tag="div" class="tab-item" to="/history">
      <div class="icon">
        <img src="./l_history.png" alt="">
      </div>
      <span>最近</span>
      <span>9999</span>
    </div>
  </div>
</template>

<script>

import Local from '../../components/k-localmusic/k-localmusic'

export default {
  methods:{
    onclick(name){
     this.$router.push({
       path:`/local`,
     })
    }
  },
  components:{
    Local
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.mLocal
  background-color white
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
