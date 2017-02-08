<style lang="less" scoped>
  .footer{
	  height: 10vh;
    width: 100vw;
    display: flex;
	  justify-content: center;
	  align-items: center;
    position: fixed;
    bottom: 0;
    img {
      margin-right: 1vw;
      display: block;
      height: 1.4vh;
    }
    p{
      font-size: 1.6vh;
      color: #c6c6c6;
    }
  }
</style>
<template>
  <div class="footer" >
    <img src="../../images/icon-logo-m.png" alt="">
    <p>
      由盛阳科技提供技术支持
    </p>
  </div>
</template>

<script>
export default {
}
</script>
