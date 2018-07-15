<template>
  <div class="sidebar">
    <router-link tag="div" class="side_account" to="/presonal">
      <div class="icon">
        <img src="./personal_head.png" alt="">
      </div>
      <div class="text">
        <span>筑梦师Winston</span>
        <span>LV.10</span>
      </div>
      <div class="vip">
        <img src="./123.png" alt="">
      </div>
    </router-link>
    <div class="hint"></div>
    <div class="content">
    <sideItem tname="消息中心" tpic="/static/item_message.png" class="item"></sideItem>
    <sideItem tname="皮肤中心" tpic="/static/item_skin.png" class="item"></sideItem>
    <sideItem tname="会员中心" tpic="/static/item_vip.png" class="item"></sideItem>
    <sideItem tname="流量包月" tpic="/static/item_pack.png" class="item"></sideItem>
    <sideItem tname="定时关闭" tpic="/static/item_timeClock.png" class="item"></sideItem>
    <sideItem tname="蝰蛇音效" tpic="/static/item_effect.png" class="item"></sideItem>
    <sideItem tname="音乐工具" tpic="/static/item_tools.png" class="item"></sideItem>
    <sideItem tname="个性彩铃" tpic="/static/item_colorClock.png" class="item"></sideItem>
    <sideItem tname="私人云盘" tpic="/static/item_singCloud.png" class="item"></sideItem>
    <sideItem tname="仅Wi-Fi联网" tpic="/static/item_onlyWifi.png" class="item"></sideItem>
    <sideItem tname="通知栏歌词" tpic="/static/item_lyric.png" class="item"></sideItem>
    <sideItem tname="设置" tpic="/static/item_setting.png" class="item"></sideItem>
    </div>
  </div>
</template>

<script>
import sideItem from 'components/sidebar-item/sidebar-item'

export default {
  components: {
    sideItem
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.sidebar
  .content
    height 100%
    width 100%
    .item
      margin-top 5%
  .side_account
    height 80px
    display flex
    box-sizing border-box
    align-items center
    .icon
      margin-left 20px
      margin-right 20px
      &>img
        width 55px
    .vip
      margin-top -20px
      margin-left 8px
      &>img
        width 20px
    .text
      display flex
      flex-direction: column
      justify-content: center
      &>span
        color white
      &>span:last-child
        width 35px
        color #FD8500
        border 1px solid #FD8500
        border-radius 3px
        font-size 13px
        padding-left 3px
        margin-top 10px
  .hint
    float left
    background-color #e6e6e6
    opacity 0.4
    height 1px
    margin-left 3%
    width 94%

</style>
