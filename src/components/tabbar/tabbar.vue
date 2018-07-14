<template>
  <div class="tabbar">
    <div tag="div" class="tab-item" @click="sideBarControl">
      <img src="./tab_side_normal.png" alt="">
    </div>

     <div class="main">
        <router-link tag="div" class="tab-item" to="/listen">
        <img src="./tab_listen_click.png" alt="">
      </router-link>

      <router-link tag="div" class="tab-item" to="/watch">
        <img src="./tab_watch_normal.png" alt="">
      </router-link>

      <router-link tag="div" class="tab-item" to="/sing">
        <img src="./tab_sing_normal.png" alt="">
      </router-link>
     </div>

    <router-link tag="div" class="tab-item" to="/search">
      <img src="./tab_search_normal.png" alt="">
    </router-link>
  </div>
</template>

<script>
import {mapGetters, mapMutations, mapActions} from 'vuex'
export default {
  computed: {
    ...mapGetters([
        'sideBarOn'
      ])
  },
  methods: {
    sideBarControl(){
      this.setSideBarOn(!this.sideBarOn)
      this.$emit('childMethod')
    },
     ...mapMutations({
        setSideBarOn: 'SET_SIDEBAR_ON'
    })
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.tabbar
  padding 0px 10px
  display flex
  justify-content space-between
  height 44px
  line-height 44px
  font-size 14px
  background-color #0F99FE
  color white
  .tab-item
    width 40px
    &>img
      margin 5px auto
      width 25px
      vertical-align middle
  .main
    display flex
    width 225px
    .tab-item
      flex 1
      text-align center
      &>img
        width 35px
      .tab-link
        padding-bottom 5px
        color: $color-text-l
      &.router-link-active
        .tab-link
          color: $color-theme
          border-bottom: 2px solid $color-theme

</style>
