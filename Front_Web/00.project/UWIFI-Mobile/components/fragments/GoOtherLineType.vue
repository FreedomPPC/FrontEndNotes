<style lang="sass" scoped>
  @import '../../css/config.sass';
  .select-other-type {
    width: 100vw;
    height: 20vh;
    position: fixed;
    bottom: 10vh;
    p {
      color: #ccc;
      font-size: 2vh;
      margin: 0 auto;
      text-align: center;
    }

  }
</style>
<template>
  <div class="select-other-type">
    <p>其他上网方式</p>
    <slot name="nav"></slot>
  </div>
</template>

<script>
export default {
}
</script>
