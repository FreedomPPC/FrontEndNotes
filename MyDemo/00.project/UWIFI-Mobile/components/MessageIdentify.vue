<style lang="sass" scoped>
  @import "../css/global.sass";
  .iti-flag {
    background-image: url("../lib/img/flags.png");
  }
  .flex-item {
    width: 100vw;
    height: 10vh;
    color: #fff;
  }
  .ipt-fa-code {
    display: flex;
    align-items: center;
    P {
      width: 54vw;
      height: 7vh;
      background: $c-blue;
      // margin-top: 0.5vh;
      margin-right: 1vw;
      border-top-right-radius: 40vw;
      border-bottom-right-radius: 40vw;
      line-height: 7vh;
      text-align: center;
      color: #fff;
      font-size: 2vh;
    }
    .send {
      background: $s-thinBlue;
      pointer-events:none;
      color: $s-deepskyblue;
      font-size: 2vh;
    }
  }
  .ipt:nth-of-type(1){
    display: flex;
    // justify-content: center;
    align-items: center;
  }
  #mobile-number {
    width: 100% !important;
    margin-left: 2rem;
    text-indent: 0 !important;
  }
</style>

<template>
  <div>
    <Header-Component>
      <div slot="header">
        <div class="flex-item" :class="{'active':lineType=='message'}" @click="gotoIdentify('message')">
          <p>
            <i class="fa fa-envelope" aria-hidden="true"></i>
            <span class="line">短信认证上网</span>
          </p>
        </div>
      </div>
    </Header-Component>
    <logo-slogen></logo-slogen>
    <Body-Component>
      <div class="ipt-container" slot="identify">
        <div class="ipt">
          <!-- <input type="number" placeholder="请输入手机号码"> -->
          <input id="mobile-number" v-model="TelCode" type="tel" placeholder="e.g. +1 702 123 4567">
        </div>
        <div class="ipt ipt-fa-code">
          <input type="text"  placeholder="请输入验证码">
          <p :class="{'send':haveSend}" @click="sendMessage()">{{sendTips}}</p>
        </div>
        <p class="tips" v-show="showTips">
          <i class="fa fa-exclamation-circle" aria-hidden="true"></i>
          {{errorTips}}
        </p>
        <div class="ipt" @click="lineWifi()">
          <span>连</span><span>接</span>
        </div>
      </div>
    </Body-Component>
    <other-type>
      <div class="nav" slot="nav">
        <div class="nav-flex" @click="gotoOtherMode('wechat')">
          <p class="icon"><i class="fa fa-weixin" aria-hidden="true"></i></p>
          <p>微信认证</p>
        </div>
        <div class="nav-flex" @click="gotoOtherMode('account')">
          <p class="icon"><i class="fa fa-unlock-alt" aria-hidden="true"></i></p>
          <p>账号认证</p>
        </div>
        <div class="nav-flex" @click="gotoOtherMode('home')">
          <p class="icon"><i class="fa fa-home" aria-hidden="true"></i></p>
          <p>返回首页</p>
        </div>
      </div>
    </other-type>
    <Tech-Support></Tech-Support>
  </div>
</template>

<script>
import HeaderComponent from './fragments/Header.vue';
import LogoSlogen from './fragments/LogoSlogen.vue';
import TechSupport from './fragments/TechSupport.vue';
import OtherType from './fragments/GoOtherLineType.vue';
import BodyComponent from './fragments/Body.vue';

export default {
  name:'message',
  data(){
    return {
      showTips: true,
      haveSend: false,
      sendTips: '发送验证码',
      count: 60,
      errorTips: '手机号码输入有误！',
      TelCode:'',

    }
  },
  watch:{
    TelCode(newVal){
      // console.log(newVal);
    }
  },
  methods:{
    gotoOtherMode(mode){
      switch(mode){
        case 'wechat':
        this.$router.go('/wechat');
        break;
        case 'account':
        this.$router.go('/account');
        break;
        case 'home':
        this.$router.go('/');
        break;
      }
    },
    lineWifi(){
      this.$router.go('/intrada');
      console.log(this.TelCode);
    },
    sendMessage(){
      this.haveSend = true;
      this.countDown();
    },
    countDown(){
      let timer = null;
      this.sendTips = `已发送（${this.count}）`;
      timer = setInterval( ()=>{
        this.count--;
        this.sendTips = `已发送（${this.count}）`;
        if(this.count == -1){
          clearInterval(timer);
          this.sendTips = '请发送验证码';
          this.haveSend = false;
          this.count = 60;
        }
      },1000 )
    }
  },
  components:{
    HeaderComponent,
    LogoSlogen,
    TechSupport,
    OtherType,
    BodyComponent
  },
  ready(){
    $("#mobile-number").intlTelInput();
    var $telCode = $('.selected-flag');
    $telCode.css({'margin-left':'2rem'})
    var telTitle = $telCode[0].title;
    var plusTel = telTitle.substring(telTitle.indexOf('+'));
    this.TelCode = plusTel;
  }
}
</script>
