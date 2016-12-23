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
      margin-right: 3vw;
      display: block;
    }
    p{
      font-size: 12px;
      color: rgba(168,172,177,1);
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
