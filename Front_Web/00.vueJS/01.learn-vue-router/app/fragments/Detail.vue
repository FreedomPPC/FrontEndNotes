<template lang="html">
  <div>
    NewsDetail ---$route.params.id:<span>{{$route.params.id}}</span>#######
  </div>
</template>

<script>
export default {
}
</script>

<style lang="less" scoped>
  div{
    margin-left: 3rem;
    font-size: 1.5rem;
    color: black;
    margin-top: 2rem;
    padding: 5px;
    border:1px solid black;
    span{
      color: red;
    }
  }
</style>
