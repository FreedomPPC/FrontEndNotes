<style lang="sass" scoped>
  @import "../css/config";
  img.exhibition {
    width: 100vw;
    height: 44vh;
    display: block;
  }
	.bottom-section {
    width: 100vw;
    height: 56vh;
    .title {
      width: 100vw;
      height: 10vh;
      line-height: 10vh;
      text-align: center;
      background-color: $c-blue;
      color: #fff;
      font-size: 0.85rem;
    }
    .select-line-type {
      width: 100vw;
      height: 33vh;
      .select-item {
        width: 100vw;
        height: 11vh;
        display: flex;
        justify-content: center;
        align-items: center;
        div {
          width: 90vw;
          height: 100%;
          border-bottom: 1px solid $b-eee;
          display: flex;
          justify-content: center;
          align-items: center;
          .flex-item {
            color: $f-deepblue;
            width: 80vw;
            height: 6vh;
            display: flex;
            justify-content: center;
            align-items: center;
            border:none;
            p {
              // width: 50vw;
              height:6vh;
              line-height: 6vh;
              font-size: 1.15rem;
              display: flex;
              justify-content: space-around;
              align-items: center;
              .fa {
                float: left;
                text-align: center;
              }
              .line {
                margin-left: 1.5rem;
              }
            }
          }
        }
      }
    }
	}
  .active{
    background-image: url('../images/select-bg.png');
    background-size: 80vw 6vh;
    color: #fff !important;
  }
</style>
<template>
  <div class="top-section">
  	<header>
  		<img class="exhibition" src="../images/top-banner-mobile.jpg"alt="">
  	</header>
  <div>
	<div class="bottom-section">
		<div class="title">
			欢迎使用免费WIFI，请选择连接方式
		</div>
		<div class="select-line-type">
			<div class="select-item">
        <div>
          <div class="flex-item" :class="{'active':lineType=='wechat'}" @click="gotoIdentify('wechat')">
            <p>
              <i class="fa fa-weixin" aria-hidden="true"></i>
              <span  class="line">微信认证上网</span>
            </p>
          </div>
        </div>
			</div>
			<div class="select-item">
        <div>
          <div class="flex-item" :class="{'active':lineType=='message'}" @click="gotoIdentify('message')">
            <p>
              <i class="fa fa-envelope" aria-hidden="true"></i>
              <span class="line">短信认证上网</span>
            </p>
          </div>
        </div>
			</div>
			<div class="select-item">
        <div>
          <div class="flex-item" :class="{'active':lineType=='account'}" @click="gotoIdentify('account')">
            <p>
              <i class="fa fa-unlock-alt" aria-hidden="true"></i>
              <span class="line">账号认证上网</span>
            </p>
          </div>
        </div>
			</div>
		</div>
    <Tech-Support></Tech-Support>
  </div>
</template>

<script>
import TechSupport from './fragments/TechSupport';
export default {
  data(){
    return{
      lineType:''
    }
  },
  methods:{
    gotoIdentify(type){
      switch(type){
        case 'wechat':
        this.lineType = type;
        this.$router.go('/wechat');

        break;
        case 'message':
        this.lineType = type;
        this.$router.go('/message');

        break;
        case 'account':
        this.lineType = type;
        this.$router.go('/account');
        break;
      }
    }
  },
	components:{
		TechSupport,
	}
}
</script>
