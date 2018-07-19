<template>
  <div class="searchBar">
    <div class="nav">
      <div class="icon">
        <img src="" alt="">
      </div>
      <input type="text" v-model="query" class="box" :placeholder="placeholder">
      <div class="icon_dismiss" v-show="query">
        <img src="" alt="">
      </div>
    </div>
    <div class="backbtn">
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
    }
  },
  created(){
    this.$watch('query',debounce((newQuery) =>{
      this.$emit('query',newQuery)
    },200))
  }
}
</script>

<style>

</style>
