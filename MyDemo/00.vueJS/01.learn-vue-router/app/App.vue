<template lang="html">
  <div class="">
    <div class="container">
      <div class="link">
        <h1 v-link="{path: '/home' ,activeClass:'active'}"  >GO Home</h1>
        <h1 v-link="{path: '/about',activeClass:'active'}" >Go About</h1>
      </div>
      <div style="margin-left:40px;font-size:20px;color:red">
        <p>路由对象</p>
        <p>当前路径$route.path:{{$route.path}}</p>
        <p>当前参数$route.params:{{$route.params | json}}</p>
        <p>路由名称$route.name：{{$route.name}}</p>
        <p>路由查询参数$route.query | json：{{$route.query | json}}</p>
        <p>路由匹配项$route.matched | json：{{$route.matched | json}}</p>
        <p>{{$route.router}}</p>
      </div>
    </div>
    <div>
      <p>PATH FROM:<span>{{pathFrom}}</span>></p>
      <p>PATH To<span>{{pathTo}}</span></p>
    </div>
    <div class="router">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      search:''
    }
  },
  computed:{
    search(){
      return this.$route.query.favourite
    }
  },
  watch:{
    search(newVal){
      if(newVal=='yunhao.li'){
        // console.log(newVal);
        // document.body.style.background = `rgb(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)})`;
        // document.body.style.background = '#ccc'

      }else{
        // document.body.style.background = '#fff'

      }
    }
  },
  
  ready(){
    // console.log(this.search);
    // console.log(this.$route.router);
  }
}
</script>

<style lang="less" scoped>
  .active{
    background-color: deepskyblue;
  }
  .container{
    padding: 20px;
    display: flex;
    height: 40vh;
    background-color: #ccc;
    overflow: hidden;
    .link{
      h1{
        width: 13vw;
        margin-left: 2rem;
        padding: 5px;
        border: 1px solid black;
        border-radius: 10px;
        margin-top: 20px;
      }
    }
  }
</style>
