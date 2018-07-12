<template>
  <div class="mSort">
    <div class="hint"></div>
    <div class="function">
      <router-link tag="div" class="tab-item" to="/music">
        <div class="icon">
          <img src="./l_music.png" alt="">
        </div>
        <span>乐库</span>
      </router-link>
      <router-link tag="div" class="tab-item" to="/musiclist">
        <div class="icon">
          <img src="./l_musiclist.png" alt="">
        </div>
        <span>歌单</span>
      </router-link>
      <router-link tag="div" class="tab-item" to="/radio">
        <div class="icon">
          <img src="./l_radio.png" alt="">
        </div>
        <span>电台·酷群</span>
      </router-link>
    </div>
    <div class="function">
      <router-link tag="div" class="tab-item" to="/guess">
        <div class="icon">
          <img src="./l_guess.png" alt="">
        </div>
        <span>猜你喜欢</span>
      </router-link>
      <router-link tag="div" class="tab-item" to="/daily">
        <div class="icon">
          <img src="./l_daily.png" alt="">
        </div>
        <span>每日推荐</span>
      </router-link>
      <router-link tag="div" class="tab-item" to="/round">
        <div class="icon">
          <img src="./l_round.png" alt="">
        </div>
        <span>音乐圈</span>
      </router-link>
    </div>
    <div class="bhint"></div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.mSort
  height 230px
  width 100%
  .hint
    height 5px
    background-color #E5E5E5
  .function
    margin 20px 40px
    display flex
    justify-content space-between
    .tab-item
      width 90px
      height 90px
      text-align center
      .icon
        &>img
          height 50px
      span
        line-height 30px
  .bhint
    height 1px
    float left
    background-color #e6e6e6
    margin-left 3%
    width 94%
</style>
