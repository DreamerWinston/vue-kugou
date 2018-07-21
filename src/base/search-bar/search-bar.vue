<template>
  <div class="searchBar">
    <div class="nav">
      <div class="icon">
        <img src="./search.png" alt="">
      </div>
      <input type="text" v-model="query" class="box" :placeholder="placeholder">
      <div class="icon_dismiss" v-show="query">
        <img src="" alt="">
      </div>
    </div>
    <div class="backbtn" @click="cancel">
      取消
    </div>

  </div>
</template>

<script>
import {debounce} from 'common/js/util'

export default {
  props: {
    placeholder: {
      type:String,
      default: '歌曲/歌手/专辑/歌单/用户/歌词'
    }
  },
  data(){
    return {
      query: ''
    }
  },
  methods: {
    clear() {
      this.query =''
    },
    setQuery(){
      this.query =query
    },
    blur(){
      this.$refs.query.blur()
    },
    cancel(){
      this.$router.push({
       path:'/listen',
     })
    }
  },
  created(){
    this.$watch('query',debounce((newQuery) =>{
      this.$emit('query',newQuery)
    },200))
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.searchBar
  height 100%
  width 100%
  display flex
  align-items: center
  margin-left 4%
  .nav
    width 76%
    height 30px
    border-radius: 6px
    display flex
    background-color rgba(0,0,0,0.3)
    .icon
      margin-left 5px
      display flex
      flex-direction: column
      justify-content: center
      &>img
        width 20px
        height 20px
    .box
      margin-left 5px
      width 100%
      background-color transparent
      line-height: 18px
      color white
      &::placeholder
        color rgba(255,255,255,0.4)
        font-size 13px
  .backbtn
    color white
    margin-left 4%
    width 12%
    height 30px
    line-height 30px
    text-align center
    vertical-align middle
</style>
