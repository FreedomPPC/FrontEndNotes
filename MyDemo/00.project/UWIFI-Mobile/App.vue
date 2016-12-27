<style lang="sass">
  .fade-transition {
    transition: opacity .3s ease;
  }
  .fade-enter, .fade-leave {
    opacity: 0;
  }
</style>
<template>
	<router-view transition="fade" transition-mode="out-in"></router-view>
</template>
<script>
	export default {

	}
</script>
