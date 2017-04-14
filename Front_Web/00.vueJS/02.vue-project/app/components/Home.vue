<template lang="html">
  <h1>I am home component</h1>
  <h1>{{child}}</h1>
</template>

<script>
export default {
  data(){
    return{
      child:"Come Home"
    }
  },
  ready(){
    console.log(this.$parent);
  }
}
</script>

<style lang="css">
  h1{
    color: red;
  }
</style>
