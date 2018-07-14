<template>
  <div id="app" :style="fullHeight">
     <div id="main">
        <transition name="fade">
          <div class="sideview" v-show="sideBarOn" >
            <sideBar class="sidebar"></sideBar>
          </div>
        </transition>
        <div class="screen" :class="{fade:isFade,slide:isSlide}">
          <tabbar v-on:childMethod="tran"></tabbar>
          <keep-alive>
            <router-view>
            </router-view>
          </keep-alive>
          <playerBar :class="{fade:isFade,slide:isSlide}"></playerBar>
        </div>
     </div>
  </div>
</template>

<script>
import {mapGetters, mapMutations, mapActions} from 'vuex'

import tabbar from 'components/tabbar/tabbar'
import playerBar from 'components/playerBar/playerBar'
import sideBar from 'components/sideBar/sideBar'

export default {
  data(){
    return{
      isFade:false,
      isSlide:true,
      fullHeight: 'height:'+document.documentElement.clientHeight+'px'
    }
  },
  computed: {
    ...mapGetters([
        'sideBarOn'
      ])
  },
  methods:{
    tran(){
      this.isFade=!this.isFade
      this.isSlide=!this.isSlide
    }
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
        })()
      }
    },
  components: {
    tabbar,
    playerBar,
    sideBar
  },

}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

#app
  width 100%
  position absolute
  // min-width 320px
  // margin-bottom 0
  background-image url("./assets/bg.jpg")
  background-size cover
  background-repeat no-repeat
  background-position center
  background-attachment fixed

  .fade
    animation: confirm-fadein 0.3s
    animation-fill-mode: forwards;
  .slide
    animation: confirm-fadeout 0.3s
    animation-fill-mode: forwards;
  .sideview
    position absolute
    margin-top -20%
    height 100%
    width 82%

 @keyframes confirm-fadein
    0%
      margin-top 0px
      margin-bottom 0px
      margin-left 0px
    100%
      margin-left 82%
      margin-top 20%
      margin-bottom 20%

  @keyframes confirm-fadeout
    0%
      margin-left 82%
      margin-top 20%
      margin-bottom 20%
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
