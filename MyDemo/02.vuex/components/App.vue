<template>
  <div>
    <Display></Display>
    <Increment></Increment>
  </div>
</template>

<script>

import Display from './Display.vue'
import Increment from './Increment.vue'
import store from '../store/store.js'
import $ from 'jquery'
export default {
	data:function(){
		return{

		}
	},

  components: {
    Display: Display,
    Increment: Increment
  },
  store:store, //根组件加入store,让它的子组件和store连接
  ready(){
    console.log($('body'));
    $('body').css({'background':'deepskyblue'});
  }
}
</script>
