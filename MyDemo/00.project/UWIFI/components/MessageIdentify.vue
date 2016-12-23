<style lang="sass" scoped>
  @import "../css/global.sass";
  .flex-item {
    width: 100vw;
    height: 10vh;
    color: #fff;
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
          <input type="number" placeholder="请输入房间号码">
        </div>
        <div class="ipt">
          <input type="text"  placeholder="请输入身份证后六位">
        </div>
        <p class="tips" v-show="showTips">
          <i class="fa fa-exclamation-circle" aria-hidden="true"></i>
          {{errorTips}}
        </p>
        <div class="ipt">
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
      errorTips: '手机号码输入有误'
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
    }
  },
  components:{
    HeaderComponent,
    LogoSlogen,
    TechSupport,
    OtherType,
    BodyComponent
  }
}
</script>
