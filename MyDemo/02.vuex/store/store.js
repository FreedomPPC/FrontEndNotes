//第一步,先加入store
//建一个新文件 vuex/store.js

import Vue from 'vue';
import Vuex from 'vuex';

//常量命名之后，在store文件中也要import;
import { DIVIDE_THREE,PLUS_PLUS } from './mutation_types.js';
// 告诉 vue “使用” vuex
Vue.use(Vuex)

// 创建一个对象来保存应用启动时的初始状态
const state = {
  //放置初始状态
  count:0,
  doubleCount:0,
  divideThree:0,
  plus:0
}

// 创建一个对象存储一系列我们接下来要写的 mutation 函数
const mutations = {
  //放置我们的状态变更函数
  // 在我们的 vuex/actions.js 文件里我们 dispatch 了一个叫做 INCREMENT 的 mutation，
  //但是我们还没有写它所对应的具体操作。我们现在就来做这个事。
  // mutations的第一个参数是当前的state
  // 你可以在函数里修改state
  INCREMENT(state,amount){
      state.count = state.count + amount.payLoad;
  },
  REDUCE(state,amount){
      state.count = state.count - amount;
  },
  DOUBLE(state,amount){
  	state.doubleCount = state.count*amount;
  },
  //如果actions用了常量，mutations函数的写法就不一样了；
  [DIVIDE_THREE](state,amount){
    state.divideThree = state.count/amount;
  },
  [PLUS_PLUS](state,amount){
    state.plus = state.count+amount;
  }
}

// 整合初始状态和变更函数，我们就得到了我们所需的 store
// 至此，这个 store 就可以连接到我们的应用中
export default new Vuex.Store({
  state,
  mutations
})
