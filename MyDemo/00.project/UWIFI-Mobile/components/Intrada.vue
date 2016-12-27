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
    width: 56px;
    height: 30px;
    background-image:url('../images/skip.png');
    text-align: center;
    line-height: 30px;
    color: #fff;
  }
  .loading-flex {
    width: 100vw;
    display: flex;
    justify-content: center;
    position: fixed;
    bottom: 11vh;
    z-index: 30;
    .loading {
      background-image:url('../images/loading2.png');
      width: 154px;
      height: 77px;
      color: #fff;
      text-align: center;
      .fa {
        display: block;
        margin: 0 auto;
        margin-top: 12px;
        font-size: 30px;
      }
      .words {
        display: block;
        font-size: 14px;
        margin-top: 8px;
        letter-spacing: 5px;
      }
      .success-word {
        color: #fff;
        text-align: center;
        margin-top: 8px;
        font-size: 14px;
        margin-left: 12px;
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
          <img class="img-swiper" src="../images/reurl1-mobile.jpg">
        </div>
        <div class="swiper-slide">
          <img class="img-swiper" src="../images/reurl2-mobile.jpg">
        </div>
      </div>
    </div>
    <div class="loading-flex">
      <!-- 认证中 -->
      <div class="loading" v-if="onLoading">
        <i class="fa fa-spinner fa-spin fa-3x fa-fw"></i>
        <!-- <i class="fa fa-circle-o-notch fa-spin fa-2x"></i> -->
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
    this.identifySuccess()
  },
}

</script>
