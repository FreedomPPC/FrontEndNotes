<style lang="sass">
  @import '../node_modules/swiper/dist/css/swiper.min.css';
  .swiper-slide{
    width: 100vw;
    height: 100vh;
    .img-swiper {
      width: 100vw;
      height: 100vh;
    }
  }
  .skip-step {
    position: fixed;
    top: 2vh;
    right: 3vw;
    z-index: 20;
    width: 98px;
    height: 55px;
    background-image:url('../images/skip.png');
    background-size: 98px 55px;
    text-align: center;
    line-height: 55px;
    color: #fff;
    font-size: 1.5rem;
  }
  .loading-flex {
    width: 100vw;
    display: flex;
    justify-content: center;
    position: fixed;
    bottom: 11vh;
    z-index: 30;
    .loading {
      width: 284px;
      height: 138px;
      background-size:284px 138px;
      background-image:url('../images/loading.png');
      color: #fff;
      text-align: center;
      .fa {
        display: block;
        margin: 25px auto 0;
        font-size: 60px;
      }
      .words {
        display: block;
        font-size: 16px;
        margin-top: 10px;
        letter-spacing: 6px;
        margin-left: 16px;

      }
      .success-word {
        color: #fff;
        text-align: center;
        margin-top: 10px;
        font-size: 22px;
        margin-left: 16px;
      }
    }
  }
</style>
<template>
  <div>
    <div class="skip-step">
      跳过
    </div>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img class="img-swiper" src="../images/reurl1.jpg">
        </div>
        <div class="swiper-slide">
          <img class="img-swiper" src="../images/reurl2.jpg">
        </div>
      </div>
    </div>
    <div class="loading-flex">
      <!-- 认证中 -->
      <div class="loading" v-if="onLoading">
        <i class="fa fa-spinner fa-spin fa-3x fa-fw"></i>
        <span class="words">LOADING</span>
      </div>
      <!-- 认证成功 -->
      <div class="loading" v-if="afterLoading">
        <i class="fa fa-check-circle" aria-hidden="true"></i>
        <p class="success-word">
          认证成功！
        </p>
      </div>

    </div>
  </div>
</template>

<script>
import Swiper from 'swiper'
export default {
  data() {
    return {
      onLoading: true,
      afterLoading: false,
    }
  },
  methods:{
    identifySuccess(){
      setTimeout( ()=>{
        this.onLoading = false;
        this.afterLoading = true;
      },3000 )
    }
  },
  ready(){
    var mySwiper = new Swiper('.swiper-container', {
    	autoplay: 3000,//可选选项，自动滑动
    });
    this.identifySuccess();
  },

}

</script>
