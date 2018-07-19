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
  <audio ref="audio" :src="current_song_url"></audio>
  </scroll>
</template>

<script>
import {requestSearchSong} from 'api/search'
import scroll  from 'base/scroll/scroll'
import {ERR_OK} from 'api/config'
import {requestSongWithHash} from 'api/song'

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
        current_song_url: ''
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
          console.log("啦啦啦阿拉");
          console.log(res.data);
          if (res.errno === ERR_OK) {
            console.log("在这里11");
            this.result=this._setupData(res.data.data.info)

          }
        })
      },
      selectItem(item){



         requestSongWithHash(item.hash).then((res)=>{
           this.current_song_url=res.data.data.play_url
            console.log(res.data.data.play_url);
             const audio = this.$refs.audio
        this.$nextTick(() => {
            audio.play()
        })
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
