<template>
  <div id="app" :style="fullHeight">
    <div class="overlayer" @touchmove.prevent >
    </div>
    <transition name="fade">
      <div class="sideview" v-show="sideBarOn" >
        <sidebar class="sidebar"></sidebar>
      </div>
    </transition>
    <div class="screen" :class="{fade:isFade,slide:isSlide}" :style="screenWidth,screenHeight">
      <tabbar v-on:childMethod="tran"></tabbar>
      <keep-alive>
        <router-view>
        </router-view>
      </keep-alive>
      <playerBar :class="{fade:isFade,slide:isSlide}"></playerBar>
      <audio id="myaudio" ref="audio"  @timeupdate="musicTimeUpdate"
                          @canplay="musicCanPlay"
                          @playing="musicOnPlaying"
                          @ended="musicEnded"
                          @waiting="musicOnWaiting"
                          @pause="musicOnPause"
                          @loadstart="loadStart"></audio>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapMutations, mapActions} from 'vuex'

import tabbar from 'components/tabbar/tabbar'
import playerBar from 'components/playerBar/playerBar'
import sidebar from 'components/sidebar/sidebar'
import store from './store'

export default {
  data(){
    return{
      isFade:false,
      isSlide:false,
      fullHeight: 'height:'+document.documentElement.clientHeight+'px',
      screenWidth: 'width:'+document.documentElement.clientWidth+'px',
      screenHeight: 'height:'+document.documentElement.clientHeight+'px',
    }
  },
  computed: {
    ...mapGetters([
        'sideBarOn'
      ])
  },
  methods:{
    tran(){
      var scaleH = this.sideBarOn?200:0
      var scaleW =this.sideBarOn?0.82:1

      this.isFade=this.sideBarOn?true:false
      this.isSlide=this.sideBarOn?false:true
      this.screenWidth='width:'+(document.documentElement.clientWidth*scaleW)+'px',
      this.screenHeight='height:'+(document.documentElement.clientHeight-scaleH)+'px'

    },
    musicEnded () {
      store.dispatch('play_Ended')
      // 歌词初始化
      musicLrcIndex = 0
      store.commit({
        type: 'setLyricIndex',
        index: 0
      })
    },
    // 音乐播放时间更新事件
    musicTimeUpdate () {
      store.dispatch({
        type: 'set_CurrentTime',
        time: Math.floor(this.$refs.audio.currentTime)
      })

      // 设置歌词内容(以索引的形式显示,主要是)
      // let musicLrc = store.getters.getCurrentMusic.lyric
      // let currentTime = Math.floor(this.$refs.audio.currentTime)
      // if (musicLrc[musicLrcIndex] === undefined) return
      // if (musicLrc.length === 0) {
      //   store.commit({
      //     type: 'setLyricIndex',
      //     index: -1
      //   })
      //   return
      // }
      // for (let i = 0; i < musicLrc.length; i++) {
      //     if (currentTime >= Number(musicLrc[musicLrcIndex].timeId)) {
      //       musicLrcIndex += 1
      //       // return
      //       break
      //     } else {
      //       if (musicLrcIndex <= 0) {
      //         musicLrcIndex = 0
      //       } else {
      //         musicLrcIndex--
      //       }
      //     }
      // }
        // store.commit({
        //   type: 'setLyricIndex',
        //   index: musicLrcIndex
        // })
    },
    // 可以播放事件
    musicCanPlay () {
      store.dispatch({
        type: 'set_MusicDuration',
        duration: Math.floor(this.$refs.audio.duration)
      })
      store.commit({
        type: 'setMusicLoadStart',
        isloadstart: false
      })
    },
    // 音乐处于播放状态
    musicOnPlaying () {
      store.commit('play')
    },
    // 音乐处于watting状态
    musicOnWaiting () {
      // alert('音乐加载中')
    },
    // 音乐处于暂停状态
    musicOnPause () {
      store.commit('pause')
    },
    // 音乐加载
    loadStart () {
      store.commit({
        type: 'setMusicLoadStart',
        isloadstart: true
      })
    },

  },
   watch: {
      fullHeight (val) {
        if(!this.timer) {
          this.fullHeight = val
          this.timer = true
          let that = this
          setTimeout(function (){
            that.timer = false
          },400)
        }
      }
    },
  mounted() {
      const that = this
      window.onresize = () => {
        return (() => {
          window.fullHeight = document.documentElement.clientHeight
          that.fullHeight ='height:'+ window.fullHeight+'px'

          var scaleH = that.sideBarOn?200:0
          var scaleW =that.sideBarOn?0.82:1

          that.screenWidth='width:'+(document.documentElement.clientWidth*scaleW)+'px',
          that.screenHeight='height:'+(document.documentElement.clientHeight-scaleH)+'px'

        })()
      }
    },
    created(){

      setTimeout(() => {
       store.commit({type:'initPlayer'})
      store.dispatch('set_AudioElement', this.$refs.audio)

      }, 0);

    },
  components: {
    tabbar,
    playerBar,
    sidebar
  },

}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

#app
  width 100%
  position absolute
  overflow hidden
  min-width 375px
  min-height 812px
  width 100%
  // margin-bottom 0
  background-image url("./assets/bg.jpg")
  background-size cover
  background-repeat no-repeat
  background-position center
  background-attachment fixed
  z-index -10
  .fade
    animation: confirm-faderight 0.3s
    animation-fill-mode: forwards;
  .slide
    animation: confirm-fadeleft 0.3s
    animation-fill-mode: forwards;
  .sideview
    position absolute
    height 100%
    width 82%
    z-index -8
  .screen
    background-color white
    z-index 10
    overflow hidden
    width 100%
  .overlayer
    position:fixed;
    left:0;
    top:0;
    width:100%;
    height:100%;
    background-color black
    opacity 0.55
    z-index:-9;
 @keyframes confirm-faderight
    0%
      margin-top 0px
      margin-bottom 0px
      margin-left 0px
    100%
      margin-left 82%
      margin-top 100px
      margin-bottom 100px

  @keyframes confirm-fadeleft
    0%
      margin-left 82%
      margin-top 100px
      margin-bottom 100px
    100%
      margin-top 0px
      margin-bottom 0px
      margin-left 0px

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

</style>
