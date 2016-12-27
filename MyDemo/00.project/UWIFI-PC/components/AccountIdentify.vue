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
    <Body-Component>
      <div class="ipt-container" slot="identify">
        <div class="ipt">
          <input type="txt" placeholder="请输入房间号码">
        </div>
        <div class="ipt">
          <input type="text"  placeholder="请输入身份证后六位">
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
      errorTips: "密码输入有误！",
    }
  },
  methods: {
    lineWifi(){
      this.$router.go('/intrada');
    },
  },
  components:{
    BodyComponent,
  }
}
</script>
