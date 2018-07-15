<template>
  <div class="sidebar-item">
    <router-link tag="div" class="tab-item" to="/listen">
      <div class="icon">
        <img :src="tpic" alt="">
      </div>

      <span>{{tname}}</span>
      <div class="display">

      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    tname:String,
    tpic:String
  },
  data(){
    return{

    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.sidebar-item
  width 100%
  height 40px
  display flex
  .tab-item
    margin-top 20px
    display flex
    box-sizing border-box
    align-items center
    .icon
      margin-left 20px
      &>img
        width 30px
    span
      font-size 15px
      margin-left 20px
      color white

</style>
