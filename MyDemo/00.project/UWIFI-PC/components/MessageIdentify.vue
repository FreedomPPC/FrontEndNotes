<style lang="sass" scoped>
  @import "../css/global.sass";
  .flex-item {
    width: 100vw;
    height: 10vh;
    color: #fff;
  }
    .ipt-fa-code {
      display: flex;
      align-items: center;
      P {
        width: 14vw;
        height: 5vh;
        background: $c-blue;
        margin-right: 0.5vh;
        border-top-right-radius: 40vw;
        border-bottom-right-radius: 40vw;
        line-height: 5vh;
        text-align: center;
        color: #fff;
        font-size: 1.5vh;
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
    height: 100% !important;
    margin-left: 2rem;
    text-indent: 0 !important;
  }
</style>

<template>
  <div>
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
  </div>
</template>

<script>
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
  methods:{
    lineWifi(){
      this.$router.go('/intrada');
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
    BodyComponent
  },
  ready(){
    $("#mobile-number").intlTelInput();
    var $telCode = $('.selected-flag');
    $telCode.css({'margin-left':'2rem'})
    var telTitle = $telCode[0].title;
    var plusTel = telTitle.substring(telTitle.indexOf('+'));
    this.TelCode = plusTel;
    setInterval( ()=>{
      if(this.TelCode == ""){
        this.TelCode = plusTel;
      }
    });
  }
}
</script>
