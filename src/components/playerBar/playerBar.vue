<template>
  <div class="player">

    <div class="playerview" >
      <div class="album" @click="gotoNext">
        <img :src="musicImage?musicImage:'static/p_album_b.png'" alt="">
      </div>
      <div class="text" @click="gotoNext">
        <span class="music_name" @click="gotoNext" >{{musicName}}</span>
        <span class="music_author" @click="gotoNext">{{musicSinger}}</span>
      </div>
      <div class="progress" >
        <progress-bar :percent="percent" ></progress-bar>
      </div>
      <div class="control playpause" @click.stop="playpause">
        <img :src="iconPlayPause?'static/p_pause.png':'static/p_play.png'" alt="">
      </div>
      <div class="control">
        <img src="./p_next.png" alt="">
      </div>
      <div class="control">
        <img src="./p_queue.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
import store from './../../store'
import ProgressBar from '../../base/progress-bar/progress-bar'
import ProgressCircle from '../../base/progress-circle/progress-circle'


export default {
  data () {
			return {
				audioInfo: {
				},
				myaudio: {},
				state: {
					isplaying: false,
					loading: false,
					currentIndex: 0
				}
			}
		},
  computed: {

      percent() {
        return this.$store.getters.getCurrentTime / this.$store.getters.getMusicDuration
      },
      iconPlayPause () {
				return this.$store.getters.getIsPlaying
			},
			// 获取音乐名称
			musicName () {
				return this.$store.getters.getCurrentSong ? this.$store.getters.getCurrentSong.song_name : ''
			},
			// 获取歌手名称
			musicSinger () {
				return this.$store.getters.getCurrentSong ? this.$store.getters.getCurrentSong.author_name : ''
			},
			// 获取音乐封面地址
			musicImage () {
				return this.$store.getters.getCurrentSong ? this.$store.getters.getCurrentSong.img : ''
			},
			// 获取音乐播放地址
			musicUrl () {
				return this.$store.getters.getCurrentSong ? this.$store.getters.getCurrentSong.play_url : ''
			}
    },
    mounted () {
      // 所有的audio的 vuex 的状态信息
			this.audioInfo = this.$store.state.player
			// 音乐是否play
			this.state.isplaying = this.audioInfo.isPlaying
		},
  components: {
    ProgressBar,
    ProgressCircle
  },
  methods: {

     playpause () {
				store.commit('togglePlay')
      },
        playNext () {
				store.dispatch('play_Next')
			},
    gotoNext(){
      this.$router.push({
       path:'/musicDetail'
     })
    }
  },
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
      margin-left 92px
      margin-top -20px
    .album
      margin-top -10px
      margin-left 10px
      float left
      &>img
        border-radius: 50%
        height 70px
        animation: rotate 10s linear infinite
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


  @keyframes rotate
    0%
      transform: rotate(0)
    100%
      transform: rotate(360deg)
</style>
