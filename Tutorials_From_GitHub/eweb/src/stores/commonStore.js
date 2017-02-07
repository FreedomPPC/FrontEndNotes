import * as PORTAL from './mutation-types'

// initial state

const state = {
    text:'demo',
    titleString:""
}

// mutations
const mutations = {
  [PORTAL.TEST] (state, text) {
      state.text = text;
  },

  [PORTAL.TITLE] (state, str) {
      state.titleString = str;
  }
}

export default {
  state,
  mutations
}
