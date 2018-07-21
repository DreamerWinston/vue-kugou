<template>
  <scroll ref="searchResult"
          class="search-result"
          :data="result"
          :pullup="pullup"
          :beforeScroll="beforeScroll"
          @scrollToEnd="searchMore"
          @beforeScroll="listScroll"
    >
    <ul class="search-result-list">
      <li @click="selectItem(item)" class="result-item" v-for="item in result">
        <div class="addBtn"></div>
        <div class="detail">
          <span class="name" v-html="getNameWithItem(item)"></span>
          <span class="author" v-html="getAuthorWithItem(item)"></span>
        </div>
        <div class="more"></div>
      </li>
    </ul>
  </scroll>
</template>

<script>
import {requestSearchSong} from 'api/search'
import scroll  from 'base/scroll/scroll'
import {ERR_OK} from 'api/config'
import {requestSongWithHash} from 'api/song'
import store from '../../store'

export default {
  props: {
    query: {
      type: String,
      default: true
    }
  },
  components: {
    scroll
  },
  data() {
      return {
        page: 1,
        pullup: true,
        beforeScroll: true,
        hasMore: true,
        result: [],
      }
  },
  watch: {
      query(newQuery) {
        this.search(newQuery)
      }
  },
   components: {
      scroll
  },
   methods: {
      refresh() {
        this.$refs.searchResult.refresh()
      },
      search() {
        this.page = 1
        this.hasMore = true
        this.$refs.searchResult.scrollTo(0, 0)
        requestSearchSong(this.query, this.page, 10).then((res) => {
          if (res.errno === ERR_OK) {
            this.result=this._setupData(res.data.data.info)
          }
        })
      },
      selectItem(item){

         requestSongWithHash(item.hash).then((res)=>{
           this.current_song_url=res.data.data.play_url
           store.commit({
             type:'playMusic',
             data:res.data.data
           });
           store.dispatch('set_LocalData')
         })
      },
      searchMore() {
        if (!this.hasMore) {
          return
        }
        this.page++
        requestSearchSong(this.query, this.page, 10).then((res) => {
          if (res.code === ERR_OK) {

          }
        })
      },
      listScroll() {
        this.$emit('listScroll')
      },
      _setupData(data){
        let arrayData  =[]
        arrayData =arrayData.concat(data);
        return arrayData
      },
      getNameWithItem(item){
        return item.songname_original
      },
      getAuthorWithItem(item){
        return item.singername
      }
   }


}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.search-result
  height 100%
  overflow hidden
  .search-result-list
      padding: 0 30px
      .result-item
        display: flex
        align-items: center
        padding-bottom: 20px
</style>
