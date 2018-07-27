<template>
  <div class="musicdetail">
    <div class="overlayer"></div>
    <div class="playview">
      <div class="title">
        <div class="back"></div>
        <div class="song_name"></div>
        <div class="share"></div>
      </div>
      <div class="author">
        <div class="author_name"></div>
        <div class="fllow"></div>
      </div>
      <div class="lyricview">

      </div>
      <div class="sheet">
        <div class="likebtn"></div>
        <div class="downloadbtn"></div>
        <div class="commentbtn"></div>
        <div class="morebtn"></div>
      </div>
      <div class="range">

      </div>
      <div class="control">
        <div class="modelbtn"></div>
        <div class="prebtn"></div>
        <div class="playbtn"></div>
        <div class="nextbtn"></div>
        <div class="musiclistbtn"></div>
      </div>
    </div>
  </div>
</template>

<script>

import store from '../../store'

export default {
  data(){
    return{
      playlyric:''
    }
  },
  components: {

  }
}

</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.musicdetail
  height 100%
  margin-top -44px
  background-color white
  width 100%
  position absolute
  overflow hidden
  min-width 375px
  min-height 812px
  z-index 1
  // margin-bottom 0
  background-image url("../../assets/bg.jpg")
  background-size cover
  background-repeat no-repeat
  background-position center
  background-attachment fixed
  .overlayer
    position:fixed;
    left:0;
    top:0;
    width:100%;
    height:100%;
    background-color black
    opacity 0.55
    z-index:-2;
</style>
