<style lang="css">
  .body-container {
    width: 100vw;
    height:45vh;
    position: relative;
    overflow: hidden;
  }
</style>
<template lang="html">
  <div class="body-container">
    <slot name="identify"></slot>
  </div>
</template>

<script>
export default {
}
</script>
