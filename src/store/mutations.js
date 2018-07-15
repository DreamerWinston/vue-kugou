import * as types from './mutation-types'

const mutations ={
  [types.SET_SIDEBAR_ON](state, flag) {
    state.sideBarOn = flag
  },
  [types.SET_LOG_IN](state, flag) {
    state.isLogin = flag
  }
}

export default mutations
