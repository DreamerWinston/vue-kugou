import { stat } from "fs";



const audioInfo = {
  state:{
    audioelement:'',
    audio:{
      id:0,
      song_name:'',
      author_id:'',
      author_name:'',
      hash:'',
      img_url:'',
      play_url:'',
      type:'',
      lyric:'',
      length:0,
      fileSize:0,
    },
    isPlaying: false,
    isWaiting: false,
    	// 音乐是否在加载
		musicLoadStart: false,
    currentTime: 0,
    currentIndex: 0,
    musicDuration:0,
    playType: 1,
    // 1为顺序播放 2随机播放 3为单曲循环
    musicDuration:0,
    musicLoadStart:false,
    localMusicList:[],
    loveMusicList:[],
    downloadMusicList:[],
    HistoryList:[],
    currentList:[],
    lyricIndex:0,
    showMusicSheet:false,
  },
  getters: {
    // 获取当前播放歌曲
    getCurrentSong: state =>state.audio,

    // 获取播放类型
		getMusicPlayType: state => state.playType,
		// 获取当前的播放进度
		getCurrentTime: state => state.currentTime,

    // 以下为引用
    // 获取audio元素
		getAudioElement: state => state.audioelement,

		// 获取当前播放的索引
    getCurrentIndex: state => state.currentIndex,

		// 获取音乐播放列表信息
		getMusicList: state => state.currentList,

		// 获取音乐是否播放
		getIsPlaying: state => state.isPlaying,
		// 获取音乐是否加载
		getIsWaiting: state => state.isWaiting,
		// 获取音乐是否打开底部音乐列表
		getMusicSheet: state => state.showMusicSheet,
		// 当前音乐详细信息
		getCurrentMusic: state => state.musicList[state.currentIndex],
		// 获取播放类型
		getMusicPlayType: state => state.playType,
		// 获取当前的播放进度
		getCurrentTime: state => state.currentTime,
		// 获取音乐的播放时长
		getMusicDuration: state => state.musicDuration,
		// 音乐开始加载
		getIsLoadStart: state => state.musicLoadStart,


		// 获取音乐歌词当前播放的索引
		getLyricIndex: state => state.lyricIndex
  },
  mutations: {
    // 初始化对象
    setAudioElement (state, ele) {
      state.audioelement = ele
      state.audioelement.setAttribute('src', state.audio.play_url)
			state.audioelement.load()
		},

    // 初始化播放器
    initPlayer(state){
      var obj =JSON.parse(localStorage.getItem('lastMusic'));
      if(!obj){
        console.log('没有这个对象');
        obj ={
          type:'default',
          data: {
            song_name:"暂无",
            author_name:"暂无",
          }
        }

        state.audio.song_name =obj.data.song_name;
        state.audio.author_id =obj.data.author_id;
        return
      }
      state.audio=obj
    },

    // 加载某一个音乐
    playMusic(state,obj){

      state.audio =obj.data
      state.isPlaying = true
      state.currentList.push(obj.data);
      state.currentIndex= state.currentList.length-1;
      state.audioelement.setAttribute('src', state.currentList[state.currentIndex].play_url);
      state.audioelement.load()
      state.audioelement.play()
    },


    togglePlay (state) {
			if (state.isPlaying) {
				state.isPlaying = false
				state.audioelement.pause()
			} else {
				state.isPlaying = true
				state.audioelement.play()
      }
    },
// 播放
    play(state){
      state.isPlaying=true;
      state.audioelement.play()
    },
// 暂停
    pause(state){
      state.isPlaying=false;
      state.audioelement.pause()
    },

    playNext(state){

    },

    playEnded (state) {
			let type = state.playType
			if (type === 1) {
				state.currentIndex ++
				const length = state.musicList.length
				if (state.currentIndex >= length) {
					state.currentIndex = 0
				}
				state.audioelement.setAttribute('src', state.musicList[state.currentIndex].url)
				state.playing = true
				state.audioelement.load()
				state.audioelement.play()
			}
			if (type === 2) {
				state.audioelement.currentTime = 0
				state.playing = true
				state.audioelement.play()
			}
			if (type === 3) {
				const length = state.musicList.length
				state.currentIndex = Math.floor(Math.random() * length)
				state.audioelement.setAttribute('src', state.musicList[state.currentIndex].url)
				state.playing = true
				state.audioelement.load()
				state.audioelement.play()
			}
		},

    setPlayType (state) {
			if (state.playType === 3) {
				state.playType = 1
			} else {
				state.playType ++
			}
		},
		// 播放下一曲
		playNext (state) {
			state.currentIndex +=1
			const length = state.musicList.length
			if (state.currentIndex >= length) {
				state.currentIndex = 0
			}
			state.audioelement.setAttribute('src', state.musicList[state.currentIndex].play_url)
			state.playing = true
			state.audioelement.load()
			state.audioelement.play()
		},

		// 播放上一曲
		playPrev (state) {
			state.currentIndex -=1
			const length = state.musicList.length
			if (state.currentIndex < 0) {
				state.currentIndex = length - 1
			}
			state.audioelement.setAttribute('src', state.musicList[state.currentIndex].play_url)
			state.playing = true
			state.audioelement.load()
			state.audioelement.play()
    },

    	// 设置当前的播放索引
		playIndex (state, obj) {
			state.currentIndex = obj.index
			state.audioelement.setAttribute('src', state.musicList[state.currentIndex].url)
			state.playing = true
			state.audioelement.load()
			state.audioelement.play()
    },
    setMusicLoadStart (state, obj) {
			state.musicLoadStart = obj.isloadstart
    },
    setCurrentTime (state, obj) {
			state.currentTime = obj.time
		},
    setMusicDuration (state, obj) {
			state.musicDuration = obj.duration
    },
    // 设置音乐歌词当前播放的索引
		setLyricIndex (state, obj) {
			state.lyricIndex = obj.index
    },
    setLocalData(state){
      localStorage.setItem('lastMusic',JSON.stringify(state.audio))
    }

  },
  actions: {
    set_AudioElement ({commit}, ele) {
			commit('setAudioElement', ele)
    },
    play_Next ({commit}) {
			commit('playNext')
		},
		play_Prev ({commit}) {
			commit('playPrev')
		},
		play_Index ({commit}, obj) {
			commit('playIndex', obj)
		},
		play_Ended ({commit}) {
			commit('playEnded')
    },
    set_MusicDuration ({commit}, obj) {
			commit('setMusicDuration', obj)
    },
    set_CurrentTime ({commit}, obj) {
			commit('setCurrentTime', obj)
    },
    set_PlayType ({commit}) {
			commit('setPlayType')
    },
    set_LocalData ({commit}){
      commit('setLocalData')
    },

  }
}

export default audioInfo
