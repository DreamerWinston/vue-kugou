<template>
  <div class="titlebar">
    <div class="left" @click="goback">
      <img src="./back.png" alt="">
    </div>
    <div class="title">{{tname}}</div>
    <div class="right"></div>
  </div>
</template>

<script>
export default {
  props: {
    tname:String
  },
  methods:{
    goback(){
      this.$router.isBack=true;
      this.$router.goBack()
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

.titlebar
  height 44px
  background-color #0F99FE
  width 100%
  text-align center
  .left
    float left
    line-height 44px
  .left>img
    width 35px
    vertical-align middle
  .title
    line-height 44px
    margin-left 35%
    width 30%
    height 44px
    color white
</style>
