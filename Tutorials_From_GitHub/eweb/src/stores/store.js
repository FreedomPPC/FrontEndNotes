import Vue from 'vue';
import Vuex from 'vuex';
import commonStore from './commonStore';
import createLogger from 'common/logger';

Vue.use(Vuex)
// console.log(Vuex);
// Vue.config.debug = true

const debug = process.env.NODE_ENV === 'dev '

export default new Vuex.Store({
  modules: {
    commonStore
  },
  strict: debug,
  middlewares: debug ? [createLogger()] : []
})
