<style lang="sass" scoped>
  @import "../../css/config.sass";
  header{
    width: 100vw;
    height: 10vh;
    background: $c-blue;
  }
</style>

<template lang="html">
  <section class="">
    <header>
      <slot name="header"></slot>
    </header>
  </section>
</template>


<script>
export default {
  name: 'header',
}
</script>
