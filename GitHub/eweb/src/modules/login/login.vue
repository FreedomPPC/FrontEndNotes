<template>
    <div :class="lCss.loginBox">
          <div :class="lCss.loginIn">
              <div :class="lCss.centerIn">
                  <img :src="logo1" alt="" :class='lCss.logo' />
                  <div :class="lCss.loginForm">
                      <div :class="lCss.loginFormIn">
                            <div :class="lCss.loginFormRow">
                                  <span :class='lCss.loginTitle'>用户登录</span>
                            </div>
                            <div :class="lCss.loginFormRow">
                                  <icon iconname="icon-user" :classname="lCss.iconinfo"></icon>
                                  <input type="text" placeholder="请输入用户名" name="name" value="">
                            </div>
                            <div :class="lCss.loginFormRow">
                                  <icon iconname="icon-key"  :classname="lCss.iconinfo"></icon>
                                  <input type="password" placeholder="请输入密码" name="name" value="">
                            </div>
                            <div :class="lCss.loginFormRow">
                                  <checkbx :datas="ckData" :events="checkedEevents"></checkbx>
                            </div>
                            <div :class="lCss.loginFormRow">
                                  <btn btnname="btn-red">登录</btn>
                            </div>
                      </div>
                  </div>
              </div>
          </div>
    </div>
</template>

<script>
import lCss from "./login.css";
import logo1 from "asset/img/logo1.png";
import icon from "component/sprite/icon";
import btn from "component/sprite/button";
import checkbx from "component/checkbox/checkBox";
export default {
  data: function () {
    return {
      lCss,
      logo1: logo1,
      ckData:[{label:"记住密码", checked: false}],
      checkedEevents: {
        checkClick: function(checked){
            console.log(checked);
        }
      }
    }
  },
  computed: {},
  ready: function () {
    this.$nextTick(function () {
       this.$el.style.height = window.innerHeight + "px";
    })
  },
  attached: function () {},
  methods: {},
  components: {icon, btn, checkbx}
}
</script>
