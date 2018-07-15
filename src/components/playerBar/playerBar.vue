<template>
  <div class="player">
       <!-- <progress-circle :radius="radius" :percent="percent">
            <i @click.stop="togglePlaying" class="icon-mini" :class="miniIcon"></i>
          </progress-circle> -->
    <router-link tag="div" class="playerview" to="/playerDetail">
      <div class="album">
        <img src="./p_album_b.png" alt="">
      </div>
      <div class="text">
        <span class="music_name">老街</span>
        <span class="music_author">李荣浩</span>
      </div>
      <div class="progress">
        <progress-bar ></progress-bar>
      </div>
      <div class="control">
        <img src="./p_pause.png" alt="">
      </div>
      <div class="control">
        <img src="./p_next.png" alt="">
      </div>
      <div class="control">
        <img src="./p_queue.png" alt="">
      </div>
    </router-link>
  </div>
</template>

<script>
import ProgressBar from '../../base/progress-bar/progress-bar'
import ProgressCircle from '../../base/progress-circle/progress-circle'
export default {
  components: {
    ProgressBar,
    ProgressCircle
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.player
  position: fixed
  left: 0
  right: 0
  bottom: 0
  height 65px
  width 100%
  z-index: 150
  box-shadow: 0 2px 10px 4px #e5e5e5
  .playerview
    background-color white
    height 100%
    display flex
    box-sizing border-box
    align-items center
    .progress
      position absolute
      width 75%
      margin-left 20%
      margin-top -20px
    .album
      margin-top -10px
      margin-left 10px
      float left
      &>img
        height 70px
    .text
      width 50%
      display: flex
      flex-direction: column
      justify-content: center
      flex: 1
      line-height: 20px
      overflow: hidden
      &>span:first-child
        margin-top 15px
        margin-left 12px
      &>span:last-child
        margin-left 12px
        font-size 12px
        color #3b3b3b
    .control
      float left
      height 25px
      margin-top 10px
      margin-right 15px
      &>img
        width 30px

</style>
