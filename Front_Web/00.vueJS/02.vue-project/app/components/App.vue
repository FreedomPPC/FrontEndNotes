<template lang="html">
  <h1>Welcome to Vue World!!!</h1>
  <h2>Webpack+Vue</h2>
  <h3>{{msg}}</h3>
  <hr>
  <home v-ref:home></home>
  <road v-ref:road></road>
</template>

<script>
//webpack 中配置了 alias 相对路径写个参数就好
import Home from 'home';
import Road from './Road.vue';
export default {
  data(){
    return{
      msg:"i am root component"
    }
  },
  ready(){
    console.log(this.$children);
    //相当于 给子组件一个id；判断获取的是哪个子组件；
    console.log(this.$refs.home);
  },
  components:{
    Home,
    Road,
  }
}
</script>

<style>
</style>
