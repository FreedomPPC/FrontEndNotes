<template lang="html">
  <ul>
  	<li @click="one()">news--01</li>
  	<li v-link="{ name: 'detail', params: {id: '02'} }">news--02</li>
  	<li v-link="{ name: 'detail', params: {id: '03'} }">news--03</li>
  	<li v-link="{ name: 'detail', params: {id: '04'} }">news--04</li>
  </ul>
  <router-view></router-view>
</template>

<script>
export default {
  methods:{
    one(){
      this.$router.go({name:'detail',params:{ id:'01' },query:{favourite:'yunhao.li'}})
    }
  }
}
</script>

<style lang="less" scoped>
  ul{
    margin-left: 3rem;
    margin-top: 1rem;
    font-size: 2rem;
    color:orange;
  }
</style>
