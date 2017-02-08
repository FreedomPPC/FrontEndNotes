<style lang="sass" scoped>
  @import '../../css/config.sass';
  .logo-container {
    width: 100vw;
    height: 15vh;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    div {
      img {
        display: block;
        margin:1vh auto;
        width: 3vw;
      }
      p {
        width: 100vw;
        text-align: center;
        color: $c-blue;
        font-size: 1.05rem;
        margin-top: 2vh;
      }
    }
  }
</style>
<template>
  <div class="logo-container">
    <div>
      <img src="../../images/icon-logo-l.png" alt="">
      <p>让人人乐享酒店生活</p>
    </div>
  </div>
</template>

<script>
export default {
}
</script>
