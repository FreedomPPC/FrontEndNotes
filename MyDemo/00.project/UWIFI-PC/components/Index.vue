<style lang="sass" scoped>
  @import "../css/config";
  .exhibition {
    width: 100vw;
    height: 60vh;
    display: block;
    background-image: url('../images/top-banner.jpg');
    background-size:100vw 60vh;
  }
	.bottom-section {
    width: 100vw;
    height: 30vh;
    .title {
      width: 100vw;
      height: 10vh;
      line-height: 10vh;
      text-align: center;
      background-color: $c-blue;
      color: #fff;
      font-size: 2.4vh;
    }
    .select-line-type {
      width: 100vw;
      height: 10vh;
      display: flex;
      margin-top: 5vh;
      .select-item {
        flex: 1;
        height: 10vh;
        display: flex;
        justify-content: center;
        align-items: center;
        background:left no-repeat url('../images/split.jpg');
        div {
          display: flex;
          justify-content: center;
          align-items: center;
          .flex-item {
            color: $f-deepblue;
            width: 33vw;
            height: 6vh;
            display: flex;
            justify-content: center;
            align-items: center;
            border:none;
            p {
              // width: 50vw;
              height: 6vh;
              line-height: 6vh;
              font-size: 3vh;
              display: flex;
              justify-content: space-around;
              align-items: center;
              .fa {
                float: left;
                text-align: center;
              }
              .line {
                margin-left: 3.5rem;
              }
            }
          }
        }
      }
    }
	}
  .active{
    background-image: url('../images/select-bg.png');
    background-size: 33vw 6vh;
    color: #fff !important;
  }
  .no-margin {
    margin-top:0 !important;
  }
  .expand-transition {
		transition: all .5s ease;
    height: 60vh;
	}
	/* .expand-enter 定义进入的开始状态 */
	/* .expand-leave 定义离开的结束状态 */
	.expand-enter, .expand-leave {
	  height: 0;
  }
  .fade-transition {
    transition: all .3s ease;
  }
  .fade-enter{
    transform: translateY(20vh);
  }
  .fade-leave {
    // opacity: 0;
    transform: translateY(-20vh);
  }

</style>
<template>
  <div>
    <div class="top-section">
    	<header v-if="topBanner" transition="expand" class="exhibition">
    	</header>
    <div>
  	<div class="bottom-section">
		  <div class="title">
			  欢迎使用免费WIFI，请选择连接方式
		  </div>
      <logo-slogen v-if="showLogoSlogen"></logo-slogen>
  		<div class="select-line-type" :class="{'no-margin':noMargin}">
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
      <router-view transition="fade" transition-mode="out-in" ></router-view>
      <Tech-Support></Tech-Support>
    </div>
  </div>
</template>

<script>
import TechSupport from './fragments/TechSupport';
import LogoSlogen from './fragments/LogoSlogen';
export default {
  data(){
    return{
      lineType:'',
      noMargin:false,
      topBanner: true,
      showLogoSlogen:false,
      windowHash:window.location.hash,
    }
  },
  methods:{
    gotoIdentify(type){
      switch(type){
        case 'wechat':
        this.lineType = type;
        this.topBanner = false;
        this.showLogoSlogen = true;
        this.$router.go('/index/wechat');

        break;
        case 'message':
        this.lineType = type;
        this.topBanner = false;
        this.showLogoSlogen = true;
        this.$router.go('/index/message');

        break;
        case 'account':
        this.lineType = type;
        this.topBanner = false;
        this.showLogoSlogen = true;
        this.$router.go('/index/account');
        break;
      }
    }
  },
  watch:{
    windowHash:function(newValue){
      console.log('111',newValue);
      if(newValue != '#!/index'){
        this.topBanner = false;
      }
    }
  },
	components:{
		TechSupport,
    LogoSlogen
	},
  ready(){
    window.onload = ()=>{
      this.$router.go('/index')
    };
    setInterval( ()=>{
      // window.onhashchange = () => {
        let theHash = location.hash;
        if ( theHash != '#!/index'){
          this.topBanner = false;
          this.showLogoSlogen = true;
          this.noMargin = true;
        } else if ( theHash == '#!/index' ){
          this.topBanner = true;
          this.showLogoSlogen = false;
          this.noMargin = false;
        }
      // }
    })
  }
}
</script>
