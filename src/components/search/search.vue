<template>
  <div class="search">
    <div class="searchBar-warpper">
      <searchBar ref="searchBox" @query="onQueryChange"></searchBar>
    </div>
    <div ref="shortcutWrapper" class="shortcut-wrapper" v-show="!query">
      <scroll>
        <div class="singer-sort">歌手分类</div>
        <div class="hot-key">热门搜索</div>
        <div class="song-history">搜索历史</div>
      </scroll>
    </div>
    <div class="search-result" v-show="query" ref="searchResult">
      <searchResult @listScroll="blurInput"  v-show="query" ref="searchResult" :query="query"></searchResult>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import {requestSearchSong} from 'api/search'
import searchBar from 'base/search-bar/search-bar'
import {ERR_OK} from 'api/config'
import scroll from 'base/scroll/scroll'
import searchResult from 'components/search-result/search-result'
import {searchMixin} from 'common/js/mixin'

export default {
  mixins: [searchMixin],
  data() {
    return {
      result: []
    }
  },
  computed: {

  },
  created() {

  },
  methods: {

  },
  watch: {
    query(newQuery) {
        if (!newQuery) {
          setTimeout(() => {
            this.$refs.shortcut.refresh()
          }, 20)
        }
      }
  },
  components: {
    searchBar,
    scroll,
    searchResult
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.search
  .search-result
      position: fixed
      width: 100%
      top: 178px
      bottom: 0

</style>
