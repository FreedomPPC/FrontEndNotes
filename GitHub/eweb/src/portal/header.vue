<template>
  <div :class="portalCss.headerView">
        <div :class="portalCss.logoBox"><img :src="logo" alt="" /></div>
        <div :class="portalCss.headerBars">
              <span :class="portalCss.who">用户名</span>
              <span :class="portalCss.operator">
                <span><icon iconname="icon-key" iconlabel="修改密码"></icon></span>
                <span><icon iconname="icon-downaction" iconlabel="退出"></icon></span>
              </span>
        </div>
  </div>
</template>

<script>
import portalCss from './portal.css';
import logo from 'asset/img/logo.png';
import icon from "component/sprite/icon.vue";
export default {
    data(){
      return {
        portalCss,
        logo: logo
      }
    },

    components:{
      icon
    }

}
</script>
