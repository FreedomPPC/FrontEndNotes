<style lang="less">
  button{
    background: deepskyblue;
    height: 40px;
    line-height: 40px;
    text-align: center;
    border: none;
    font-family: "微软雅黑";
    font-size: 20px;
    cursor: pointer;
    padding: 5px;
    border-radius:5px;  
    &:not(.first){

      margin-left: 10px;
    }
  }

</style>
<template>
  <div>
    <button class="first" @click='increment'>Increment +5</button>
    <button @click="reduce">Increment -10</button>
    <button @click="doubleTwo">Double</button>
    <button @click="divide">DivideThree</button>
    <button @click="plus()">PlusPlus</button>
  </div>
</template>

<script>
import { incrementCounter,reduceCounter,doubleCounter,divideThree,plusPlus} from '../store/actions'
export default {
  vuex: {
    actions: {
      increment: incrementCounter,
      reduce:reduceCounter,
      doubleTwo:doubleCounter,
      divide:divideThree,
      plus:plusPlus
    }
  },


}
</script>
