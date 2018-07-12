<template>
  <div class="lAccount">
    <router-link tag="div" class="tab-login" to="/login">
      <div class="icon">
        <img src="./nologin.png" alt="">
      </div>
      <div class="text">
        <span class="nologin-title">点击登录</span>
        <span class="nologin-content">登录后可更精准推荐歌曲</span>
      </div>
    </router-link>
    <div class="btns">
      <router-link tag="div" class="tab-item" to="/recogn">
        <img src="./recogn_normal.png" alt="">
      </router-link>
      <router-link tag="div" class="tab-item" to="/message">
        <img src="./message_normal.png" alt="">
      </router-link>
    </div>
    <div class="hint"></div>
  </div>

</template>

<script>
export default {

}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.lAccount
  top 44px
  height 75px
  width 100%
  .tab-login
    height 75px
    width 60%
    display flex
    float left
    box-sizing border-box
    align-items center
    padding 0px 15px
    .icon>img
      flex: 0 0 45px
      width: 45px
      padding-right: 8px
    .text
      display: flex
      flex-direction: column
      justify-content: center
      flex: 1
      line-height: 20px
      overflow: hidden
    .nologin-title
      font-size 15px
    .nologin-content
      font-size 11px
  .btns
    float left
    width 40%
    height 75px
    .tab-item
      width 40%
      height 50px
      padding 12.5px 0px
      text-align center
      display inline-block
      &>img
        width 25px
        margin 10% 0px
        vertical-align middle
  .hint
    float left
    background-color #e6e6e6
    height 1px
    margin-left 3%
    width 94%
</style>
