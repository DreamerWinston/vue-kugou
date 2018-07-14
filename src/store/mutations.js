import * as types from './mutation-types'

const mutations ={
  [types.SET_SIDEBAR_ON](state, flag) {
    state.sideBarOn = flag
  }
}

export default mutations
